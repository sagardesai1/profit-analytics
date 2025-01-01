import React from "react";

{
  /* ZigZagSection Component */
}
const ZigZagSection: React.FC = () => {
  return (
    <section
      className="flex flex-col items-start rounded-[28px] p-6 md:p-10 py-16 lg:p-[7rem] mx-auto w-full"
      style={{
        background: "linear-gradient(to bottom, #E0E7FF, #E0E7FF)", // Indigo 300 to Indigo 200 gradient
      }}
    >
      {/* Top Title */}

      <div className="text-center mb-12">
        <p className="sm:text-4xl lg:text-7xl font-bold text-gray-700 text-3xl gap-6 gap-x-4">
          Sync Your TikTok Shop In Under 5-Minutes And{" "}
          <span className="text-indigo-400 font-bold">Get Visibility.</span>
        </p>
      </div>

      {/* Zig Zag Sections */}
      {[
        {
          image: "/landingpage/Featue image .png",

          alt: "Feature Image 1",

          title: (
            <>
              <span className="text-indigo-400">Accurate Profit</span>
              <br />
              Tracking Made Simple
            </>
          ),

          description:
            "Quickly view your sales, sample costs, orders, refunds, ad costs, estimated payouts, and net profit—all in one glance with our intuitive tile view for effortless performance comparison.",

          reverse: false,
        },

        {
          image: "/landingpage/Featue image_02.png",

          alt: "Feature Image 2",

          title: (
            <>
              Track Every <br />
              <span className="text-indigo-400">TikTok Fee</span>
            </>
          ),

          description:
            "Stop unexpected costs from eating into your profits. Easily account for all TikTok fees, including affiliate commissions, discounts, and adjustments to see your true net profit.",

          reverse: true,
        },

        {
          image: "/landingpage/Featue image_03.png",

          alt: "Feature Image 3",

          title: (
            <>
              Understand Your <br />
              <span className="text-indigo-400">Sample Costs</span>
            </>
          ),

          description:
            "Gain insights into sample costs and influencer ROI to fine-tune your marketing spend and maximize your returns.",

          reverse: false,
        },

        {
          image: "/landingpage/Featue image_04.png",

          alt: "Feature Image 4",

          title: (
            <>
              Identify Your
              <br />
              Best & <br />
              <span className="text-indigo-400">Worst Performers</span>
            </>
          ),

          description:
            "Easily find your top-selling products and pinpoint underperformers with intuitive SKU filters. Focus on what drives profits and eliminate what doesn't.",

          reverse: true,
        },

        {
          image: "/landingpage/Featue image_05.png",

          alt: "Feature Image 5",

          title: (
            <>
              Spot Patterns in <br />
              <span className="text-indigo-400">Affiliate Orders</span>
            </>
          ),

          description:
            "Quickly view your sales, sample costs, orders, refunds, ad costs, estimated payouts, and net profit—all in one glance with our intuitive tile view for effortless performance comparison.",

          reverse: false,
        },

        {
          image: "/landingpage/Featue image_06.png",

          alt: "Feature Image 4",

          title: (
            <>
              Track Every <br />
              <span className="text-indigo-400">Expense</span>
            </>
          ),

          description:
            "Effortlessly add and monitor all your costs to maintain a comprehensive financial overview.",

          reverse: true,
        },
      ].map((section, index) => (
        <React.Fragment key={index}>
          <div
            className={`flex flex-col ${
              section.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center justify-between w-full gap-6 mb-4 md:mb-2 md:gap-12 md:mt-10 mt-2`}
          >
            {/* Text Section */}

            <div className="flex-1 text-center md:text-left">
              <p className="text-3xl sm:text-3xl xl:text-6xl lg:text-4xl font-satoshi font-medium text-gray-700 mb-4">
                {/*title  of the section*/}
                {section.title}
              </p>
              {/*description of the section*/}
              <p className="text-sm sm:text-base lg:text-lg xl:text-xl text-gray-600 mb-8 break-words">
                {section.description}
              </p>
              {/*Button*/}
              <a
                target="_blank"
                href="https://getwaitlist.com/waitlist/17274"
                className="bg-indigo-100 text-indigo-600 border border-indigo-600 py-3 md:px-10 sm:py-4 px-9  rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full"
              >
                Learn More
              </a>
            </div>

            {/* Image Section */}

            <div className="flex-1 flex justify-center items-center">
              <img
                src={section.image}
                alt={section.alt}
                className="w-full max-w-md sm:max-w-lg xl:max-w-2xl h-auto rounded-lg "
              />
            </div>
          </div>

          {/* Add the Card after the 4th section */}

          {index === 2 && (
            <div
              className="flex flex-col items-center py-16 px-8 justify-center mt-12 bg-indigo-600 rounded-3xl shadow-lg w-full  sm:px-2 md:px-8 lg:px-12 sm:mb-[3rem] md:mb-[3rem] mb-2"
              style={{
                height: "auto",

                // padding: "60px",

                textAlign: "center",
              }}
            >
              <h2 className="text-4xl sm:text-3xl lg:text-6xl font-bold text-white mb-4 text-center">
                Experience SKUhunt Risk-Free!
              </h2>

              <p className="text-white text-center mb-6 text-sm">
                Explore our features with a live demo account. No sign-up, no
                hassle - just instant access.
              </p>

              <a
                target="_blank"
                href="https://getwaitlist.com/waitlist/17274"
                className="bg-white text-indigo-600 border border-indigo-600 py-3 px-10 max-w-[18rem] rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto"
              >
                Explore the Demo Account
              </a>
            </div>
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default ZigZagSection;
