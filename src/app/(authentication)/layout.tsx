import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">

  

      {/* Auth Page Content */}
      <main>
        {children}
      </main>

    </div>
  );
}