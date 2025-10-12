import AppointmentCard from "../Card/appointment-card";
import homevisit from "../utils/images/homevisit.jpg";
import Image from "next/image";

export default function HomeVisitCard() {
  return (
    <section className="flex flex-col w-full max-w-[1125px] mx-auto my-20">
      {/* Heading */}
      {/* <div className="flex flex-col justify-center gap-y-4 items-center text-center p-6 sm:p-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          We also have HomeVisit Facility
        </h2>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold">
          Please fill below form and we will arrange a Physiotherapist at Home
          for You
        </h2>
      </div> */}
      <div className="mt-6 flex flex-col gap-4">
        <h1 className="font-extrabold text-2xl sm:text-4xl lg:text-3xl drop-shadow-sm tracking-wide">
          We also have HomeVisit Facility
          <br />
          <span className="text-eagle-green-950">
            Please fill below form and we will arrange a Physiotherapist at Home
            for You
          </span>
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 w-full mt-16">
        {/* Left: Image */}
        <div className="h-full flex flex-1">
          <Image
            src={homevisit}
            alt="Home Visit"
            className="w-full rounded-lg object-fill"
          />
        </div>

        {/* Right: Form */}
        <div className="flex flex-1">
          <AppointmentCard title="Make an Appointment for HomeVisit in Kolkata" />
        </div>
      </div>
    </section>
  );
}
