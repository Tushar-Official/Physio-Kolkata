"use client";

import Card from "./Card";

const SpecialistsDetails = [
  {
    image: "/Specialists/specialists-one.png",
    name: "Dr. Ravikant Singh PT",
    type: "Our Specialists",
    details:
      "Ravikant Singh is the founder and chief Physiotherapist with over 15+ years of experience in the field. He previously served as a HOD at Fortis Hospital, Kolkata. He is expertise in pain management, assessment and evaluation of patient, Manual therapy. Dr Ravi brings skill and experience to every treatment plan, ensuring best outcome for the patient.",
  },
  {
    image: "/Specialists/specialists-two.png",
    name: "Dr. Sworna Prava Lenka PT",
    type: "Our Specialists",
    details:
      "Sworna Prava Lenka is the Chief Physiotherapist with over 8 years of experience in the field. She previously served as a Consultant at Fortis Hospital, Kolkata, where she honed her expertise in providing exceptional care. With a commitment to improving patient outcomes, Sworna brings both skill and compassion to every treatment plan, ensuring the best possible results for her patients.",
  },
  {
    image: "/Specialists/specialists-three.png",
    name: "Dr. Nihal PT",
    type: "Our Specialists",
    details:
      "Dr Nihal is the Co - founder and Sports Physiotherapist . He is also the certified Exercise Physiologist with 5 years of experience in the field . He has previously served as a consultant at Fortis Hospital , Kolkata . He has represented as a Sports Physiotherapist at many Big tournaments and is registered physiotherapist at AIFF ( All India Football Federation ). He has honed his expertise in manual therapy and evidence based practice . He accurately evaluate and identify sports related injuries and provide athlete centered care . Nihal brings both Physiotherapy and sports sciences to plan treatment , rehabilitation and ensure best plans for athletes and patient.",
  },
  {
    image: [
      "/Specialists/team-one.png",
      "/Specialists/team-two.png",
      "/Specialists/team-three.png",
      "/Specialists/team-four.png",
    ],
    name: "",
    type: "Our Team",
    details: "",
  },
];

const OurSpecialists = () => {
  return (
    <section className="flex flex-col">
      {/* Heading */}
      <div className="my-16 mb-10 text-center px-4 sm:px-8 lg:px-20">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-eagle-green-950">
          Our Specialists
        </h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base">
          Meet our experienced team of physiotherapists who bring skill and
          compassion to every treatment plan.
        </p>
      </div>

      {/* Cards Layout */}
      <div className="flex flex-col px-4 sm:px-8">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {SpecialistsDetails.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSpecialists;
