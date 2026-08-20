import { Router } from "express";
import type { Request, Response, NextFunction } from "express";
import {
  getGoogleAuthUrl,
  handleGoogleCallback,
  getGithubAuthUrl,
  handleGithubCallback,
} from "../services/auth/oauth-providers.service.js";
import { env } from "../config/env.js";

const REFRESH_COOKIE_OPTIONS = {
  httpOnly: true,
  secure: env.NODE_ENV === "production",
  sameSite: "strict" as const,
  maxAge: 7 * 24 * 60 * 60 * 1000,
  path: "/",
};

const router = Router();

router.get("/google", (_req: Request, res: Response) => {
  res.redirect(getGoogleAuthUrl());
});

router.get("/google/callback", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = req.query.code as string;
    const result = await handleGoogleCallback(code);
    res.cookie("refreshToken", result.refreshToken, REFRESH_COOKIE_OPTIONS);
    res.redirect(`${env.CORS_ORIGIN}/auth/callback?token=${result.accessToken}`);
  } catch (err) {
    next(err);
  }
});

router.get("/github", (_req: Request, res: Response) => {
  res.redirect(getGithubAuthUrl());
});

router.get("/github/callback", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const code = req.query.code as string;
    const result = await handleGithubCallback(code);
    res.cookie("refreshToken", result.refreshToken, REFRESH_COOKIE_OPTIONS);
    res.redirect(`${env.CORS_ORIGIN}/auth/callback?token=${result.accessToken}`);
  } catch (err) {
    next(err);
  }
});

export default router;
