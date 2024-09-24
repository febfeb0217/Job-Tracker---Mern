import { Router } from "express";
import { register, login, logout } from "../controllers/authController.js";
import {
  validateLoginInput,
  validateRegisterUser,
} from "../middleware/validationMiddleware.js";
const router = Router();

router.post("/register", validateRegisterUser, register);
router.post("/login", validateLoginInput, login);
router.get("/logout", logout);

export default router;
