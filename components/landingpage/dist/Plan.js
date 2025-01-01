"use strict";
exports.__esModule = true;
var react_1 = require("react");
var plans = [
    {
        name: "Starter",
        price: "$29",
        duration: "Per month",
        description: "Just starting your business or looking for the basics? This is the place.",
        features: [
            "1 Tiktok Shop",
            "250 Orders /per month",
            "100 Products",
            "1 User",
            "Profit & Loss Dashboard",
            "Expense Tracker",
        ]
    },
    {
        name: "Growing",
        price: "$59",
        duration: "Per month",
        description: "Want to look more polished, save more time, and conquer cash flow? It’s Pro time.",
        features: [
            "Everything in Starter Plan",
            "3500 Orders /per month",
            "500 Products",
            "Sample Tracking",
            "2 Users",
            "Affiliate Order Dashboard",
            "Automated Custom Reporting",
            "Automated Reporting",
        ],
        isHighlighted: true
    },
    {
        name: "Business",
        price: "$99",
        duration: "Per month",
        description: "For established businesses looking to scale and optimize their operations.",
        features: [
            "Everything in Growing Plan",
            "3 Tiktok Shops",
            "5000 Orders /per month",
            "1000 Products",
            "LTV Insights",
            "4 Users",
        ]
    },
    {
        name: "Enterprise",
        price: "$249",
        duration: "Per month",
        description: "Custom solutions and premium support for large organizations.",
        features: [
            "Everything in Business Plan",
            "Multiple TikTok Shops",
            "15000 Orders /per month",
            "Unlimited Products",
        ]
    },
];
var ChooseYourPlan = function () {
    var _a = react_1.useState(true), isMonthly = _a[0], setIsMonthly = _a[1];
    var toggleDuration = function () {
        setIsMonthly(!isMonthly);
    };
    return (react_1["default"].createElement("div", { className: "bg-gray-100 py-16 px-4 sm:px-8 lg:px-16" },
        react_1["default"].createElement("h2", { className: "text-3xl text-center pt-4 py-3 md:text-4xl lg:text-5xl font-bold text-gray-700 tracking-tight", style: { fontFamily: "Arial, sans-serif" } }, "Simple Pricing for TikTok Sellers"),
        react_1["default"].createElement("p", { className: "text-center pb-6 text-gray-700 mt-4" }, "Start building your best business today"),
        react_1["default"].createElement("div", { className: "flex justify-center mt-4" },
            react_1["default"].createElement("button", { onClick: toggleDuration, className: "relative flex items-center py-2 px-6 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition duration-300" },
                react_1["default"].createElement("div", { className: "absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 " + (isMonthly ? "translate-x-1" : "translate-x-10") }),
                react_1["default"].createElement("span", { className: "text-sm font-medium " + (isMonthly ? "ml-9 text-white" : "mr-9 text-white") }, isMonthly ? "Monthly" : "Yearly"))),
        react_1["default"].createElement("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-6" }, plans.map(function (plan, index) { return (react_1["default"].createElement("div", { key: index, className: "rounded-lg shadow-md p-6 border hover:shadow-lg transition-shadow " + (plan.isHighlighted ? "bg-indigo-300 border-indigo-500" : "bg-white border-gray-200") },
            react_1["default"].createElement("h3", { className: "text-xl font-semibold mb-2", style: { fontFamily: "Arial, sans-serif", color: "#4F46E5" } }, plan.name),
            react_1["default"].createElement("div", { className: "flex items-center mb-4" },
                react_1["default"].createElement("span", { className: "text-5xl font-thin", style: { fontFamily: "Arial, Satoshi", color: "#1F2937" } }, plan.price),
                react_1["default"].createElement("span", { className: "text-lg ml-3 text-gray-600" },
                    "/",
                    isMonthly ? "month" : "year")),
            react_1["default"].createElement("p", { className: "text-gray-600 mb-4" }, plan.description),
            react_1["default"].createElement("a", { href: "#", className: "w-auto py-3 px-6 rounded-full shadow-md font-medium text-lg border " + (plan.isHighlighted
                    ? "bg-indigo-300 text-gray-800 border-indigo-500 hover:bg-indigo-400"
                    : "bg-indigo-300 text-gray-900 border-indigo-500 hover:bg-indigo-400") }, "Get Started"),
            react_1["default"].createElement("ul", { className: "space-y-3 mt-4" }, plan.features.map(function (feature, idx) { return (react_1["default"].createElement("li", { key: idx, className: "flex items-center" },
                react_1["default"].createElement("span", { className: "w-6 h-6 bg-white text-green-500 flex items-center justify-center rounded-full border border-gray-200 mr-3" }, "\u2713"),
                react_1["default"].createElement("p", { className: "text-gray-700" }, feature))); })))); })),
        react_1["default"].createElement("div", { className: "flex justify-center py-6 mt-8" },
            react_1["default"].createElement("a", { href: "#", className: "w-auto py-3 px-6 rounded-full shadow-md font-medium text-lg bg-indigo-600 text-white border-indigo-600 hover:bg-indigo-700 text-center" }, "Start Your Free Trial"))));
};
exports["default"] = ChooseYourPlan;
