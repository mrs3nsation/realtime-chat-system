import { Resend } from "resend";
import { env } from "../../config/env.js";
import { logger } from "../../utils/logger.js";

const resend = env.RESEND_API_KEY ? new Resend(env.RESEND_API_KEY) : null;

async function sendMail(to: string, subject: string, html: string): Promise<void> {
  if (!resend || !env.MAIL_FROM) {
    logger.warn("Email sending skipped — RESEND_API_KEY or MAIL_FROM not configured", {
      to,
      subject,
    });
    return;
  }

  const { error } = await resend.emails.send({
    from: env.MAIL_FROM,
    to,
    subject,
    html,
  });

  if (error) {
    logger.error("Failed to send email", { to, subject, error });
    throw new Error(`Email send failed: ${error.message}`);
  }
}

export async function sendVerificationEmail(
  to: string,
  token: string
): Promise<void> {
  const verifyUrl = `${env.CORS_ORIGIN}/verify-email?token=${token}`;

  const html = `
    <h2>Verify your email</h2>
    <p>Click the link below to verify your email address. This link expires in 24 hours.</p>
    <a href="${verifyUrl}" style="display:inline-block;padding:12px 24px;background:#4f46e5;color:#fff;text-decoration:none;border-radius:6px;">
      Verify Email
    </a>
    <p>Or copy this URL: ${verifyUrl}</p>
  `;

  await sendMail(to, "Verify your email address", html);
}

export async function sendPasswordResetEmail(
  to: string,
  token: string
): Promise<void> {
  const resetUrl = `${env.CORS_ORIGIN}/reset-password?token=${token}`;

  const html = `
    <h2>Reset your password</h2>
    <p>Click the link below to reset your password. This link expires in 1 hour.</p>
    <a href="${resetUrl}" style="display:inline-block;padding:12px 24px;background:#4f46e5;color:#fff;text-decoration:none;border-radius:6px;">
      Reset Password
    </a>
    <p>If you did not request this, you can safely ignore this email.</p>
  `;

  await sendMail(to, "Reset your password", html);
}
