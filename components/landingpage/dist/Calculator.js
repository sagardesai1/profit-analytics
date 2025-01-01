"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Calculator = function () {
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center mt-12 bg-indigo-700 rounded-lg shadow-lg w-full px-6 sm:px-8 md:px-10 lg:px-12", style: {
            height: "auto",
            padding: "40px",
            textAlign: "center"
        } },
        react_1["default"].createElement("h2", { className: "font-bold text-white mb-2 text-center", style: {
                fontFamily: "Satoshi, sans-serif",
                fontSize: "60px",
                fontWeight: 500,
                color: "#FFF",
                lineHeight: "100%",
                letterSpacing: "-2.88px",
                textAlign: "center",
                textTransform: "capitalize"
            } }, "Download your Free Calculator"),
        react_1["default"].createElement("p", { className: "text-white text-center mb-6" }, "This easy-to-use calculator will help you calculate fees accurately and efficiently\u2014saving you time and effort."),
        react_1["default"].createElement("a", { className: "bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto" }, "Download Now")));
};
exports["default"] = Calculator;
