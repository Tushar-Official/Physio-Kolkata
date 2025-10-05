export default function TopSectionText() {
  return (
    <div className="flex flex-col lg:flex-row justify-between bg-eagle-green-950 pt-16 lg:pt-24 px-6 sm:px-12 lg:px-24 items-center text-center lg:text-left">
      
      {/* Left Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-12">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug">
          Pain-Free Physiotherapy for Replacement Surgeries by our Team.
        </h2>
      </div>

      {/* Right Section */}
      <div className="w-full lg:w-1/2 p-6 lg:p-8 flex flex-col items-center lg:items-start">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
            Get back to feeling great with Physio Kolkata
          </h2>
        </div>

        {/* Stats Section */}
        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-6 pt-6">
          <div className="mx-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl text-white font-bold">2354+</h2>
            <h4 className="text-gray-200 text-base sm:text-lg">Happy Patients</h4>
          </div>
          <div className="mx-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl text-white font-bold">12 Years</h2>
            <h4 className="text-gray-200 text-base sm:text-lg">of Experiences</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
