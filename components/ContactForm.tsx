"use client";

import React, { useState } from "react";

const ContactForm = ({ darkMode }: { darkMode: boolean }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    licenseType: "",
    message: "",
  });

  const [errors, setErrors] = useState<any>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.company.trim()) newErrors.company = "Company is required";
    if (!formData.licenseType) newErrors.licenseType = "Select a license type";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      alert("Form submitted successfully!");
      setFormData({
        name: "",
        email: "",
        company: "",
        licenseType: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 mt-20">
      <div
        className={`w-full max-w-2xl rounded-2xl border p-8 transition-all duration-300 ${
          darkMode
            ? "bg-gray-800 border-gray-300 text-white shadow-[6px_6px_0px_rgba(255,255,255,0.15)] hover:shadow-[8px_8px_0px_rgba(255,255,255,0.50)]"
            : "bg-white border-black text-gray-800 shadow-[6px_6px_0px_rgba(0,0,0,0.6)] hover:shadow-[8px_8px_0px_rgba(0,0,0,0.75)]"
        }`}
      >
        <h2 className="text-3xl font-bold text-center mb-8">Contact Us</h2>

        {isSubmitted && (
          <div className="text-green-500 mb-4">
            Form submitted successfully!
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {["name", "email", "company"].map((field) => (
            <div key={field}>
              <label className="block capitalize">{field}</label>
              <input
                type={field === "email" ? "email" : "text"}
                name={field}
                value={formData[field as keyof typeof formData]}
                onChange={handleChange}
                className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                  darkMode
                    ? "bg-gray-700 border-gray-500 text-white focus:ring-indigo-400"
                    : "bg-white border-gray-300 focus:ring-indigo-500"
                }`}
              />
              {errors[field] && (
                <p className="text-sm text-red-500">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label className="block">License Type</label>
            <select
              name="licenseType"
              value={formData.licenseType}
              onChange={handleChange}
              className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white focus:ring-indigo-400"
                  : "bg-white border-gray-300 focus:ring-indigo-500"
              }`}
            >
              <option value="">Select a license</option>
              <option value="Standard">Standard</option>
              <option value="Premium">Premium</option>
              <option value="Enterprise">Enterprise</option>
            </select>
            {errors.licenseType && (
              <p className="text-sm text-red-500">{errors.licenseType}</p>
            )}
          </div>

          <div>
            <label className="block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${
                darkMode
                  ? "bg-gray-700 border-gray-500 text-white focus:ring-indigo-400"
                  : "bg-white border-gray-300 focus:ring-indigo-500"
              }`}
            />
            {errors.message && (
              <p className="text-sm text-red-500">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
