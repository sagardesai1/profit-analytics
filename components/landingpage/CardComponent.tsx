import React from "react";

const CardComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center p-6 rounded-[30px] bg-gray-100 shadow-lg mx-auto w-full max-w-screen-2xl sm:w-[95%]">
      {/* Logos Section */}
      <div className="text-center pb-6 text-gray-500 md:text-gray-700 font-medium">
        {/* Section Title */}
        <p className="text-xl md:text-2xl">
          Driving Business Decisions for Top TikTok Brands
        </p>
      </div>

      {/* Logos Container */}
      <div className="max-w-full">
        <div className="flex md:flex-row md:px-4 flex-col items-center justify-center gap-12 sm:gap-12 md:gap-18 lg:gap-48 px-4 sm:px-8">
          {/* Individual Logos */}
          <img
            src="/landingpage/ENGISHT LOGO 1.svg"
            alt="Logo 1"
            className="h-auto w-[20%] min-w-[100px] max-w-[150px] object-contain"
          />
          <img
            src="/landingpage/Group.svg"
            alt="Logo 2"
            className="h-auto w-[20%] min-w-[100px] max-w-[150px] object-contain"
          />
          <img
            src="/landingpage/Asset 4 1.svg"
            alt="Logo 3"
            className="h-auto w-[20%] min-w-[100px] max-w-[150px] object-contain"
          />
          <img
            src="/landingpage/plexo logo 1.svg"
            alt="Logo 4"
            className="h-auto w-[20%] min-w-[100px] max-w-[150px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
