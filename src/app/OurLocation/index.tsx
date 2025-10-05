"use client";

const OurLocation = () => {
  return (
    <section className="flex flex-col w-full max-w-[1125px] mx-auto my-20 px-4">
      {/* Heading */}
      <div className="mb-10 text-center md:text-left">
        <h2 className="text-eagle-green-950 inria-serif-bold text-2xl sm:text-3xl md:text-[32px]">
          Our locations
        </h2>
      </div>

      {/* Maps Section */}
      <div className="flex flex-col md:flex-row gap-6 w-full">
        {/* Ballygunge */}
        <div className="relative flex-1 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1107.0873237996789!2d88.36459981727981!3d22.531693700108963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277b5fd9b2153%3A0x43ad061e39c9921e!2sPHYSIO%20CENTRE!5e0!3m2!1sen!2sin!4v1759581707043!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute h-full w-full top-0 left-0 department-card-gradiant flex justify-between flex-col">
            <div className="px-4 sm:px-6 py-6"></div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-6 justify-center sm:justify-between items-start sm:items-end gap-4">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl inria-serif-bold mb-2.5">
                  Ballygunge
                </h3>
                <p className="text-white text-sm sm:text-base inria-serif-light max-w-xs">
                  1st Floor, Sunny Park Sunny Towers, 43, AC Avenue,
                  Ballygunge, Kolkata - 700019
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.href =
                    "https://maps.google.com/maps/dir//PHYSIO+CENTRE+43+,+A,+C+Avenue+1st+Floor+,+Sunny+towers+Ballygunge,+Kolkata,+West+Bengal+700019";
                }}
                className="bg-white rounded-3xl h-[46px] w-full sm:w-[240px] text-eagle-green-950 text-sm sm:text-base inria-serif-regular cursor-pointer"
              >
                Get Directions
              </button>
            </div>
          </div>
        </div>

        {/* Salt Lake */}
        <div className="relative flex-1 rounded-2xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2566753478027!2d88.40938397577617!3d22.569501433082937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275cd85878f99%3A0x86c0dd5d416e625!2sSuraksha%20Diagnostics%20-%20Salt%20Lake%20JC%2021!5e0!3m2!1sen!2sin!4v1759581797906!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="absolute h-full w-full top-0 left-0 department-card-gradiant flex justify-between flex-col">
            <div className="px-4 sm:px-6 py-6"></div>
            <div className="flex flex-col sm:flex-row px-4 sm:px-6 py-6 justify-center sm:justify-between items-start sm:items-end gap-4">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl md:text-4xl inria-serif-bold mb-2.5">
                  Salt Lake
                </h3>
                <p className="text-white text-sm sm:text-base inria-serif-light max-w-xs">
                  Plot no. 21, JC Block, Sector 3, Salt Lake, Biddhannagar,
                  Kolkata - 700098
                </p>
              </div>
              <button
                onClick={() => {
                  window.location.href =
                    "https://maps.google.com/maps/dir//Suraksha+Diagnostics+-+Salt+Lake+JC+21+Premises+No.+Plot+No.+21+JC+Block,+Sector+3,+Bidhannagar+Kolkata,+West+Bengal+700106";
                }}
                className="bg-white rounded-3xl h-[46px] w-full sm:w-[240px] text-eagle-green-950 text-sm sm:text-base inria-serif-regular cursor-pointer"
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
