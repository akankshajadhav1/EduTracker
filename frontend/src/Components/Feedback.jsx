import React, { useState } from "react";
import axios from "axios";

const Feedback = ({ studentId }) => {
  const [feedback, setFeedback] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/feedback", {
        studentId,
        feedback,
        suggestion,
      });
      setMessage("Feedback submitted successfully!");
      setFeedback("");
      setSuggestion("");
    } catch (error) {
      setMessage("Error submitting feedback.");
    }
  };

  return (
    <div className="rounded-xl shadow-md p-6 bg-white mb-6">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Feedback & Suggestions
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Feedback on performance..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <textarea
          className="w-full p-2 border rounded"
          placeholder="Suggestions for improvement..."
          value={suggestion}
          onChange={(e) => setSuggestion(e.target.value)}
          required
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Feedback
        </button>
      </form>
      {message && <p className="mt-2 text-green-600">{message}</p>}
    </div>
  );
};

export default Feedback;
