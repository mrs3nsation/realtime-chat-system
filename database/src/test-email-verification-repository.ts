import {prisma} from "./client";
import {emailVerificationRepository} from "./repositories/email-verification.repository";

async function main(){
    const email = `phase 10 email test - ${Date.now()}@example.com`;
    const user = await prisma.user.create({
        data: {
            email,
            name: `phase 10 email test user`,
        },
    });

    console.log("created test user : ",user.id);

    const tokenHash = `test-token-hash-${Date.now()}`;
    const verification = await emailVerificationRepository.create({
        userId: user.id,
        tokenHash,
        expiresAt: new Date(Date.now()+60 * 60 * 1000),
    });

    console.log("Created verification:",verification.id);

    const found = await emailVerificationRepository.findByTokenHash(tokenHash);

    if(!found){
        throw new Error("verification record not found");
    }

    console.log("Verification Found",found.id);

    const verified = await emailVerificationRepository.markVerified(verification.id,);

    if(!verified.verifiedAt){
        console.log("Verification timestamp not found");
    }

    await emailVerificationRepository.delete(verification.id);

    await prisma.user.delete({
        where: {
            id: user.id,
        },
    });

    console.log("Test user deleted successfully");
}

main()
    .catch((error)=>{
        console.error("email verification repository didn't work");
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    });
