"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const FeedbackSchema = new mongoose_1.default.Schema({
    studentId: { type: mongoose_1.default.Schema.Types.ObjectId, ref: "Student", required: true },
    feedback: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    givenBy: { type: String }, // e.g., teacher/admin name
});
exports.default = mongoose_1.default.model("Feedback", FeedbackSchema);
