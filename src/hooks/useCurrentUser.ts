
"use client";

import { useContext } from "react";
import { CurrentUserContext } from "@/context/CurrentUserContext";

export function useCurrentUser() {
  const context = useContext(CurrentUserContext);

  if (context === undefined) {
    throw new Error(
      "useCurrentUser must be used within CurrentUserProvider"
    );
  }

  return context;
}
