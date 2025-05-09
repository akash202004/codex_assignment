import React from "react";
import { FaShieldAlt, FaRocket, FaUsers, FaHeadset } from "react-icons/fa";

const features = [
  {
    Icon: FaShieldAlt,
    title: "Secure & Trusted",
    description: "We prioritize your data security with top-tier protection.",
  },
  {
    Icon: FaRocket,
    title: "Fast Process",
    description: "Experience seamless and quick services without delay.",
  },
  {
    Icon: FaUsers,
    title: "User Friendly",
    description: "Our platform is easy to use and built with users in mind.",
  },
  {
    Icon: FaHeadset,
    title: "24/7 Support",
    description:
      "Get help whenever you need it with our around-the-clock team.",
  },
];

// Adding the darkMode prop to the component
const WhyChooseUs: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <section
      className={`py-16 px-6 sm:px-10 lg:px-20 ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h2
        className={`text-3xl sm:text-4xl font-bold text-center mb-12 ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
      >
        Why Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center p-6 rounded-2xl transition-all duration-300 border ${
              darkMode
                ? "bg-gray-800 border-gray-700 shadow-[6px_6px_0px_rgba(255,255,255,0.15)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.50)]"
                : "bg-white border-black shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)]"
            }`}
          >
            <feature.Icon
              className={`text-4xl mb-4 ${
                darkMode ? "text-indigo-400" : "text-indigo-600"
              }`}
            />
            <h3
              className={`text-xl font-semibold mb-2 ${
                darkMode ? "text-white" : "text-gray-800"
              }`}
            >
              {feature.title}
            </h3>
            <p className={`${darkMode ? "text-gray-400" : ""}`}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
