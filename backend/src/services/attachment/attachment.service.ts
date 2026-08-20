import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { attachmentRepository, messageRepository } from "../../config/db.js";
import { env } from "../../config/env.js";
import { ForbiddenError, NotFoundError } from "../../utils/errors.js";

export interface UploadedFile {
  originalname: string;
  mimetype: string;
  buffer: Buffer;
  size: number;
}

export async function saveAttachment(
  messageId: string,
  file: UploadedFile
): Promise<{ id: string; storageKey: string; url: string }> {
  const ext = path.extname(file.originalname);
  const storageKey = `${crypto.randomUUID()}${ext}`;
  const filePath = path.join(env.UPLOAD_DIR, storageKey);

  await fs.mkdir(env.UPLOAD_DIR, { recursive: true });
  await fs.writeFile(filePath, file.buffer);

  const attachment = await attachmentRepository.create({
    messageId,
    originalName: file.originalname,
    storageKey,
    mimeType: file.mimetype,
    size: BigInt(file.size),
  });

  return {
    id: attachment.id,
    storageKey: attachment.storageKey,
    url: `/attachments/${attachment.storageKey}`,
  };
}

export async function deleteAttachment(
  attachmentId: string,
  requesterId: string
): Promise<void> {
  const attachment = await attachmentRepository.findById(attachmentId);
  if (!attachment) {
    throw new NotFoundError("Attachment not found");
  }

  const message = await messageRepository.findById(attachment.messageId);
  if (!message) {
    throw new NotFoundError("Associated message not found");
  }

  if (message.senderId !== requesterId) {
    throw new ForbiddenError("You can only delete your own attachments");
  }

  const filePath = path.join(env.UPLOAD_DIR, attachment.storageKey);
  await fs.unlink(filePath).catch(() => undefined);

  await attachmentRepository.delete(attachmentId);
}

export async function getAttachmentPath(storageKey: string): Promise<string> {
  const filePath = path.join(env.UPLOAD_DIR, storageKey);
  await fs.access(filePath);
  return filePath;
}
