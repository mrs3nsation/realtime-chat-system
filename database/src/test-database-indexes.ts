import { prisma } from "./client";

async function main() {
  const indexes = await prisma.$queryRaw<
    {
      tablename: string;
      indexname: string;
      indexdef: string;
    }[]
  >`
    SELECT
      tablename,
      indexname,
      indexdef
    FROM pg_indexes
    WHERE schemaname = 'public'
    ORDER BY tablename, indexname;
  `;

  console.log("Database indexes:");

  for (const index of indexes) {
    console.log(
      `${index.tablename} -> ${index.indexname}`,
    );

    console.log(
      `  ${index.indexdef}`,
    );
  }
}

main()
  .catch((error) => {
    console.error(
      "Database index inspection failed:",
      error,
    );
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });