"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar: React.FC = () => {
  // State to toggle mobile menu
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white p-3 py-8 lg:px-[7.25rem] z-50 relative">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/landingpage/logo.svg" alt="Logo" className="h-8" />
        </div>

        {/* Links Section (Desktop) */}
        <ul className="hidden md:flex space-x-10 text-gray-950 font-normal text-sm lg:text-base">
          <li>
            <a href="https://getwaitlist.com/waitlist/17274" target="_blank">
              <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
                Home
              </span>
            </a>
          </li>
          <li>
            <a href="https://getwaitlist.com/waitlist/17274" target="_blank">
              <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
                Demo
              </span>
            </a>
          </li>
          <li>
            <Link href="/fee-calculator">
              <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
                Tools
              </span>
            </Link>
          </li>
          <li>
            <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
              Pricing
            </span>
          </li>
          <li>
            <Link href="/blog">
              <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
                Blog
              </span>
            </Link>
          </li>
        </ul>

        {/* Try for Free Button */}
        <a
          href="https://getwaitlist.com/waitlist/17274"
          target="_blank"
          className="hidden md:block bg-indigo-600 text-white px-11 py-2 rounded-full hover:bg-indigo-700 transition duration-200 text-sm lg:text-base"
        >
          Try for Free
        </a>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button className="text-black" onClick={() => setMenuOpen(!menuOpen)}>
            {/* Hamburger Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Links */}
      <div
        className={`fixed inset-0 bg-white bg-opacity-90 md:hidden flex flex-col space-y-4 px-4 py-6 text-gray-700 font-normal text-sm transition-all duration-500 ease-in-out transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          transitionProperty: "transform",
          zIndex: menuOpen ? 10 : -1, // Ensure the mobile menu stays behind the hero when closed
        }}
      >
        {/* Close Button */}
        <button
          className="self-end text-indigo-600"
          onClick={() => setMenuOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        {/*for mobile devices */}
        <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
          Home
        </span>
        <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
          Demo
        </span>
        <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
          Tools
        </span>
        <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
          Pricing
        </span>
        <Link href="/blog">
          <span className="hover:text-indigo-600 transition duration-200 cursor-pointer">
            Blog
          </span>
        </Link>
        <a
          href="https://getwaitlist.com/waitlist/17274"
          target="_blank"
          className="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-indigo-700 transition duration-200"
        >
          Try for Free
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
