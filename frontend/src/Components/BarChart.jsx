import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { useTheme } from "../Context/ThemeContext"; // Optional

// Get color by rating with optional dark mode
const getColorByRating = (rating, isDarkMode = false) => {
  rating = Number(rating);
  if (isDarkMode) {
    if (rating < 1200) return "#6b7280"; // gray
    if (rating < 1400) return "#10b981"; // green
    if (rating < 1600) return "#0d9488"; // teal
    if (rating < 1900) return "#2563eb"; // blue
    if (rating < 2100) return "#7e22ce"; // purple
    if (rating < 2400) return "#f59e0b"; // orange
    return "#dc2626"; // red
  } else {
    if (rating < 1200) return "#cdcdcc";
    if (rating < 1400) return "#77fe76";
    if (rating < 1600) return "#77dcba";
    if (rating < 1900) return "#aaaaff";
    if (rating < 2100) return "#fe89ff";
    if (rating < 2400) return "#ffbb55";
    return "#aa0101";
  }
};

const CustomTooltip = ({ active, payload, label, isDarkMode }) => {
  if (active && payload && payload.length) {
    return (
      <div
        className={`p-3 rounded-lg shadow-lg border ${
          isDarkMode
            ? "bg-gray-800 border-gray-700"
            : "bg-white border-gray-200"
        }`}
      >
        <p
          className={`font-bold ${isDarkMode ? "text-white" : "text-gray-900"}`}
        >
          Rating: {label}
        </p>
        <p className={isDarkMode ? "text-gray-300" : "text-gray-600"}>
          Solved: <span>{payload[0].value}</span> problems
        </p>
      </div>
    );
  }
  return null;
};

const RatingBarChart = ({ studentData }) => {
  const { isDarkMode } = useTheme();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (studentData?._id && studentData.solvedcountbyrating) {
      const formattedData = Object.entries(studentData.solvedcountbyrating).map(
        ([rating, count]) => ({ rating, count })
      );
      setData(formattedData);
      setIsLoading(false);
    } else {
      setIsLoading(false);
    }
  }, [studentData?._id]);

  const ratingLegend = [
    {
      range: "< 1200",
      label: "Beginner",
      color: getColorByRating(1100, isDarkMode),
    },
    {
      range: "1200–1399",
      label: "Easy",
      color: getColorByRating(1300, isDarkMode),
    },
    {
      range: "1400–1599",
      label: "Moderate",
      color: getColorByRating(1500, isDarkMode),
    },
    {
      range: "1600–1899",
      label: "Intermediate",
      color: getColorByRating(1700, isDarkMode),
    },
    {
      range: "1900–2099",
      label: "Advanced",
      color: getColorByRating(2000, isDarkMode),
    },
    {
      range: "2100–2399",
      label: "Expert",
      color: getColorByRating(2200, isDarkMode),
    },
    {
      range: "2400+",
      label: "Master",
      color: getColorByRating(2500, isDarkMode),
    },
  ];

  const ratingColorMap = {};
  data.forEach((entry) => {
    if (!ratingColorMap[entry.rating]) {
      ratingColorMap[entry.rating] = getColorByRating(entry.rating, isDarkMode);
    }
  });

  if (isLoading) {
    return (
      <div
        className={`flex justify-center items-center h-64 rounded-xl ${
          isDarkMode ? "bg-gray-800" : "bg-white"
        }`}
      >
        <div
          className={`animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 ${
            isDarkMode ? "border-blue-400" : "border-blue-600"
          }`}
        ></div>
      </div>
    );
  }

  if (!data.length) {
    return (
      <div
        className={`text-center p-4 rounded-xl ${
          isDarkMode ? "bg-gray-800 text-gray-300" : "bg-white text-gray-500"
        }`}
      >
        No problem data available
      </div>
    );
  }

  return (
    <div
      className={`w-full h-full p-4 rounded-xl shadow-sm ${
        isDarkMode ? "bg-gray-800" : "bg-white"
      }`}
    >
      <h2
        className={`text-xl font-semibold mb-4 ${
          isDarkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Problems Solved by Rating
      </h2>
      <div className="w-full h-[300px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            barSize={30}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={isDarkMode ? "#4b5563" : "#e5e7eb"}
            />
            <XAxis
              dataKey="rating"
              tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
              label={{
                value: "Problem Rating",
                position: "bottom",
                offset: 40,
                fill: isDarkMode ? "#9ca3af" : "#6b7280",
              }}
            />
            <YAxis
              tick={{ fill: isDarkMode ? "#9ca3af" : "#6b7280" }}
              label={{
                value: "Problems Solved",
                angle: -90,
                position: "insideLeft",
                fill: isDarkMode ? "#9ca3af" : "#6b7280",
              }}
            />
            <Tooltip content={<CustomTooltip isDarkMode={isDarkMode} />} />
            <Bar dataKey="count" radius={[4, 4, 0, 0]}>
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={ratingColorMap[entry.rating]}
                  stroke={isDarkMode ? "#1f2937" : "#f3f4f6"}
                  strokeWidth={1}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="mt-6">
        <h3
          className={`text-lg font-medium mb-2 ${
            isDarkMode ? "text-white" : "text-gray-800"
          }`}
        >
          Rating Color Legend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {ratingLegend.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded"
                style={{ backgroundColor: item.color }}
              ></div>
              <span className={isDarkMode ? "text-gray-300" : "text-gray-700"}>
                {item.range} – {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingBarChart;
