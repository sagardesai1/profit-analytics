"use strict";
exports.__esModule = true;
var react_1 = require("react");
var ZigZagSection = function () {
    return (react_1["default"].createElement("section", { className: "flex flex-col items-start rounded-[28px] shadow-lg p-6 md:p-10 lg:p-16 mx-auto w-full max-w-[1190px]", style: {
            background: "linear-gradient(to bottom, #E0E7FF, #E0E7FF)",
            boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)"
        } },
        react_1["default"].createElement("div", { className: "text-center mb-12" },
            react_1["default"].createElement("h1", { className: "text-2xl sm:text-4xl lg:text-5xl font-bold text-gray-800", style: {
                    fontFamily: "Satoshi, sans-serif",
                    color: "#404040",
                    lineHeight: "100%",
                    letterSpacing: "-2.88px",
                    textTransform: "capitalize",
                    fontWeight: 650,
                    fontSize: "50px",
                    textAlign: "center"
                } },
                "Sync Your TikTok Shop In Under 5-Minutes And",
                " ",
                react_1["default"].createElement("span", { className: "text-indigo-600 font-bold" }, "Get Visibility."))),
        [{
                image: "/Featue image .png",
                alt: "Feature Image 1",
                title: (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Accurate Profit Tracking",
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "Made Simple"))),
                description: "Quickly view your sales, sample costs, orders, refunds, ad costs, estimated payouts, and net profit—all in one glance with our intuitive tile view for effortless performance comparison.",
                reverse: false
            }, {
                image: "/Featue image_02.png",
                alt: "Feature Image 2",
                title: (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Track Every",
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "TikTok Fee"))),
                description: "Stop unexpected costs from eating into your profits. Easily account for all TikTok fees, including affiliate commissions, discounts, and adjustments to see your true net profit.",
                reverse: true
            }, {
                image: "/Featue image_03.png",
                alt: "Feature Image 3",
                title: (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Understand your",
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "sample costs"))),
                description: "Gain insights into sample costs and influencer ROI to fine-tune your marketing spend and maximize your returns.",
                reverse: false
            }, {
                image: "/Featue image_04.png",
                alt: "Feature Image 4",
                title: (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Identify Your",
                    react_1["default"].createElement("br", null),
                    "Best & ",
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "Worst Performers"))),
                description: "Easily find your top-selling products and pinpoint underperformers with intuitive SKU filters. Focus on what drives profits and eliminate what doesn't.",
                reverse: true
            }, {
                image: "/Featue image_05.png",
                alt: "Feature Image 5",
                title: (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Spot Patterns in",
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "Affiliate Orders"))),
                description: "Quickly view your sales, sample costs, orders, refunds, ad costs, estimated payouts, and net profit—all in one glance with our intuitive tile view for effortless performance comparison.",
                reverse: false
            }, {
                image: "/Featue image_06.png",
                alt: "Feature Image 4",
                title: (react_1["default"].createElement(react_1["default"].Fragment, null,
                    "Track every ",
                    " ",
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "expense"))),
                description: "Effortlessly add and monitor all your costs to maintain a comprehensive financial overview.",
                reverse: true
            }].map(function (section, index) { return (react_1["default"].createElement(react_1["default"].Fragment, { key: index },
            react_1["default"].createElement("div", { className: "flex flex-col " + (section.reverse ? "md:flex-row-reverse" : "md:flex-row") + " items-center justify-between w-full gap-6 md:gap-8 mt-12" },
                react_1["default"].createElement("div", { className: "flex-1" },
                    react_1["default"].createElement("img", { src: section.image, alt: section.alt, className: "w-full max-w-xs sm:max-w-sm h-auto rounded-lg shadow-small mx-auto" })),
                react_1["default"].createElement("div", { className: "flex-1 text-center md:text-left" },
                    react_1["default"].createElement("h1", { className: "text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4", style: {
                            fontFamily: "Satoshi, sans-serif",
                            fontSize: "50px",
                            color: "#404040",
                            lineHeight: "100%",
                            letterSpacing: "-2.88px",
                            textTransform: "capitalize",
                            fontWeight: 500,
                            textAlign: "center md:text-left"
                        } }, section.title),
                    react_1["default"].createElement("p", { className: "text-sm sm:text-base lg:text-lg text-gray-600 mb-6 break-words text-center md:text-left" }, section.description),
                    react_1["default"].createElement("a", { href: "tel:+16465665500", className: "bg-indigo-100 text-indigo-600 border border-indigo-600 py-2 px-4 sm:py-3 sm:px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto" }, "Learn More"))),
            index === 3 && (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center mt-12 bg-indigo-700 rounded-3xl shadow-lg w-full px-4 sm:px-6 md:px-8 lg:px-12", style: {
                    height: "auto",
                    padding: "40px",
                    textAlign: "center"
                } },
                react_1["default"].createElement("h2", { className: "font-bold text-white mb-4 text-center", style: {
                        fontFamily: "Satoshi, sans-serif",
                        fontSize: "60px",
                        fontWeight: 500,
                        color: "#FFF",
                        lineHeight: "100%",
                        letterSpacing: "-2.88px",
                        textAlign: "center",
                        textTransform: "capitalize"
                    } }, "Experience SKUhunt Risk-Free!"),
                react_1["default"].createElement("p", { className: "text-white text-center mb-6" }, "Explore our features with a live demo account. No sign-up, no hassle - just instant access."),
                react_1["default"].createElement("a", { href: "tel:+16465665500", className: "bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto" }, "Explore the Demo Account"))))); })));
};
exports["default"] = ZigZagSection;
