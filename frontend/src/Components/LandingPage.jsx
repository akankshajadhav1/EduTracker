import React from "react";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../Context/ThemeContext";
import landing from "../assets/landing.svg";

const LandingPage = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/studenttable");
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-6 py-10 transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      {/* Hero Section */}
      <div className="text-center max-w-3xl mb-10">
        <h1 className="text-5xl font-extrabold mb-4 leading-tight">
          🚀Open Student Insights
        </h1>
        <p className="text-xl font-medium mb-4 text-blue-500">
          "Track the effort. Celebrate the growth."
        </p>
        <p className="text-lg">
          Your all-in-one dashboard for monitoring competitive programming
          performance. Visualize ratings, track problem-solving streaks, and
          analyze contest history.
        </p>
      </div>

      {/* Image Section */}
      <img
        src={landing}
        alt="Student Progress Illustration"
        className="w-full max-w-lg mb-10 rounded-xl shadow-xl"
      />

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl w-full mb-12">
        {[
          {
            icon: "📈",
            title: "Rating Graph",
            desc: "Interactive charts to visualize Codeforces rating changes over time.",
          },
          {
            icon: "🔥",
            title: "Heatmap Activity",
            desc: "Track daily problem-solving habits with a calendar heatmap.",
          },
          {
            icon: "📋",
            title: "Student Table",
            desc: "Manage student handles, ratings, and contest performance in one view.",
          },
        ].map((feature, idx) => (
          <div
            key={idx}
            className={`p-6 rounded-xl shadow-md transform transition hover:scale-105 ${
              isDarkMode ? "bg-gray-800" : "bg-white"
            }`}
          >
            <h2 className="text-2xl font-bold mb-2">
              {feature.icon} {feature.title}
            </h2>
            <p className="text-sm">{feature.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mb-10">
        <p className="text-lg mb-4 font-medium">
          Ready to explore student performance?
        </p>
        <button
          onClick={handleStart}
          className={`px-6 py-3 rounded-full font-semibold text-lg transition-all shadow-lg cursor-pointer transform active:scale-95 duration-150 ${
            isDarkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Explore Progress
        </button>
      </div>

      {/* Footer */}
    </div>
  );
};

export default LandingPage;
