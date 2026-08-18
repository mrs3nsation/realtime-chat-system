import { prisma } from "../client";

export const refreshTokenRepository = {
  create(data: {
    userId: string;
    tokenHash: string;
    expiresAt: Date;
  }) {
    return prisma.refreshToken.create({
      data,
    });
  },

  findByTokenHash(tokenHash: string) {
    return prisma.refreshToken.findUnique({
      where: {
        tokenHash,
      },
    });
  },

  findById(id: string) {
    return prisma.refreshToken.findUnique({
      where: {
        id,
      },
    });
  },

  revoke(id: string) {
    return prisma.refreshToken.update({
      where: {
        id,
      },
      data: {
        revokedAt: new Date(),
      },
    });
  },

  findActiveByUser(userId: string) {
    return prisma.refreshToken.findMany({
      where: {
        userId,
        revokedAt: null,
        expiresAt: {
          gt: new Date(),
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  },
};