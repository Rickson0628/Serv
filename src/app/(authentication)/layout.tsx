import Link from "next/link";
import Image from "next/image";
import { BsFillShieldLockFill } from "react-icons/bs";

export default function AuthenticationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full min-h-screen">

      {/* Auth Header */}
      <header className="fixed top-0 left-0 z-30 px-6 py-5">
        <Link
          href="/"
          className="text-logo text-4xl xl:text-5xl"
        >
          Serv
        </Link>
      </header>

      {/* Page Container */}
      <div className="min-h-screen lg:flex">

        {/* Desktop Image Section */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden">

          {/* Background Image */}
          <Image
            src="/authentication/LoginMechanic.png"
            alt="Mechanic showing customer a vehicle issue"
            fill
            priority
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Image Content */}
          <div className="relative z-10 flex flex-col justify-end pb-20 px-12 text-white">

            <span className="badge-primary w-fit mb-5 flex gap-1">
              <BsFillShieldLockFill />
              Trusted Professionals
            </span>

            <h1 className="text-heading max-w-xl">
              Vehicle services made{" "}
              <span className="text-primary">
                simple.
              </span>
            </h1>

            <p className="mt-4 text-lg text-white/70">
              Real service. Real people.
            </p>

          </div>
        </div>

        {/* Authentication Page */}
        <div className="w-full lg:w-1/2 xl:w-2/5">
          {children}
        </div>

      </div>
    </section>
  );
}