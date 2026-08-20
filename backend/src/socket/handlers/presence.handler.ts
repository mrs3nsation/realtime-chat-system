import type { Server, Socket } from "socket.io";
import { socketTypingSchema } from "../../validators/socket.validator.js";

export function registerPresenceHandlers(io: Server, socket: Socket): void {
  socket.on("presence:online", () => {
    socket.broadcast.emit("presence:status", {
      userId: socket.user.id,
      status: "online",
    });
  });

  socket.on("disconnect", () => {
    io.emit("presence:status", {
      userId: socket.user.id,
      status: "offline",
    });
  });

  socket.on("typing:start", (payload: unknown) => {
    const result = socketTypingSchema.safeParse(payload);
    if (!result.success) return;

    socket.to(`conversation:${result.data.conversationId}`).emit("typing:start", {
      userId: socket.user.id,
      conversationId: result.data.conversationId,
    });
  });

  socket.on("typing:stop", (payload: unknown) => {
    const result = socketTypingSchema.safeParse(payload);
    if (!result.success) return;

    socket.to(`conversation:${result.data.conversationId}`).emit("typing:stop", {
      userId: socket.user.id,
      conversationId: result.data.conversationId,
    });
  });
}
