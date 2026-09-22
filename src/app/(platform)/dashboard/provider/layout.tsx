export default function DashboardLayout({
  children,
  stats,
}: {
  children: React.ReactNode;
  stats: React.ReactNode;
}) {
  return (
    <div className="flex gap-10">
      
      {children}

      
      {stats}

    </div>
  );
}