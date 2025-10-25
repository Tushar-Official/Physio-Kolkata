"use client";

import Card from "./Card";

const DepertmentDetails = [
  {
    image: "/DepartmentImages/image-one.jpg",
    name: "Orthopedic",
    title: "Orthopedic Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
  {
    image: "/DepartmentImages/image-two.jpeg", // fixed
    name: "Neurological",
    title: "Neurological rehabilitation",
    description:
      "A specialized therapy aimed at improving function for individuals with nervous system disorders.",
  },
  {
    image: "/DepartmentImages/image-three.jpeg", // fixed
    name: "Sports",
    title: "Sports physiotherapy",
    description:
      "Sports physiotherapy focuses on preventing and treating injuries related to athletic activity.",
  },
  {
    image: "/DepartmentImages/image-four.jpg",
    name: "Pediatric",
    title: "Pediatric rehabilitation",
    description:
      "Pediatric rehabilitation focuses on helping children recover from injuries, illnesses, or congenital conditions.",
  },
  {
    image: "/DepartmentImages/image-five.jpeg", // fixed
    name: "Post Surgical",
    title: "Cupping & Kinesio Taping",
    description:
      "Traditional therapy that involves placing suction cups on the skin to improve blood flow, reduce muscle tension.",
  },
  {
    image: "/DepartmentImages/image-six.jpeg",
    name: "Pulmo Rehab",
    title: "Joint Mobilization",
    description:
      "A manual therapy technique used to restore movement and reduce pain in stiff or restricted joints.",
  },
  {
    image: "/DepartmentImages/image-seven.jpg",
    name: "Geriatric",
    title: "Geriatric Physiotherapy",
    description:
      "Specialized care aimed at improving mobility, balance, and overall function in older adults.",
  },
  {
    image: "/DepartmentImages/image-eight.jpeg",
    name: "Spine Fitness",
    title: "Pain Management",
    description:
      "Pain management involves a multidisciplinary approach to alleviate and control chronic or acute pain.",
  },
  {
    image: "/DepartmentImages/image-nine.jpg",
    name: "Cupping",
    title: "Cupping Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
  {
    image: "/DepartmentImages/image-ten.jpeg",
    name: "Joint Mobilization & Manipulation",
    title: "Joint Mobilization & Manipulation Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
  {
    image: "/DepartmentImages/image-eleven.jpg",
    name: "Dry Needling",
    title: "Dry Needling Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
  {
    image: "/DepartmentImages/image-twelve.jpg",
    name: "Kinesio Taping",
    title: "Kinesio Taping Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
  {
    image: "/DepartmentImages/image-thirteen.jpg",
    name: "Advance Laser",
    title: "Advance Laser Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
  {
    image: "/DepartmentImages/image-fourteen.jpeg",
    name: "Shock-wave",
    title: "Shock-wave Rehabilitation",
    description:
      "Focuses on restoring function, strength, and mobility after musculoskeletal injuries or surgeries.",
  },
];

const OurDepartment = () => {
  return (
    <section className="flex flex-col my-20">
      {/* Heading */}
      <div className="mb-10 w-full max-w-[1125px] mx-auto px-4 text-center md:text-left">
        <h2 className="text-black inria-serif-bold text-2xl md:text-[32px] leading-snug">
          We offer a comprehensive range of services designed to meet
          <br />
          <span className="text-eagle-green-950 inria-serif-bold">
            the diverse needs of our patients.
          </span>
        </h2>
      </div>

      {/* Cards */}
      <div className="w-full max-w-[1125px] mx-auto">
        {/* Mobile → Horizontal Scroll, Desktop → Grid */}
        <div className="flex flex-row gap-6 w-full overflow-x-auto hide-scrollbar px-4 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible">
          {DepertmentDetails.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurDepartment;
