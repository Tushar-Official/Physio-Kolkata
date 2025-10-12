import { FC } from "react";
import Image from "next/image";

interface CardInterface {
  image: string;
  name: string;
  details: string;
  type: string;
}

const Card: FC<CardInterface> = ({ image, name, details, type }) => {
  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 p-6 sm:p-8 lg:p-10 rounded-2xl overflow-hidden shadow-lg cursor-pointer bg-eagle-green-950 w-full lg:w-[1126px] mx-auto">
      {/* Left Section (Text) */}
      <div className="flex flex-col justify-between lg:w-1/2 text-center lg:text-left">
        <button className="mx-auto lg:mx-0 mb-4 sm:mb-6 w-[160px] sm:w-[180px] py-2 border-2 border-pale-robin-egg-blue-950 rounded-lg text-white text-sm sm:text-base">
          {type.toUpperCase()}
        </button>

        <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
          {name}
        </h3>

        <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-6">
          {details}
        </p>

        <button className="bg-pale-robin-egg-blue-950 text-black rounded-lg w-[180px] sm:w-[205px] py-2 sm:py-3 mx-auto lg:mx-0">
          Book An Appointment
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="flex justify-center lg:justify-end lg:w-1/2">
        <Image
          src={image}
          alt={name}
          width={370}
          height={414}
          className="rounded-lg object-cover w-full max-w-[350px] h-auto"
        />
      </div>
    </div>
  );
};

export default Card;
