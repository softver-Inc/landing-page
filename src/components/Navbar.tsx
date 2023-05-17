import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-100 flex justify-between items-center w-full
     p-5 text-gray-700 border border-gray-300 shadow-lg">
      <Link href="/" className="text-gray-700 text-xl font-semibold">
        <img src="/logo.svg" alt="Logo" className="h-20 mr-4" />
      </Link>
      <div className="flex flex-row">
        <Link href="/" className=" text-sm font-semibold mr-4">
          Home
        </Link>
        <Link href="/about" className=" text-sm font-semibold mr-4">
          About
        </Link>
        <Link href="/contact" className="text-sm font-semibold mr-4">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;