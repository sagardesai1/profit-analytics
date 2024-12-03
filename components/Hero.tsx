"use client";

import HeroImage from "@/images/landingpage/3.png";
import Image from "next/image";
import { CheckIcon, ArrowRightIcon } from "lucide-react";
import { SignInButton } from "@clerk/nextjs";
import logo from "@/images/logo/logo.webp";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

export default function OldHero() {
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50 mt-2">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1 m-4 p-1.5">
            <Link href="/" className="">
              <div className="flex items-center w-36 h-4">
                <AspectRatio
                  ratio={16 / 9}
                  className="flex items-center justify-center"
                >
                  <Image priority src={logo} alt="SKUHunt"></Image>
                </AspectRatio>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <SignInButton>
              <div className="text-sm/6 font-semibold text-gray-900">
                Log in <span aria-hidden="true">&rarr;</span>
              </div>
            </SignInButton>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pt-24 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="mx-auto max-w-7xl py-16 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="text-left">
              {/* <div className="hidden sm:mb-8 sm:flex">
                <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Now available in the US Market.{" "}
                  <a
                    target="_blank"
                    href="https://getwaitlist.com/waitlist/17274"
                    className="font-semibold text-indigo-600"
                  >
                    <span aria-hidden="true" className="absolute inset-0" />
                    Learn more <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div> */}
              <h1 className="text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-6xl">
                Stop the Guesswork on Your{" "}
                <a href="/" className="font-semibold text-indigo-600">
                  <span aria-hidden="true">TikTok Shop's</span>
                </a>{" "}
                Profitability
              </h1>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-500 sm:text-xl/8">
                Instantly see your true profit with our{" "}
                <span className="font-semibold text-black">
                  accurate analytics dashboard
                </span>
                — track every sale, tiktok fee, and expense effortlessly,
                without spending hours on spreadsheets.
              </p>
              <div className="mt-8 space-y-2">
                <div className="flex flex-row gap-2 items-center">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-md text-pretty font-medium text-black">
                      Connect your TikTok Shop under 5 minutes
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-md text-pretty font-medium text-black">
                      Trusted by top TikTok sellers
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-md text-pretty font-medium text-black">
                      We never sell your data
                    </p>
                  </div>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                  <div>
                    <p className="text-md text-pretty font-medium text-black">
                      Our customers save 80+ hours per month
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10 flex items-center gap-x-6">
                <a
                  target="_blank"
                  href="https://getwaitlist.com/waitlist/17274"
                  className="flex flex-row gap-2 items-center rounded-md bg-indigo-600 px-3.5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Understand Your Profits Today{" "}
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:-mr-8 xl:-mr-16">
              <Image
                src={HeroImage}
                alt="Analytics Dashboard"
                className="w-full rounded-xl shadow-xl ring-offset-8 ring-8 ring-black/5"
                priority
                width={2432}
                height={1442}
              />
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>
    </div>
  );
}
