import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className="flex text-xl justify-end items-center w-full top-0 z-30
     p-5 text-gray-900"
    >
      {/* <Link href="/" className="text-gray-700 text-xl font-semibold">
        <img src="/logo.svg" alt="Logo" className="h-20 mr-4" />
      </Link> */}
      <div className="flex flex-row">
        <Link href="/" className="cursor-pointer font-semibold mr-4">
          Home
        </Link>
        <Link href="/about" className="cursor-pointer font-semibold mr-4">
          Services
        </Link>
        <Link href="/contact" className="cursor-pointer font-semibold mr-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
