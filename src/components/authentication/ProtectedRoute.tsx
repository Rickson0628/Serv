"use client"
import { type ReactNode, useEffect } from "react"
import type { AccountRole } from "./AccountRoleSelector";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps{
  children: ReactNode;
  allowedRole: AccountRole;
}

const ProtectedRoute = ({children, allowedRole}:ProtectedRouteProps) => {
  const {user, isLoading, error, refreshUser   } = useCurrentUser();
  const router = useRouter();
  
  useEffect(()=>{
    if(isLoading || error){
      return;
    }
    if(!user){
      router.replace('/login');
      return;
    }
    if(user.role !== allowedRole){
      router.replace(`/dashboard/${user.role}`);
    }  

  }, [isLoading, error, user, allowedRole, router])

  if(isLoading){
    return  <p>Checking your session...</p>;
  }
  if (error) {
    return (
      <div>
        <p>Unable to verify your session: {error}</p>
        <button
          type="button"
          onClick={() => void refreshUser()}
        >
          Try again
        </button>
      </div>
    );
  }

  if(!user || user.role !== allowedRole){
    return null;
  }

  return <>{children}</>;


};

export default ProtectedRoute;