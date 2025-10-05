"use client";
import { useState } from "react";
import AppointmentCard from "../Card/appointment-card";

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
    // You could call an API route here
  };

  return (
    <div className="p-6 sm:p-12">
      {/* Heading */}
      <div className="flex justify-center pt-8 sm:pt-12 items-center text-center">
        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Visit our centers in Kolkata...
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
