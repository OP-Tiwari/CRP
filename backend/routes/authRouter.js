import express from "express";
import authController from "../controllers/auth-controller.js";
import {signupSchema, loginSchema} from "../validators/auth-validators.js";
import validate from "../middlewares/validate-middleware.js";
import authMiddleware from "../middlewares/auth-middleware.js"
const router = express.Router();

router.route("/").get(authController.home);
router
.route("/register")
.post( validate(signupSchema), authController.register);
router.route("/login").post(validate(loginSchema),authController.login);

router.route("/user").get(authMiddleware, authController.user);
    
export default router;