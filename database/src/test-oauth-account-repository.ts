import { error } from "node:console";
import {prisma} from "./client";
import { oauthAccountRepository } from "./repositories/oauth-account.repository";

async function main(){
    const email = `phase10-oauth-test-${Date.now()}@example.com`;
    const user = await prisma.user.create({
        data: {
            email,
            name: "Phase 10 OAuth Test User"
        },
    });

    console.log("Created test user: ", user.id);

    const providerAccountId = `google-test-${Date.now}`;

    const oauthAccount = await oauthAccountRepository.create({
        userId : user.id,
        provider: "GOOGLE",
        providerAccountId,
    });

    console.log("created oauthAccount : ",oauthAccount.id);

    const foundByProvider = await oauthAccountRepository.findByProviderAccount("GOOGLE",providerAccountId,
    );

    if (!foundByProvider){
        throw new Error("OAuthAccount could not be found by provider account");
    }

    console.log("Found by provider account",foundByProvider.id);

    const foundByUser = await oauthAccountRepository.findByUserId(user.id);

    if(foundByUser.length !== 1){
        throw new Error("OAuthAccount could not be found by userId");
    };

    console.log("Found by userID",foundByUser[0].id);

    await oauthAccountRepository.delete(oauthAccount.id);

    console.log("oauthAccount deleted successfully");

    await prisma.user.delete({
        where: {
            id: user.id
        },
    });

    console.log("Test user deleted successfully");
}

main()
    .catch((error)=>{
        console.error("oauth repository failed");
        process.exit(1);
    })
    .finally(async()=>{
        await prisma.$disconnect();
    });