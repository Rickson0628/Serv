"use client";
import { useState } from "react";
import Link from "next/link";
import { Controller, useForm, useWatch } from "react-hook-form";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/navigation";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

import Button from "@/components/ui/Button";
import authStyles from "../authentication.module.css";
import AccountRoleSelector, {
  type AccountRole,
} from "@/components/authentication/AccountRoleSelector";

import { signup, verifyCode,  resendSignupVerificationCode } from '@/lib/api/auth'
import { BiLockAlt } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";
import VerificationCodeModal from "@/components/authentication/VerificationCodeModal";

interface RegisterFormData {
  role: AccountRole
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const RegisterPage = () => {
  const router = useRouter();
  const [submitEmail, setSubmitEmail] = useState("");
  const [submitAccountRole, setSubmitAccountRole] = useState<AccountRole>("customer");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    defaultValues: {
      role: 'customer',
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
    },
  });

  const password = useWatch({
    control,
    name: "password",
  });

  async function submitForm(data: RegisterFormData) {
    setLoginError(null);
    try {
       await signup({
        role: data.role,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
        agreeToTerms: data.agreeToTerms,
      })

      setSubmitEmail(data.email);
      setSubmitAccountRole(data.role)
      setIsModalOpen(true);

    } catch (err) {
      if (err instanceof Error) {
        setLoginError(err.message || "Signup Failed")
      } else {
        setLoginError("Something went wrong. Please try again.");
      }
    }

  }



  async function verify(code: string): Promise<void> {
    const result = await verifyCode({
      email: submitEmail,
      role: submitAccountRole,
      verificationCode: code,
    });

    router.push(`/dashboard/${result.user.role}`);
  }

  async function resendCode(): Promise<void> {
     await resendSignupVerificationCode({
      email: submitEmail,
      role: submitAccountRole,
    });
  }

  return (
    <div className={authStyles.page}>

      {/* Auth Prompt */}
      <div className={authStyles.prompt}>
        <span className="text-eyebrow">
          Already have an account?
        </span>

        <Link
          href="/login"
          className="text-eyebrow-blue transition-transform hover:scale-[1.02]"
        >
          Log in
        </Link>
      </div>

      {/* Register Container */}
      <main className={`${authStyles.main} py-10`}>
        <div className={authStyles.card}>

          {/* Header Container */}
          <div className={authStyles.header}>
            <h1 className={authStyles.heading}>
              Join Serv today
            </h1>

            <p className="text-body text-muted mt-2">
              Create your account to get started
            </p>
          </div>

          {/* Register as Container */}

          <div className="mb-6">
            <p className="text-label mb-3">Sign up as</p>

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

          {/* Social Login Container */}
          <div className={authStyles.social}>

            {/* TODO: Connect Google authentication */}
            <Button
              type="button"
              className={authStyles.socialButton}
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>

            {/* TODO: Connect Facebook authentication */}
            <Button
              type="button"
              className={authStyles.socialButton}
            >
              <BsFacebook
                size={20}
                className="text-blue-700"
              />

              Continue with Facebook
            </Button>
          </div>

          {/* Divider */}
          <div className={authStyles.divider}>
            <div className={authStyles.dividerLine} />

            <span className="text-sm text-muted">
              OR
            </span>

            <div className={authStyles.dividerLine} />
          </div>

          {/* Register Form */}
          <form
            className={authStyles.form}
            onSubmit={handleSubmit(submitForm)}
          >

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

              {/* First Name Field */}
              <div className={authStyles.field}>
                <label
                  htmlFor="firstName"
                  className="text-label"
                >
                  First Name
                </label>

                <div className="relative">
                  <AiOutlineUser
                    className={authStyles.fieldIcon}
                  />

                  <input
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                    id="firstName"
                    type="text"
                    placeholder="Enter your first name"
                    className={`${authStyles.input} ${authStyles.inputWithIcon}`}
                  />
                </div>

                {errors.firstName && (
                  <span className={authStyles.error}>
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              {/* Last Name Field */}
              <div className={authStyles.field}>
                <label
                  htmlFor="lastName"
                  className="text-label"
                >
                  Last Name
                </label>

                <div className="relative">
                  <AiOutlineUser
                    className={authStyles.fieldIcon}
                  />

                  <input
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                    id="lastName"
                    type="text"
                    placeholder="Enter your last name"
                    className={`${authStyles.input} ${authStyles.inputWithIcon}`}
                  />
                </div>

                {errors.lastName && (
                  <span className={authStyles.error}>
                    {errors.lastName.message}
                  </span>
                )}
              </div>
            </div>

            {/* Email Field */}
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
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className={`${authStyles.input} ${authStyles.inputWithIcon}`}
                />
              </div>

              {errors.email && (
                <span className={authStyles.error}>
                  {errors.email.message}
                </span>
              )}
            </div>


            <div className={authStyles.field}>
              <label
                className="text-label"
                htmlFor="password"
              >
                Password
              </label>

              {/* New Password Input and Visibility Button Container */}
              <div className="relative">
                {/* Lock Icon Inside the Input */}
                <BiLockAlt
                  className={authStyles.fieldIcon}
                  aria-hidden="true"
                />

                <input
                  id="newPassword"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  autoComplete="password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters",
                    },
                    validate: {
                      uppercase: (value) =>
                        /[A-Z]/.test(value) ||
                        "Password must include an uppercase letter",
                      lowercase: (value) =>
                        /[a-z]/.test(value) ||
                        "Password must include a lowercase letter",
                      number: (value) =>
                        /\d/.test(value) ||
                        "Password must include a number",
                    },
                  })}
                  className={`${authStyles.input} ${authStyles.inputWithActions}`}
                  aria-invalid={
                    errors.password ? "true" : "false"
                  }
                  aria-describedby="new-password-requirements new-password-error"
                />

                {/* Show or Hide New Password Button */}
                <Button
                  type="button"
                  className={authStyles.fieldAction}
                  onClick={() =>
                    setShowPassword((previous) => !previous)
                  }
                  aria-label={
                    showPassword
                      ? "Hide new password"
                      : "Show new password"
                  }
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible aria-hidden="true" />
                  ) : (
                    <AiOutlineEye aria-hidden="true" />
                  )}
                </Button>
              </div>

              {/* Password Requirements List */}
              <ul
                id="new-password-requirements"
                className="space-y-2"
                aria-label="Password requirements"
              >
                <li
                  className={`flex items-center gap-2 text-sm ${password.length >= 8 ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  At least 8 characters
                </li>

                <li
                  className={`flex items-center gap-2 text-sm ${/[A-Z]/.test(password) ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  Includes an uppercase letter
                </li>

                <li
                  className={`flex items-center gap-2 text-sm ${/[a-z]/.test(password) ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  Includes a lowercase letter
                </li>

                <li
                  className={`flex items-center gap-2 text-sm ${/\d/.test(password) ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  Includes a number
                </li>
              </ul>

              {/* New Password Validation Error */}
              {errors.password && (
                <span
                  id="new-password-error"
                  className={authStyles.error}
                  role="alert"
                >
                  {errors.password.message}
                </span>
              )}

            </div>


            {/* Confirm Password Field */}
            <div className={authStyles.field}>
              <label
                htmlFor="confirmPassword"
                className="text-label"
              >
                Confirm Password
              </label>

              <div className="relative">
                <AiOutlineLock
                  className={authStyles.fieldIcon}
                />

                <input
                  {...register("confirmPassword", {
                    required:
                      "Confirm password is required",
                    validate: (value) =>
                      value === password ||
                      "Passwords do not match",
                  })}
                  id="confirmPassword"
                  type={
                    showConfirmPassword
                      ? "text"
                      : "password"
                  }
                  placeholder="Confirm your password"
                  className={`${authStyles.input} ${authStyles.inputWithActions}`}
                />


                <Button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(
                      (prev) => !prev
                    )
                  }
                  className={authStyles.fieldAction}
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {showConfirmPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </Button>
              </div>

              {errors.confirmPassword && (
                <span className={authStyles.error}>
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Terms Agreement */}
            <div className="flex flex-col gap-1">
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeToTerms"
                  {...register("agreeToTerms", {
                    required:
                      "You must agree to the terms to continue",
                  })}
                  className="mt-1"
                />

                <label
                  htmlFor="agreeToTerms"
                  className="text-sm text-muted"
                >
                  I agree to the{" "}

                  <Link
                    href="/terms"
                    className="text-primary"
                  >
                    Terms of Service
                  </Link>

                  {" "}and{" "}

                  <Link
                    href="/privacy"
                    className="text-primary"
                  >
                    Privacy Policy
                  </Link>
                  .
                </label>
              </div>

              {errors.agreeToTerms && (
                <span className={authStyles.error}>
                  {errors.agreeToTerms.message}
                </span>
              )}
            </div>


            {loginError && <p role="alert" className={authStyles.error}>
              {loginError}
            </p>}
            {/* Submit Button */}
            <Button
              type="submit"
              className="btn-primary w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Creating Account..." : "Create Account"}
            </Button>
          </form>

          {/* Future Authentication TODOs */}
          {/* TODO: Add loading state while account is being created */}
          {/* TODO: Disable submit button while registration is processing */}
          {/* TODO: Display duplicate email error from backend */}
          {/* TODO: Add email verification flow */}
          {/* TODO: Redirect authenticated user after signup */}
          {/* TODO: Add authentication/session handling */}
        </div>



        {/*  Verification Modal */}
        {isModalOpen && (
          <VerificationCodeModal
            email={submitEmail}
            title="Enter authentication code"
            onClose={() => setIsModalOpen(false)}
            onVerify={verify}
            onResend={resendCode}
          />
        )}


      </main>
    </div>
  );
};

export default RegisterPage;
