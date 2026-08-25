import type { Request, Response, NextFunction } from "express";
import * as userService from "../services/user/user.service.js";
import { sendSuccess } from "../utils/response.js";

export async function searchUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const query = req.query.query as string | undefined;
    const users = await userService.searchUsers(query, req.user!.id);
    sendSuccess(res, users);
  } catch (err) {
    next(err);
  }
}

export async function getProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const user = await userService.getProfile(req.user!.id);
    sendSuccess(res, user);
  } catch (err) {
    next(err);
  }
}

export async function updateProfile(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { name, avatarUrl } = req.body as { name?: string; avatarUrl?: string };
    const updated = await userService.updateProfile(req.user!.id, { name, avatarUrl });
    sendSuccess(res, updated);
  } catch (err) {
    next(err);
  }
}

export async function changePassword(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { currentPassword, newPassword } = req.body as { currentPassword: string; newPassword: string };
    await userService.changePassword(req.user!.id, currentPassword, newPassword);
    sendSuccess(res, { message: "Password changed successfully" });
  } catch (err) {
    next(err);
  }
}
