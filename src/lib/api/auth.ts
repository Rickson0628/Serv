import type { AccountRole } from "@/components/authentication/AccountRoleSelector";


interface LoginCredentials{
  email: string;
  password: string;
  role: AccountRole;
}

interface LoginResponse{
  message:string;
  user:{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: AccountRole;
    isVerified: boolean;
  }
}

export async function login(credentials: LoginCredentials): Promise<LoginResponse>{

  const response = await fetch("/backend/api/auth/login", {
    method: "POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if (!response.ok){
    throw new Error(result.message || "Login Failed");
  }

  return result;

}
