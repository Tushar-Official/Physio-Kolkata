export default function TopSectionText() {
  return (
    <section
      id="Home"
      className="flex flex-col md:flex-row w-full max-w-[1125px] mx-auto my-20 px-4 sm:px-6 lg:px-0 gap-20"
    >
      {/* Left Section */}
      <div className="flex flex-1 py-6">
        <h2 className="text-4xl inria-serif-bold text-white leading-snug">
          Pain-Free Physiotherapy for Replacement Surgeries by our Team.
        </h2>
      </div>

      {/* Right Section */}
      <div className="flex py-6 flex-col items-start gap-2">
        <div className="flex flex-1 flex-col justify-center items-start">
          <h2 className="text-2xl inria-serif-regular text-white">
            Get back to feeling great with Physio Kolkata
          </h2>
        </div>

        {/* Stats Section */}
        <div className="flex flex-1 flex-row justify-center lg:justify-start items-center gap-6 w-full">
          <div className="flex flex-1 flex-col">
            <h3 className="text-4xl text-white inria-serif-regular">2354+</h3>
            <p className="text-gray-200 inria-serif-regular text-base">
              Happy Patients
            </p>
          </div>
          <div className="flex flex-1 flex-col">
            <h3 className="text-4xl text-white inria-serif-regular">
              12 Years
            </h3>
            <p className="text-gray-200 inria-serif-regular text-base">
              of Experiences
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
