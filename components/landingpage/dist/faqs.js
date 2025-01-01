"use strict";
exports.__esModule = true;
var react_1 = require("react");
var faqs = [
    {
        question: 'How does SKUHunt ensure profit accuracy?',
        answer: 'SKUHunt accounts for TikTok-specific fees like settlements, refunds, and adjustments that often dont appear immediately in transaction reports. We integrate directly with TikToks API to ensure real-time data accuracy and provide you with the most precise profit calculations possible.'
    },
    {
        question: 'What is SKU-level tracking, and why is it important?',
        answer: 'SKU-level tracking provides profitability insights for each product, helping you identify your most and least profitable items.'
    },
    {
        question: 'How does SKUHunt track sample costs?',
        answer: 'You can log samples sent for specific SKUs along with their costs. SKUHunt aggregates this data so you know how much youre spending on promotional activities.'
    },
    {
        question: 'Can I customize operational expenses in SKUHunt?',
        answer: 'Yes, you can add, modify, and track operational costs like employee wages, software subscriptions, and marketing expenses.'
    },
    {
        question: 'Is my data safe with SKUHunt?',
        answer: 'Absolutely. We take data security seriously and employ industry-standard encryption and security measures to protect your business information. Your data is stored securely, and we never share your sensitive business information with third parties. We comply with all relevant data protection regulations.'
    },
    {
        question: 'Can SKUHunt handle multiple TikTok Shop accounts?',
        answer: 'Yes, you can connect multiple TikTok Shop accounts to your SKUHunt dashboard. This allows you to consolidate data from all your TikTok shops in one place, providing a comprehensive view of your business performance across all accounts.'
    },
];
var FaqComponent = function () {
    var _a = react_1.useState(null), openFaqIndex = _a[0], setOpenFaqIndex = _a[1];
    var toggleFaq = function (index) {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };
    return (react_1["default"].createElement("div", { className: "flex flex-col items-center bg-gray-50 p-6 sm:p-8 md:p-10 lg:p-16" },
        react_1["default"].createElement("h2", { className: "text-3xl text-center pt-4 py-3 md:text-4xl lg:text-5xl font-bold text-gray-700 tracking-tight", style: { fontFamily: "Arial, sans-serif" } }, "FAQs"),
        react_1["default"].createElement("p", { className: "text-center mb-6", style: {
                color: 'var(--Monochrome-700, #4F4F4F)',
                fontFamily: 'var(--Destop-Type-Satoshi-Font-Family, Satoshi)',
                fontSize: 'var(--Destop-Type-Size-Body-Body, 18px)',
                fontWeight: 'var(--Destop-Type-Weight-Body-Regular, 400)',
                lineHeight: 'var(--Destop-Type-Line-Height-Body-Body, 27px)',
                textAlign: 'center'
            } }, "Find the answers to the most commonly asked questions below. If you still need assistance, feel free to contact our support team."),
        react_1["default"].createElement("div", { className: "w-full max-w-3xl" }, faqs.map(function (faq, index) { return (react_1["default"].createElement("div", { key: index, className: "mb-4 p-4 border rounded-lg shadow-md transition-all", style: {
                borderColor: openFaqIndex === index ? '#4F46E5' : '#E5E7EB',
                backgroundColor: openFaqIndex === index ? '#f7fafc' : 'white'
            } },
            react_1["default"].createElement("div", { className: "flex justify-between items-center cursor-pointer", onClick: function () { return toggleFaq(index); } },
                react_1["default"].createElement("h3", { className: "text-lg sm:text-xl font-semibold", style: {
                        color: 'var(--Monochrome-950, #222)',
                        fontFamily: 'var(--Destop-Type-Satoshi-Font-Family, Satoshi)',
                        fontSize: 'var(--Destop-Type-Size-Body-Body-Heading, 20px)',
                        fontWeight: 'var(--Destop-Type-Weight-Body-Medium, 500)',
                        lineHeight: 'var(--Destop-Type-Line-Height-Body-Body-Heading, 30px)'
                    } }, faq.question),
                react_1["default"].createElement("span", { className: "transform transition-transform " + (openFaqIndex === index ? 'rotate-180' : ''), style: { transition: 'transform 0.3s ease' } }, "\u25B2 ")),
            openFaqIndex === index && (react_1["default"].createElement("div", { className: "mt-3 text-gray-600 text-sm sm:text-base" },
                react_1["default"].createElement("p", { style: {
                        color: 'var(--Monochrome-700, #4F4F4F)',
                        fontFamily: 'var(--Destop-Type-Satoshi-Font-Family, Satoshi)',
                        fontSize: 'var(--Destop-Type-Size-Body-Body, 18px)',
                        fontWeight: 'var(--Destop-Type-Weight-Body-Regular, 400)',
                        lineHeight: 'var(--Destop-Type-Line-Height-Body-Body, 27px)'
                    } }, faq.answer))))); })),
        react_1["default"].createElement("div", { className: "flex flex-col items-center justify-center mt-12 bg-indigo-700 rounded-3xl shadow-lg w-full px-4 sm:px-6 md:px-8 lg:px-12", style: {
                height: 'auto',
                padding: '40px',
                textAlign: 'center'
            } },
            react_1["default"].createElement("h2", { className: "font-bold text-white mb-4 text-center", style: {
                    fontFamily: 'Satoshi, sans-serif',
                    fontSize: '55px',
                    fontWeight: 500,
                    color: '#FFF',
                    lineHeight: '100%',
                    letterSpacing: '-2.90px',
                    textAlign: 'center',
                    textTransform: 'capitalize'
                } },
                "Do what you love, Sell More.",
                react_1["default"].createElement("br", null),
                "Leave the rest to us"),
            react_1["default"].createElement("p", { className: "text-white text-center mb-6" }, "Join SKUHunt today to make financial decisions with confidence."),
            react_1["default"].createElement("a", { className: "bg-white text-indigo-600 border border-indigo-600 py-3 px-6 rounded-full shadow-md hover:bg-indigo-50 transition duration-300 w-full md:w-auto" }, "Start Your Free Trial"))));
};
exports["default"] = FaqComponent;
