"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Navbar = function () {
    // State to toggle mobile menu
    var _a = react_1.useState(false), menuOpen = _a[0], setMenuOpen = _a[1];
    return (React.createElement("nav", { className: "bg-white p-4 shadow-md z-50 relative" },
        React.createElement("div", { className: "flex justify-between items-center" },
            React.createElement("div", { className: "flex items-center" },
                React.createElement("img", { src: "/logo.svg", alt: "Logo", className: "h-8" })),
            React.createElement("ul", { className: "hidden md:flex space-x-6 text-gray-800 font-normal text-sm lg:text-base" },
                React.createElement("li", null,
                    React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Home")),
                React.createElement("li", null,
                    React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Demo")),
                React.createElement("li", null,
                    React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Tools")),
                React.createElement("li", null,
                    React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Pricing")),
                React.createElement("li", null,
                    React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Blog"))),
            React.createElement("button", { className: "hidden md:block bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition duration-200 text-sm lg:text-base" }, "Try for Free"),
            React.createElement("div", { className: "md:hidden flex items-center" },
                React.createElement("button", { className: "text-indigo-600", onClick: function () { return setMenuOpen(!menuOpen); } },
                    React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                        React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16M4 18h16" }))))),
        React.createElement("div", { className: "fixed inset-0 bg-white bg-opacity-90 md:hidden flex flex-col space-y-4 px-4 py-6 text-gray-700 font-normal text-sm transition-all duration-500 ease-in-out transform " + (menuOpen ? 'translate-x-0' : '-translate-x-full'), style: {
                transitionProperty: 'transform',
                zIndex: menuOpen ? 10 : -1
            } },
            React.createElement("button", { className: "self-end text-indigo-600", onClick: function () { return setMenuOpen(false); } },
                React.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-8 w-8", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor" },
                    React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M6 18L18 6M6 6l12 12" }))),
            React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Home"),
            React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Demo"),
            React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Tools"),
            React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Pricing"),
            React.createElement("span", { className: "hover:text-indigo-600 transition duration-200 cursor-pointer" }, "Blog"),
            React.createElement("button", { className: "bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-200" }, "Try for Free"))));
};
exports["default"] = Navbar;
