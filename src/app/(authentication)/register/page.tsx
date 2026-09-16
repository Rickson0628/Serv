"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm, useWatch } from "react-hook-form";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
  AiOutlineUser,
} from "react-icons/ai";

import Button from "@/components/ui/Button";
import authStyles from "../authentication.module.css";

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormData>({
    defaultValues: {
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

  function submitForm(data: RegisterFormData): void {
    // TODO: Connect registration form to authentication API/backend
    // TODO: Hash/store password securely on the server
    // TODO: Check whether email already exists
    // TODO: Create user account in database
    // TODO: Create authenticated session after successful registration
    // TODO: Redirect user after successful registration
    // TODO: Handle server/network errors

    console.log(data);
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

            {/* Password Field */}
            <div className={authStyles.field}>
              <label
                htmlFor="password"
                className="text-label"
              >
                Password
              </label>

              <div className="relative">
                <AiOutlineLock
                  className={authStyles.fieldIcon}
                />

                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message:
                        "Password must be at least 8 characters",
                    },
                  })}
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className={`${authStyles.input} ${authStyles.inputWithActions}`}
                />

                <Button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className={authStyles.fieldAction}
                  aria-label={
                    showPassword
                      ? "Hide password"
                      : "Show password"
                  }
                >
                  {showPassword ? (
                    <AiOutlineEyeInvisible />
                  ) : (
                    <AiOutlineEye />
                  )}
                </Button>
              </div>

              {errors.password && (
                <span className={authStyles.error}>
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

            {/* Submit Button */}
            <Button
              type="submit"
              className="btn-primary w-full"
            >
              Create Account
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
      </main>
    </div>
  );
};

export default RegisterPage;
