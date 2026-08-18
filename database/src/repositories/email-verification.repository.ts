import {prisma} from "../client";

export const emailVerificationRepository = {
    create(data:{
        userId: string;
        tokenHash: string;
        expiresAt: Date;
    }) {
        return prisma.emailVerification.create({
            data,
        });
    },

    findByTokenHash(tokenHash: string){
        return prisma.emailVerification.findUnique({
            where: {
                tokenHash,
            },
        });
    },

    markVerified(id:string){
        return prisma.emailVerification.update({
            where: {
                id,
            },
            data: {
                verifiedAt: new Date(),
            },
        });
    },

    delete(id: string){
        return prisma.emailVerification.delete({
            where: {
                id,
            },
        });
    },
};