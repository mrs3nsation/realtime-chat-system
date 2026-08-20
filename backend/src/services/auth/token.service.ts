import jwt from "jsonwebtoken";
import { env } from "../../config/env.js";
import { refreshTokenRepository } from "../../config/db.js";
import { generateSecureToken, hashToken } from "../../utils/crypto.js";
import { UnauthorizedError } from "../../utils/errors.js";

interface TokenUserPayload {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
}

export function signAccessToken(user: TokenUserPayload): string {
  return jwt.sign(
    {
      sub: user.id,
      email: user.email,
      name: user.name,
      avatarUrl: user.avatarUrl,
    },
    env.JWT_ACCESS_SECRET,
    { expiresIn: env.JWT_ACCESS_EXPIRES_IN as jwt.SignOptions["expiresIn"] }
  );
}

export async function issueRefreshToken(userId: string): Promise<string> {
  const rawToken = generateSecureToken();
  const tokenHash = hashToken(rawToken);

  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);

  await refreshTokenRepository.create({ userId, tokenHash, expiresAt });

  return rawToken;
}

export async function rotateRefreshToken(
  rawToken: string
): Promise<{ accessToken: string; refreshToken: string; user: TokenUserPayload }> {
  const tokenHash = hashToken(rawToken);
  const stored = await refreshTokenRepository.findByTokenHash(tokenHash);

  if (!stored) {
    throw new UnauthorizedError("Refresh token not found");
  }

  if (stored.revokedAt !== null) {
    throw new UnauthorizedError("Refresh token has been revoked");
  }

  if (stored.expiresAt < new Date()) {
    throw new UnauthorizedError("Refresh token has expired");
  }

  await refreshTokenRepository.revoke(stored.id);

  const user: TokenUserPayload = {
    id: stored.userId,
    email: "",
    name: null,
    avatarUrl: null,
  };

  const newRawToken = generateSecureToken();
  const newTokenHash = hashToken(newRawToken);
  const expiresAt = new Date();
  expiresAt.setDate(expiresAt.getDate() + 7);

  await refreshTokenRepository.create({
    userId: stored.userId,
    tokenHash: newTokenHash,
    expiresAt,
  });

  return {
    accessToken: signAccessToken(user),
    refreshToken: newRawToken,
    user,
  };
}

export async function revokeRefreshToken(rawToken: string): Promise<void> {
  const tokenHash = hashToken(rawToken);
  const stored = await refreshTokenRepository.findByTokenHash(tokenHash);

  if (stored && stored.revokedAt === null) {
    await refreshTokenRepository.revoke(stored.id);
  }
}
