import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white px-6 py-4 md:px-10 md:py-5">

      {/* Auth Header */}
      <header className="w-full ">
        <Link href="/" className="text-logo">
          Serv 
        </Link>
      </header>

      {/* Auth Page Content */}
      <main>
        {children}
      </main>

    </div>
  );
}