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
    <div className="min-h-screen flex flex-col px-6 py-6 md:px-10 lg:px-16">

      {/* Auth Prompt */}
      <div className="pt-4 flex justify-end gap-1">
        <span className="text-eyebrow">
          Don&apos;t have an account?
        </span>

        <Link
          href="/register"
          className="text-eyebrow-blue transition-transform hover:scale-102"
        >
          Sign up
        </Link>
      </div>

      {/* Login Container */}
      <div className="flex-1 flex items-center justify-center">

        <div className="w-full max-w-xl">

          {/* Header Container */}
          <div className="flex flex-col items-center text-center mb-8">
           <h1 className="font-extrabold text-3xl lg:text-4xl tracking-tight">
              Welcome back
            </h1>

            <p className="text-body text-muted mt-2">
              Log in to your account to continue
            </p>
          </div>

          {/* Social Login Container */}
          <div className="w-full flex flex-col gap-3">

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
          <div className="w-full flex items-center gap-5 my-6">
            <div className="flex-1 h-px bg-slate-300" />

            <span className="text-sm text-muted">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-300" />
          </div>

          {/* Login Form */}
          <form
            className="w-full flex flex-col gap-5"
            onSubmit={handleSubmit(submitForm)}
          >

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="email"
                className="text-label"
              >
                Email
              </label>

              <div className="relative">
                <AiOutlineMail
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                />

                <input
                  {...register("email", {
                    required: "Email is required",
                  })}
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="form-input pl-10"
                />
              </div>

              {errors.email && (
                <span className="text-red-500 text-sm">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="password"
                className="text-label"
              >
                Password
              </label>

              <div className="relative">
                <AiOutlineLock
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
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
                  className="form-input pl-10 pr-10"
                />

                <Button
                  type="button"
                  onClick={() =>
                    setShowPassword((prev) => !prev)
                  }
                  className="absolute right-3 top-1/2 -translate-y-1/2"
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
                <span className="text-red-500 text-sm">
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
      </div>
    </div>
  );
};

export default LoginPage;