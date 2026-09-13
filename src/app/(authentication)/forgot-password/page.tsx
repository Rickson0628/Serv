"use client"
import Image from "next/image";
import { BiArrowBack } from "react-icons/bi"; 
import { useForm } from "react-hook-form";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import Button from "@/components/ui/Button";

interface LoginFormData {
  email: string;
}

const ForgotPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
    },
  });
  return (

    <div className="min-h-screen flex flex-col px-6 py-6 md:px-10 lg:px-16">
      {/* Auth Prompt */}
      <div className="pt-4 flex justify-end gap-1">
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

      {/* Login Container */}
      <div className="flex-1 flex items-center justify-center">

        <div className="w-full max-w-xl flex flex-col gap-4">

          {/* Header Container */}
          <div className="flex flex-col items-center text-center mb-8">
           
            <Image src="/authentication/lock.png" width={350} height={350}/>
            
            <h1 className="font-extrabold text-3xl lg:text-4xl tracking-tight">
              Forgot Password?
            </h1>

            <p className="text-body text-muted mt-2">
              No worries. Enter your email and we&apos;ll send you a link to reset your password.
            </p>
          </div>

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


            {/* Send Code */}
          <Button
            type="submit"
            className="btn-primary w-full"
          >
            Send Code
          </Button>
            
            {/*Back to login */}
          <Link href="/login" className='back-link'><BiArrowBack /> Back to Login</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPage;