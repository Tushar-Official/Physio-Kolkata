"use client";

import Card from "./Card";

const SpecialistsDetails = [
  {
    image: "/Specialists/specialists-one.png",
    name: "Dr. Ravikant Singh",
    details:
      "Ravikant Singh is the founder and chief Physiotherapist with over 15 +  years of experience in the field . He previously served as a HOD at Fortis hospital , kolkata . He is expertise in pain management , assessment and evaluation of patient , Manual therapy . Dr Ravi brings skill and experience to every treatment plans , ensuring best outcome from the patient",
  },
  {
    image: "/Specialists/specialists-two.png",
    name: "Dr. Sworna Prava Lenka",
    details:
      "Sworna Prava Lenka is the Chief Physiotherapist with over 8 years of experience in the field. She previously served as a Consultant at Fortis Hospital, Kolkata, where she honed her expertise in providing exceptional care. With a commitment to improving patient outcomes, Sworna brings both skill and compassion to every treatment plan, ensuring the best possible results for her patients.",
  },
];

const OurSpecialists = () => {
  return (
    <section className="flex flex-col my-20">
      {/* <div className="mb-16 w-[1125px] mx-auto">
        <h2 className="text-black inria-serif-bold text-[32px]">
          We offer a comprehensive range of services designed to meet
          <br />
          <span className="text-eagle-green-950 inria-serif-bold">
            the diverse needs of our patients.
          </span>
        </h2>
      </div> */}
      <div className="flex flex-row w-full overflow-y-scroll hide-scrollbar">
        <div className="flex flex-row pb-5">
          {SpecialistsDetails.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialists;
