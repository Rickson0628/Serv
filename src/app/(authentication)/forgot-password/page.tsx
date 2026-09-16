"use client";

import { useEffect, useRef, useState } from "react";
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
  const [timer, setTimer] = useState(0);

  const codeInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Forgot Password Form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgotPasswordFormData>({
    defaultValues: {
      email: "",
    },
  });

  // Verification Code Form
  const {
    register: registerCode,
    handleSubmit: handleCodeSubmit,
    reset: resetCode,
    formState: { errors: codeErrors },
  } = useForm<CodeFormData>({
    defaultValues: {
      code: ["", "", "", "", "", ""],
    },
  });

  // Countdown Timer
  useEffect(() => {
    if (timer <= 0) return;

    const timeoutId = setTimeout(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, [timer]);

  // Format Timer
  function formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }

  // Submit Email
  function submitEmail(data: ForgotPasswordFormData): void {
    // TODO: Send password reset code through authentication API.
    // TODO: Check if the email exists.
    // TODO: Handle server/network errors.
    // TODO: Only open modal after the code is successfully sent.

    console.log("Send code to:", data.email);

    setSubmittedEmail(data.email);
    setTimer(60);
    resetCode();
    setIsModalOpen(true);
  }

  // Submit Verification Code
  function submitCode(data: CodeFormData): void {
    const authenticationCode = data.code.join("");

    // TODO: Verify authentication code through authentication API.
    // TODO: Handle incorrect verification code.
    // TODO: Handle expired verification code.
    // TODO: Redirect to /reset-password after successful verification.

    console.log("Authentication Code:", authenticationCode);
  }

  // Resend Verification Code
  function resendCode(): void {
    // TODO: Send another verification code through authentication API.
    // TODO: Handle resend failure.

    console.log("Resend code to:", submittedEmail);

    resetCode();
    setTimer(60);

    codeInputRefs.current[0]?.focus();
  }

  // Close Verification Modal
  function closeModal(): void {
    setIsModalOpen(false);
    setTimer(0);
    resetCode();
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
          className="text-eyebrow-blue transition-transform hover:scale-[1.02]"
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
              width={250}
              height={250}
              priority
            />

            <h1 className="auth-heading">
              Forgot Password?
            </h1>

            <p className="text-body text-muted mt-2">
              No worries. Enter your email and we&apos;ll send you a
              6-digit code to reset your password.
            </p>
          </div>

          {/* Email Form */}
          <form
            className="flex w-full flex-col gap-4"
            onSubmit={handleSubmit(submitEmail)}
          >
            {/* Email Field */}
            <div className="form-field">
              <label
                htmlFor="email"
                className="text-label"
              >
                Email
              </label>

              <div className="relative">
                <AiOutlineMail
                  className="form-icon"
                  aria-hidden="true"
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="form-input pl-10"
                  aria-invalid={
                    errors.email ? "true" : "false"
                  }
                />
              </div>

              {errors.email && (
                <span
                  className="form-error"
                  role="alert"
                >
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Send Code */}
            <Button
              type="submit"
              className="btn-primary w-full"
            >
              Send Code
            </Button>
          </form>

          {/* Back to Login */}
          <Link
            href="/login"
            className="back-link"
          >
            <BiArrowBack aria-hidden="true" />
            Back to Login
          </Link>
        </div>
      </main>

      {/* Verification Modal */}
      <Modal
        isOpen={isModalOpen}
        className="modal-backdrop"
        role="dialog"
        aria-modal="true"
        aria-labelledby="verification-title"
      >
        <div className="modal-card">

          {/* Close Button */}
          <Button
            type="button"
            className="modal-close"
            onClick={closeModal}
            aria-label="Close verification dialog"
          >
            ×
          </Button>

          {/* Email Image */}
          <Image
            src="/authentication/email.png"
            alt=""
            width={200}
            height={200}
          />

          {/* Modal Header */}
          <div className="flex flex-col items-center text-center">
            <h2
              id="verification-title"
              className="auth-heading"
            >
              Enter authentication code
            </h2>

            <p className="text-muted mt-2">
              We&apos;ve sent you a 6-digit code to
            </p>

            <p className="font-semibold">
              {submittedEmail}
            </p>
          </div>

          {/* Verification Form */}
          <form
            onSubmit={handleCodeSubmit(submitCode)}
            className="verification-form"
          >
            {/* Verification Inputs */}
            <div className="verification-inputs">
              {Array.from({ length: 6 }, (_, index) => {
                const {
                  ref,
                  onChange,
                  ...codeField
                } = registerCode(`code.${index}`, {
                  required: true,
                  pattern: /^\d$/,
                });

                return (
                  <input
                    key={index}
                    {...codeField}

                    ref={(element) => {
                      // Give the input to React Hook Form
                      ref(element);

                      // Save the input so we can focus next/previous boxes
                      codeInputRefs.current[index] = element;
                    }}

                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    autoComplete="one-time-code"

                    className="verification-code-input"

                    aria-label={`Code digit ${index + 1}`}

                    aria-invalid={
                      codeErrors.code?.[index]
                        ? "true"
                        : "false"
                    }

                    onChange={(event) => {
                      const input = event.currentTarget;

                      // Remove anything that is not a number
                      input.value = input.value.replace(
                        /\D/g,
                        ""
                      );

                      // Update React Hook Form
                      onChange(event);

                      // Move to next input
                      if (
                        input.value &&
                        index < 5
                      ) {
                        codeInputRefs.current[
                          index + 1
                        ]?.focus();
                      }
                    }}

                    onKeyDown={(event) => {
                      // Move to previous input if current box is empty
                      if (
                        event.key === "Backspace" &&
                        !event.currentTarget.value &&
                        index > 0
                      ) {
                        codeInputRefs.current[
                          index - 1
                        ]?.focus();
                      }
                    }}
                  />
                );
              })}
            </div>

            {/* Verification Error */}
            {codeErrors.code && (
              <span
                className="form-error text-center"
                role="alert"
              >
                Enter all six digits.
              </span>
            )}

            {/* Verify Button */}
            <Button
              type="submit"
              className="btn-primary w-full"
            >
              Verify
            </Button>

            {/* Resend Code */}
            <p className="text-muted text-center">
              Didn&apos;t receive the code?{" "}

              {timer > 0 ? (
                <span className="text-muted">
                  Resend available in{" "}
                  {formatTime(timer)}
                </span>
              ) : (
                <button
                  type="button"
                  onClick={resendCode}
                  className="text-primary font-medium"
                >
                  Resend Code
                </button>
              )}
            </p>
          </form>
        </div>
      </Modal>
    </div>
  );
};

export default ForgotPage;