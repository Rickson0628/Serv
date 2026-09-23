"use client";

import Button from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ReactNode } from "react";

import {
  FiBell,
  FiHelpCircle,
  FiLogOut,
  FiMessageSquare,
  FiSettings,
} from "react-icons/fi";

interface ProfileLink {
  icon: ReactNode;
  name: string;
  href: string;
}

const profileLinks: ProfileLink[] = [
  {
    icon: (
      <Image
        src="/dashboard/icon.jpg"
        alt=""
        width={24}
        height={24}
        className="h-6 w-6 rounded-full object-cover"
      />
    ),
    name: "Rickson Bozar",
    href: "/profile",
  },
  {
    icon: <FiSettings size={20} />,
    name: "Settings",
    href: "/settings",
  },
  {
    icon: <FiMessageSquare size={20} />,
    name: "Feedback",
    href: "/feedback",
  },
  {
    icon: <FiHelpCircle size={20} />,
    name: "Help",
    href: "/help",
  },
];

const Header = () => {
  // TODO: Connect notification state to backend
  const hasNotification = true;

  const [isProfileModalOpen, setIsProfileModalOpen] =
    useState(false);

  const [
    isNotificationModalOpen,
    setIsNotificationModalOpen,
  ] = useState(false);

  return (
    <header className="flex fixed z-99 bg-white w-full items-center justify-between px-4 py-6 shadow-md border-b border-gray-300">
      {/* Logo */}
      <Link
        href="/dashboard"
        className="text-logo text-4xl"
      >
        Serv
      </Link>

      {/* User Actions */}
      <div className="flex items-center gap-3">

        {/* Notification Container */}
        <div className="relative">
          {/* Notification Button */}
          <Button
            type="button"
            aria-label="Notifications"
            className="relative flex h-10 w-10 items-center justify-center p-0"
            onClick={() => {
              setIsNotificationModalOpen(
                (prev) => !prev
              );

              setIsProfileModalOpen(false);
            }}
          >
            <FiBell size={25} />

            {/* Notification Indicator */}
            {hasNotification && (
              <span className="absolute right-2 top-1.5 h-2 w-2 rounded-full bg-red-500" />
            )}
          </Button>

          {/* Notification Dropdown */}
          {isNotificationModalOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 min-w-64 rounded-xl border border-gray-100 bg-white p-5 shadow-md">
              <p className="text-sm">
                Your service has been marked as complete.
              </p>
            </div>
          )}
        </div>

        {/* Profile Container */}
        <div className="relative">
          {/* Profile Button */}
          <button
            type="button"
            aria-label="Open profile menu"
            className="flex h-10 w-10 items-center justify-center p-0"
            onClick={() => {
              setIsProfileModalOpen(
                (prev) => !prev
              );

              setIsNotificationModalOpen(false);
            }}
          >
            {/* TODO: Connect actual user photo from backend */}
            <Image
              src="/dashboard/icon.jpg"
              alt="User profile"
              width={32}
              height={32}
              className="h-8 w-8 rounded-full object-cover"
            />
          </button>

          {/* Profile Dropdown */}
          {isProfileModalOpen && (
            <div className="absolute right-0 top-full z-50 mt-2 min-w-52 rounded-xl border border-gray-100 bg-white p-3 shadow-md">

              {/* Profile Links */}
              <div className="divide-y divide-gray-100">
                {profileLinks.map((profile) => (
                  <Link
                    key={profile.name}
                    href={profile.href}
                    className="flex items-center gap-3 px-3 py-3 text-sm transition-colors hover:text-primary"
                    onClick={() =>
                      setIsProfileModalOpen(false)
                    }
                  >
                    {/* Icon */}
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                      {profile.icon}
                    </span>

                    {/* Link Name */}
                    <span>{profile.name}</span>
                  </Link>
                ))}
              </div>

              {/* Logout */}
              <div className="border-t border-gray-100 pt-2">
                <Button
                  type="button"
                  className="flex w-full items-center gap-3 rounded-md px-3 py-3 text-left text-sm transition-colors hover:bg-gray-50 hover:text-primary"
                  onClick={() => {
                    // TODO: Connect logout functionality
                    console.log("Logout");
                  }}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center">
                    <FiLogOut size={20} />
                  </span>

                  <span>Logout</span>
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;