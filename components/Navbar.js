import React, { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div style={{ backgroundColor: "#5540af" }}>
      <div className="container flex items-center justify-between mx-auto" style={{ height: "70px" }}>
        <div className="mx-12">
          <a href="/">
            <h2 className="text-white text-lg font-bold">Portfolio</h2>
          </a>
        </div>

        <div className=" lg:block">

          {/* Normal View */}
          <ul className="flex items-center">
            <li className="group pl-6">
              <a
                href="/#about"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                About
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#services"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Services
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#portfolio"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Portfolio
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#work"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Work
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#blog"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Blog
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#contact"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>

        <div className="block lg:hidden">
          <button onClick={toggleMobileMenu}>
            <i className="bx bx-menu text-4xl text-white"></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden">
          <ul className="flex flex-col items-center">
            <li className="group">
              <a
                href="/#about"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                About
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#services"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Services
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#portfolio"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Portfolio
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#work"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Work
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#blog"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Blog
              </a>
            </li>

            <li className="group pl-6">
              <a
                href="/#contact"
                className="cursor-pointer px-2 py-1 text-white font-semibold uppercase hover:bg-yellow-500"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </div>
  );
}
