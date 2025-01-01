import React from "react";
import "./Hero.css";

// Hero Component: Displays the main section with promotional content and call-to-action buttons
const Hero: React.FC = () => {
  return (
    <div className="">
      {/* Section Container: Includes background styles and layout settings */}
      <section className="flex flex-col items-center bg-mobile-gradient sm:bg-tablet-image p-10 bg-cover bg-no-repeat lg:bg-desktop-image rounded-[28px] md:p-20 lg:py-8 lg:px-16 lg:max-w-[100rem] xl:max-w-[200rem]">
        {/* Text Section */}
        <div className="flex flex-col lg:flex-row items-center text-center lg:text-left w-full lg:gap-8">
          {/* Left Column: Text and Call-to-Actions */}
          <div className="flex flex-col lg:items-start w-full lg:w-1/2 space-y-6">
            {/* Main Heading */}
            <p className="text-3xl text-wrap lg:text-[4.0rem] md:text-[3rem] font-bold leading-tight mb-2 lg:mb-0">
              <span className="text-gray-950 lg:space-x-4">
                Start Growing With{" "}
              </span>
              <span className="text-indigo-600">Accurate</span>
              <span className="text-black lg:space-x-4"> TikTok Shop </span>
              <span className="text-indigo-600 lg:space-x-4">
                Profit Analytics
              </span>
            </p>

            {/* Feature Descriptions */}
            <div className="text-sm text-[#272727] space-y-5">
              {/* Feature 1 */}
              <div className="flex items-start space-x-4 text-left rounded-xl">
                <img
                  src="/landingpage/secure-icon.png"
                  alt="Shield Icon"
                  className="w-6 h-6 mt-1"
                />
                <p className="font-satoshi text-lg leading-7">
                  We never sell your data, 100% secure.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="flex items-start space-x-4 text-left">
                <img
                  src="/landingpage/connect-icon.png"
                  alt="Clock Icon"
                  className="w-6 h-6 mt-1"
                />
                <p className="font-satoshi text-lg leading-7">
                  Connect your TikTok shop in just 5 minutes
                </p>
              </div>
              {/* Feature 3 */}
              <div className="flex text-left items-start space-x-4">
                <img
                  src="/landingpage/acuurate-icon.png"
                  alt="Check Icon"
                  className="w-6 h-6 mt-1"
                />
                <p className="font-satoshi text-lg leading-7">
                  Over 99% accuracy in calculating TikTok Shop Fees & Profits
                </p>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="flex flex-col md:flex-row items-center md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full ">
              {/* Free Trial Button */}
              <div className="flex flex-col items-center md:mt-8 w-full sm:w-3/4 md:w-auto ">
                <a
                  target="_blank"
                  href="https://getwaitlist.com/waitlist/17274"
                  className="bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 transition md:mt-5 duration-300 w-full sm:w-3/4 md:w-auto"
                >
                  Start Your Free Trial
                </a>
                <p className="text-gray-600 mb-2 mt-2 text-xs hidden md:block">
                  <span className="font-bold">1 month free trial.</span> No
                  credit card required.
                </p>
              </div>
              {/* Contact Section */}
              <div className="flex flex-col items-center md:mt-8 w-full sm:w-3/4 md:w-auto ">
                <p className="text-gray-600 mb-2 font-satoshi text-xs hidden md:block">
                  Have a question?
                </p>
                <a
                  href="tel:+16465665500"
                  className="text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md transition duration-300 w-full text-center"
                >
                  Call us at: 646-566-5500
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Image Section */}
          <div className="relative w-full lg:w-1/2 mt-11 lg:mt-[3rem] flex justify-center items-center">
            {/* Dashboard Analytics Image */}
            <div className="relative w-full max-w-[82rem] mx-auto md:mx-0">
              <img
                src="/landingpage/DashBord.png"
                alt="Dashboard Analytics"
                className="object-cover rounded-lg w-full "
              />
              {/* Small Info Card */}
              <div className="relative responsive-container max-w-[170px] lg:flex flex-row mx-0 gap-4 items-center justify-between md:bottom-20 lg:bottom-[19rem]  left-18 right-auto bg-indigo-400 text-white py-5 px-6 rounded-xl hidden shadow-md">
                <div className="text-[0.8rem] font-medium leading-[20px] space-y-2">
                  Samples <br />
                  Distributed
                </div>
                <div className="text-4xl">68</div>
              </div>
              {/* Small Icons Row */}
              {/*For Meduim devices */}
              <div className="absolute lg-tiktok-container sm-tiktok-container md-tiktok-container responsive-image tiktok mt-[-5rem] right-[-18px] object-cover rounded-lg w-[8rem] lg:hidden md:block hidden">
                <div className="absolute right-2 mt-8 w-full flex justify-center border border-indigo-200 sm:justify-end bg-white rounded-lg shadow-lg items-center space-x-2 py-3 px-0 sm:px-2">
                  {/* Footer Images (Cards) for md and sm */}
                  <img
                    src="/landingpage/GDPR FRAME.png"
                    alt="Footer Image 1"
                    className="sm:h-8 h-6 sm:w-8 sm-image-size lg-image-size md-image-size  w-6 md:h-12 md:w-12 object-cover rounded-full shadow-small"
                  />
                  <img
                    src="/landingpage/SSL frame.png"
                    alt="Footer Image 2"
                    className=" h-6 w-6 sm:h-8 sm:w-8 sm-image-size lg-image-size md-image-size  md:h-12 md:w-12 object-cover rounded-full shadow-small "
                  />
                  <img
                    src="/landingpage/Tiktok frame.png"
                    alt="Footer Image 3"
                    className=" h-6 w-12 sm:h-8 sm:w-16 sm-image-size lg-image-size md-image-size  md:h-12 md:w-18 object-cover rounded-full shadow-small "
                  />
                </div>
              </div>
              {/*For small devices */}
              <div className="absolute tiktok-position md-tiktok-container  responsive-image tiktok mt-[-5rem] right-[-18px] object-cover rounded-lg w-[8rem] md:hidden block ">
                <div className="absolute right-2 mt-8 w-full flex justify-center border border-indigo-200 sm:justify-end bg-white rounded-lg shadow-lg items-center space-x-2 py-3 px-0 sm:px-2">
                  {/* Footer Images (Cards) for md and sm */}
                  <img
                    src="/landingpage/GDPR FRAME.png"
                    alt="Footer Image 1"
                    className="sm:h-8 h-6 sm:w-8 sm-image-size lg-image-size md-image-size  w-6 md:h-12 md:w-12 object-cover rounded-full shadow-small"
                  />
                  <img
                    src="/landingpage/SSL frame.png"
                    alt="Footer Image 2"
                    className=" h-6 w-6 sm:h-8 sm:w-8 sm-image-size lg-image-size md-image-size  md:h-12 md:w-12 object-cover rounded-full shadow-small "
                  />
                  <img
                    src="/landingpage/Tiktok frame.png"
                    alt="Footer Image 3"
                    className=" h-6 w-12 sm:h-8 sm:w-16 sm-image-size lg-image-size md-image-size  md:h-12 md:w-18 object-cover rounded-full shadow-small "
                  />
                </div>
              </div>
            </div>
            {/* Sales Analytics Image */}
            {/*For small devices */}
            <img
              src="/landingpage/sales.png"
              alt="Sales Analytics"
              className="absolute responsive-image analysis-position  analysis-container lg-analysis-container bottom-[-2.75rem]  right-[-18px] object-cover rounded-lg md:max-w-[16rem] lg:max-w-[20rem] max-w-36 md:hidden block"
            />
            {/*For large devices */}
            <img
              src="/landingpage/sales.png"
              alt="Sales Analytics"
              className="absolute responsive-image analysis-container lg-analysis-container top-[-28px] right-[-18px] object-cover rounded-lg md:max-w-[16rem] lg:max-w-[20rem] max-w-36 hidden md:block"
            />
          </div>
        </div>

        {/* Footer Section */}
        <div className="relative lg:flex justify-center md:justify-end items-center tiktok-container pb-24 lg:w-3/4 xl:w-full hidden ">
          <div className="absolute right-0 sm:right-24 xl:right-28 w-full md:hidden lg:flex mt-3 lg:mt-0 sm:w-auto flex justify-center border border-indigo-400 sm:justify-end bg-white rounded-lg shadow-lg  items-center  space-x-10 py-3 px-8 object-cover">
            {/* Footer Images (Cards) */}
            <img
              src="/landingpage/GDPR FRAME.png"
              alt="Footer Image 1"
              className="h-16 w-16 object-cover rounded-full shadow-small sm:h-20 sm:w-18"
            />
            <img
              src="/landingpage/SSL frame.png"
              alt="Footer Image 2"
              className="h-12 w-12 object-cover rounded-full shadow-small sm:h-20 sm:w-18"
            />
            <img
              src="/landingpage/Tiktok frame.png"
              alt="Footer Image 3"
              className="h-14 w-17 object-cover rounded-full shadow-small sm:h-14 sm:w-18"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
