import { NullableDateTimeFieldUpdateOperationsInput } from "../../generated/prisma/models";
import {prisma} from "../client"
export const messageRepository = {
    create(
        data: {
            conversationId: string;
            senderId: string;
            content: string;
        }
    ) {
        return prisma.message.create({
            data,
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
                statuses: true,
            },
        });
    },

    findById(id: string){
        return prisma.message.findUnique({
            where: {
                id,
            },
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
                statuses: true,
            },
        });
    },

    update(
        id: string,
        data: {
            content?: string;
        },
    ) {
        return prisma.message.update({
            where: {
                id,
            },
            data,
        });
    },

    softDelete(id: string){
        return prisma.message.update({
            where: {
                id,
            },
            data: {
                deletedAt : new Date(),
            },
        });
    },

    findByConversation(
        conversationId: string,
        take = 50,
    ) {
        return prisma.message.findMany({
            where: {
                conversationId,
                deletedAt: null,
            },
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
                statuses: true,
            },
            orderBy: {
                createdAt: "desc"
            },
            take,
        });
    },
};