import { OAuth2Client } from "google-auth-library";
import { env } from "../../config/env.js";
import { findOrCreateOAuthUser } from "./oauth.service.js";
import { signAccessToken, issueRefreshToken } from "./token.service.js";

export function getGoogleAuthUrl(): string {
  const client = new OAuth2Client(
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
    `${env.CORS_ORIGIN.replace("3000", "5000")}/api/auth/google/callback`
  );

  return client.generateAuthUrl({
    access_type: "offline",
    scope: ["openid", "email", "profile"],
    prompt: "consent",
  });
}

export async function handleGoogleCallback(code: string): Promise<{
  accessToken: string;
  refreshToken: string;
  user: { id: string; email: string; name: string | null; avatarUrl: string | null };
}> {
  const client = new OAuth2Client(
    env.GOOGLE_CLIENT_ID,
    env.GOOGLE_CLIENT_SECRET,
    `${env.CORS_ORIGIN.replace("3000", "5000")}/api/auth/google/callback`
  );

  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);

  const ticket = await client.verifyIdToken({
    idToken: tokens.id_token!,
    audience: env.GOOGLE_CLIENT_ID,
  });

  const payload = ticket.getPayload()!;

  const user = await findOrCreateOAuthUser({
    provider: "GOOGLE",
    providerAccountId: payload.sub,
    email: payload.email!,
    name: payload.name,
    avatarUrl: payload.picture,
  });

  const accessToken = signAccessToken(user);
  const refreshToken = await issueRefreshToken(user.id);

  return { accessToken, refreshToken, user };
}

export function getGithubAuthUrl(): string {
  const params = new URLSearchParams({
    client_id: env.GITHUB_CLIENT_ID ?? "",
    redirect_uri: `${env.CORS_ORIGIN.replace("3000", "5000")}/api/auth/github/callback`,
    scope: "user:email",
  });

  return `https://github.com/login/oauth/authorize?${params.toString()}`;
}

export async function handleGithubCallback(code: string): Promise<{
  accessToken: string;
  refreshToken: string;
  user: { id: string; email: string; name: string | null; avatarUrl: string | null };
}> {
  const tokenRes = await fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: env.GITHUB_CLIENT_ID,
      client_secret: env.GITHUB_CLIENT_SECRET,
      code,
    }),
  });

  const tokenData = await tokenRes.json() as { access_token: string };

  const profileRes = await fetch("https://api.github.com/user", {
    headers: { Authorization: `Bearer ${tokenData.access_token}`, Accept: "application/json" },
  });
  const profile = await profileRes.json() as {
    id: number;
    login: string;
    name: string | null;
    avatar_url: string;
    email: string | null;
  };

  const emailRes = await fetch("https://api.github.com/user/emails", {
    headers: { Authorization: `Bearer ${tokenData.access_token}`, Accept: "application/json" },
  });
  const emails = await emailRes.json() as { email: string; primary: boolean; verified: boolean }[];
  const primaryEmail = emails.find((e) => e.primary && e.verified)?.email ?? profile.email ?? "";

  const user = await findOrCreateOAuthUser({
    provider: "GITHUB",
    providerAccountId: String(profile.id),
    email: primaryEmail,
    name: profile.name ?? profile.login,
    avatarUrl: profile.avatar_url,
  });

  const accessToken = signAccessToken(user);
  const refreshToken = await issueRefreshToken(user.id);

  return { accessToken, refreshToken, user };
}
