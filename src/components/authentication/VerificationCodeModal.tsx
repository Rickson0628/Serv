"use client";

import { useEffect, useId, useRef, useState } from "react";
import Image from "next/image";

import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import styles from "@/app/(authentication)/authentication.module.css";

interface VerificationCodeModalProps {
  email: string;
  onClose: () => void;
  onVerify: (code: string) => Promise<void> | void;
  onResend: () => Promise<void> | void;
  description:string,
  title?: string;
  resendCooldownSeconds?: number;
}

export default function VerificationCodeModal({
  email,
  onClose,
  onVerify,
  onResend,
  description = "We've sent you a 6-digit code to",
  title = "Enter authentication code",
  resendCooldownSeconds = 60,
}: VerificationCodeModalProps) {
  const titleId = useId();

  const [code, setCode] = useState<string[]>(
    Array(6).fill("")
  );
  const [timer, setTimer] = useState(resendCooldownSeconds);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);

  const isBusy = isVerifying || isResending;

  useEffect(() => {
    const previousFocus =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    inputRefs.current[0]?.focus();

    return () => previousFocus?.focus();
  }, []);

  useEffect(() => {
    if (timer <= 0) return;

    const timeout = setTimeout(() => {
      setTimer((previous) => Math.max(0, previous - 1));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && !isBusy) {
        onClose();
      }

      if (event.key !== "Tab") return;

      const focusable =
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'button:not([disabled]), input:not([disabled])'
        );

      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () =>
      document.removeEventListener("keydown", handleKeyDown);
  }, [isBusy, onClose]);

  function handleCodeChange(index: number, value: string) {
    const digit = value.replace(/\D/g, "").slice(-1);

    setCode((previous) => {
      const updated = [...previous];
      updated[index] = digit;
      return updated;
    });

    setError(null);

    if (digit && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(
    event: React.ClipboardEvent<HTMLInputElement>,
    startIndex: number
  ) {
    event.preventDefault();

    const digits = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6 - startIndex);

    setCode((previous) => {
      const updated = [...previous];

      digits.split("").forEach((digit, offset) => {
        updated[startIndex + offset] = digit;
      });

      return updated;
    });

    setError(null);

    inputRefs.current[
      Math.min(startIndex + digits.length, 5)
    ]?.focus();
  }

  async function handleVerify(event: React.FormEvent) {
    event.preventDefault();

    const verificationCode = code.join("");

    if (!/^\d{6}$/.test(verificationCode)) {
      setError("Please enter all six digits.");
      return;
    }

    setError(null);
    setIsVerifying(true);

    try {
      await onVerify(verificationCode);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to verify code."
      );
    } finally {
      setIsVerifying(false);
    }
  }

  async function handleResend() {
    if (timer > 0 || isBusy) return;

    setError(null);
    setIsResending(true);

    try {
      await onResend();
      setCode(Array(6).fill(""));
      setTimer(resendCooldownSeconds);
      inputRefs.current[0]?.focus();
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Unable to resend code."
      );
    } finally {
      setIsResending(false);
    }
  }

  function formatTime(seconds: number) {
    const minutes = Math.floor(seconds / 60);
    const remaining = String(seconds % 60).padStart(2, "0");

    return `${minutes}:${remaining}`;
  }

  return (
    <Modal
      isOpen
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <div ref={dialogRef} className={styles.dialog}>
        <Button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          disabled={isBusy}
          aria-label="Close verification dialog"
        >
          ×
        </Button>

        <Image
          src="/authentication/email.png"
          alt=""
          width={200}
          height={200}
        />

        <div className="flex flex-col items-center text-center">
          <h2 id={titleId} className={styles.heading}>
            {title}
          </h2>

          <p className="text-muted mt-2">
            {description}
          </p>

          <p className="font-semibold">{email}</p>
        </div>

        <form
          onSubmit={handleVerify}
          className={styles.verificationForm}
        >
          <div className={styles.codeInputs}>
            {code.map((digit, index) => (
              <input
                key={index}
                ref={(element) => {
                  inputRefs.current[index] = element;
                }}
                value={digit}
                onChange={(event) =>
                  handleCodeChange(index, event.target.value)
                }
                onPaste={(event) =>
                  handlePaste(event, index)
                }
                onKeyDown={(event) => {
                  if (
                    event.key === "Backspace" &&
                    !digit &&
                    index > 0
                  ) {
                    inputRefs.current[index - 1]?.focus();
                  }
                }}
                type="text"
                inputMode="numeric"
                maxLength={1}
                autoComplete={
                  index === 0 ? "one-time-code" : "off"
                }
                className={styles.codeInput}
                aria-label={`Code digit ${index + 1}`}
                disabled={isBusy}
              />
            ))}
          </div>

          {error && (
            <p className={styles.error} role="alert">
              {error}
            </p>
          )}

          <Button
            type="submit"
            className="btn-primary w-full"
            disabled={isBusy}
          >
            {isVerifying ? "Verifying..." : "Verify"}
          </Button>

          <p className="text-muted text-center">
            Didn&apos;t receive the code?{" "}

            {timer > 0 ? (
              <span>
                Resend available in {formatTime(timer)}
              </span>
            ) : (
              <button
                type="button"
                onClick={handleResend}
                disabled={isBusy}
                className="text-primary font-medium"
              >
                {isResending ? "Sending..." : "Resend Code"}
              </button>
            )}
          </p>
        </form>
      </div>
    </Modal>
  );
}