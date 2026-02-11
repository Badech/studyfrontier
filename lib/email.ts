import nodemailer from 'nodemailer';

// Create email transporter
export async function createEmailTransporter() {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPassword) {
    throw new Error('Email credentials not configured');
  }

  // Create transporter for Gmail
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  // Verify connection
  await transporter.verify();
  
  return transporter;
}

// Send lead notification email
export async function sendLeadNotification(lead: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  desiredLevel: string;
  source: string;
  interest: string;
}) {
  const transporter = await createEmailTransporter();
  const emailTo = process.env.EMAIL_TO;

  if (!emailTo) {
    throw new Error('EMAIL_TO not configured');
  }

  const htmlContent = `
    <h2>New Lead Submission</h2>
    <p><strong>Full Name:</strong> ${lead.fullName}</p>
    <p><strong>Email:</strong> ${lead.email}</p>
    <p><strong>Phone:</strong> ${lead.phone}</p>
    <p><strong>City:</strong> ${lead.city}</p>
    <p><strong>Desired Level:</strong> ${lead.desiredLevel}</p>
    <p><strong>Interest:</strong> ${lead.interest}</p>
    <p><strong>Source:</strong> ${lead.source}</p>
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: emailTo,
    subject: 'New StudyFrontier Lead',
    html: htmlContent,
  });
}

// Send partner inquiry notification email
export async function sendPartnerNotification(partner: {
  organizationName: string;
  contactName: string;
  email: string;
  website: string;
  marketsOfInterest: string;
  message: string;
}) {
  const transporter = await createEmailTransporter();
  const emailTo = process.env.EMAIL_TO;

  if (!emailTo) {
    throw new Error('EMAIL_TO not configured');
  }

  const htmlContent = `
    <h2>New Partner Inquiry</h2>
    <p><strong>Organization:</strong> ${partner.organizationName}</p>
    <p><strong>Contact Name:</strong> ${partner.contactName}</p>
    <p><strong>Email:</strong> ${partner.email}</p>
    <p><strong>Website:</strong> ${partner.website || 'Not provided'}</p>
    <p><strong>Markets of Interest:</strong> ${partner.marketsOfInterest}</p>
    <p><strong>Message:</strong></p>
    <p>${partner.message || 'No message provided'}</p>
    <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
  `;

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: emailTo,
    subject: 'New Partner Inquiry',
    html: htmlContent,
  });
}
