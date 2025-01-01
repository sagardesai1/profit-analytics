"use strict";
exports.__esModule = true;
var react_1 = require("react");
var fa_1 = require("react-icons/fa");
var Plan = function () {
    var plans = [
        {
            name: "1 Shop",
            price: "$29",
            frequency: "Per month",
            features: [true, false, "Basic Analytics", false, true, false, true, false, false, true, true],
            color: "bg-indigo-300 text-black"
        },
        {
            name: "3 Shops",
            price: "$59",
            frequency: "Per month",
            features: [true, true, "Advanced Analytics", false, false, true, true, false, true, false, false],
            color: "bg-gray-100 text-black"
        },
        {
            name: "5 Shops",
            price: "$99",
            frequency: "Per month",
            features: [true, true, false, false, true, "Priority Support", false, false, true, true, true],
            color: "bg-indigo-300 text-black"
        },
        {
            name: "Unlimited Shops",
            price: "$149",
            frequency: "Per month",
            features: [true, true, "Enterprise Analytics", true, true, true, true, true, true, true, true],
            color: "bg-gray-100 text-black"
        },
    ];
    var featureList = [
        "Custom Domain",
        "24/7 Support",
        "Analytics",
        "E-commerce Support",
        "Mobile App",
        "Priority Support",
        "Product Recommendations",
        "Integration with CRMs",
        "Bulk Product Upload",
        "User Roles & Permissions",
        "API Access",
    ];
    return (react_1["default"].createElement("div", { className: "py-12 bg-gray-50" },
        react_1["default"].createElement("div", { className: "max-w-7xl mx-auto" },
            react_1["default"].createElement("div", { className: "text-center" },
                react_1["default"].createElement("h2", { className: "text-3xl font-semibold text-gray-900" }, "Choose Your Plan"),
                react_1["default"].createElement("p", { className: "mt-4 text-lg text-gray-600" }, "Find the plan that works best for you and your business")),
            react_1["default"].createElement("div", { className: "mt-12 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6" },
                react_1["default"].createElement("div", { className: "w-full lg:w-1/4 mb-6 lg:mb-0 rounded-lg bg-indigo-300 text-white shadow-md p-6" },
                    react_1["default"].createElement("h3", { className: "text-lg font-semibold mb-4" }, "Features"),
                    react_1["default"].createElement("table", { className: "w-full table-auto rounded-lg" },
                        react_1["default"].createElement("thead", null,
                            react_1["default"].createElement("tr", null,
                                react_1["default"].createElement("th", { className: "py-3 px-4 bg-indigo-300 text-white text-left font-semibold rounded-tl-lg" }, "Feature"))),
                        react_1["default"].createElement("tbody", null, featureList.map(function (feature, index) { return (react_1["default"].createElement("tr", { key: index, className: "border-b border-gray-300" },
                            react_1["default"].createElement("td", { className: "py-4 px-4 text-white" }, feature))); })))),
                react_1["default"].createElement("div", { className: "w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" }, plans.map(function (plan, index) { return (react_1["default"].createElement("div", { key: index, className: plan.color + " rounded-lg shadow-md p-6 flex flex-col justify-between" },
                    react_1["default"].createElement("div", { className: "text-center mb-6" },
                        react_1["default"].createElement("h3", { className: "text-lg font-semibold" }, plan.name),
                        react_1["default"].createElement("p", { className: "mt-2 text-3xl font-bold" }, plan.price),
                        react_1["default"].createElement("p", { className: "text-sm" }, plan.frequency),
                        react_1["default"].createElement("button", { className: "mt-4 font-bold py-2 px-4 rounded " + (plan.color.includes("bg-indigo-600")
                                ? "bg-white text-gray-700"
                                : "bg-indigo-300 text-black") }, "Choose Plan")),
                    react_1["default"].createElement("div", { className: "mt-6" },
                        react_1["default"].createElement("table", { className: "w-full table-auto" },
                            react_1["default"].createElement("tbody", null, plan.features.map(function (feature, featureIndex) { return (react_1["default"].createElement("tr", { key: featureIndex, className: "border-t" },
                                react_1["default"].createElement("td", { className: "py-4 flex items-center justify-center space-x-2" }, typeof feature === "string" ? (react_1["default"].createElement("span", { className: "text-sm font-medium" }, feature)) : feature ? (react_1["default"].createElement(fa_1.FaCheckCircle, { className: "text-green-500" })) : (react_1["default"].createElement(fa_1.FaCheckCircle, { className: "text-gray-400" }))))); })))))); }))))));
};
exports["default"] = Plan;
