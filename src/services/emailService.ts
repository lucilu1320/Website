import sgMail from '@sendgrid/mail';

// Email data interface
export interface EmailData {
  email: string;
  parentName: string;
  studentName: string;
  applicationId: string;
  class: string;
  submissionDate: string;
  formData?: Record<string, any>;
  photoPreview?: string;
  approved?: boolean;
  rejected?: boolean;
  status?: string;
  formalities_deadline?: string;
  updateDate?: string;
}

// Email configuration
const EMAIL_CONFIG = {
  SENDER: import.meta.env.VITE_SENDER_EMAIL as string,
  ADMIN: import.meta.env.VITE_ADMIN_EMAIL as string,
  SENDER_NAME: 'KVA Admissions'
};

// Initialize SendGrid with API key
const SENDGRID_API_KEY = import.meta.env.VITE_SENDGRID_API_KEY;
if (!SENDGRID_API_KEY) {
  console.error('SendGrid API key is not configured!');
}

sgMail.setApiKey(SENDGRID_API_KEY);

// Email request interface
interface EmailRequest {
  to: string;
  subject: string;
  text: string;
  html: string;
  attachments?: {
    content: string;
    filename: string;
    type: string;
    disposition: string;
  }[];
}

// Create confirmation email
const createConfirmationEmail = (data: EmailData): EmailRequest => ({
  to: data.email,
  subject: 'Application Submitted Successfully - Kharagpur Vision Academy',
  text: `
Dear ${data.parentName},

Thank you for submitting an application for ${data.studentName} to Kharagpur Vision Academy.

Application Details:
- Application ID: ${data.applicationId}
- Class Applied: ${data.class}
- Submission Date: ${data.submissionDate}

Please find attached a copy of your application form for your records.

We will review your application and get back to you soon. Please save your application ID for future reference.

Best regards,
Admissions Team
Kharagpur Vision Academy`,
  html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2A8C4A;">Application Submitted Successfully</h2>
  <p>Dear ${data.parentName},</p>
  <p>Thank you for submitting an application for ${data.studentName} to Kharagpur Vision Academy.</p>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #2A8C4A; margin-top: 0;">Application Details:</h3>
    <ul style="list-style: none; padding: 0;">
      <li>Application ID: <strong>${data.applicationId}</strong></li>
      <li>Class Applied: <strong>${data.class}</strong></li>
      <li>Submission Date: <strong>${data.submissionDate}</strong></li>
    </ul>
  </div>
  <p>Please find attached a copy of your application form for your records.</p>
  <p>We will review your application and get back to you soon. Please save your application ID for future reference.</p>
  <p>Best regards,<br>Admissions Team<br>Kharagpur Vision Academy</p>
</div>`
});

// Create admin notification email
const createAdminNotificationEmail = (data: EmailData): EmailRequest => ({
  to: EMAIL_CONFIG.ADMIN,
  subject: 'New Application Received - KVA Admissions',
  text: `
New application received:
- Student: ${data.studentName}
- Class: ${data.class}
- Application ID: ${data.applicationId}
- Submission Date: ${data.submissionDate}`,
  html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2A8C4A;">New Application Received</h2>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <ul style="list-style: none; padding: 0;">
      <li>Student: <strong>${data.studentName}</strong></li>
      <li>Class: <strong>${data.class}</strong></li>
      <li>Application ID: <strong>${data.applicationId}</strong></li>
      <li>Submission Date: <strong>${data.submissionDate}</strong></li>
    </ul>
  </div>
  <p>Please review the application in the admin dashboard.</p>
</div>`
});

// Create status update email
const createStatusUpdateEmail = (data: EmailData): EmailRequest => {
  const status = data.approved
    ? 'approved'
    : data.rejected
    ? 'rejected'
    : data.status;

  return {
    to: data.email,
    subject: `Application Status Update - Kharagpur Vision Academy`,
    text: `
Dear ${data.parentName},

The status of your application (ID: ${data.applicationId}) has been updated to: ${status}

${
  data.approved && data.formalities_deadline
    ? `Please complete the admission formalities by ${data.formalities_deadline}.`
    : ''
}

Application Details:
- Student Name: ${data.studentName}
- Class Applied: ${data.class}
- Status Update Date: ${data.updateDate}

${
  data.approved
    ? `
Next Steps:
1. Visit the school with all original documents
2. Complete the admission formalities
3. Pay the required fees`
    : ''
}

For any queries, please contact the admissions office.

Best regards,
Admissions Team
Kharagpur Vision Academy`,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2A8C4A;">Application Status Update</h2>
  <p>Dear ${data.parentName},</p>
  <p>The status of your application has been updated.</p>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #2A8C4A; margin-top: 0;">Application Details:</h3>
    <ul style="list-style: none; padding: 0;">
      <li>Application ID: <strong>${data.applicationId}</strong></li>
      <li>Student Name: <strong>${data.studentName}</strong></li>
      <li>Class Applied: <strong>${data.class}</strong></li>
      <li>Status: <strong>${status}</strong></li>
      <li>Update Date: <strong>${data.updateDate}</strong></li>
    </ul>
  </div>
  ${
    data.approved
      ? `
  <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #2A8C4A; margin-top: 0;">Next Steps:</h3>
    <ol style="margin-left: 20px;">
      <li>Visit the school with all original documents</li>
      <li>Complete the admission formalities</li>
      <li>Pay the required fees</li>
    </ol>
    ${
      data.formalities_deadline
        ? `<p style="font-weight: bold;">Please complete the admission formalities by ${data.formalities_deadline}.</p>`
        : ''
    }
  </div>`
      : ''
  }
  <p>For any queries, please contact the admissions office.</p>
  <p>Best regards,<br>Admissions Team<br>Kharagpur Vision Academy</p>
</div>`
  };
};

// Function to send confirmation email
export async function sendConfirmationEmail(data: EmailData): Promise<void> {
  try {
    console.log('Sending confirmation email to:', data.email);

    // Generate PDF if form data is provided
    let pdfAttachment: any = null;
    if (data.formData && data.photoPreview) {
      const { generatePDF } = await import('../utils/pdfGenerator');
      const pdfBlob = (await generatePDF(
        data.formData,
        data.photoPreview,
        true
      )) as Blob;

      const pdfBase64 = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result?.toString().split(',')[1];
          resolve(base64data);
        };
        reader.readAsDataURL(pdfBlob);
      });

      if (pdfBase64) {
        pdfAttachment = {
          content: pdfBase64 as string,
          filename: `KVA_Application_${data.applicationId}.pdf`,
          type: 'application/pdf',
          disposition: 'attachment'
        };
      }
    }

    // Create the applicant confirmation email
    const confirmationEmail = createConfirmationEmail(data);
    if (pdfAttachment) {
      confirmationEmail.attachments = [pdfAttachment];
    }

    // Create the admin notification email
    const adminEmail = createAdminNotificationEmail(data);

    console.log('Sending confirmation email with config:', confirmationEmail);
    console.log('Sending admin notification with config:', adminEmail);

    // Send both emails in parallel
    await Promise.all([
      sgMail.send({
        ...confirmationEmail,
        from: {
          email: EMAIL_CONFIG.SENDER,
          name: EMAIL_CONFIG.SENDER_NAME
        }
      }),
      sgMail.send({
        ...adminEmail,
        from: {
          email: EMAIL_CONFIG.SENDER,
          name: EMAIL_CONFIG.SENDER_NAME
        }
      })
    ]);

    console.log('Confirmation emails sent successfully');
  } catch (error) {
    console.error('Error sending confirmation emails:', error);
    if (error.response) {
      console.error('SendGrid API response:', error.response.body);
    }
    throw error;
  }
}

// Function to send status update email
export async function sendStatusUpdateEmail(data: EmailData): Promise<void> {
  try {
    console.log('Sending status update email to:', data.email);

    const statusEmail = createStatusUpdateEmail(data);
    console.log('Sending status update email with config:', statusEmail);

    await sgMail.send({
      ...statusEmail,
      from: {
        email: EMAIL_CONFIG.SENDER,
        name: EMAIL_CONFIG.SENDER_NAME
      }
    });

    console.log('Status update email sent successfully to:', data.email);
  } catch (error) {
    console.error('Error sending status update email:', error);
    if (error.response) {
      console.error('SendGrid API response:', error.response.body);
    }
    throw error;
  }
}