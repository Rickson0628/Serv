
"use client";

import { BsFillPersonFill } from "react-icons/bs";
import { RiBriefcase4Line } from "react-icons/ri";

export type AccountRole = "customer" | "provider";

interface AccountRoleSelectorProps {
  value: AccountRole;
  onChange: (value: AccountRole) => void;
}

export default function AccountRoleSelector({
  value,
  onChange,
}: AccountRoleSelectorProps) {
  return (
    <div
      role="group"
      aria-label="Account type"
      className="relative flex w-full rounded-lg border border-gray-200 bg-gray-100 p-1"
    >
      {/* Sliding background */}
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-1 left-1
          w-[calc(50%-0.25rem)] rounded-md bg-primary
          transition-transform duration-300 ease-in-out
          motion-reduce:transition-none
          ${
            value === "provider"
              ? "translate-x-full"
              : "translate-x-0"
          }`}
      />

      {/* Customer */}
      <button
        type="button"
        aria-pressed={value === "customer"}
        onClick={() => onChange("customer")}
        className={`relative z-10 flex w-1/2 items-center
          justify-center gap-2 rounded-md p-3
          transition-colors duration-300
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-primary
          ${
            value === "customer"
              ? "text-white"
              : "text-gray-700 hover:text-primary"
          }`}
      >
        <BsFillPersonFill aria-hidden="true" />
        Customer
      </button>

      {/* Provider */}
      <button
        type="button"
        aria-pressed={value === "provider"}
        onClick={() => onChange("provider")}
        className={`relative z-10 flex w-1/2 items-center
          justify-center gap-2 rounded-md p-3
          transition-colors duration-300
          focus-visible:outline-2 focus-visible:outline-offset-2
          focus-visible:outline-primary
          ${
            value === "provider"
              ? "text-white"
              : "text-gray-700 hover:text-primary"
          }`}
      >
        <RiBriefcase4Line aria-hidden="true" />
        Provider
      </button>
    </div>
  );
}
