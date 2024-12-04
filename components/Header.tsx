import React from "react";
import { SignInButton } from "@clerk/nextjs";
import logo from "@/images/logo/logo.webp";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";
function Header() {
  const { userId } = auth();
  if (userId) {
    return null;
  }

  return (
    <div>
      <header className="inset-x-0 top-0 z-50">
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
    </div>
  );
}

export default Header;
