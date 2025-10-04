"use client";

const OurLocation = () => {
  return (
    <section className="flex flex-col w-[1125px] mx-auto my-20 justify-between">
      <div className="mb-16 w-[1125px] mx-auto">
        <h2 className="text-eagle-green-950 inria-serif-bold text-[32px]">
          Our locations
        </h2>
      </div>
      <div className="flex flex-row w-full">
        <div className="relative w-full rounded-2xl overflow-hidden flex-1 mr-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.0873237996789!2d88.36459981727981!3d22.531693700108963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b5fd9b2153%3A0x43ad061e39c9921e!2sPHYSIO%20CENTRE!5e0!3m2!1sen!2sin!4v1759581707043!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute h-full w-full top-0 left-0 department-card-gradiant flex justify-between flex-col">
            <div className="px-6 py-6"></div>
            <div className="flex px-6 py-6 flex-row justify-center align-middle items-end">
              <div className="mr-1">
                <h3 className="text-white text-4xl inria-serif-bold mb-2.5">
                  Ballygunge
                </h3>
                <p className="text-white text-base inria-serif-light">
                  1st Floor, Sunnny Park Sunny Towers, 43, AC Avenue,
                  Ballygunge, Kolkata - 700019
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.href =
                    "https://maps.google.com/maps/dir//PHYSIO+CENTRE+43+,+A,+C+Avenue+1st+Floor+,+Sunny+towers+Ballygunge,+Kolkata,+West+Bengal+700019/@22.5316117,88.3648563,18z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3a0277b5fd9b2153:0x43ad061e39c9921e";
                }}
                className="bg-white rounded-4xl h-[46px] w-[240px] text-eagle-green-950 text-base inria-serif-regular ml-1 cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-fit rounded-2xl overflow-hidden flex-1 ml-2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2566753478027!2d88.40938397577617!3d22.569501433082937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275cd85878f99%3A0x86c0dd5d416e625!2sSuraksha%20Diagnostics%20-%20Salt%20Lake%20JC%2021!5e0!3m2!1sen!2sin!4v1759581797906!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute h-full w-full top-0 left-0 department-card-gradiant flex justify-between flex-col">
            <div className="px-6 py-6"></div>
            <div className="flex px-6 py-6 flex-row justify-center align-middle items-end">
              <div className="mr-1">
                <h3 className="text-white text-4xl inria-serif-bold mb-2.5">
                  Salt Lake
                </h3>
                <p className="text-white text-base inria-serif-light">
                  Plot no. 21, JC Block, Sector 3, Salt Lake, Biddhannagar,
                  Kolkata - 700098
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.href =
                    "https://maps.google.com/maps/dir//Suraksha+Diagnostics+-+Salt+Lake+JC+21+Premises+No.+Plot+No.+21+JC+Block,+Sector+3,+Bidhannagar+Kolkata,+West+Bengal+700106/@22.5694965,88.4119589,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x3a0275cd85878f99:0x86c0dd5d416e625";
                }}
                className="bg-white rounded-4xl h-[46px] w-[240px] text-eagle-green-950 text-base inria-serif-regular ml-1 cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurLocation;
