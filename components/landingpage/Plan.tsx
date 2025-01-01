import React, { useState } from "react";

{
  /* this object include all the data that will be include in plan boxes */
}
const plans = [
  {
    name: "Starter",
    monthlyPrice: "$29",
    yearlyPrice: "$24",
    description:
      "Just starting your business or looking for the basics? This is the place.",
    features: [
      "1 TikTok Shop",
      "250 Orders / month",
      "100 Products",
      "1 User",
      "Profit & Loss Dashboard",
      "Expense Tracker",
    ],
  },
  {
    name: "Growing",
    monthlyPrice: "$59",
    yearlyPrice: "$49",
    description:
      "Want to look more polished, save more time, and conquer cash flow? It’s Pro time.",
    features: [
      "Everything in Starter Plan",
      "3500 Orders / month",
      "500 Products",
      "Sample Tracking",
      "2 Users",
      "Affiliate Order Dashboard",
      "Automated Custom Reporting",
      "Automated Reporting",
    ],
    isHighlighted: true,
  },
  {
    name: "Business",
    monthlyPrice: "$99",
    yearlyPrice: "$79",
    description:
      "For established businesses looking to scale and optimize their operations.",
    features: [
      "Everything in Growing Plan",
      "3 TikTok Shops",
      "5000 Orders / month",
      "1000 Products",
      "LTV Insights",
      "4 Users",
    ],
  },
  {
    name: "Enterprise",
    monthlyPrice: "$249",
    yearlyPrice: "$199",
    description:
      "Custom solutions and premium support for large organizations.",
    features: [
      "Everything in Business Plan",
      "Multiple TikTok Shops",
      "15000 Orders / month",
      "Unlimited Products",
    ],
  },
];

{
  /* Choose Your plan component */
}

const ChooseYourPlan = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  {
    /*This will change the plan from yearly to monthly and vice versa */
  }
  const toggleDuration = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="bg-gray-100 py-20 md:flex md:flex-col justify-center items-center px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h2 className="lg:text-7xl text-3xl font-bold text-center text-gray-700 px-6">
        Simple Pricing For TikTok Sellers
      </h2>
      <p className="text-center text-gray-600 mt-4">
        Start building your best business today
      </p>

      {/* Toggle Button */}
      <div className="flex justify-center mt-6">
        <div className="flex items-center space-x-2">
          <span className="text-gray-700">Monthly</span>
          <button
            onClick={toggleDuration}
            className="relative flex items-center w-16 h-8 bg-white border border-indigo-200 rounded-full cursor-pointer"
          >
            <div
              className={`absolute w-6 h-6 bg-indigo-500 rounded-full shadow-md transform transition-transform duration-300 ${
                isMonthly ? "translate-x-1" : "translate-x-8"
              }`}
            ></div>
          </button>
          <span className="text-gray-500">
            Yearly{" "}
            <span className="text-indigo-500 py-1 bg-red-50 text-sm border border-indigo-300 px-1 rounded-full">
              20% off
            </span>
          </span>
        </div>
      </div>

      {/* Plan Boxes */}
      {/* This will display the plan boxes by maping on plan object data */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 w-full md:gap-2 gap-6 place-items-center items-center mt-10 px-2 md:px-2 xl:px-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 lg:max-w-96 max-w-[30rem] w-full border border-indigo-200 transition-transform duration-300 transform ${
              plan.isHighlighted
                ? "bg-indigo-400 border-indigo-700 scale-100 md:ml-7 md:mr-8"
                : "bg-white"
            }`}
          >
            {/* Plan Name */}
            <h3
              className={`text-xl font-semibold ${
                plan.isHighlighted ? "text-white" : "text-gray-800"
              }`}
            >
              {plan.name}
            </h3>
            {/* Plan price  */}
            <div className="mt-4">
              <span
                className="font-bold text-6xl md:text-6xl xl:text-7xl"
                style={{
                  fontFamily: "Satoshi, sans-serif",
                  color: plan.isHighlighted ? "#fff" : "#404040",
                  lineHeight: "100%",
                  letterSpacing: "-2.88px",
                  textTransform: "capitalize",
                  fontWeight: 500,
                }}
              >
                {isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
              </span>
              <span
                className={`text-lg ${
                  plan.isHighlighted ? "text-white" : "text-gray-500"
                }`}
              >
                {" / "}
                {isMonthly ? "Per Month" : "Per Year"}
              </span>
            </div>

            {/* Plan Description */}
            <p
              className={`mt-4 ${
                plan.isHighlighted ? "text-white" : "text-gray-700"
              }`}
              style={{
                maxWidth: "220px",
                lineHeight: "1.6",
                fontSize: "1rem",
                whiteSpace: "normal",
              }}
            >
              {plan.description}
            </p>
            <a
              href="https://getwaitlist.com/waitlist/17274"
              target="_blank"
              className={`inline-block text-center w-full py-2 px-12 lg:px-6 xl:px-12 mt-6 rounded-lg transition ${
                plan.isHighlighted
                  ? "bg-white text-indigo-500 border-indigo-200 border hover:bg-indigo-50"
                  : "bg-indigo-400 text-white hover:bg-indigo-500"
              }`}
              style={{
                display: "inline-block",
                textDecoration: "none",
              }}
            >
              Get Started
            </a>

            {/* Dashed Line After Button */}
            <div
              className={`mt-6 border-t-2 border-dashed ${
                plan.isHighlighted ? "border-white" : "border-gray-300"
              }`}
            ></div>

            {/* Features */}
            <ul className="space-y-3 mt-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center">
                  <span
                    className={`w-6 h-6 bg-white text-green-500 flex items-center justify-center rounded-full border border-gray-200 mr-3`}
                  >
                    ✓
                  </span>
                  <p
                    className={`${
                      plan.isHighlighted ? "text-white" : "text-gray-700"
                    }`}
                  >
                    {feature}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Free Trial Button */}
      <div className="flex justify-center py-6 mt-8">
        <a
          target="_blank"
          href="https://getwaitlist.com/waitlist/17274"
          className="w-auto py-3 px-8 rounded-full shadow-md font-medium text-lg bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 text-center"
        >
          Start Your Free Trial
        </a>
      </div>
    </div>
  );
};

export default ChooseYourPlan;
