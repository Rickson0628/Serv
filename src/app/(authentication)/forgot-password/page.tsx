"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { AiOutlineMail } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

interface ForgotPasswordFormData {
  email: string;
}

interface CodeFormData {
  code: string[];
}

const ForgotPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
    },
  });

  const {
    register: registerCode,
    handleSubmit: handleCodeSubmit,
    formState: { errors: codeErrors },
  } = useForm<CodeFormData>({
    defaultValues: {
      code: ["", "", "", "", "", ""],
    },
  });

  function submitEmail(data: ForgotPasswordFormData): void {
    // TODO: Request a password reset code from the authentication API.
    setSubmittedEmail(data.email);
    setIsModalOpen(true);
  }

  function submitCode(data: CodeFormData): void {
    // TODO: Verify the authentication code with the authentication API.
    console.log(data);
  }

  return (

    <div className="auth-page">
      {/* Auth Prompt */}
      <div className="auth-prompt">
        <span className="text-eyebrow">
          Remember your password?
        </span>

        <Link
          href="/login"
          className="text-eyebrow-blue transition-transform hover:scale-102"
        >
          Login
        </Link>
      </div>

      {/* Forgot Password Container */}
      <main className="auth-main">

        <div className="auth-card">

          {/* Header Container */}
          <div className="auth-header">
           
            <Image
              src="/authentication/lock.png"
              alt=""
              width={350}
              height={350}
            />
            
            <h1 className="auth-heading">
              Forgot Password?
            </h1>

            <p className="text-body text-muted mt-2">
              No worries. Enter your email and we&apos;ll send you a link to reset your password.
            </p>
          </div>

          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(submitEmail)}
          >
            <div className="form-field">
              <label htmlFor="email" className="text-label">
                Email
              </label>

              <div className="relative">
                <AiOutlineMail className="form-icon" aria-hidden="true" />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="form-input pl-10"
                  aria-invalid={errors.email ? "true" : "false"}
                />
              </div>

              {errors.email && (
                <span className="form-error" role="alert">
                  {errors.email.message}
                </span>
              )}
            </div>

            <Button type="submit" className="btn-primary w-full">
              Send Code
            </Button>
          </form>

          <Link href="/login" className="back-link">
            <BiArrowBack aria-hidden="true" />
            Back to Login
          </Link>
        </div>
      </main>

      <Modal
        isOpen={isModalOpen}
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="verification-title"
      >
        <div className="modal-card">
          <Button
            type="button"
            className="modal-close"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close verification dialog"
          >
            ×
          </Button>

          <Image
            src="/authentication/email.png"
            alt=""
            width={250}
            height={250}
          />

          <h2 id="verification-title" className="auth-heading text-center">
            Enter authentication code
          </h2>

          <p className="text-muted mt-2">We&apos;ve sent you a 6-digit code to</p>
          <p className="text-muted font-semibold">{submittedEmail}</p>

          <form
            onSubmit={handleCodeSubmit(submitCode)}
            className="verification-form"
          >
            <div className="verification-inputs">
              {Array.from({ length: 6 }, (_, index) => (
                <input
                  key={index}
                  {...registerCode(`code.${index}`, {
                    required: true,
                    pattern: /\d/,
                  })}
                  type="text"
                  inputMode="numeric"
                  maxLength={1}
                  className="verification-code-input"
                  aria-label={`Code digit ${index + 1}`}
                  aria-invalid={codeErrors.code?.[index] ? "true" : "false"}
                />
              ))}
            </div>

            {codeErrors.code && (
              <span className="form-error text-center" role="alert">
                Enter all six digits.
              </span>
            )}

            <Button type="submit" className="btn-primary w-full">
              Verify
            </Button>

            <p className="text-muted text-center">
              Didn&apos;t receive the code?{" "}
              <span className="text-primary">Resend the code</span>
            </p>
            <span className="text-muted text-center">
              Resend available in 00:45
            </span>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPage;
