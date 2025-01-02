import Link from "next/link";
import Navbar from "@/components/landingpage/Navbar";

export default function WaitlistSuccess() {
  return (
    <>
      <Navbar />
      <div className="h-[calc(100vh-500px)] flex items-center justify-center">
        <div className="max-w-2xl w-full space-y-12 p-16 bg-white rounded-lg">
          <div className="text-center">
            <h2 className="mt-12 text-4xl font-bold text-gray-900">
              You're on the list! 🎉
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              Thank you for joining our waitlist. We'll notify you when we
              launch!
            </p>
          </div>
          <div className="mt-16 text-center space-x-8">
            <Link
              href="/"
              className="inline-flex items-center px-6 py-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Return Home
            </Link>
            <Link
              href="/fee-calculator"
              className="inline-flex items-center px-6 py-4 border border-transparent text-md font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Try Fee Calculator
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
