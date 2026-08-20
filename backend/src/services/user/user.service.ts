import { userRepository } from "../../config/db.js";
import { hashPassword, verifyPassword } from "../../utils/password.js";
import { NotFoundError, UnauthorizedError, BadRequestError } from "../../utils/errors.js";

export async function getProfile(userId: string) {
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }
  return { id: user.id, email: user.email, name: user.name, avatarUrl: user.avatarUrl, createdAt: user.createdAt };
}

export async function updateProfile(
  userId: string,
  data: { name?: string; avatarUrl?: string }
) {
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  const updated = await userRepository.update(userId, data);
  return { id: updated.id, email: updated.email, name: updated.name, avatarUrl: updated.avatarUrl };
}

export async function changePassword(
  userId: string,
  currentPassword: string,
  newPassword: string
): Promise<void> {
  const user = await userRepository.findById(userId);
  if (!user) {
    throw new NotFoundError("User not found");
  }

  if (!user.passwordHash) {
    throw new BadRequestError("This account uses social login and has no password");
  }

  const isValid = await verifyPassword(user.passwordHash, currentPassword);
  if (!isValid) {
    throw new UnauthorizedError("Current password is incorrect");
  }

  const newHash = await hashPassword(newPassword);
  await userRepository.update(userId, { passwordHash: newHash });
}
