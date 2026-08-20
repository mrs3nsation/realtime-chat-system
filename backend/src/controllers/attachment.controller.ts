import type { Request, Response, NextFunction } from "express";
import path from "path";
import fs from "fs";
import * as attachmentService from "../services/attachment/attachment.service.js";
import { sendSuccess } from "../utils/response.js";
import { NotFoundError } from "../utils/errors.js";
import { env } from "../config/env.js";

export async function upload(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const messageId = req.params.messageId as string;
    const file = req.file;

    if (!file) {
      res.status(400).json({ success: false, error: "No file uploaded" });
      return;
    }

    const result = await attachmentService.saveAttachment(messageId, {
      originalname: file.originalname,
      mimetype: file.mimetype,
      buffer: file.buffer,
      size: file.size,
    });

    sendSuccess(res, result, 201);
  } catch (err) {
    next(err);
  }
}

export async function serve(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { storageKey } = req.params as { storageKey: string };
    const filePath = await attachmentService.getAttachmentPath(storageKey);
    res.sendFile(path.resolve(filePath));
  } catch {
    next(new NotFoundError("File not found"));
  }
}

export async function remove(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { attachmentId } = req.params as { attachmentId: string };
    await attachmentService.deleteAttachment(attachmentId, req.user!.id);
    sendSuccess(res, { message: "Attachment deleted" });
  } catch (err) {
    next(err);
  }
}
