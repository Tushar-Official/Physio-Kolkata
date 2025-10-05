"use client";

import Card from "./Card";

const SpecialistsDetails = [
  {
    image: "/Specialists/specialists-one.png",
    name: "Dr. Ravikant Singh",
    details:
      "Ravikant Singh is the founder and chief Physiotherapist with over 15+ years of experience in the field. He previously served as a HOD at Fortis Hospital, Kolkata. He is expertise in pain management, assessment and evaluation of patient, Manual therapy. Dr Ravi brings skill and experience to every treatment plan, ensuring best outcome for the patient.",
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
    <section className="flex flex-col my-16 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <div className="mb-10 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-eagle-green-950">
          Our Specialists
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Meet our experienced team of physiotherapists who bring skill and
          compassion to every treatment plan.
        </p>
      </div>

      {/* Cards Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-items-center">
        {SpecialistsDetails.map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default OurSpecialists;
