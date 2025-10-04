import { FC } from "react";
import Image from "next/image";

interface CardInterface {
  image: string;
  name: string;
  details: string;
}

const Card: FC<CardInterface> = ({ image, name, details }) => {
  return (
    <div className="flex flex-row ml-6 pt-7 px-7 rounded-2xl overflow-hidden shadow-lg h-[444px] w-[1126px] cursor-pointer bg-eagle-green-950 justify-around">
      <div className="flex flex-col justify-around w-[418px]">
        <button className="w-[151px] h-[46px] border-pale-robin-egg-blue-950 border-2 rounded-lg text-white">
          OUR SPECIALISTS
        </button>
        <h3 className="text-white text-4xl">{name}</h3>
        <p className="text-white">{details}</p>
        <button className="bg-pale-robin-egg-blue-950 text-black rounded-lg w-[205px] h-[50px]">
          Book An Appointment
        </button>
      </div>
      <Image
        src={image}
        alt="Sunset in the mountains"
        width={370}
        height={414.32}
      />
    </div>
  );
};

export default Card;
