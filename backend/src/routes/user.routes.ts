import { Router } from "express";
import * as userController from "../controllers/user.controller.js";
import { validate } from "../middleware/validate.middleware.js";
import { requireAuth } from "../middleware/auth.middleware.js";
import { updateProfileSchema, changePasswordSchema } from "../validators/user.validator.js";

const router = Router();

router.use(requireAuth);

router.get("/", userController.searchUsers);
router.get("/me", userController.getProfile);
router.patch("/me", validate(updateProfileSchema), userController.updateProfile);
router.patch("/me/password", validate(changePasswordSchema), userController.changePassword);

export default router;
