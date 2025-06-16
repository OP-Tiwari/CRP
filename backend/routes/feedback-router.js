import express from "express";
const router = express.Router();
import feedbackForm from "../controllers/feedback-controller.js";
import authMiddleware from "../middlewares/auth-middleware.js";

router.route("/feedback").post(authMiddleware, feedbackForm);

export default router;