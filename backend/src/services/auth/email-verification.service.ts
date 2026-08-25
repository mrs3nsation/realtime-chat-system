import { emailVerificationRepository } from "../../config/db.js";
import { generateSecureToken, hashToken } from "../../utils/crypto.js";
import { sendVerificationEmail } from "../email/email.service.js";
import { BadRequestError, NotFoundError } from "../../utils/errors.js";

export async function createAndSendVerification(
  userId: string,
  email: string
): Promise<void> {
  const rawToken = generateSecureToken();
  const tokenHash = hashToken(rawToken);

  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);

  await emailVerificationRepository.create({ userId, tokenHash, expiresAt });

  try {
    await sendVerificationEmail(email, rawToken);
  } catch (err) {
    console.warn("[email-verification] Failed to send verification email — check MAIL_FROM in .env:", err);
  }
}

export async function verifyEmailToken(rawToken: string): Promise<void> {
  const tokenHash = hashToken(rawToken);
  const record = await emailVerificationRepository.findByTokenHash(tokenHash);

  if (!record) {
    throw new BadRequestError("Invalid or expired verification token");
  }

  if (record.verifiedAt !== null) {
    throw new BadRequestError("Email is already verified");
  }

  if (record.expiresAt < new Date()) {
    throw new BadRequestError("Verification token has expired");
  }

  await emailVerificationRepository.markVerified(record.id);
}

export async function resendVerification(
  userId: string,
  email: string
): Promise<void> {
  const rawToken = generateSecureToken();
  const tokenHash = hashToken(rawToken);

  const expiresAt = new Date();
  expiresAt.setHours(expiresAt.getHours() + 24);

  await emailVerificationRepository.create({ userId, tokenHash, expiresAt });
  try {
    await sendVerificationEmail(email, rawToken);
  } catch (err) {
    console.warn("[email-verification] Failed to send verification email:", err);
  }
}
