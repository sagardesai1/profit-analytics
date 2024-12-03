import Image from "next/image";
import EnsightLogo from "@/images/logo/companies/ensight-logo.png";
import AmericanSeairLogo from "@/images/logo/companies/american-seair-logo.png";

export default function Logos() {
  return (
    <div className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg/8 font-semibold text-gray-900">
          Trusted by TikTok Sellers Driving 7-Figure Monthly Revenue
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl lg:mx-0 lg:max-w-none">
          <Image
            alt="Transistor"
            src={EnsightLogo}
            width={200}
            height={60}
            className="max-h-12 w-full object-contain"
          />
          <Image
            alt="Reform"
            src={AmericanSeairLogo}
            width={200}
            height={60}
            className="max-h-12 w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
