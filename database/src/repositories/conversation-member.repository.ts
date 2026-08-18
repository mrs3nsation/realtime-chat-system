import {prisma} from "../client";
export const conversationMemberRepository = {
    create(data : {
        conversationId : string;
        userId: string;
        role?: "MEMBER" | "ADMIN"
    }) {
        return prisma.conversationMember.create({
            data,
        });
    },

    findByConversationAndUser(
        conversationId: string,
        userId: string,
    ){
        return prisma.conversationMember.findUnique({
            where: {
                conversationId_userId: {
                    conversationId,
                    userId
                },
            },
        });
    },

    isMember(
        conversationId: string,
        userId: string,
    ) {
        return prisma.conversationMember.findUnique({
            where: {
                conversationId_userId: {
                    conversationId,
                    userId,
                },
            },
            select: {
                id: true,
            },
        });
    },

    findByConversation(conversationId: string){
        return prisma.conversationMember.findMany({
            where: {
                conversationId,
            },
            orderBy: {
                joinedAt: "asc"
            },
        });
    },

    remove(
        conversationId: string,
        userId: string
    ){
        return prisma.conversationMember.delete({
            where: {
                conversationId_userId: {
                    conversationId,
                    userId,
                },
            },
        });
    },
};