"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

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
    <section className="w-full min-h-screen">

      {/* Auth Header */}
      <header className="fixed top-0 left-0 z-30 px-6 py-5">
        <Link href="/" className="text-logo text-4xl xl:text-5xl ">
          Serv
        </Link>
      </header>


      {/* Page Container */}
      <div className="min-h-screen lg:flex">

        {/* Desktop Image Section */}
        <div className="hidden lg:flex lg:w-1/2 xl:w-3/5 relative overflow-hidden">

          {/* Background Image */}
          <Image
            src="/home/LoginMechanic.png"
            alt="Mechanic showing customer a vehicle issue"
            fill
            priority
            className="object-cover"
          />

          {/* Image Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Image Content */}
        <div className="relative z-10 flex flex-col justify-end pb-20 px-12 text-white">

            <span className="badge-primary w-fit mb-5">
              Trusted Professionals
            </span>

            <h1 className="text-heading max-w-xl">
              Vehicle services made 
              <span className="text-heading text-primary">
              {" simple."}
            </span>
            </h1>

         

            <p className="mt-4 text-lg text-white/70">
              Real service. Real people.
            </p>

          </div>
        </div>


        {/* Login Section */}
        <div className="w-full lg:w-1/2 xl:w-2/5 flex flex-col min-h-screen px-6 py-6 md:px-10 lg:px-16">

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
                <h1 className="text-heading">
                  Welcome back
                </h1>

                <p className="text-body text-muted mt-2">
                  Log in to your account to continue
                </p>
              </div>


              {/* Social Login Container */}
              <div className="w-full flex flex-col gap-3 ">

                {/* Google Authentication */}
                <Button
                  type="button"
                  className="btn-social"
                >
                  <FcGoogle size={20} />
                  Continue with Google
                </Button>

                {/* Facebook Authentication */}
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
              <form className="w-full flex flex-col gap-5">

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
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      className="form-input pl-10"
                    />
                  </div>

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
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
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
                </div>


                {/* Form Options */}
                <div className="flex items-center justify-between">

                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name="remember"
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

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default LoginPage;