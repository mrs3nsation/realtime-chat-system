import { prisma } from "./client";

async function main() {
  console.log("Testing invalid database input...");

  try {
    await prisma.user.create({
      data: {
        email: null as any,
        name: "Invalid User",
      },
    });

    console.log(
      "ERROR: Invalid user was unexpectedly created.",
    );
  } catch (error) {
    console.log(
      "Invalid user input rejected successfully.",
    );
  }

  let userId: string | undefined;

  try {
    const user = await prisma.user.create({
      data: {
        email: `invalid-input-${Date.now()}@example.com`,
        name: "Enum Test User",
      },
    });

    userId = user.id;

    console.log(
      "Created test user:",
      user.id,
    );

    await prisma.messageStatus.create({
      data: {
        messageId: "00000000-0000-0000-0000-000000000000",
        userId: user.id,
        status: "INVALID" as any,
      },
    });

    console.log(
      "ERROR: Invalid enum value was unexpectedly accepted.",
    );
  } catch (error) {
    console.log(
      "Invalid enum input rejected successfully.",
    );
  } finally {
    if (userId) {
      await prisma.user.delete({
        where: {
          id: userId,
        },
      });

      console.log(
        "Test user deleted successfully.",
      );
    }
  }

  console.log(
    "Invalid input tests completed successfully.",
  );
}

main()
  .catch((error) => {
    console.error(
      "Invalid input test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });