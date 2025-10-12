"use client";

import AppointmentCard from "../Card/appointment-card";
import { Button } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function TopSectionCard() {
  return (
    <section
      id="Contact"
      className="flex flex-col w-full max-w-[1125px] mx-auto my-20 px-4 sm:px-6 lg:px-0 text-white"
    >
      {/* Mobile WhatsApp Button */}
      <div className="flex sm:hidden w-full mb-6 justify-center">
        <Button
          className="w-11/12 flex p-4 bg-gradient-to-r from-green-400 via-green-500 to-green-600
               rounded-3xl shadow-2xl hover:scale-105 transition-transform duration-300 animate-flicker"
        >
          <a
            href=" https://chat.whatsapp.com/L3wKjwu7pEr0toka1buPd1?mode=ems_share_t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full"
          >
            <FaWhatsapp className="text-white w-7 h-7 mr-3" />
            <p className="text-white text-xl font-bold">
              Contact Us on WhatsApp
            </p>
          </a>
        </Button>
      </div>

      {/* Heading Section */}
      <div className="mt-6 flex flex-col gap-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-3xl drop-shadow-sm tracking-wide">
          Working with Top Orthopedic and Neuro Surgeons in Town
          <br />
          <span className="text-pale-robin-egg-blue-950">
            Visit Our Centers in Kolkata...
          </span>
        </h1>
      </div>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12">
        <AppointmentCard title="Make an Appointment for Ballygunge" />
        <AppointmentCard title="Make an Appointment for SaltLake" />
      </div>
    </section>
  );
}
