import "dotenv/config";
import { env } from "./config/env.js";

console.log({
  GOOGLE_CLIENT_ID: env.GOOGLE_CLIENT_ID
    ? `SET (${env.GOOGLE_CLIENT_ID.slice(0, 12)}...)`
    : "MISSING",
  GITHUB_CLIENT_ID: env.GITHUB_CLIENT_ID
    ? `SET (${env.GITHUB_CLIENT_ID.slice(0, 12)}...)`
    : "MISSING",
  MAIL_FROM: env.MAIL_FROM ?? "MISSING",
});
