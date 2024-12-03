import FeaturesImage from "@/images/landingpage/Chart 1.png";
import Image from "next/image";
import {
  InspectIcon,
  ChartColumnIncreasing,
  BadgeDollarSign,
} from "lucide-react";

const features = [
  {
    name: "Track every expense under your shop.",
    description:
      "Effortlessly add and monitor all your costs to maintain a comprehensive financial overview.",
    icon: InspectIcon,
  },
  {
    name: "Understand order and affiliate trends.",
    description:
      "Analyze your order and affiliate sales performance over time to spot emerging patterns.",
    icon: ChartColumnIncreasing,
  },
  {
    name: "Identify winning products.",
    description:
      "Discover which items are driving your profits and which ones might be holding you back.",
    icon: BadgeDollarSign,
  },
];

function Features() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Explore Your Data
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Operate your business with clarity. Add expenses, account for
                refunds, and more.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Get a clear picture of your profits and losses, and pinpoint
                which products are your top earners.
              </p>
              <div className="mt-8">
                <a
                  target="_blank"
                  href="https://getwaitlist.com/waitlist/17274"
                  className="text-sm/6 font-semibold text-indigo-600"
                >
                  Browse Your Dashboard <span aria-hidden="true">→</span>
                </a>
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5.5 w-5.5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div>
            <Image
              src={FeaturesImage}
              alt="Biohacking routines"
              className="z-20 w-full sm:w-[48rem] md:w-[57rem] max-w-none rounded-xl sm:md:-ml-4 lg:-ml-0"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
