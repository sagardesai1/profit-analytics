import Image from "next/image";
import ShaffImage from "@/images/landingpage/testimonals/ShaffTestimonial.png";

export default function Testimonals() {
  return (
    <section className="relative isolate overflow-hidden bg-white px-6 py-20 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600">
          Testimonials
        </h2>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 sm:text-2xl/9">
            <p>
              “As an e-commerce seller myself, I know that timely, accurate
              insights are game-changers. This software is built for TikTok Shop
              sellers who need real-time data to continue maximizing their
              profit potential and make every decision with confidence.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <Image
              alt=""
              src={ShaffImage}
              className="mx-auto h-10 w-10 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">Shaff Qureshi</div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600">
                7-Figure TikTok Seller and CEO of Jungle Advisor (TikTok Agency)
              </div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
