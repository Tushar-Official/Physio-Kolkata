"use client";
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import useMediaQuery from "../hooks/useMediaQuery";

interface Review {
  name: string;
  text: string;
  rating: number;
  time: string;
}

const reviews: Review[] = [
  {
    name: "Sparsh Mandal",
    text: "I suffered a Grade 1 ACL tear, and with the expert guidance of Mrs. Sworna and her team, I regained the strength necessary to walk and run again. In under three months, they restored me to my pre-injury condition, providing exceptional service. I highly recommend their expertise.",
    rating: 5,
    time: "6 months ago",
  },
  {
    name: "Radhakanta Lenka",
    text: "One of the best physiotherapy Centre. Thank you for helping people heal and regain strength every day. To all the dedicated therapists, your efforts are truly appreciated.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Khushdeep Sharma",
    text: "I was in so much pain visiting many physiotherapists but got no relief until I met Dr. Nihal. It’s been over a week now and I feel 95% relief in my pain. Dr. Nihal has great skills which helped me make better days. Thank you so much Physio Kolkata!",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Juhi Singh",
    text: "It offers expert care in a clean, well-equipped facility, with personalized treatments that deliver great results. Highly recommend for physiotherapy needs!",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Anirban Sanfui",
    text: "One of the best physiotherapy centres out there! Very experienced physiotherapists — they treated my mother's broken shoulder. Forever grateful.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Yash Kashyap",
    text: "Very satisfied with the quality of treatment and the behaviour of the doctor. Thank you Dr. Sworna!",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "nameyindia",
    text: "Very helpful and softly handle cracks and healing.",
    rating: 5,
    time: "7 months ago",
  },
  {
    name: "Moin Hasan",
    text: "Very professional way of treating their patients.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Ravi Singh",
    text: "Very good team, location is nice.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Baby Sen",
    text: "Physiotherapists are very talented.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Saswati Bhattacharyya",
    text: "Nice experience!",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Archana Singh",
    text: "Absolutely loved the experience! The team was professional, responsive, and delivered exactly what I wanted on time. Highly recommended!",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Tithi Mondal",
    text: "Amazing service and very smooth communication throughout the project. The design turned out even better than I imagined!",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Smriti Tripura",
    text: "Great attention to detail and super fast delivery! The website looks modern and performs beautifully. Would definitely work with them again.",
    rating: 5,
    time: "9 months ago",
  },
  {
    name: "Sunidhi Kumari",
    text: "Highly satisfied with the quality of work and professionalism. The team was patient with my feedback and implemented all changes perfectly.",
    rating: 5,
    time: "9 months ago",
  },
];

export default function ReviewCarousel() {
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
  const isMobile = useMediaQuery("(max-width: 640px)");

  const getReviewCount = () => {
    return isMobile ? 1 : 2;
  };

  const nextSlide = () => {
    if (index + getReviewCount() < reviews.length)
      setIndex(index + getReviewCount());
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - getReviewCount());
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10 px-4 relative">
      <h2 className="text-3xl font-semibold text-center mb-8 text-gray-800">
        What Our Clients Say
      </h2>

      <div className="flex justify-center gap-6 overflow-hidden transition-all">
        {reviews.slice(index, index + getReviewCount()).map((review, i) => (
          <div
            key={i}
            className="bg-white flex flex-col justify-between p-6 rounded-2xl shadow-lg w-full sm:w-[45%] min-h-[330px] hover:shadow-2xl transition-all duration-300"
          >
            <div>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, idx) => (
                  <FaStar
                    key={idx}
                    className={`${
                      idx < review.rating ? "text-yellow-400" : "text-gray-300"
                    } mr-1`}
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed">
                {expanded === i + index
                  ? review.text || "No additional comments provided."
                  : (review.text || "No additional comments provided.").slice(
                      0,
                      180
                    ) + "..."}
              </p>

              {review.text && review.text.length > 180 && (
                <button
                  className="text-blue-500 text-sm mt-2 hover:underline"
                  onClick={() =>
                    setExpanded(expanded === i + index ? null : i + index)
                  }
                >
                  {expanded === i + index ? "Read Less" : "Read More"}
                </button>
              )}
            </div>

            <div className="mt-6 flex justify-between items-center">
              <div>
                <h4 className="font-semibold text-gray-800">{review.name}</h4>
                <p className="text-xs text-gray-500">{review.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        disabled={index === 0}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-40"
      >
        <IoChevronBack size={24} />
      </button>
      <button
        onClick={nextSlide}
        disabled={index + 2 >= reviews.length}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 disabled:opacity-40"
      >
        <IoChevronForward size={24} />
      </button>

      {/* “View All Reviews” button */}
      <div className="flex justify-center mt-10">
        <a
          href="https://www.google.com/maps/place/PHYSIO+CENTRE/@22.5316117,88.3648563,17z/data=!4m18!1m9!3m8!1s0x3a0277b5fd9b2153:0x43ad061e39c9921e!2sPHYSIO+CENTRE!8m2!3d22.5316117!4d88.3648563!9m1!1b1!16s%2Fg%2F11lyrdmwl3!3m7!1s0x3a0277b5fd9b2153:0x43ad061e39c9921e!8m2!3d22.5316117!4d88.3648563!9m1!1b1!16s%2Fg%2F11lyrdmwl3?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition-all duration-300"
        >
          View All Reviews
        </a>
      </div>
    </div>
  );
}
