import "dotenv/config";
import http from "http";
import app from "./app.js";
import { env } from "./config/env.js";
import { createSocketServer } from "./socket/index.js";
import { prisma } from "./config/db.js";
import { logger } from "./utils/logger.js";

const server = http.createServer(app);
const io = createSocketServer(server);

server.listen(env.PORT, () => {
  logger.info(`Server running on port ${env.PORT}`, { env: env.NODE_ENV });
});

async function shutdown(signal: string): Promise<void> {
  logger.info(`Received ${signal}, shutting down gracefully`);

  server.close(async () => {
    io.close();
    await prisma.$disconnect();
    logger.info("Server and database connections closed");
    process.exit(0);
  });

  setTimeout(() => {
    logger.error("Forced shutdown after timeout");
    process.exit(1);
  }, 10000);
}

process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("SIGINT", () => void shutdown("SIGINT"));

process.on("uncaughtException", (err) => {
  logger.error("Uncaught exception", { err });
  process.exit(1);
});

process.on("unhandledRejection", (reason) => {
  logger.error("Unhandled rejection", { reason });
  process.exit(1);
});

export { io };