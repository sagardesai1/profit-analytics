import {
  BadgeCheckIcon,
  SearchIcon,
  HandCoinsIcon,
  FileSpreadsheetIcon,
} from "lucide-react";
const benefits = [
  {
    name: "Accurate Profit Insights",
    description:
      "No more guessing—know exactly how much you're making with precise profit and loss reports, so you can make confident decisions to grow your business.",
    icon: BadgeCheckIcon,
  },
  {
    name: "Maximize Earnings by Tracking Fees",
    description:
      "Stop unexpected costs from eating into your profits. Easily account for all TikTok fees, including affiliate commissions, discounts, and adjustments, to see your true net profit.",
    icon: HandCoinsIcon,
  },
  {
    name: "Spot Top SKUs",
    description:
      "Pinpoint your best sellers and spot underperformers with SKU-level performance filters, so you can focus on scaling what works and cutting what doesn't.",
    icon: SearchIcon,
  },
  {
    name: "Optimize Your Sample Strategy",
    description:
      "Easily track sample distributions and see the return on investment from influencer promotions, helping you fine-tune your marketing spend.",
    icon: FileSpreadsheetIcon,
  },
];

export default function Benefits() {
  return (
    <div className="bg-white py-20 sm:py-44">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600"></h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            We're in the business of growing businesses.
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Sync all your data, gain actionable insights, and leverage your
            analytics for profitable growth.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-7xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {benefits.map((benefit) => (
              <div key={benefit.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <benefit.icon
                      aria-hidden="true"
                      className="h-6 w-6 text-white"
                    />
                  </div>
                  {benefit.name}
                </dt>
                <dd className="mt-2 text-base/7 text-gray-600">
                  {benefit.description}
                </dd>
                <div className="mt-8">
                  <a
                    target="_blank"
                    href="https://getwaitlist.com/waitlist/17274"
                    className="text-sm/6 font-semibold text-indigo-600"
                  >
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
