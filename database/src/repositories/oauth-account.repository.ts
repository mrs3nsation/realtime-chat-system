import { prisma } from "../client";
export const oauthAccountRepository = {
    findByProviderAccount(
        provider : "GOOGLE" | "GITHUB",
        providerAccountId: string,
    ) {
        return prisma.oAuthAccount.findUnique({
            where: {
                provider_providerAccountId: {
                    provider,
                    providerAccountId,
                },
            },
        });
    },

    findByUserId(userId: string){
        return prisma.oAuthAccount.findMany({
            where: {userId },
        });
    },

    create(data : {
        userId: string;
        provider: "GOOGLE" | "GITHUB" ;
        providerAccountId: string;
    }) {
        return prisma.oAuthAccount.create({
            data,
        });
    },

    delete(id: string){
        return prisma.oAuthAccount.delete({
            where: {id},
        });
    },
};