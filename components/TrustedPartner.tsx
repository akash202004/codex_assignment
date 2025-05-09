import React from "react";

const TrustedPartner: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  const partners = [
    { name: "Google", logo: "/google.png" },
    { name: "Microsoft", logo: "/micro.png" },
    { name: "Facebook", logo: "/fb.png" },
    { name: "Netflix", logo: "/netflix.png" },
    { name: "Meta", logo: "/meta.png" },
    { name: "Slack", logo: "/slack.png" },
  ];

  return (
    <div className="mt-20 px-4 sm:px-8 md:px-20">
      <h2
        className={`text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12  bg-clip-text text-transparent leading-tight ${
          darkMode
            ? "bg-gradient-to-b from-white to-gray-200"
            : "bg-gradient-to-b from-black to-gray-600"
        }`}
      >
        Trusted by Leading Companies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="flex justify-center items-center w-full"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="h-20 sm:h-12 md:h-14 object-contain transition-all duration-300 ease-in-out hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustedPartner;
