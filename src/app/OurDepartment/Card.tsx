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
    <div className="flex flex-row flex-shrink-0 w-full max-w-[320px] sm:max-w-[359px] rounded-2xl overflow-hidden shadow-lg relative h-auto min-h-[420px] cursor-pointer">
      <Image
        className="w-full h-full object-cover"
        src={image}
        alt={title}
        width={359}
        height={488}
      />
      <div className="absolute h-full w-full top-0 left-0 department-card-gradiant flex justify-between flex-col">
        {/* Top Button */}
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <button className="bg-eagle-green-500 rounded-4xl h-[40px] sm:h-[46px] px-4 sm:w-[151px] text-white text-sm sm:text-base inria-serif-regular">
            {name}
          </button>
        </div>
        {/* Bottom Content */}
        <div className="px-4 sm:px-6 py-4 sm:py-6">
          <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl inria-serif-bold mb-2">
            {title}
          </h3>
          <p className="text-white text-sm sm:text-base inria-serif-light leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
