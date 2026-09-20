"use client";

import Image from "next/image";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import { FiCheckCircle } from "react-icons/fi";

import Button from "@/components/ui/Button";

import authStyles from "../authentication.module.css";

interface NewPasswordData {
  newPassword: string;
  confirmPassword: string;
}

const ResetPasswordPage = () => {
  const [isShowNewPassword, setIsShowNewPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<NewPasswordData>({
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const newPassword =
    useWatch({
      control,
      name: "newPassword",
    }) ?? "";

  function submitNewPassword(): void {
    // TODO: Verify the password-reset token on the server.
    // TODO: Send the new password to the authentication API.
    // TODO: Show server errors and redirect after a successful reset.
  }

  return (
    /* Full Reset Password Page Wrapper */
    <div className={authStyles.page}>
      {/* Main Area That Centers the Reset Password Content */}
      <main className={authStyles.main}>
        {/* Reset Password Card Container */}
        <div className={`${authStyles.card} gap-4`}>
          {/* Reset Password Header Container */}
          <div className={authStyles.header}>
            {/* Decorative Lock Image */}
            <Image
              src="/authentication/lock.png"
              alt=""
              width={250}
              height={250}
              priority
            />

            {/* Page Title */}
            <h1 className={authStyles.heading}>
              Create a new password
            </h1>

            {/* Page Instructions */}
            <div className="mt-2 flex flex-col items-center justify-center text-body text-muted">
              <p>Your authentication has been verified.</p>
              <p>Please enter your new password.</p>
            </div>
          </div>

          {/* Reset Password Form */}
          <form
            className={authStyles.form}
            onSubmit={handleSubmit(submitNewPassword)}
          >
            {/* New Password Field */}
            <div className={authStyles.field}>
              <label
                className="text-label"
                htmlFor="newPassword"
              >
                New Password
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
                  type={isShowNewPassword ? "text" : "password"}
                  placeholder="Enter your new password"
                  autoComplete="new-password"
                  {...register("newPassword", {
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
                    errors.newPassword ? "true" : "false"
                  }
                  aria-describedby="new-password-requirements new-password-error"
                />

                {/* Show or Hide New Password Button */}
                <Button
                  type="button"
                  className={authStyles.fieldAction}
                  onClick={() =>
                    setIsShowNewPassword((previous) => !previous)
                  }
                  aria-label={
                    isShowNewPassword
                      ? "Hide new password"
                      : "Show new password"
                  }
                >
                  {isShowNewPassword ? (
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
                  className={`flex items-center gap-2 text-sm ${newPassword.length >= 8 ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  At least 8 characters
                </li>

                <li
                  className={`flex items-center gap-2 text-sm ${/[A-Z]/.test(newPassword) ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  Includes an uppercase letter
                </li>

                <li
                  className={`flex items-center gap-2 text-sm ${/[a-z]/.test(newPassword) ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  Includes a lowercase letter
                </li>

                <li
                  className={`flex items-center gap-2 text-sm ${/\d/.test(newPassword) ? "text-green-600" : "text-muted"}`}
                >
                  <FiCheckCircle aria-hidden="true" />
                  Includes a number
                </li>
              </ul>

              {/* New Password Validation Error */}
              {errors.newPassword && (
                <span
                  id="new-password-error"
                  className={authStyles.error}
                  role="alert"
                >
                  {errors.newPassword.message}
                </span>
              )}
            </div>

            {/* Confirm Password Field */}
            <div className={authStyles.field}>
              <label
                className="text-label"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>

              {/* Confirm Password Input and Visibility Button Container */}
              <div className="relative">
                {/* Lock Icon Inside the Input */}
                <BiLockAlt
                  className={authStyles.fieldIcon}
                  aria-hidden="true"
                />

                <input
                  id="confirmPassword"
                  type={isShowConfirmPassword ? "text" : "password"}
                  placeholder="Confirm your new password"
                  autoComplete="new-password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required",
                    validate: (value) =>
                      value === newPassword || "Passwords do not match",
                  })}
                  className={`${authStyles.input} ${authStyles.inputWithActions}`}
                  aria-invalid={
                    errors.confirmPassword ? "true" : "false"
                  }
                  aria-describedby="confirm-password-error"
                />

                {/* Show or Hide Confirm Password Button */}
                <Button
                  type="button"
                  className={authStyles.fieldAction}
                  onClick={() =>
                    setIsShowConfirmPassword((previous) => !previous)
                  }
                  aria-label={
                    isShowConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                >
                  {isShowConfirmPassword ? (
                    <AiOutlineEyeInvisible aria-hidden="true" />
                  ) : (
                    <AiOutlineEye aria-hidden="true" />
                  )}
                </Button>
              </div>

              {/* Confirm Password Validation Error */}
              {errors.confirmPassword && (
                <span
                  id="confirm-password-error"
                  className={authStyles.error}
                  role="alert"
                >
                  {errors.confirmPassword.message}
                </span>
              )}
            </div>

            {/* Submit Button */}
            <Button
              className="btn-primary w-full"
              type="submit"
            >
              Update Password
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default ResetPasswordPage;
 
