import React from "react";
import { FaUpload, FaDollarSign, FaCheckCircle } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import StepCard from "./StepCards";

// Flow component
const Flow: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const steps = [
    {
      Icon: FaUpload,
      color: "text-green-500",
      title: "Upload License",
      description: "Simply upload your license to start the process.",
    },
    {
      Icon: FaDollarSign,
      color: "text-yellow-500",
      title: "Get Valuation",
      description: "Receive a valuation based on your license details.",
    },
    {
      Icon: FaCheckCircle,
      color: "text-blue-500",
      title: "Get Paid",
      description: "After approval, get paid for your license.",
    },
  ];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 sm:p-8 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div
        className={`bg-gradient-to-b from-black to-gray-600 bg-clip-text text-transparent font-extrabold mb-12 leading-tight text-center text-3xl sm:text-4xl ${
          darkMode ? "text-white" : "text-black"
        }`}
      >
        How it Works
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <StepCard {...step} darkMode={darkMode} />
            {index !== steps.length - 1 && (
              <div className="flex justify-center md:items-center mb-4 md:mb-0 md:mx-4">
                <IoArrowForward className="text-4xl text-gray-500 transform rotate-90 md:rotate-0" />
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Flow;
