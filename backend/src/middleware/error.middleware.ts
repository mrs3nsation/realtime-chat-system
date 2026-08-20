import type { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/errors.js";
import { sendError } from "../utils/response.js";
import { logger } from "../utils/logger.js";

export function errorMiddleware(
  err: unknown,
  req: Request,
  res: Response,
  _next: NextFunction
): void {
  if (err instanceof AppError) {
    if (!err.isOperational) {
      logger.error("Unexpected application error", {
        message: err.message,
        stack: err.stack,
        path: req.path,
        method: req.method,
      });
    }

    sendError(res, err.message, err.statusCode, err.details);
    return;
  }

  logger.error("Unhandled error", {
    err,
    path: req.path,
    method: req.method,
  });

  sendError(res, "Internal Server Error", 500);
}
