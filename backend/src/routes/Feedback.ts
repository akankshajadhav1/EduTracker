import express from "express";
import Feedback from "../models/FeedbackModel";

const router = express.Router();

router.post("/feedback", async (req, res) => {
  try {
    const { studentId, feedback, suggestion } = req.body;
    const newFeedback = new Feedback({ studentId, feedback, suggestion });
    await newFeedback.save();
    res.json({ status: true, message: "Feedback submitted!" });
  } catch (error) {
    res.status(500).json({ status: false, message: "Error submitting feedback." });
  }
});

export default router;