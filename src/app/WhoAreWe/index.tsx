"use client";

import Image from "next/image";
import WhoAreWeImage from "../utils/images/who-are-we.svg";
import Accordian from "./Accordian";
import { AccordianData } from "../utils/contentJsonFiles/whoAreWe";
import { useState } from "react";

const WhoAreWe = () => {
  const [accordianData, setAccordianData] = useState(0);
  return (
    <section className="flex flex-col w-[1125px] mx-auto my-20">
      <div className="mb-16">
        <h2 className="text-black inria-serif-bold text-[32px]">
          We are a team of dedicated professionals committed to providing
          <br />
          <span className="text-eagle-green-950 inria-serif-bold">
            top-quality service and care.
          </span>
        </h2>
      </div>
      <div className="flex flex-row flex-1">
        <div className="flex-1">
          {" "}
          <Image src={WhoAreWeImage} alt="Who are we image" />{" "}
        </div>
        <div className="flex flex-col flex-1">
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
