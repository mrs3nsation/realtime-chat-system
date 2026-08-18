import { prisma } from "./client";
import { refreshTokenRepository } from "./repositories/refresh-token.repository";

async function main() {
  const user = await prisma.user.create({
    data: {
      email: `phase10-refresh-${Date.now()}@example.com`,
      name: "Phase 10 Refresh Token Test",
    },
  });

  console.log("Created test user:", user.id);

  const expiresAt = new Date(
    Date.now() + 1000 * 60 * 60,
  );

  const refreshToken =
    await refreshTokenRepository.create({
      userId: user.id,
      tokenHash: `phase10-hash-${Date.now()}`,
      expiresAt,
    });

  console.log(
    "Created refresh token:",
    refreshToken.id,
  );

  const foundByHash =
    await refreshTokenRepository.findByTokenHash(
      refreshToken.tokenHash,
    );

  if (!foundByHash) {
    throw new Error(
      "Refresh token could not be found by token hash.",
    );
  }

  console.log(
    "Found refresh token by hash:",
    foundByHash.id,
  );

  const foundById =
    await refreshTokenRepository.findById(
      refreshToken.id,
    );

  if (!foundById) {
    throw new Error(
      "Refresh token could not be found by ID.",
    );
  }

  console.log("Found refresh token by ID:",foundById.id);

  const activeTokens =await refreshTokenRepository.findActiveByUser(user.id,);

  console.log(
    "Active refresh tokens:",activeTokens.length,
  );

  const revokedToken =
    await refreshTokenRepository.revoke(
      refreshToken.id,
    );

  console.log(
    "Refresh token revoked at:",
    revokedToken.revokedAt,
  );

  const activeTokensAfterRevoke =
    await refreshTokenRepository.findActiveByUser(
      user.id,
    );

  console.log(
    "Active refresh tokens after revocation:",
    activeTokensAfterRevoke.length,
  );

  await prisma.user.delete({
    where: {
      id: user.id,
    },
  });

  console.log("Test user deleted successfully");
}

main()
  .catch((error) => {
    console.error(
      "Refresh token repository test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });