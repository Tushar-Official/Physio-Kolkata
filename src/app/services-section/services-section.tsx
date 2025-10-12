import Image from "next/image";
import AppointmentCard from "../Card/appointment-card";
import teleRehabImage from "../../app/utils/images/tele.jpeg";
import { Button } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function ServicesCardSection() {
  return (
    <section
      id="Services"
      className="flex flex-col w-full max-w-[1125px] mx-auto my-20 px-4 sm:px-6 lg:px-0 text-white"
    >
      {/* Mobile WhatsApp Button */}

      {/* Heading */}
      <div className="text-center mt-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 drop-shadow-md">
          Book Your Tele-Rehabilitation Session Today
        </h2>
        <p className="mt-3 text-gray-800 text-base sm:text-lg">
          Recover from the comfort of your home with expert guidance and care.
        </p>
      </div>

      {/* Image and Appointment Card */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full mt-16">
        <div className="flex flex-1">
          <AppointmentCard title="Make your Appointment for Tele - Rehabilitation" />
        </div>
        <div className="h-full flex flex-1">
          <Image
            src={teleRehabImage}
            alt="Tele Rehabilitation"
            width={500}
            height={400}
            className="w-full rounded-lg object-fill"
          />
        </div>
      </div>
    </section>
  );
}
