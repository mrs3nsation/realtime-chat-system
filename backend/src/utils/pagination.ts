export function encodeCursor(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

export function decodeCursor(cursor: string): string {
  return Buffer.from(cursor, "base64url").toString("utf8");
}

export function buildMessageCursor(createdAt: Date, id: string): string {
  const raw = `${createdAt.toISOString()}___${id}`;
  return encodeCursor(raw);
}

export function parseMessageCursor(
  cursor?: string
): { createdAt: Date; id: string } | null {
  if (!cursor) {
    return null;
  }

  try {
    const decoded = decodeCursor(cursor);
    const parts = decoded.split("___");
    if (parts.length !== 2) {
      return null;
    }

    const date = new Date(parts[0]);
    if (Number.isNaN(date.getTime())) {
      return null;
    }

    return {
      createdAt: date,
      id: parts[1],
    };
  } catch {
    return null;
  }
}
