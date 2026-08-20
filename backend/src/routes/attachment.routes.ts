import { Router } from "express";
import multer from "multer";
import * as attachmentController from "../controllers/attachment.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { env } from "../config/env.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: env.MAX_FILE_SIZE },
});

const router = Router();

router.get("/:storageKey", attachmentController.serve);

router.use(requireAuth);

router.delete("/:attachmentId", attachmentController.remove);

export { router as attachmentRouter };

export function messageAttachmentRouter() {
  const r = Router({ mergeParams: true });
  r.post("/", requireAuth, upload.single("file"), attachmentController.upload);
  return r;
}
