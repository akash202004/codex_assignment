import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC<{ darkMode: boolean }> = ({ darkMode }) => {
  return (
    <footer
      className={`py-16 px-6 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div>
          <h2
            className={`text-2xl font-bold mb-4 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            CodeSoft
          </h2>
          <p
            className={`text-sm ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Empowering developers to build smarter with tools, AI, and
            community.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3
            className={`font-semibold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Navigation
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#home"
                className={`hover:text-white focus:text-white focus:outline-none ${
                  darkMode ? "text-gray-400" : "text-gray-900"
                }`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#how"
                className={`hover:text-white focus:text-white focus:outline-none ${
                  darkMode ? "text-gray-400" : "text-gray-900"
                }`}
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`hover:text-white focus:text-white focus:outline-none ${
                  darkMode ? "text-gray-400" : "text-gray-900"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3
            className={`font-semibold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Resources
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="#"
                className={`hover:text-white focus:text-white focus:outline-none ${
                  darkMode ? "text-gray-400" : "text-gray-900"
                }`}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-white focus:text-white focus:outline-none ${
                  darkMode ? "text-gray-400" : "text-gray-900"
                }`}
              >
                Support
              </a>
            </li>
            <li>
              <a
                href="#"
                className={`hover:text-white focus:text-white focus:outline-none ${
                  darkMode ? "text-gray-400" : "text-gray-900"
                }`}
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3
            className={`font-semibold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Follow Us
          </h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className={`text-gray-400 hover:text-white focus:text-white focus:outline-none ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className={`text-gray-400 hover:text-white focus:text-white focus:outline-none ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className={`text-gray-400 hover:text-white focus:text-white focus:outline-none ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className={`text-gray-400 hover:text-white focus:text-white focus:outline-none ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className={`mt-10 border-t ${
          darkMode ? "border-gray-700" : "border-gray-300"
        } pt-4 text-center text-sm`}
      >
        <p className={darkMode ? "text-gray-500" : "text-gray-600"}>
          &copy; {new Date().getFullYear()} CodeSoft. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
