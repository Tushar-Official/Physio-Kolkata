"use client";
import { useState } from "react";

interface AppointmentCardProps {
  title: string;
}

export default function AppointmentCard({ title }: AppointmentCardProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Form submitted for ${title}:`, formData);
    // Reset form after submit (optional)
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="mt-12  p-4 bg-eagle-green-950 rounded-xl  shadow-lg shadow-black">
      <div className="max-w-sm  overflow-hidden">
        <p className="text-2xl pr-8 text-white font-bold">{title}</p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col mt-4 gap-4 p-4 max-w-md mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            className="p-2 bg-white rounded-2xl"
            required
          />

          <input
            type="number"
            name="number"
            placeholder="Your Number*"
            value={formData.email}
            onChange={handleChange}
            className="p-2 bg-white rounded-2xl"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message*"
            value={formData.message}
            onChange={handleChange}
            className="p-2 bg-white rounded-2xl"
            required
          />

          <button
            type="submit"
            className="bg-blue-950 text-white px-4 py-2 rounded-2xl"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
