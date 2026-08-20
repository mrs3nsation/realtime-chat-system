import type { Request, Response, NextFunction } from "express";
import * as authService from "../services/auth/auth.service.js";
import * as emailVerificationService from "../services/auth/email-verification.service.js";
import { sendSuccess } from "../utils/response.js";
import { env } from "../config/env.js";

const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

export async function register(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password, name } = req.body as { email: string; password: string; name?: string };
    const result = await authService.register(email, password, name);

    res.cookie("refreshToken", result.refreshToken, REFRESH_COOKIE_OPTIONS);
    sendSuccess(res, { accessToken: result.accessToken, user: result.user }, 201);
  } catch (err) {
    next(err);
  }
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body as { email: string; password: string };
    const result = await authService.login(email, password);

    res.cookie("refreshToken", result.refreshToken, REFRESH_COOKIE_OPTIONS);
    sendSuccess(res, { accessToken: result.accessToken, user: result.user });
  } catch (err) {
    next(err);
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const rawToken = req.cookies?.refreshToken as string | undefined;
    if (!rawToken) {
      res.status(401).json({ success: false, error: "Missing refresh token" });
      return;
    }

    const result = await authService.refresh(rawToken);

    res.cookie("refreshToken", result.refreshToken, REFRESH_COOKIE_OPTIONS);
    sendSuccess(res, { accessToken: result.accessToken, user: result.user });
  } catch (err) {
    next(err);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const rawToken = req.cookies?.refreshToken as string | undefined;
    if (rawToken) {
      await authService.logout(rawToken);
    }

    res.clearCookie("refreshToken", { path: "/" });
    sendSuccess(res, { message: "Logged out successfully" });
  } catch (err) {
    next(err);
  }
}

export async function verifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const token = req.query.token as string;
    await emailVerificationService.verifyEmailToken(token);
    sendSuccess(res, { message: "Email verified successfully" });
  } catch (err) {
    next(err);
  }
}

export async function resendVerification(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email } = req.body as { email: string };
    const user = req.user!;
    await emailVerificationService.resendVerification(user.id, email);
    sendSuccess(res, { message: "Verification email sent" });
  } catch (err) {
    next(err);
  }
}
