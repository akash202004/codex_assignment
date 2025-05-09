"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

type Testimonial = {
  quote: string;
  name: string;
  designation: string;
  src: string;
};

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  darkMode,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
  darkMode: boolean;
}) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => index === active;

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

  return (
    <div
      className={`mx-auto mt-32 max-w-sm rounded-3xl px-4 py-10 font-sans antialiased transition-all duration-300 border md:max-w-4xl md:px-8 lg:px-12 ${
        darkMode
          ? "bg-gray-900 text-white border-gray-700 shadow-[6px_6px_0px_rgba(255,255,255,0.15)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.50)]"
          : "bg-white text-black border-black shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)]"
      }`}
    >
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        {/* Image Section */}
        <div className="relative h-80 w-full">
          <AnimatePresence>
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.src}
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  z: -100,
                  rotate: randomRotateY(),
                }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  z: isActive(index) ? 0 : -100,
                  rotate: isActive(index) ? 0 : randomRotateY(),
                  zIndex: isActive(index)
                    ? 40
                    : testimonials.length + 2 - index,
                  y: isActive(index) ? [0, -80, 0] : 0,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  z: 100,
                  rotate: randomRotateY(),
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 origin-bottom"
              >
                <img
                  src={testimonial.src}
                  alt={testimonial.name}
                  width={500}
                  height={500}
                  draggable={false}
                  className="h-full w-full rounded-3xl object-cover object-center"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Text Section */}
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <h3
              className={`text-2xl font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {testimonials[active].name}
            </h3>
            <p
              className={`text-sm ${
                darkMode ? "text-gray-400" : "text-gray-500"
              }`}
            >
              {testimonials[active].designation}
            </p>
            <motion.p
              className={`mt-8 text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: "blur(10px)", opacity: 0, y: 5 }}
                  animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>

          {/* Buttons */}
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              onClick={handlePrev}
              className={`group/button flex h-8 w-8 items-center justify-center rounded-full ${
                darkMode
                  ? "bg-neutral-700 hover:bg-neutral-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <IconArrowLeft
                className={`h-5 w-5 transition-transform duration-300 group-hover/button:rotate-12 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              />
            </button>
            <button
              onClick={handleNext}
              className={`group/button flex h-8 w-8 items-center justify-center rounded-full ${
                darkMode
                  ? "bg-neutral-700 hover:bg-neutral-600"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              <IconArrowRight
                className={`h-5 w-5 transition-transform duration-300 group-hover/button:-rotate-12 ${
                  darkMode ? "text-white" : "text-black"
                }`}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
