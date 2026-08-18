import { prisma } from "./client";

async function main() {
  const result = await prisma.$queryRaw<
    {
      "QUERY PLAN": string;
    }[]
  >`
    EXPLAIN
    SELECT
      id,
      "conversationId",
      "senderId",
      content,
      "createdAt",
      "updatedAt",
      "deletedAt"
    FROM "Message"
    WHERE "conversationId" = '00000000-0000-0000-0000-000000000000'
    ORDER BY "createdAt" DESC
    LIMIT 50;
  `;

  console.log("Message history query plan:");

  for (const row of result) {
    console.log(row["QUERY PLAN"]);
  }
}

main()
  .catch((error) => {
    console.error(
      "Message history query test failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });