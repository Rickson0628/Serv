"use client";

import { useState } from "react";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

interface LinkItem {
  name: string;
  href: string;
  className?: string;
}

const navLinks: LinkItem[] = [
  { name: "Home", href: "/" },
  { name: "Book a Service", href: "/services" },
  { name: "Be a Skilled Worker", href: "/providers" },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "About", href: "/about" },
];

const authLinks: LinkItem[] = [
  {
    name: "Log in",
    href: "/login",
    className: "btn-nav-secondary",
  },
  {
    name: "Sign up",
    href: "/register",
    className: "btn-nav-primary",
  },
];

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">

      {/* Mobile Navbar Header */}
      <div className="w-full flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-logo">
          Serv
        </Link>

        <button
          type="button"
          className="text-2xl text-slate-600 hover:text-primary"
          onClick={() => setIsOpen(true)}
          aria-label="Open navigation menu"
        >
          <RxHamburgerMenu />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-white">

          {/* Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
            <Link
              href="/"
              className="text-logo"
              onClick={() => setIsOpen(false)}
            >
              Serv
            </Link>

            <button
              type="button"
              className="text-2xl text-slate-600 hover:text-primary"
              onClick={() => setIsOpen(false)}
              aria-label="Close navigation menu"
            >
              <AiOutlineClose />
            </button>
          </div>

          {/* Menu Content */}
          <div className="px-6 py-8">

            {/* Auth Links */}
            <div className="flex gap-3">
              {authLinks.map((auth) => (
                <Link
                  key={auth.name}
                  href={auth.href}
                  className={`${auth.className} flex-1`}
                  onClick={() => setIsOpen(false)}
                >
                  {auth.name}
                </Link>
              ))}
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col mt-10">
              {navLinks.map((nav) => (
                <Link
                  key={nav.name}
                  href={nav.href}
                  className="text-nav py-4 border-b border-gray-200"
                  onClick={() => setIsOpen(false)}
                >
                  {nav.name}
                </Link>
              ))}
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default MobileNavbar;