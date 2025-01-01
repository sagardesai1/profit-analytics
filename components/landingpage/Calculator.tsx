import React from "react";

{
  /* This component displays a calculator with a download button */
}
const Calculator = () => {
  return (
    // Calculator Section
    <div
      className="flex flex-col items-center text-center justify-center md:mt-12 mt-0 bg-indigo-600 py-[4rem] sm:py-[6rem] px-[3.25rem] lg:py-[8rem] rounded-3xl shadow-lg w-full space-y-5 sm:px-12"
      style={{
        height: "auto",
      }}
    >
      {/* Title */}
      <p className="font-bold text-white mb-2 gap-6 gap-x-4 text-center lg:text-7xl md:text-4xl text-3xl">
        Download Your Free Calculator
      </p>
      {/* Subtitle */}
      <p className="text-white text-center mb-6">
        This easy-to-use calculator will help you calculate fees accurately and
        efficiently saving you time and effort.
      </p>
      {/* Download Button */}
      <a
        target="_blank"
        href="https://getwaitlist.com/waitlist/17274"
        className="mt-4 items-center text-center bg-white text-indigo-800 border border-indigo-600 py-3 px-14 rounded-full shadow-md hover:bg-indigo-50 w-full md:w-auto"
      >
        Download Now
      </a>
    </div>
  );
};

export default Calculator;
