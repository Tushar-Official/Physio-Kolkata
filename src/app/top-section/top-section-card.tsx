"use client";
import { useState } from "react";
import AppointmentCard from "../Card/appointment-card";
import { Button } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function TopSectionCard() {
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
    console.log("Form submitted:", formData);
  };

  return (
    <div className="p-6 sm:p-12 flex flex-col items-center">

      {/* Mobile WhatsApp Button */}
      <div className="flex sm:hidden w-full justify-center mb-6">
  <Button
    className="w-11/12 flex items-center justify-center p-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600
               rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 animate-flicker"
  >
    <a
       href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-full"
    >
      <FaWhatsapp className="text-white w-7 h-7 mr-3" />
      <p className="text-white text-xl font-bold">Contact Us on WhatsApp</p>
    </a>
  </Button>
</div>

      {/* Heading Section */}
      <div className="mt-6 flex flex-col justify-center items-center text-center gap-4 px-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-5xl text-gray-900 drop-shadow-sm tracking-wide">
          Working with Top Orthopedic and Neuro Surgeons in Town
        </h1>

        <p className="text-lg sm:text-2xl lg:text-3xl font-semibold text-gray-700 mt-2">
          Visit Our Centers in Kolkata...
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 justify-items-center">
        <AppointmentCard title="Make an Appointment for Ballygunge" />
        <AppointmentCard title="Make an Appointment for SaltLake" />
      </div>
    </div>
  );
}
