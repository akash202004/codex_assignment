"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

interface HeroProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

const Hero: React.FC<HeroProps> = ({ darkMode, setDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className="h-screen bg-cover bg-center text-white relative dark:text-white dark:bg-black"
      style={{ backgroundImage: "url('/a.jpg')" }}
    >
      {/* Navbar */}
      <nav
        className={`w-full fixed top-0 left-0 z-50 shadow-md transition-colors duration-300 ${
          darkMode ? "bg-black" : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <h1 className="flex items-center text-xl font-bold text-black dark:text-white">
            <Image
              src="/logo.png"
              alt="CodeSoft Logo"
              width={40}
              height={40}
              className="mr-2"
            />
          </h1>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-6 font-medium ${
              darkMode ? "text-white" : "text-black"
            }`}
          >
            <li>
              <a
                href="#home"
                className="hover:text-black dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#how" className="hover:text-black dark:hover:text-white">
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-black dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>

          {/* Dark Mode Toggle and Mobile Menu Button */}
          <div className="flex items-center gap-4 md:gap-6">
            <button
              onClick={toggleDarkMode}
              className="text-2xl"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <MdDarkMode className="text-white" />
              ) : (
                <MdOutlineLightMode className="text-black" />
              )}
            </button>

            <div className="md:hidden">
              <button onClick={toggleMenu} aria-label="Toggle Menu">
                {isOpen ? <FaTimes className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} /> : <FaBars className={`text-2xl ${darkMode ? "text-white" : "text-black"}`} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <ul
            className={`md:hiddenw-full px-4 pb-4 space-y-4  font-medium transition-colors duration-300 ${
              darkMode ? "bg-black" : "bg-white"
            }`}
          >
            <li>
              <a
                href="#home"
                className={`block ${darkMode ? "text-white " : "text-black"}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#how"
                className={`block ${darkMode ? "text-white " : "text-black"}`}
              >
                How it Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className={`block ${darkMode ? "text-white " : "text-black"}`}
              >
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>

      {/* Hero Section */}
      <div className="flex flex-col justify-start items-start h-full px-6 md:px-20 pt-32 md:pt-48">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-b from-white to-neutral-400 bg-clip-text text-transparent leading-tight">
          Build Smarter, <br /> Code Faster
        </h1>
        <p className="text-base md:text-xl max-w-xl text-gray-100 dark:text-gray-300">
          Empowering developers with cutting-edge tools, AI integrations, and a
          community-driven approach to take your software projects to the next
          level.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200 transition">
            Get Started
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded-lg hover:bg-white hover:text-black dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
