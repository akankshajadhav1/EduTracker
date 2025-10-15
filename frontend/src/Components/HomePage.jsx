import React, { useState } from "react";
import StudentTable from "./StudentTable";
import Header from "./Header";
import { useTheme } from "../Context/ThemeContext";
import LandingPage from "./LandingPage";

const HomePage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittingStudentId, setSubmittingStudentId] = useState(null);
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <Header />
      {/* Main content */}
      {/* <main className="container mx-auto px-4 py-6">
        <StudentTable
          isSubmiting={isSubmitting}
          submitindStudentId={submittingStudentId}
          setIsSubmitting={setIsSubmitting}
          setSubmittingStudentId={setSubmittingStudentId}
        />
      </main> */}
      {/* Landing page */}
      <LandingPage />
      {/* Footer can be added here */}
      <footer
        className={`py-4 text-center ${
          isDarkMode ? "text-gray-400 bg-gray-800" : "text-gray-600 bg-white"
        } border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}
      >
        <p>© {new Date().getFullYear()} EduTracker</p>
      </footer>
    </div>
  );
};

export default HomePage;
