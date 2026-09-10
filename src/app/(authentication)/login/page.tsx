"use client";
import { BsFacebook } from "react-icons/bs"; 
import { FcGoogle } from "react-icons/fc"; 
import { useState } from "react";
import Link from "next/link";

import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineLock,
  AiOutlineMail,
} from "react-icons/ai";

import Button from "@/components/ui/Button";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="w-full">

      {/* Auth Prompt */}
      <div className="flex justify-end gap-1">
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
      <div className="flex flex-col items-center justify-center mt-15  gap-3">

        {/* Header Container */}
        <div className="flex flex-col items-center mb-5">
          <h1 className="text-heading">Welcome back</h1>

          <p className="text-muted">
            Log in to your account to continue
          </p>
        </div>

        {/* Social Login Container */}
        <div className="w-full flex flex-col gap-2">

          {/* TODO: Connect Google authentication */}
          <Button type="button" className="btn-social flex gap-2">
            <FcGoogle size={20} />Continue with Google
          </Button>

          {/* TODO: Connect Facebook authentication */}
          <Button type="button" className="btn-social flex gap-2 ">
            <BsFacebook size={20}  className="text-blue-700"/>
            <div className="text-gray-700">Continue with Facebook</div>
          </Button>

        </div>

        {/* Divider */}
        <div className="w-full flex items-center gap-5">
          <div className="flex-1 h-0.5 bg-gray-500" />

          <span>OR</span>

          <div className="flex-1 h-0.5 bg-gray-500" />
        </div>

        {/* Login Form */}
        <form className="w-full flex flex-col gap-4">

          {/* Email Field */}
          <div className="flex flex-col gap-1">
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
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="form-input pl-10"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
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
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Enter your password"
                className="form-input pl-10 pr-10"
              />

              <Button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
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
          </div>

          {/* Form Options */}
          <div className="w-full flex items-center justify-between">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember"
              />

              <span>Remember Me</span>
            </label>

            <Link href="/forgot-password" className="text-primary">
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

      </div>

    </section>
  );
};

export default LoginPage;