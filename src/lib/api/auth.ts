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

interface SignupCredentials{
  firstName: string;
  lastName:string;
  email: string;
  password: string;
  role: AccountRole;
  agreeToTerms: boolean
}

interface SignupResponse{
  message: string;
}

export async function signup(credentials: SignupCredentials): Promise<SignupResponse>{  
  const response = await fetch('/backend/api/auth/signup',{
    method: "POST",
    headers:{
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if (!response.ok){
    throw new Error(result.message || "Signup Failed")
  }
  return result;
}

interface CodeVerificationCredentials{
    email: string;
    role: AccountRole;
    verificationCode: string;
  }


interface VerificationResponse{
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


export async function verifyCode(credentials: CodeVerificationCredentials):Promise<VerificationResponse>{
  const response = await fetch("/backend/api/auth/verify-email",{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
  const result = await response.json()
  if (!response.ok){
    throw new Error(result.message || "Verification Failed")
  }
  return result;
}

interface ResendVerificationSignupCredentials{
  email: string;
  role: AccountRole;
}

interface ResendVerificationSignupResponse{
  message: string;
}

export async function resendSignupVerificationCode(credentials : ResendVerificationSignupCredentials): Promise<ResendVerificationSignupResponse>{

  const response = await fetch('/backend/api/auth/resend-verification',{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  })
  const result = await response.json();

  if (!response.ok){
    throw new Error(result.message || "Resending Verificaton Code Failed");
  }
  return result;

}

interface ForgotPasswordCredentials{
  email: string;
  role: AccountRole;
}

interface ForgotPasswordResponse{
  message: string;
}

export async function forgotPassword(credentials:  ForgotPasswordCredentials): Promise<ForgotPasswordResponse>{
  const response = await fetch('/backend/api/auth/forgot-password', {
    method: "POST",
    headers:{
      'Content-Type': "application/json"
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if(!response.ok){
    throw new Error(result.message ||  "Failed to send password reset code." );
  }

  return result;
}

interface ResendPasswordResetCredentials{
  email: string;
  role: AccountRole;
}

interface ResendPasswordResetResponse{
  message: string;
}

export async function resendPasswordResetCode(credentials: ResendPasswordResetCredentials): Promise<ResendPasswordResetResponse>{
  const response = await fetch('/backend/api/auth/resend-reset-code', {
    method: "POST",
    headers:{
      'Content-Type': "application/json"
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if(!response.ok){
    throw new Error(result.message ||  "Failed to resend password reset code." );
  }

  return result;
}

interface VerifyResetCodeCredentials{
  email: string;
  code: string;
  role: AccountRole;
}

interface VerifyResetCodeResponse{
  message: string;
}

export async function verifyResetCode(credentials: VerifyResetCodeCredentials): Promise<VerifyResetCodeResponse>{
  const response = await fetch('/backend/api/auth/verify-reset-code', {
    method: "POST",
    headers:{
      'Content-Type': "application/json"
    },
    body: JSON.stringify(credentials),
  });

  const result = await response.json();

  if(!response.ok){
    throw new Error(result.message ||  "Failed to verify password reset code." );
  }

  return result;
}

interface ResetPasswordCredentials{
  newPassword: string;
}

interface ResetPasswordResponse{
  message: string;
}

export async function resetPassword(credentials: ResetPasswordCredentials): Promise<ResetPasswordResponse>{
  const response = await fetch('/backend/api/auth/reset-password',{
    method: "PATCH",
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials),
  })

  const result =await response.json();

  if (!response.ok){
    throw new Error(result.message || "Failed to reset password")
  }

  return result;

}