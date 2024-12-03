import { UserRound, HandCoins, LayoutDashboard } from "lucide-react";

const features = [
  {
    name: "1. Sign Up & Connect Your TikTok Shop",
    description:
      "Get started in minutes. Create a SkuHunt account and link your TikTok shop to start pulling in your sales and fees automatically.",
    icon: UserRound,
  },
  {
    name: "2. Enter Your Product Costs",
    description:
      "Gain instant clarity on profitability. Add your Cost of Goods Sold (COGS) for each product to ensure accurate profit calculations.",
    icon: HandCoins,
  },
  {
    name: "3. See Your Profits Instantly",
    description:
      "Track performance effortlessly. SkuHunt calculates profit and loss for every SKU, displaying everything in a clear, actionable dashboard.",
    icon: LayoutDashboard,
  },
];

function HowItWorks() {
  return (
    <div className="overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center ">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sync Your TikTok Shop Under{" "}
            <span className="text-indigo-600" aria-hidden="true">
              5 Minutes
            </span>
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Managing your finances has never been easier.
          </p>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-16 sm:gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <dl
              key={feature.name}
              className="mt-20 max-w-lg mx-auto space-y-8 text-base leading-7 text-gray-600 lg:max-w-none"
            >
              <div className="relative">
                <feature.icon
                  className="h-20 w-20 text-indigo-600 mb-8 lg:mb-16 mx-auto"
                  aria-hidden="true"
                />
                <dt className="mb-4 font-semibold text-gray-900">
                  {feature.name}
                </dt>
                <dd>{feature.description}</dd>
              </div>
              <div className="mt-8">
                <a
                  target="_blank"
                  href="https://getwaitlist.com/waitlist/17274"
                  className="text-sm/6 font-semibold text-indigo-600"
                >
                  Explore Your Dashboard <span aria-hidden="true">→</span>
                </a>
              </div>
            </dl>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
