function Faqs() {
  const faqs = [
    {
      question: "How does SKUHunt ensure profit accuracy?",
      answer:
        "SKUHunt accounts for TikTok-specific fees like settlements, refunds, and adjustments that often don't appear immediately in transaction reports. We integrate directly with TikTok's API to ensure real-time data accuracy and provide you with the most precise profit calculations possible.",
    },
    {
      question: "What is SKU-level tracking, and why is it important?",
      answer:
        "SKU-level tracking provides profitability insights for each product, helping you identify your most and least profitable items.",
    },
    {
      question: "How does SKUHunt track sample costs?",
      answer:
        "You can log samples sent for specific SKUs along with their costs. SKUHunt aggregates this data so you know how much you're spending on promotional activities.",
    },
    {
      question: "Can I customize operational expenses in SKUHunt?",
      answer:
        "Yes, you can add, modify, and track operational costs like employee wages, software subscriptions, and marketing expenses.",
    },
    {
      question: "Is my data safe with SKUHunt?",
      answer:
        "Absolutely. We take data security seriously and employ industry-standard encryption and security measures to protect your business information. Your data is stored securely, and we never share your sensitive business information with third parties. We comply with all relevant data protection regulations.",
    },
    {
      question: "Can SKUHunt handle multiple TikTok Shop accounts?",
      answer:
        "Yes, you can connect multiple TikTok Shop accounts to your SKUHunt dashboard. This allows you to consolidate data from all your TikTok shops in one place, providing a comprehensive view of your business performance across all accounts.",
    },
  ];

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-24 sm:py-32 mx-auto max-w-screen-xl px-6 lg:px-8">
        <h2 className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance mb-8">
          Frequently asked questions
        </h2>
        <div className="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-10">
              <h3 className="flex items-center mb-4 font-semibold text-base leading-7 text-gray-900 dark:text-white">
                <svg
                  className="flex-shrink-0 mr-2 w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                {faq.question}
              </h3>
              <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
