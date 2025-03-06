import {onRequest} from "firebase-functions/v2/https";
import * as admin from "firebase-admin";
import * as sgMail from "@sendgrid/mail";

// Initialize Firebase Admin
admin.initializeApp();

// Initialize SendGrid with config
const {sendgrid} = require("firebase-functions/params");
const SENDGRID_API_KEY = sendgrid.api_key;
const SENDER_EMAIL = sendgrid.sender_email || "admissions@kvaschool.edu.in";

sgMail.setApiKey(SENDGRID_API_KEY);

// Email Templates
const emailTemplates = {
  applicationSubmission: (data: any) => ({
    subject: "Application Submitted Successfully - Kharagpur Vision Academy",
    text: `
Dear ${data.parentName},

Thank you for submitting an application for ${data.studentName} to Kharagpur Vision Academy.

Application Details:
- Application ID: ${data.applicationId}
- Class Applied: ${data.class}
- Submission Date: ${data.submissionDate}

We will review your application and get back to you soon.

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
  <p>We will review your application and get back to you soon.</p>
  <p>Best regards,<br>Admissions Team<br>Kharagpur Vision Academy</p>
</div>`,
  }),

  statusUpdate: (data: any) => ({
    subject: "Application Status Update - Kharagpur Vision Academy",
    text: `
Dear ${data.parentName},

The status of your application (ID: ${data.applicationId}) has been updated to: ${data.status}

${data.approved ? `Please complete the admission formalities by ${data.formalities_deadline}.` : ""}

Application Details:
- Student Name: ${data.studentName}
- Class Applied: ${data.class}
- Status Update Date: ${data.updateDate}

${data.approved ? `
Next Steps:
1. Visit the school with all original documents
2. Complete the admission formalities
3. Pay the required fees
` : ""}

For any queries, please contact the admissions office.

Best regards,
Admissions Team
Kharagpur Vision Academy`,
    html: `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #2A8C4A;">Application Status Update</h2>
  <p>Dear ${data.parentName},</p>
  <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #2A8C4A; margin-top: 0;">Application Details:</h3>
    <ul style="list-style: none; padding: 0;">
      <li>Application ID: <strong>${data.applicationId}</strong></li>
      <li>Student Name: <strong>${data.studentName}</strong></li>
      <li>Class Applied: <strong>${data.class}</strong></li>
      <li>Status: <strong>${data.status}</strong></li>
      <li>Update Date: <strong>${data.updateDate}</strong></li>
    </ul>
  </div>
  ${data.approved ? `
  <div style="background-color: #e8f5e9; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #2A8C4A; margin-top: 0;">Next Steps:</h3>
    <ol style="margin-left: 20px;">
      <li>Visit the school with all original documents</li>
      <li>Complete the admission formalities</li>
      <li>Pay the required fees</li>
    </ol>
    <p style="font-weight: bold;">Please complete the admission formalities by ${data.formalities_deadline}.</p>
  </div>
  ` : ""}
  <p>For any queries, please contact the admissions office.</p>
  <p>Best regards,<br>Admissions Team<br>Kharagpur Vision Academy</p>
</div>`,
  }),
};

// Send Email Function
export const sendEmail = onRequest({
  cors: true,
  maxInstances: 10,
}, async (request, response) => {
  try {
    const {type, data} = request.body;

    if (!type || !data) {
      response.status(400).send({error: "Missing required parameters"});
      return;
    }

    let emailContent;
    switch (type) {
      case "application_submission":
        emailContent = emailTemplates.applicationSubmission(data);
        break;
      case "status_update":
        emailContent = emailTemplates.statusUpdate(data);
        break;
      default:
        response.status(400).send({error: "Invalid email type"});
        return;
    }

    const msg = {
      to: data.email,
      from: {
        email: SENDER_EMAIL,
        name: "KVA Admissions",
      },
      subject: emailContent.subject,
      text: emailContent.text,
      html: emailContent.html,
      attachments: data.attachments,
    };

    await sgMail.send(msg);
    response.status(200).send({success: true, message: "Email sent successfully"});
  } catch (error) {
    console.error("Error sending email:", error);
    response.status(500).send({error: "Failed to send email"});
  }
});