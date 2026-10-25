"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Controller, useForm } from "react-hook-form";

import { AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import Button from "@/components/ui/Button";
import VerificationCodeModal from "@/components/authentication/VerificationCodeModal";

import authStyles from "../authentication.module.css";
import AccountRoleSelector, {
  type AccountRole,
} from "@/components/authentication/AccountRoleSelector";
import { forgotPassword,resendPasswordResetCode, verifyResetCode}  from '@/lib/api/auth'
import { useRouter } from "next/navigation";


interface ForgotPasswordFormData {
  role: AccountRole;
  email: string;
}

const ForgotPage = () => {

  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedAccountRole, setSubmittedAccountRole] = useState<AccountRole>("customer");
  const [forgotError, setForgotError] = useState<string | null>(null);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting},
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      role: "customer",
      email: "",
    },
  });

  
async function submitForm(data: ForgotPasswordFormData): Promise<void> {
  setForgotError(null);

  try {
    await forgotPassword({
      email: data.email,
      role: data.role,
    });

    setSubmittedEmail(data.email);
    setSubmittedAccountRole(data.role);
    setIsModalOpen(true);

  } catch (err) {
    setForgotError(
      err instanceof Error
        ? err.message
        : "Something went wrong. Please try again."
    );
  }
}

  
  async function verifyCode(code: string): Promise<void> {
   
    await verifyResetCode({
      email: submittedEmail, 
      role: submittedAccountRole, 
      code
    });

    router.push('/reset-password');

  }

  async function resendCode(): Promise<void> {
    await resendPasswordResetCode({
      email: submittedEmail, 
      role: submittedAccountRole
    });
  }

  return (
    <div className={authStyles.page}>
      {/* Auth Prompt */}
      <div className={authStyles.prompt}>
        <span className="text-eyebrow">
          Remember your password?
        </span>

        <Link
          href="/login"
          className="text-eyebrow-blue transition-transform hover:scale-[1.02]"
        >
          Login
        </Link>
      </div>

      {/* Forgot Password Container */}
      <main className={authStyles.main}>
        <div className={`${authStyles.card} gap-4`}>
          {/* Header */}
          <div className={authStyles.header}>
            <Image
              src="/authentication/lock.png"
              alt=""
              width={250}
              height={250}
              priority
            />

            <h1 className={authStyles.heading}>
              Forgot Password?
            </h1>

            <p className="text-body text-muted mt-2">
              Select your account type and enter your email
              to receive a 6-digit password reset code.
            </p>
          </div>

          {/* Account Role */}
          <div className="mb-6">
            <p className="text-label mb-3">
              Account Type
            </p>

            <Controller
              name="role"
              control={control}
              render={({ field }) => (
                <AccountRoleSelector
                  value={field.value}
                  onChange={field.onChange}
                />
              )}
            />
          </div>

          {/* Email Form */}
          <form
            className={`${authStyles.form} gap-4`}
            onSubmit={handleSubmit(submitForm)}
          >
            <div className={authStyles.field}>
              <label
                htmlFor="email"
                className="text-label"
              >
                Email
              </label>

              <div className="relative">
                <AiOutlineMail
                  className={authStyles.fieldIcon}
                  aria-hidden="true"
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`${authStyles.input} ${authStyles.inputWithIcon}`}
                  aria-invalid={
                    errors.email ? "true" : "false"
                  }
                />
              </div>

              {errors.email && (
                <span
                  className={authStyles.error}
                  role="alert"
                >
                  {errors.email.message}
                </span>
              )}
            </div>

            {forgotError && (<p role="alert" className={authStyles.error}>
              {forgotError}</p> 
              )}

            <Button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting? "Sending..." : "Send Code"}
            </Button>
          </form>

          <Link
            href="/login"
            className={authStyles.backLink}
          >
            <BiArrowBack aria-hidden="true" />
            Back to Login
          </Link>
        </div>
      </main>

      {/*  Verification Modal */}
      {isModalOpen && (
        <VerificationCodeModal
          email={submittedEmail}
          title="Enter authentication code"
          description="If an account exists, you'll receive a 6-digit code at"
          onClose={() => setIsModalOpen(false)}
          onVerify={verifyCode}
          onResend={resendCode}
        />
      )}
    </div>
  );
};

export default ForgotPage;