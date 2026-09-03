import Link from "next/link";

const Navbar = () => {
  return (
    // Main navigation bar
    <nav className="w-full px-10 py-5 flex justify-between shadow-xl">
      {/* Left side: logo + main navigation links */}
      <div className="flex justify-between items-center gap-40">
        <Link href="/" className="text-logo">Serv</Link>

        <div className="flex gap-5">
          <Link href="/login" className="text-label">Book a Service</Link>
          <Link href="/register" className="text-label">Be a Skilled Worker</Link>
        </div>
      </div>

      {/* Right side: login + sign up */}
      <div className="flex gap-5 justify-center items-center">
        <Link href="/login" className="text-label">Log in</Link>
        <Link href="/register" className="btn-primary">Sign up</Link>
      </div>
    </nav>
  );
};

export default Navbar;