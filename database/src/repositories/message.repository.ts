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
        });
    },

    findById(id: string){
        return prisma.message.findUnique({
            where: {
                id,
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
            orderBy: {
                createdAt: "desc"
            },
            take,
        });
    },
};