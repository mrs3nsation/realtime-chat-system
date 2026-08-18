import { prisma } from "../client";

export const attachmentRepository = {
  create(data: {
    messageId: string;
    originalName: string;
    storageKey: string;
    mimeType: string;
    size: bigint;
  }) {
    return prisma.attachment.create({
      data,
    });
  },

  findById(id: string) {
    return prisma.attachment.findUnique({
      where: {
        id,
      },
    });
  },

  findByMessage(messageId: string) {
    return prisma.attachment.findMany({
      where: {
        messageId,
      },
      orderBy: {
        createdAt: "asc",
      },
    });
  },

  delete(id: string) {
    return prisma.attachment.delete({
      where: {
        id,
      },
    });
  },
};