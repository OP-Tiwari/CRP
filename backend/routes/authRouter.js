import express from "express";
import authController from "../controllers/auth-controller.js";
import signupSchema from "../validators/auth-validators.js";
import validate from "../middlewares/validate-middleware.js";
const router = express.Router();

router.route("/").get(authController.home);
router
.route("/register")
.post( validate(signupSchema), authController.register);
router.route("/login").post(authController.login);
    
export default router;