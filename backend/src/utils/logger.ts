type LogLevel = "debug" | "info" | "warn" | "error";

const SENSITIVE_KEYS = new Set([
  "password",
  "passwordhash",
  "token",
  "refreshtoken",
  "accesstoken",
  "tokenhash",
  "authorization",
  "secret",
  "cookie",
  "database_url",
  "direct_url",
  "jwt_secret",
  "resend_api_key",
]);

function redactSensitiveData(data: unknown): unknown {
  if (data === null || data === undefined) {
    return data;
  }

  if (typeof data === "string") {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) => redactSensitiveData(item));
  }

  if (typeof data === "object") {
    const sanitized: Record<string, unknown> = {};
    for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
      if (SENSITIVE_KEYS.has(key.toLowerCase())) {
        sanitized[key] = "[REDACTED]";
      } else if (typeof value === "object" && value !== null) {
        sanitized[key] = redactSensitiveData(value);
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }

  return data;
}

function formatLog(level: LogLevel, message: string, meta?: unknown): string {
  const timestamp = new Date().toISOString();
  const sanitizedMeta = meta !== undefined ? redactSensitiveData(meta) : undefined;
  
  if (process.env.NODE_ENV === "production") {
    return JSON.stringify({
      timestamp,
      level,
      message,
      ...(sanitizedMeta !== undefined ? { meta: sanitizedMeta } : {}),
    });
  }

  const metaString =
    sanitizedMeta !== undefined
      ? ` | ${JSON.stringify(sanitizedMeta, null, 2)}`
      : "";
  return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaString}`;
}

export const logger = {
  debug(message: string, meta?: unknown): void {
    if (process.env.NODE_ENV !== "production") {
      console.debug(formatLog("debug", message, meta));
    }
  },

  info(message: string, meta?: unknown): void {
    console.info(formatLog("info", message, meta));
  },

  warn(message: string, meta?: unknown): void {
    console.warn(formatLog("warn", message, meta));
  },

  error(message: string, meta?: unknown): void {
    console.error(formatLog("error", message, meta));
  },
};
