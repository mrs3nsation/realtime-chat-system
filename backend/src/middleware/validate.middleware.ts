import type { Request, Response, NextFunction } from "express";
import type { AnyZodObject, ZodError } from "zod";
import { sendError } from "../utils/response.js";

export function validate(schema: AnyZodObject) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const result = await schema.safeParseAsync({
      body: req.body,
      query: req.query,
      params: req.params,
      cookies: req.cookies,
    });

    if (!result.success) {
      const issues = (result.error as ZodError).issues.map((issue) => ({
        field: issue.path.slice(1).join("."),
        message: issue.message,
      }));
      sendError(res, "Validation failed", 400, issues);
      return;
    }

    Object.assign(req, result.data);
    next();
  };
}
