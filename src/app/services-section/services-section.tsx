import Image from "next/image";
import AppointmentCard from "../Card/appointment-card";
import teleRehabImage from "../../app/utils/images/tele.jpeg";
import { Button } from "@headlessui/react";
import { FaWhatsapp } from "react-icons/fa";

export default function ServicesCardSection() {
  return (
    <div className="pb-12 px-4 flex flex-col justify-between items-center gap-12 ">
      
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
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8 w-full max-w-5xl">
        <div className="w-full md:w-1/2">
          <Image
            src={teleRehabImage}
            alt="Tele Rehabilitation"
            width={500}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div className="w-full md:w-1/2">
          <AppointmentCard title="Make your Appointment for Tele - Rehabilitation" />
        </div>
      </div>
    </div>
  );
}
