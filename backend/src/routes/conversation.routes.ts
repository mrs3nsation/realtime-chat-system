import { Router } from "express";
import * as conversationController from "../controllers/conversation.controller.js";
import * as messageController from "../controllers/message.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { requireMember, requireAdmin } from "../middleware/conversation.middleware.js";
import {
  createDirectConversationSchema,
  createGroupConversationSchema,
  addMemberSchema,
  removeMemberSchema,
} from "../validators/conversation.validator.js";
import { sendMessageSchema, getMessagesSchema, markReadSchema } from "../validators/message.validator.js";

const router = Router();

router.use(requireAuth);

router.get("/", conversationController.listConversations);
router.post("/direct", validate(createDirectConversationSchema), conversationController.createDirect);
router.post("/group", validate(createGroupConversationSchema), conversationController.createGroup);

router.get("/:conversationId", requireMember, conversationController.getConversation);

router.post("/:conversationId/members", validate(addMemberSchema), requireAdmin, conversationController.addMember);
router.delete("/:conversationId/members/:userId", validate(removeMemberSchema), requireMember, conversationController.removeMember);

router.post("/:conversationId/messages", validate(sendMessageSchema), requireMember, messageController.sendMessage);
router.get("/:conversationId/messages", validate(getMessagesSchema), requireMember, messageController.getMessages);
router.delete("/:conversationId/messages/:messageId", requireMember, messageController.deleteMessage);
router.post("/:conversationId/messages/read", validate(markReadSchema), requireMember, messageController.markRead);

export default router;
