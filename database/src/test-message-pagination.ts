import { prisma } from "./client";

async function main() {
  let userId: string | undefined;
  let conversationId: string | undefined;

  try {
    const user = await prisma.user.create({
      data: {
        email: `pagination-${Date.now()}@example.com`,
        name: "Pagination Test User",
      },
    });

    userId = user.id;

    console.log(
      "Created test user:",
      user.id,
    );

    const conversation = await prisma.conversation.create({
      data: {
        isGroup: false,
      },
    });

    conversationId = conversation.id;

    console.log(
      "Created test conversation:",
      conversation.id,
    );

    const baseTime = new Date();

    for (let i = 0; i < 120; i++) {
      await prisma.message.create({
        data: {
          conversationId: conversation.id,
          senderId: user.id,
          content: `Pagination test message ${i + 1}`,
          createdAt: new Date(
            baseTime.getTime() + i * 1000,
          ),
        },
      });
    }

    console.log(
      "Created 120 test messages.",
    );

    const pageSize = 50;

    const firstPage = await prisma.message.findMany({
      where: {
        conversationId: conversation.id,
      },
      orderBy: {
        createdAt: "desc",
      },
      take: pageSize,
    });

    console.log(
      "First page messages:",
      firstPage.length,
    );

    const cursor = firstPage[firstPage.length - 1].createdAt;

    console.log(
      "Cursor:",
      cursor.toISOString(),
    );

    const secondPage = await prisma.message.findMany({
      where: {
        conversationId: conversation.id,
        createdAt: {
          lt: cursor,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: pageSize,
    });

    console.log(
      "Second page messages:",
      secondPage.length,
    );

    const secondCursor =
      secondPage[secondPage.length - 1].createdAt;

    console.log(
      "Second cursor:",
      secondCursor.toISOString(),
    );

    const thirdPage = await prisma.message.findMany({
      where: {
        conversationId: conversation.id,
        createdAt: {
          lt: secondCursor,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: pageSize,
    });

    console.log(
      "Third page messages:",
      thirdPage.length,
    );

    console.log(
      "Pagination test completed successfully.",
    );
  } finally {
    if (conversationId) {
      await prisma.conversation.delete({
        where: {
          id: conversationId,
        },
      });
    }

    if (userId) {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });
    }

    console.log(
      "Test conversation and user deleted successfully",
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Message pagination test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });