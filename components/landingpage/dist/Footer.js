"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Footer = function () {
    return (react_1["default"].createElement("footer", { className: "flex flex-col items-start gap-14 py-32 px-16", style: {
            borderRadius: "40px 40px 0px 0px",
            background: "linear-gradient(180deg, #6C9CFF 0%, #FCFCFC 100%)",
            width: "100%",
            maxWidth: "1440px",
            margin: "0 auto"
        } },
        react_1["default"].createElement("div", { className: "text-center md:text-left py-12 flex flex-col sm:flex-row justify-between items-center w-full" },
            react_1["default"].createElement("h2", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold mb-4", style: {
                    fontFamily: "Satoshi, sans-serif",
                    color: "white",
                    lineHeight: "1.2",
                    letterSpacing: "-2px",
                    width: "100%",
                    paddingBottom: "12px"
                } }, "Let\u2019s Sit & Talk"),
            react_1["default"].createElement("div", { className: "flex flex-col gap-4 items-center sm:items-end sm:w-1/3 w-full mt-8 sm:mt-0" },
                react_1["default"].createElement("form", { className: "flex flex-col w-full sm:w-auto justify-end" },
                    react_1["default"].createElement("div", { className: "relative w-full" },
                        react_1["default"].createElement("input", { type: "email", placeholder: "Enter your email", className: "border-b-2 border-white text-white bg-transparent focus:ring-0 focus:outline-none opacity-80 text-lg py-4 placeholder-white w-full sm:w-[400px] md:w-[500px] pr-16 pl-6 text-left" // Adjusted padding and width
                            , required: true, style: {
                                fontFamily: "Satoshi, sans-serif",
                                fontSize: "40px",
                                fontWeight: 400,
                                lineHeight: "48px",
                                letterSpacing: "-1px",
                                color: "var(--Neutral-colors-White-text, #FFF)",
                                paddingTop: "16px",
                                paddingBottom: "16px"
                            } }),
                        react_1["default"].createElement("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl sm:text-4xl md:text-5xl" },
                            react_1["default"].createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "46", height: "46", viewBox: "0 0 46 46", fill: "none" },
                                react_1["default"].createElement("path", { d: "M11.516 34.4834L34.4837 11.5156M34.4837 11.5156H19.1719M34.4837 11.5156V26.8275", stroke: "white", strokeWidth: "2.87097", strokeLinecap: "round", strokeLinejoin: "round" }))))))),
        react_1["default"].createElement("div", { className: "flex flex-col sm:flex-row justify-between w-full gap-10 sm:gap-16" },
            react_1["default"].createElement("div", { className: "flex-1 sm:w-1/3" },
                react_1["default"].createElement("h3", { className: "text-xl sm:text-2xl font-semibold text-gray-700 mb-4" }, "Our Address"),
                react_1["default"].createElement("p", { className: "text-gray-600" },
                    "SKUhunt LLC",
                    react_1["default"].createElement("br", null),
                    "51-02 21st Fl 4, Suite 105",
                    react_1["default"].createElement("br", null),
                    "Long Island City, NY 11109")),
            react_1["default"].createElement("div", { className: "flex-1 sm:w-1/3 sm:px-8 text-left" },
                react_1["default"].createElement("h3", { className: "text-xl sm:text-2xl font-semibold text-gray-700 mb-4" }, "Company"),
                react_1["default"].createElement("ul", { className: "space-y-4 text-gray-600" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "About")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Pricing")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Jobs")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Blog")))),
            react_1["default"].createElement("div", { className: "flex-1 sm:w-1/3 sm:px-8 text-left" },
                react_1["default"].createElement("h3", { className: "text-xl sm:text-2xl font-semibold text-gray-700 mb-4" }, "Policies"),
                react_1["default"].createElement("ul", { className: "space-y-4 text-gray-600" },
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Data Protection Policy")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Information Security Policy")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Terms & Conditions")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Privacy Policy")),
                    react_1["default"].createElement("li", null,
                        react_1["default"].createElement("span", { className: "hover:text-indigo-600 cursor-pointer transition duration-200" }, "Incident Response Policy"))))),
        react_1["default"].createElement("div", { className: "text-center mt-16 text-gray-600" },
            react_1["default"].createElement("p", null, "\u00A9 2024 SKUhunt LLC. All rights reserved."))));
};
exports["default"] = Footer;
