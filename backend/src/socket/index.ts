import type { Server as HttpServer } from "http";
import { Server } from "socket.io";
import jwt from "jsonwebtoken";
import { env } from "../config/env.js";
import { logger } from "../utils/logger.js";
import { registerMessageHandlers } from "./handlers/message.handler.js";
import { registerPresenceHandlers } from "./handlers/presence.handler.js";

interface SocketUser {
  id: string;
  email: string;
  name: string | null;
  avatarUrl: string | null;
}

declare module "socket.io" {
  interface Socket {
    user: SocketUser;
  }
}

export function createSocketServer(httpServer: HttpServer): Server {
  const io = new Server(httpServer, {
    cors: {
      origin: env.CORS_ORIGIN,
      credentials: true,
    },
  });

  io.use((socket, next) => {
    const token =
      socket.handshake.auth?.token as string | undefined ||
      (socket.handshake.headers.authorization?.startsWith("Bearer ")
        ? socket.handshake.headers.authorization.slice(7)
        : undefined);

    if (!token) {
      return next(new Error("Authentication token missing"));
    }

    try {
      const payload = jwt.verify(token, env.JWT_ACCESS_SECRET) as {
        sub: string;
        email: string;
        name: string | null;
        avatarUrl: string | null;
      };

      socket.user = {
        id: payload.sub,
        email: payload.email,
        name: payload.name,
        avatarUrl: payload.avatarUrl,
      };

      next();
    } catch {
      next(new Error("Invalid or expired token"));
    }
  });

  io.on("connection", (socket) => {
    logger.info("Socket connected", { userId: socket.user.id, socketId: socket.id });

    socket.join(`user:${socket.user.id}`);

    registerMessageHandlers(io, socket);
    registerPresenceHandlers(io, socket);

    socket.on("disconnect", (reason) => {
      logger.info("Socket disconnected", { userId: socket.user.id, reason });
    });
  });

  return io;
}
