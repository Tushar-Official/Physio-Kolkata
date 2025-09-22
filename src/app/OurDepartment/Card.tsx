import { FC } from "react";
import Image from "next/image";

interface CardInterface {
  image: string;
  name: string;
  title: string;
  description: string;
}

const Card: FC<CardInterface> = ({ image, name, title, description }) => {
  return (
    <div className="flex flex-row ml-6 max-w-sm rounded-2xl overflow-hidden shadow-lg relative h-[488px] w-[359px] cursor-pointer">
      <Image
        className="w-full"
        src={image}
        alt="Sunset in the mountains"
        width={359}
        height={488}
      />
      <div className="absolute h-full w-full top-0 left-0 department-card-gradiant flex justify-between flex-col">
        <div className="px-6 py-6">
          <button className="bg-eagle-green-500 rounded-4xl h-[46px] w-[151px] text-white text-base inria-serif-regular">
            {name}
          </button>
        </div>
        <div className="px-6 py-6">
          <h3 className="text-white text-4xl inria-serif-bold mb-2.5">
            {title}
          </h3>
          <p className="text-white text-base inria-serif-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
