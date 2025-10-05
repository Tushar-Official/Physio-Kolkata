"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Feedback submitted:", formData);
    alert("Thank you for your feedback!");
    setFormData({ name: "", email: "", feedback: "" });
  };

  return (
    <div className="p-6 to-eagle-green-800 min-h-[80vh] flex flex-col items-center justify-center">
      
      {/* New Heading Section */}
     <motion.p
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black/90 whitespace-nowrap text-center leading-relaxed mb-6 sm:mb-8 md:mb-10 font-serif"
>
  Please fill the feedback form
</motion.p>

      {/* Feedback Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        onSubmit={handleSubmit}
        className="bg-eagle-green-950 shadow-lg rounded-2xl p-8 w-full max-w-lg"
      >
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-semibold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:border-eagle-green-600"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-white font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 bg-white rounded-lg focus:outline-none focus:border-eagle-green-600"
          />
        </div>

        {/* Feedback */}
        <div className="mb-6">
          <label htmlFor="feedback" className="block text-white font-semibold mb-2">
            Your Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            rows={4}
            value={formData.feedback}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:border-eagle-green-600"
          ></textarea>
        </div>

        {/* Submit Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.05 }}
          type="submit"
          className="w-full py-2 bg-blue-600  text-black font-semibold rounded-lg shadow-md"
        >
          Submit Feedback
        </motion.button>
      </motion.form>
    </div>
  );
};
