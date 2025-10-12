"use client";

import Image from "next/image";
import WhoAreWeImage from "../utils/images/who-are-we.svg";
import Accordian from "./Accordian";
import { AccordianData } from "../utils/contentJsonFiles/whoAreWe";
import { useState } from "react";

const WhoAreWe = () => {
  const [accordianData, setAccordianData] = useState(0);

  return (
    <section id="About" className="flex flex-col w-full max-w-[1125px] mx-auto my-20 px-4 sm:px-6 lg:px-0">
      <div className="mb-16 text-center lg:text-left">
        <h2 className="text-black inria-serif-bold text-[28px] sm:text-3xl md:text-4xl leading-snug">
          We are a team of dedicated professionals committed to providing
          <br />
          <span className="text-eagle-green-950 inria-serif-bold">
            top-quality service and care.
          </span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex justify-center lg:justify-start">
          <Image
            src={WhoAreWeImage}
            alt="Who are we image"
            className="w-full max-w-[500px] h-auto"
          />
        </div>

        <div className="flex flex-col flex-1 gap-4">
          {AccordianData.map((item, index) => (
            <Accordian
              key={item.question}
              question={item.question}
              answer={item.answer}
              active={index === accordianData}
              onChange={(state) => {
                if (state) setAccordianData(index);
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
