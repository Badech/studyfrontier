import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { appendToSheet, getTimestamp } from '@/lib/google-sheets';
import { sendPartnerNotification } from '@/lib/email';
import { rateLimit } from '@/lib/rate-limit';

// Validation schema
const partnerLeadSchema = z.object({
  organizationName: z.string().min(2, 'Organization name must be at least 2 characters').max(200),
  contactName: z.string().min(2, 'Contact name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  website: z.string().url('Invalid website URL').optional().or(z.literal('')),
  marketsOfInterest: z.string().min(2, 'Markets of interest is required').max(500),
  message: z.string().max(2000).optional().default(''),
});

export async function POST(request: NextRequest) {
  try {
    // Get IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
                request.headers.get('x-real-ip') || 
                'unknown';

    // Rate limiting: 3 requests per minute per IP (stricter for partner leads)
    const rateLimitResult = rateLimit(`partner-${ip}`, 3, 60000);
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = partnerLeadSchema.parse(body);

    // Prepare data for Google Sheets
    const timestamp = getTimestamp();
    const sheetRow = [
      timestamp,
      validatedData.organizationName,
      validatedData.contactName,
      validatedData.email,
      validatedData.website || '',
      validatedData.marketsOfInterest,
      validatedData.message,
      ip,
    ];

    // Save to Google Sheets (if configured)
    let sheetSuccess = false;
    try {
      await appendToSheet('Partners', sheetRow);
      sheetSuccess = true;
    } catch (error) {
      // Log error but don't fail the request
      console.error('Failed to save to Google Sheets:', error);
    }

    // Send email notification (if configured)
    let emailSuccess = false;
    try {
      await sendPartnerNotification({
        organizationName: validatedData.organizationName,
        contactName: validatedData.contactName,
        email: validatedData.email,
        website: validatedData.website || '',
        marketsOfInterest: validatedData.marketsOfInterest,
        message: validatedData.message,
      });
      emailSuccess = true;
    } catch (error) {
      // Log error but don't fail the request
      console.error('Failed to send email notification:', error);
    }

    return NextResponse.json({
      success: true,
      message: 'Partner inquiry submitted successfully',
      saved: {
        sheets: sheetSuccess,
        email: emailSuccess,
      },
    });

  } catch (error) {
    console.error('Partner lead submission error:', error);

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
      { error: 'Failed to submit partner inquiry. Please try again.' },
      { status: 500 }
    );
  }
}

// Prevent caching
export const dynamic = 'force-dynamic';
