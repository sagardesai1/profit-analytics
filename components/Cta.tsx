"use client";
import Link from "next/link";

function Cta() {
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="justify-center relative isolate px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:flex-auto lg:py-16 lg:text-left">
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Do what you love,{" "}
            <a href="/" className="font-semibold text-indigo-600">
              <span aria-hidden="true">Sell More.</span>
            </a>{" "}
            <br />
            Leave the rest to us.
          </h2>
          <p className="text-center mt-6 text-lg leading-8 text-gray-600">
            Join SKUHunt today to make financial decisions with confidence.
          </p>
          <div className="mt-10 flex justify-center items-center gap-x-6">
            <a
              target="_blank"
              href="https://getwaitlist.com/waitlist/17274"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              You can do less, and make more money.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cta;
