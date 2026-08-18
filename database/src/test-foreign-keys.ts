import { prisma } from "./client";

async function main() {
  const fakeUserId = "00000000-0000-0000-0000-000000000000";

  try {
    await prisma.conversationMember.create({
      data: {
        conversationId: fakeUserId,
        userId: fakeUserId,
      },
    });

    console.log(
      "ERROR: Invalid foreign-key record was accepted.",
    );
  } catch (error) {
    console.log(
      "Invalid foreign-key record was rejected successfully.",
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Foreign-key test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });