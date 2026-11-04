import ProtectedRoute from "@/components/authentication/ProtectedRoute";

export default function DashboardLayout({children,stats}: {children: React.ReactNode; stats: React.ReactNode;}) {
  return (
    <ProtectedRoute allowedRole="provider">
      {children}
      {stats}
    </ProtectedRoute>
 
  );
} 