import { CheckIcon } from "lucide-react";

const tiers = [
  {
    name: "Starter",
    id: "tier-starter",
    href: "https://getwaitlist.com/waitlist/17274",
    priceMonthly: "$29",
    description:
      "Just starting your business or looking for the basics? This is the place.",
    features: [
      "1 Shop",
      "250 orders per month",
      "100 products",
      "Advanced analytics",
      "24-hour support response time",
    ],
    featured: false,
  },
  {
    name: "Growing",
    id: "tier-growing",
    href: "https://getwaitlist.com/waitlist/17274",
    priceMonthly: "$59",
    description:
      "Want to look more polished, save more time, and conquer cash flow? It’s Pro time.",
    features: [
      "1 Shop",
      "3,500 orders per month",
      "500 products",
      "Sample tracking",
      "Advanced analytics",
      "Dedicated support representative",
      "Automated reporting",
    ],
    featured: true,
  },
  {
    name: "Business",
    id: "tier-business",
    href: "https://getwaitlist.com/waitlist/17274",
    priceMonthly: "$99",
    description:
      "For established businesses looking to scale and optimize their operations.",
    features: [
      "Multiple Shops",
      "5,000 orders per month",
      "1,000 products",
      "Custom integrations",
      "LTV insights",
    ],
    featured: false,
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    href: "https://getwaitlist.com/waitlist/17274",
    priceMonthly: "$249",
    description:
      "Custom solutions and premium support for large organizations.",
    features: [
      "15,000 orders per month",
      "Unlimited products",
      "1-hour support response time",
      "Custom automated reporting",
    ],
    featured: false,
  },
];

function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}

export default function Pricing() {
  return (
    <div className="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
      ></div>
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-base/7 font-semibold text-indigo-600">Pricing</h2>
        <p className="mt-2 text-balance text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
          Choose the right plan for you
        </p>
      </div>
      <p className="mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-600 sm:text-xl/8">
        Choose an affordable plan that’s packed with the best features for your
        TikTok shop.
      </p>
      <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-6xl lg:grid-cols-4">
        {tiers.map((tier, tierIdx) => (
          <div
            key={tier.id}
            className={classNames(
              tier.featured
                ? "relative shadow-2xl ring-indigo-200"
                : "bg-white/60 sm:mx-8 lg:mx-0",
              tier.featured
                ? ""
                : tierIdx === 0
                ? "rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none"
                : "sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl",
              "rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10"
            )}
          >
            {tier.name === "Growing" && (
              <div className="absolute top-4 right-4 bg-indigo-600 text-white px-2 py-1 rounded-full text-sm font-semibold">
                Most Popular
              </div>
            )}
            <h3
              id={tier.id}
              className={classNames(
                tier.featured ? "text-indigo-600" : "text-indigo-600",
                "text-base/7 font-semibold"
              )}
            >
              {tier.name}
            </h3>
            <p className="mt-4 flex items-baseline gap-x-2">
              <span
                className={classNames(
                  tier.featured ? "text-gray-900" : "text-gray-900",
                  "text-5xl font-semibold tracking-tight"
                )}
              >
                {tier.priceMonthly}
              </span>
              <span
                className={classNames(
                  tier.featured ? "text-gray-500" : "text-gray-500",
                  "text-base"
                )}
              >
                /month
              </span>
            </p>
            <p
              className={classNames(
                tier.featured ? "text-gray-600" : "text-gray-600",
                "mt-6 text-base/7"
              )}
            >
              {tier.description}
            </p>
            {tier.name === "Business" && (
              <p
                className={classNames(
                  tier.featured ? "text-indigo-600" : "text-indigo-600",
                  "mt-6 text-sm font-semibold"
                )}
              >
                Everything in Growing, plus...
              </p>
            )}
            {tier.name === "Enterprise" && (
              <p
                className={classNames(
                  tier.featured ? "text-indigo-600" : "text-indigo-600",
                  "mt-6 text-sm font-semibold"
                )}
              >
                Everything in Business, plus...
              </p>
            )}
            <ul
              role="list"
              className={classNames(
                tier.featured ? "text-gray-600" : "text-gray-600",
                "mt-8 space-y-3 text-sm/6 sm:mt-10"
              )}
            >
              {tier.features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className={classNames(
                      tier.featured ? "text-indigo-500" : "text-indigo-600",
                      "h-6 w-5 flex-none"
                    )}
                  />
                  {feature}
                </li>
              ))}
            </ul>
            <a
              href={tier.href}
              target="_blank"
              aria-describedby={tier.id}
              className={classNames(
                tier.featured
                  ? "bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-500"
                  : "text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600",
                "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
              )}
            >
              Get started today
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
