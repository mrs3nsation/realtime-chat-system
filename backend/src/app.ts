import "dotenv/config";
import express, { urlencoded } from "express";
import helmet from "helmet";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import { env } from "./config/env.js";
import apiRouter from "./routes/index.js";
import { errorMiddleware } from "./middleware/error.middleware.js";

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use(helmet());
app.use(
  cors({
    origin: env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(cookieParser());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 100,
  standardHeaders: "draft-7",
  legacyHeaders: false,
});

app.use(limiter);

app.use("/api", apiRouter);

app.use(errorMiddleware);

export default app;