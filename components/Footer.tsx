import Image from "next/image";
import React from "react";
// import LogoImage from "@/images/logos/logo-image.png";
// import { AspectRatio } from "./ui/aspect-ratio";
import Link from "next/link";

function Footer() {
  return (
    <footer className="p-4 mx-auto max-w-full md:p-8 lg:p-10">
      <div className="my-6 border-gray-200 border-b sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="block text-sm text-gray-500 dark:text-gray-400">
          © 2024{" "}
          <a href="/" className="hover:underline">
            SKUHunt
          </a>
          . All Rights Reserved.
        </span>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          <div>
            Email:{" "}
            <a href="mailto:shaff@skuhunt.com" className="hover:underline">
              shaff@skuhunt.com
            </a>
          </div>
          <div>
            Phone:{" "}
            <a href="tel:+16465665500" className="hover:underline">
              646-566-5500
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
