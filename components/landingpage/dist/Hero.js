"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var Hero = function () {
    return (react_1["default"].createElement("section", { className: "flex flex-col items-start bg-gradient-to-b from-indigo-300 to-white rounded-[28px] shadow-lg p-6 md:p-10 lg:p-16 mx-auto w-full max-w-[1190px]" },
        react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center text-center md:text-left w-full" },
            react_1["default"].createElement("div", { className: "flex flex-col items-center md:items-start w-full md:w-1/2 space-y-6" },
                react_1["default"].createElement("h1", { className: "text-3xl sm:text-4xl md:text-5xl font-bold leading-tight" },
                    react_1["default"].createElement("span", { className: "text-black" }, "Start Growing With "),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "Accurate "),
                    react_1["default"].createElement("span", { className: "text-black" }, "TikTok Shop "),
                    react_1["default"].createElement("span", { className: "text-indigo-600" }, "Profit Analytics")),
                react_1["default"].createElement("div", { className: "text-sm text-[#404040] space-y-2" },
                    react_1["default"].createElement("div", { className: "flex items-start space-x-2" },
                        react_1["default"].createElement(fa_1.FaShieldAlt, { className: "text-indigo-500 mt-1 text-xl" }),
                        react_1["default"].createElement("p", { className: "font-satoshi text-sm leading-7" }, "We Never Sell Your Data. 100% Secure.")),
                    react_1["default"].createElement("div", { className: "flex items-start space-x-2" },
                        react_1["default"].createElement(fa_1.FaClock, { className: "text-indigo-500 mt-1 text-xl" }),
                        react_1["default"].createElement("p", { className: "font-satoshi text-sm leading-7" }, "Connect Your TikTok Shop in Just 5 Minutes.")),
                    react_1["default"].createElement("div", { className: "flex  text-left items-start space-x-2" },
                        react_1["default"].createElement(fa_1.FaCheckCircle, { className: "text-indigo-500 mt-1 text-xl" }),
                        react_1["default"].createElement("p", { className: "font-satoshi text-sm leading-7" }, "Over 99% accuracy in calculating TikTok Shop Fees & Profits."))),
                react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center md:items-center md:space-x-4 space-y-4 md:space-y-0 w-full" },
                    react_1["default"].createElement("button", { className: "bg-indigo-600 text-white py-3 px-6 rounded-full shadow-md hover:bg-indigo-500 transition duration-300 w-full sm:w-3/4 md:w-auto" }, "Start Your Free Trial"),
                    react_1["default"].createElement("a", { className: "bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-100 transition duration-300 w-full sm:w-3/4 md:w-auto text-center" }, "Call us at 646-566-5500"))),
            react_1["default"].createElement("div", { className: "relative w-full md:w-1/2 mt-10 md:mt-0 flex justify-center" },
                react_1["default"].createElement("div", { className: "relative w-full max-w-[712px] " },
                    react_1["default"].createElement("img", { src: "/DashBord.png", alt: "Dashboard Analytics", className: "object-cover rounded-lg w-full " }),
                    react_1["default"].createElement("div", { className: "absolute bottom-16 p-5 left-18 right-auto bg-indigo-400 text-white p-6 px-2 rounded-lg shadow-md hidden md:block" },
                        react_1["default"].createElement("span", { className: "font-satoshi  text-[22px] font-medium leading-[20px]" },
                            "Samples Distributed ",
                            react_1["default"].createElement("span", { className: "text-3xl" }, "68")))),
                react_1["default"].createElement("img", { src: "/sales.png", alt: "Sales Analytics", className: "absolute top-[-28px] right-[-18px] object-cover rounded-lg  md:w-48 w-32" }))),
        react_1["default"].createElement("div", { className: "relative flex justify-center md:justify-end items-center mt-12 md:mt-16 pb-10 w-full" },
            react_1["default"].createElement("div", { className: "absolute right-0 sm:right-32 w-full sm:w-auto flex justify-center sm:justify-end bg-white rounded-lg shadow-lg flex items-center justify-center space-x-4 py-3 px-6" },
                react_1["default"].createElement("img", { src: "/GDPR FRAME.png", alt: "Footer Image 1", className: "h-12 w-12 object-cover rounded-full shadow-small sm:h-14 sm:w-14" }),
                react_1["default"].createElement("img", { src: "/SSL frame.png", alt: "Footer Image 2", className: "h-12 w-12 object-cover rounded-full shadow-small sm:h-14 sm:w-14" }),
                react_1["default"].createElement("img", { src: "/Tiktok frame.png", alt: "Footer Image 3", className: "h-12 w-17 object-cover rounded-full shadow-small sm:h-14 sm:w-18" })))));
};
exports["default"] = Hero;
