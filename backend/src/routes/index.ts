import { Router } from "express";
import authRoutes from "./auth.routes.js";
import oauthRoutes from "./oauth.routes.js";
import userRoutes from "./user.routes.js";
import conversationRoutes from "./conversation.routes.js";
import { attachmentRouter, messageAttachmentRouter } from "./attachment.routes.js";

const router = Router();

router.get("/health", (_req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

router.use("/auth", authRoutes);
router.use("/auth", oauthRoutes);
router.use("/users", userRoutes);
router.use("/conversations", conversationRoutes);
router.use("/attachments", attachmentRouter);
router.use("/messages/:messageId/attachments", messageAttachmentRouter());

export default router;
