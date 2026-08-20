import type { Response } from "express";

export interface ApiResponse<T = unknown> {
  success: true;
  data: T;
}

export interface PaginatedResponse<T = unknown> {
  success: true;
  data: T[];
  meta: {
    nextCursor: string | null;
    hasMore: boolean;
  };
}

export interface ApiErrorResponse {
  success: false;
  error: string;
  details?: unknown;
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  statusCode = 200
): Response {
  const payload: ApiResponse<T> = {
    success: true,
    data,
  };
  return res.status(statusCode).json(payload);
}

export function sendPaginated<T>(
  res: Response,
  items: T[],
  meta: { nextCursor: string | null; hasMore: boolean },
  statusCode = 200
): Response {
  const payload: PaginatedResponse<T> = {
    success: true,
    data: items,
    meta,
  };
  return res.status(statusCode).json(payload);
}

export function sendError(
  res: Response,
  message: string,
  statusCode = 500,
  details?: unknown
): Response {
  const payload: ApiErrorResponse = {
    success: false,
    error: message,
    ...(details !== undefined ? { details } : {}),
  };
  return res.status(statusCode).json(payload);
}
