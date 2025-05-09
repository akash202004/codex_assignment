import React from "react";
import { FaUpload, FaDollarSign, FaCheckCircle } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

// StepCard component with TypeScript types
interface StepCardProps {
  Icon: React.ComponentType<any>;
  color: string;
  title: string;
  description: string;
  darkMode: boolean;
}

const StepCard: React.FC<StepCardProps> = ({
  Icon,
  color,
  title,
  description,
  darkMode,
}) => (
  <div
    className={`flex flex-col items-center rounded-2xl shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)] transition-all duration-300 border p-8 m-4 max-w-xs text-center transform ${
      darkMode
        ? "bg-gray-800 text-white border-gray-700 shadow-[6px_6px_0px_rgba(255,255,255,0.15)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.50)]"
        : "bg-white text-black border-black shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)]"
    }`}
  >
    <Icon className={`text-5xl mb-4 ${color}`} />
    <h3
      className={`text-2xl font-semibold mb-2 ${
        darkMode ? "text-white" : "text-gray-800"
      }`}
    >
      {title}
    </h3>
    <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
      {description}
    </p>
  </div>
);

export default StepCard;
