import { FC, useEffect, useState } from "react";
import ArrowLeft from "../utils/images/Arrow_left.svg";
import ArrowRight from "../utils/images/Arrow_right.svg";
import Image from "next/image";

interface AccordianInterface {
  question: string;
  answer: string;
  active: boolean;
  onChange: (state: boolean) => void;
}

const Accordian: FC<AccordianInterface> = ({
  question,
  answer,
  active,
  onChange,
}) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(active);
  }, [active]);

  return (
    <div
      className={`border-eagle-green-950 border p-4 mb-5 rounded-2xl ${
        open ? "bg-eagle-green-950" : "bg-white"
      }`}
    >
      <button
        onClick={() => {
          if (open) {
            setOpen(false);
          } else {
            onChange(true);
            setOpen(true);
          }
        }}
        className={`w-full flex justify-between items-center text-2xl inria-serif-regular ${
          open ? "text-white" : "text-slate-800"
        }`}
      >
        <span>{question}</span>
        <span
          id="icon-1"
          className="text-slate-800 transition-transform duration-300"
        >
          {open ? (
            <Image src={ArrowLeft} alt="Open arrow" />
          ) : (
            <Image src={ArrowRight} alt="Close arrow" />
          )}
        </span>
      </button>
      <div
        id="content-1"
        className={`${
          open ? "max-h-none mt-3.5" : "max-h-0"
        } overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div
          className={`text-base inria-serif-regular ${
            open ? "text-white" : "text-slate-800"
          }`}
        >
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordian;
