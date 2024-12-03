import { ShieldCheck } from "lucide-react";

export default function Trust() {
  return (
    <div className="bg-white py-24 sm:py-30">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto lg:text-center">
          <h2 className="text-base/7 font-semibold text-indigo-600">
            We Value Your Trust
          </h2>
          <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
            SKUHunt is Trusted
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
            Our mission is to provide you with the most accurate and reliable
            data without selling your data to advertisers or third parties.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              target="_blank"
              href="https://getwaitlist.com/waitlist/17274"
              className="flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Guarantee Your Data's Privacy <ShieldCheck className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
