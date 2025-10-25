"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { sendMail } from "../lib/send-mail";

export const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    feedback: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await sendMail({
      subject: "You got one review.",
      text: `${formData.feedback}\n\n- ${formData.name} [${formData.email}].`,
    });
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    e.target.reset();
    setIsLoading(false);
    alert("Thank you for your feedback. We appriciate your valuable feedback.");
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
          <label
            htmlFor="email"
            className="block text-white font-semibold mb-2"
          >
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
          <label
            htmlFor="feedback"
            className="block text-white font-semibold mb-2"
          >
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
          {isLoading ? (
            <div role="status">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-eagle-green-950 mx-auto"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            "Submit Feedback"
          )}
        </motion.button>
      </motion.form>
    </div>
  );
};
