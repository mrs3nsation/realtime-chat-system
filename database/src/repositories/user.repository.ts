import {prisma} from "../client";

export const userRepository = {
    findById(id: string){
        return prisma.user.findUnique({
            where: { id },
        });
    },

    findByEmail(email: string){
        return prisma.user.findUnique({
            where: {email}
        });
    },

    create(data: {
        email: string;
        passwordHash? : string;
        name?: string;
        avatarUrl?: string
    }) {
        return prisma.user.create({
            data,
        });
    },

    update(
        id: string,
        data: {
            email?: string;
            passwordHash?: string;
            name?: string;
            avatarUrl?: string;
        },
    ) {
        return prisma.user.update({
            where: {id},data
        });
    },

    searchUsers(query?: string, excludeUserId?: string) {
        return prisma.user.findMany({
            where: {
                deletedAt: null,
                ...(excludeUserId ? { id: { not: excludeUserId } } : {}),
                ...(query
                    ? {
                          OR: [
                              { name: { contains: query, mode: "insensitive" } },
                              { email: { contains: query, mode: "insensitive" } },
                          ],
                      }
                    : {}),
            },
            select: {
                id: true,
                email: true,
                name: true,
                avatarUrl: true,
                createdAt: true,
            },
            orderBy: {
                name: "asc",
            },
            take: 50,
        });
    },
};