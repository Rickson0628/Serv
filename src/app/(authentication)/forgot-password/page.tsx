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

interface ForgotPasswordFormData {
  role: AccountRole;
  email: string;
}

const ForgotPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      role: "customer",
      email: "",
    },
  });

  function submitEmail(data: ForgotPasswordFormData): void {
    // TODO: Call forgot-password API with email and role.
    // For now, open modal for UI testing.

    setSubmittedEmail(data.email);
    setIsModalOpen(true);
  }

  async function verifyCode(code: string): Promise<void> {
    // TODO: Call verify-reset-code API.
    // Redirect to /reset-password after success.

    if (!/^\d{6}$/.test(code)) {
      throw new Error("Enter all six digits.");
    }

    throw new Error("Verification API is not connected yet.");
  }

  async function resendCode(): Promise<void> {
    // TODO: Call resend-reset-code API.

    throw new Error("Resend API is not connected yet.");
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
            onSubmit={handleSubmit(submitEmail)}
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

            <Button
              type="submit"
              className="btn-primary w-full"
            >
              Send Code
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
          onClose={() => setIsModalOpen(false)}
          onVerify={verifyCode}
          onResend={resendCode}
        />
      )}
    </div>
  );
};

export default ForgotPage;