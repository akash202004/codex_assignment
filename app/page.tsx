"use client";

import { useState } from "react";
import ContactForm from "@/components/ContactForm";
import Flow from "@/components/Flow";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { AnimatedTestimonials } from "@/components/Testimonials";
import TrustedPartner from "@/components/TrustedPartner";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const testimonials = [
    {
      quote:
        "This platform changed the way we manage our clients. It's intuitive and efficient!",
      name: "Alice Johnson",
      designation: "CEO, BrightTech",
      src: "/1.jpg",
    },
    {
      quote: "Highly recommend to any SaaS founder looking to scale smoothly!",
      name: "Mark Peterson",
      designation: "Founder, CloudStream",
      src: "/2.jpg",
    },
    {
      quote:
        "User-friendly, responsive, and super fast. What more could you ask for?",
      name: "Sophie Lee",
      designation: "CMO, Growthify",
      src: "/3.jpg",
    },
  ];

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-black"}>
      <Hero setDarkMode={setDarkMode} darkMode={darkMode} />
      <TrustedPartner darkMode={darkMode} />
      <Flow darkMode={darkMode} />
      <WhyChooseUs darkMode={darkMode} />
      <AnimatedTestimonials testimonials={testimonials} autoplay darkMode={darkMode} />
      <ContactForm darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}
