"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Video = function () {
    return (react_1["default"].createElement("div", { className: "flex flex-col md:flex-row items-center justify-between w-full h-auto bg-gradient-to-b from-indigo-300 to-white", style: {
            boxShadow: '0px 4px 6px -2px rgba(0, 0, 0, 0.2), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)',
            borderRadius: "28px",
            padding: "80px",
            boxSizing: "border-box"
        } },
        react_1["default"].createElement("div", { className: "flex flex-col justify-center gap-6 w-full md:w-1/2 text-center md:text-left" },
            react_1["default"].createElement("h1", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800" },
                "How the 7th Largest TikTok Shop Seller Built a",
                " ",
                react_1["default"].createElement("span", { className: "text-indigo-600" }, "$34M"),
                " Empire with SKUhunt."),
            react_1["default"].createElement("div", { className: "flex flex-col items-center md:items-start space-y-2 w-full md:w-auto" },
                react_1["default"].createElement("a", { href: "tel:+16465665500", className: "bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto" }, "Learn More"))),
        react_1["default"].createElement("div", { className: "flex justify-center md:justify-end items-center w-full md:w-1/2 mt-6 md:mt-0" },
            react_1["default"].createElement("video", { src: "/image.mp4" // Replace with your actual video path
                , className: "w-full sm:w-[450px] md:w-[500px] h-auto sm:h-[250px] md:h-[280px] object-cover rounded-lg", autoPlay // Optional: mutes the video so it plays automatically without sound
                : true, loop // Optional: to loop the video continuously
                : true, controlsList: "nodownload noplaybackrate" // Hides controls like download and playback rate
             }))));
};
exports["default"] = Video;
