import AppointmentCard from "../Card/appointment-card";
import homevisit from "../utils/images/homevisit.jpg";
import Image from "next/image";

export default function HomeVisitCard() {
  return (
    <div className="p-6 sm:p-12 lg:p-16 bg-indigo-100">
      {/* Heading */}
      <div className="flex flex-col justify-center gap-y-4 items-center text-center p-6 sm:p-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          We also have HomeVisit Facility
        </h2>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Please fill below form and we will arrange a Physiotherapist at Home
          for You
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full px-4 sm:px-8 lg:px-24">
        {/* Left: Image */}
        <div className="flex-shrink-0">
          <Image
            src={homevisit}
            alt="Home Visit"
            className="w-full sm:w-72 lg:w-80 h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Form */}
        <div className="w-full max-w-md">
          <AppointmentCard title="Make an Appointment for HomeVisit in Kolkata" />
        </div>
      </div>
    </div>
  );
}
