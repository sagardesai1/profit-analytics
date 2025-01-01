import React from "react";

const Video: React.FC = () => {
  return (
    <div
      className="flex flex-col md:flex-row items-center p-10  md:space-x-12 lg:p-[6rem] justify-between w-full h-auto md:bg-gradient-to-l bg-gradient-to-b from-indigo-300 via-white to-white"
      style={{
        // padding: "65px", // Increased padding for more space
        boxSizing: "border-box",
      }}
    >
      {/* Left Section */}
      <div className="flex flex-col justify-center gap-6 gap-x-6 w-full md:w-1/2  md:text-left text-center">
        <p className="text-[28px] md:text-4xl lg:text-6xl text-gray-700 font-bold">
          How The 7th Largest TikTok Shop Seller Built A{" "}
          <span className="text-indigo-400">$34M Empire</span> With SKUhunt.
        </p>

        <div className="flex flex-col items-center md:items-start space-y-2 w-full md:w-auto">
          <a
            target="_blank"
            href="https://getwaitlist.com/waitlist/17274"
            className=" text-indigo-700 font-satoshi border border-indigo-700 py-3 px-10 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-auto md:w-auto"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex justify-center md:justify-end items-center w-full md:w-1/2 mt-6 md:mt-0">
        <video
          src="/landingpage/image.mp4" // Replace with your actual video path
          className="w-full h-auto py-8 object-cover "
          autoPlay // Optional: mutes the video so it plays automatically without sound
          loop // Optional: to loop the video continuously
          controlsList="nodownload noplaybackrate" // Hides controls like download and playback rate
        />
      </div>
    </div>
  );
};

export default Video;
