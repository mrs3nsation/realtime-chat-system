import type { User } from "../../node_modules/database/generated/prisma/models";

declare global {
  namespace Express {
    interface Request {
      user?: Pick<User, "id" | "email" | "name" | "avatarUrl">;
      file?: {
        fieldname: string;
        originalname: string;
        encoding: string;
        mimetype: string;
        size: number;
        buffer: Buffer;
      };
    }
  }
}

export {};
