import {prisma} from "../client";

export const conversationRepository = {
    create(data : {
        name? : string;
        isGroup: boolean;
        directKey?: string;
    }) {
        return prisma.conversation.create({
            data,
        });
    },

    findById(id: string){
        return prisma.conversation.findUnique({
            where: {
                id,
            },
        });
    },
    findDirectKey(directKey: string){
        return prisma.conversation.findUnique({
            where: {
                directKey,
            }
        });
    },

    listUserConversations(userId: string) {
        return prisma.conversation.findMany({
            where: {
                members: {
                    some: {
                        userId,
                    },
                },
            },
            include: {
                members: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                avatarUrl: true,
                            },
                        },
                    },
                    orderBy: {
                        joinedAt: "asc",
                    },
                },
                messages: {
                    where: {
                        deletedAt: null,
                    },
                    orderBy: {
                        createdAt: "desc",
                    },
                    take: 1,
                    include: {
                        sender: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                avatarUrl: true,
                            },
                        },
                        attachments: true,
                    },
                },
            },
            orderBy: {
                updatedAt: "desc",
            },
        });
    },

    update(
        id: string,
        data:{
            name?: string;
            isGroup?: boolean;
            directKey?: string;
        },
    ) {
        return prisma.conversation.update({
            where:{
                id,
            },
            data,
        });
    },
};