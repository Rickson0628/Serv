import Link from "next/link";
import MobileNavbar from "./MobileNavbar";

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
  { name: "Log in", href: "/login", className: "text-nav" },
  { name: "Sign up", href: "/register", className: "btn-nav-primary " },
];

const Navbar = () => {
  return (
    <nav className="fixed z-10 w-full shadow-xl border-b border-gray-300 bg-white">

      {/* Desktop Navbar */}
      <div className="hidden lg:flex w-full px-10 py-5 justify-between items-center ">

        {/* Logo */}
        <Link href="/" className="text-logo">
          Serv
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-7">
          {navLinks.map((nav) => (
            <Link
              key={nav.name}
              href={nav.href}
              className="text-nav"
            >
              {nav.name}
            </Link>
          ))}
        </div>

        {/* Auth Links */}
        <div className="flex items-center gap-3">
          {authLinks.map((auth) => (
            <Link
              key={auth.name}
              href={auth.href}
              className={`${auth.className} text-center`}
            >
              {auth.name}
            </Link>
          ))}
        </div>

      </div>

      {/* Mobile Navbar */}
      <MobileNavbar />

    </nav>
  );
};

export default Navbar;