"use client";
const WhoAreWe = () => {
  const toggleAccordion = (index: number) => {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    // SVG for Down icon
    const downSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000000" className="w-4 h-4">
        <path fillRule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
      </svg>
    `;

    // SVG for Up icon
    const upSVG = `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="#000000" className="w-4 h-4">
        <path fillRule="evenodd" d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z" clipRule="evenodd" />
      </svg>
    `;

    if (content && icon) {
      // Toggle the content's max-height for smooth opening and closing
      if (content.style.maxHeight && content.style.maxHeight !== "0px") {
        content.style.maxHeight = "0";
        // icon.innerHTML = upSVG;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
        // icon.innerHTML = downSVG;
      }
    }
  };

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
        <div className="flex-1">{/* <Image /> */}</div>
        <div className="flex flex-col flex-1">
          <div className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(1)}
              className="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>What is Material Tailwind?</span>
              <span
                id="icon-1"
                className="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#000000"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-1"
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="pb-5 text-sm text-slate-500">
                Material Tailwind is a framework that enhances Tailwind CSS with
                additional styles and components.
              </div>
            </div>
          </div>
          <div className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(2)}
              className="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>How to use Material Tailwind?</span>
              <span
                id="icon-2"
                className="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#000000"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-2"
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="pb-5 text-sm text-slate-500">
                You can use Material Tailwind by importing its components into
                your Tailwind CSS project.
              </div>
            </div>
          </div>
          <div className="border-b border-slate-200">
            <button
              onClick={() => toggleAccordion(3)}
              className="w-full flex justify-between items-center py-5 text-slate-800"
            >
              <span>What can I do with Material Tailwind?</span>
              <span
                id="icon-3"
                className="text-slate-800 transition-transform duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="#000000"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </button>
            <div
              id="content-3"
              className="max-h-0 overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div className="pb-5 text-sm text-slate-500">
                Material Tailwind allows you to quickly build modern, responsive
                websites with a focus on design.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoAreWe;
