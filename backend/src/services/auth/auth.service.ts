import { userRepository } from "../../config/db.js";
import { hashPassword, verifyPassword } from "../../utils/password.js";
import { ConflictError, UnauthorizedError, NotFoundError } from "../../utils/errors.js";
import { signAccessToken, issueRefreshToken, rotateRefreshToken, revokeRefreshToken } from "./token.service.js";
import { createAndSendVerification } from "./email-verification.service.js";

interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

interface AuthResult extends AuthTokens {
  user: {
    id: string;
    email: string;
    name: string | null;
    avatarUrl: string | null;
  };
}

export async function register(
  email: string,
  password: string,
  name?: string
): Promise<AuthResult> {
  const existing = await userRepository.findByEmail(email);
  if (existing) {
    throw new ConflictError("An account with this email already exists");
  }

  const passwordHash = await hashPassword(password);
  const user = await userRepository.create({ email, passwordHash, name });

  await createAndSendVerification(user.id, user.email);

  const accessToken = signAccessToken(user);
  const refreshToken = await issueRefreshToken(user.id);

  return {
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl },
  };
}

export async function login(
  email: string,
  password: string
): Promise<AuthResult> {
  const user = await userRepository.findByEmail(email);
  if (!user) {
    throw new UnauthorizedError("Invalid email or password");
  }

  if (!user.passwordHash) {
    throw new UnauthorizedError("This account uses social login. Please sign in with Google or GitHub.");
  }

  const isValid = await verifyPassword(user.passwordHash, password);
  if (!isValid) {
    throw new UnauthorizedError("Invalid email or password");
  }

  const accessToken = signAccessToken(user);
  const refreshToken = await issueRefreshToken(user.id);

  return {
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl },
  };
}

export async function refresh(rawRefreshToken: string): Promise<AuthTokens & { user: AuthResult["user"] }> {
  const stored = await rotateRefreshToken(rawRefreshToken);

  const user = await userRepository.findById(stored.user.id);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const accessToken = signAccessToken(user);
  const refreshToken = stored.refreshToken;

  return {
    accessToken,
    refreshToken,
    user: { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl },
  };
}

export async function logout(rawRefreshToken: string): Promise<void> {
  await revokeRefreshToken(rawRefreshToken);
}
