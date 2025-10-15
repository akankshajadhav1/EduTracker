import mongoose from "mongoose";

const FeedbackSchema = new mongoose.Schema({
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  feedback: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  givenBy: { type: String }, // e.g., teacher/admin name
});

export default mongoose.model("Feedback", FeedbackSchema);