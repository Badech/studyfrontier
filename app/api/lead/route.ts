import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { appendToSheet, getTimestamp } from '@/lib/google-sheets';
import { sendLeadNotification } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

// Validation schema
const leadSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(5, 'Phone number is required').max(20),
  city: z.string().min(2, 'City is required').max(100),
  desiredLevel: z.enum(['UG', 'Grad', 'CC'], {
    message: 'Invalid desired level',
  }),
  source: z.string().optional().default('unknown'),
  interest: z.string().optional().default('USA'),
});

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';

    // Rate limiting: 5 requests per minute per IP
    const rateLimitResult = rateLimit(ip, 5, 60000);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = leadSchema.parse(body);

    // Prepare data for Google Sheets
    const timestamp = getTimestamp();
    const sheetRow = [
      timestamp,
      validatedData.fullName,
      validatedData.email,
      validatedData.phone,
      validatedData.city,
      validatedData.desiredLevel,
      validatedData.interest,
      validatedData.source,
      ip,
    ];

    // Save to Google Sheets (if configured)
    let sheetSuccess = false;
    try {
      await appendToSheet('Leads', sheetRow);
      sheetSuccess = true;
    } catch (error) {
      // Log error but don't fail the request
      console.error('Failed to save to Google Sheets:', error);
    }

    // Send email notification (if configured)
    let emailSuccess = false;
    try {
      await sendLeadNotification({
        fullName: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        city: validatedData.city,
        desiredLevel: validatedData.desiredLevel,
        interest: validatedData.interest,
        source: validatedData.source,
      });
      emailSuccess = true;
    } catch (error) {
      // Log error but don't fail the request
      console.error('Failed to send email notification:', error);
    }

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
      saved: {
        sheets: sheetSuccess,
        email: emailSuccess,
      },
    });

  } catch (error) {
    console.error('Lead submission error:', error);

    // Handle validation errors
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          error: 'Validation failed',
          details: error.issues.map((e: any) => ({
            field: e.path.join('.'),
            message: e.message,
          })),
        },
        { status: 400 }
      );
    }

    // Generic error response
    return NextResponse.json(
      { error: 'Failed to submit lead. Please try again.' },
      { status: 500 }
    );
  }
}

// Prevent caching
export const dynamic = 'force-dynamic';
