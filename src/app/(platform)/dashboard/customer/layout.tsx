import ProtectedRoute from "@/components/authentication/ProtectedRoute";

export default function DashboardCustomerLayout({ children}: {children: React.ReactNode}) {
  return (   
    <ProtectedRoute allowedRole="customer">
      {children}
    </ProtectedRoute>
  );
}