import { prisma } from "./client";

async function main(){
    await prisma.$queryRaw`SELECT 1`;
    console.log("database connection succeeded");
}

main()
    .catch((error)=> {
        console.error("Database Connection Failed: ",error);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
