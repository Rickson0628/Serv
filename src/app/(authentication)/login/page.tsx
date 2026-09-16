"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";

import Button from "@/components/ui/Button";

interface LoginFormData {
  email: string;
  password: string;
  remember: boolean;
}

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  function submitForm(data: LoginFormData): void {
    // TODO: Connect login form to authentication API/backend
    // TODO: Handle successful login and redirect user
    // TODO: Handle invalid credentials / server errors
    console.log(data);
  }

  return (
    <div className="auth-page">

      {/* Auth Prompt */}
      <div className="auth-prompt">
        <span className="text-eyebrow">
          Don&apos;t have an account?
        </span>

        <Link
          href="/register"
          className="text-eyebrow-blue transition-transform hover:scale-[1.02]"
        >
          Sign up
        </Link>
      </div>

      {/* Login Container */}
      <main className="auth-main">

        <div className="auth-card">

          {/* Header Container */}
          <div className="auth-header">
           <h1 className="auth-heading">
              Welcome back
            </h1>

            <p className="text-body text-muted mt-2">
              Log in to your account to continue
            </p>
          </div>

          {/* Social Login Container */}
          <div className="auth-social">

            {/* TODO: Connect Google authentication */}
            <Button
              type="button"
              className="btn-social"
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>

            {/* TODO: Connect Facebook authentication */}
            <Button
              type="button"
              className="btn-social"
            >
              <BsFacebook
                size={20}
                className="text-blue-700"
              />

              Continue with Facebook
            </Button>
          </div>

          {/* Divider */}
          <div className="auth-divider">
            <div className="auth-divider-line" />

            <span className="text-sm text-muted">
              OR
            </span>

            <div className="auth-divider-line" />
          </div>

          {/* Login Form */}
          <form
            className="auth-form"
            onSubmit={handleSubmit(submitForm)}
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
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="form-input form-input-icon"
                />
              </div>

              {errors.email && (
                <span className="form-error">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-field">
              <label
                htmlFor="password"
                className="text-label"
              >
                Password
              </label>

              <div className="relative">
                <AiOutlineLock
                  className="form-icon"
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
                  className="form-input form-input-actions"
                />

                <Button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="form-action"
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
                <span className="form-error">
                  {errors.password.message}
                </span>
              )}
            </div>

            {/* Form Options */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  {...register("remember")}
                />

                <span>
                  Remember Me
                </span>
              </label>

         
              <Link
                href="/forgot-password"
                className="text-primary"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="btn-primary w-full"
            >
              Login
            </Button>
          </form>

          {/* Terms */}
          <p className="text-center text-sm text-muted mt-6">
            By continuing, you agree to our{" "}
            <Link
              href="/terms"
              className="text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>

          {/* TODO: Add loading state while login is processing */}
          {/* TODO: Disable submit button while processing */}
          {/* TODO: Add server error message */}
          {/* TODO: Redirect after successful login */}
          {/* TODO: Add authentication/session handling */}
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
