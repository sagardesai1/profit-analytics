"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fi_1 = require("react-icons/fi"); // Circle icon
var ai_1 = require("react-icons/ai"); // Star and Heart icons
var bs_1 = require("react-icons/bs"); // Smile Emoji icon
var Testimonials = function () {
    return (react_1["default"].createElement("section", { className: "relative py-24 px-8 md:px-16 lg:px-24 xl:px-32 w-full min-h-[600px] flex flex-col items-center justify-center p-6 sm:p-10 bg-gradient-to-b from-indigo-300 to-white rounded-lg shadow-lg", style: {
            boxShadow: "0px 4px 6px -2px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)"
        } },
        react_1["default"].createElement("div", { className: "absolute top-4 right-4 flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full shadow-md cursor-pointer" },
            react_1["default"].createElement(ai_1.AiFillStar, { size: 20 })),
        react_1["default"].createElement("div", { className: "absolute bottom-4 right-4 flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full shadow-md cursor-pointer" },
            react_1["default"].createElement(ai_1.AiFillHeart, { size: 20 })),
        react_1["default"].createElement("div", { className: "absolute top-1/2 left-4 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-indigo-500 text-white rounded-full shadow-md cursor-pointer" },
            react_1["default"].createElement(bs_1.BsEmojiSmile, { size: 20 })),
        react_1["default"].createElement("h2", { className: "text-[50px] font-bold text-neutral-700 text-center leading-[60px] tracking-[-2.88px] capitalize" },
            "Hear What Sellers ",
            react_1["default"].createElement("br", null),
            react_1["default"].createElement("span", { className: "text-neutral-700" }, "Have to Say")),
        react_1["default"].createElement("div", { className: "flex flex-col lg:flex-row justify-center pt-8 gap-10 w-full" },
            react_1["default"].createElement("div", { className: "w-full sm:w-[350px] lg:w-[350px] h-auto p-6 flex flex-col items-center gap-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-lg" },
                react_1["default"].createElement("div", { className: "flex items-center gap-4 mb-4" },
                    react_1["default"].createElement("div", { className: "w-16 h-16 rounded-full bg-indigo-300 flex items-center justify-center" },
                        react_1["default"].createElement(fi_1.FiCircle, { className: "text-white  text-3xl" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h3", { className: "font-semibold text-gray-800" }, "Shaff Qureshi"),
                        react_1["default"].createElement("span", { className: "text-gray-600 text-sm" }, "CEO of Ensight"))),
                react_1["default"].createElement("p", { className: "text-sm text-gray-800 text-left mb-4" }, "\"SKUhunt has completely transformed how I manage my inventory. It helps me quickly identify my best-performing products and weed out the underperformers. Now, I focus on scaling what works\u2014and my profits show it.\"")),
            react_1["default"].createElement("div", { className: "w-full sm:w-[350px] lg:w-[350px] h-auto p-6 flex flex-col items-center gap-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-lg" },
                react_1["default"].createElement("div", { className: "flex items-center gap-4 mb-4" },
                    react_1["default"].createElement("div", { className: "w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center" },
                        react_1["default"].createElement(fi_1.FiCircle, { className: "text-white text-3xl" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h3", { className: "font-semibold text-gray-800" }, "Sherpa Pasang"),
                        react_1["default"].createElement("span", { className: "text-gray-600 text-sm" }, "CEO of American Sears"))),
                react_1["default"].createElement("p", { className: "text-sm text-gray-800 text-left mb-4" }, "\"As a TikTok seller, I used to struggle with tracking product performance. SKUhunt makes it effortless to pinpoint my top SKUs and adjust my strategy. It\u2019s a game-changer for anyone serious about growing their business.\"")),
            react_1["default"].createElement("div", { className: "w-full sm:w-[350px] lg:w-[350px] h-auto p-6 flex flex-col items-center gap-4 bg-indigo-100 rounded-lg border-2 border-indigo-300 shadow-lg" },
                react_1["default"].createElement("div", { className: "flex items-center gap-4 mb-4" },
                    react_1["default"].createElement("div", { className: "w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center" },
                        react_1["default"].createElement(fi_1.FiCircle, { className: "text-white text-3xl" })),
                    react_1["default"].createElement("div", null,
                        react_1["default"].createElement("h3", { className: "font-semibold text-gray-800" }, "Liam Thompson"),
                        react_1["default"].createElement("span", { className: "text-gray-600 text-sm" }, "Co-founder of GlowUp Skincare"))),
                react_1["default"].createElement("p", { className: "text-sm text-gray-800 text-left mb-4" }, "\"With SKUhunt, I finally have the insights I need to make smarter decisions. It\u2019s easy to spot which products are driving sales and which ones need to be cut, saving me time and money.\"")))));
};
exports["default"] = Testimonials;
