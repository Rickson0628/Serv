"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";

import {
  getCurrentUser,
  type AuthenticatedUser,
} from "@/lib/api/auth";

interface CurrentUserContextType {
  user: AuthenticatedUser | null;
  isLoading: boolean;
  refreshUser: () => Promise<void>;
  error: string | null;
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

export const CurrentUserContext = createContext<CurrentUserContextType | undefined>(undefined);

export function CurrentUserProvider({ children }: CurrentUserProviderProps) {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  const refreshUser = useCallback(async (): Promise<void> => {

    setIsLoading(true);
    setError(null);
    try {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    } catch (error) {
      setUser(null)
      setError(
        error instanceof Error ?
         error.message : "Error fetching user"
        );

    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;

    async function fetchUser() {
      try {

        const currentUser = await getCurrentUser();
        if (!cancelled) {
          setUser(currentUser);
          setError(null);
        }
      } catch (error) {
        if (!cancelled) {
          setUser(null);
          setError(error instanceof Error ? error.message : "Error fetching user");
        }
      }
      finally {
        if (!cancelled) {
          setIsLoading(false)
        }
      }

    }
    fetchUser();
    return () => {
      cancelled = true;
    }
  }, [])

  return (
  <CurrentUserContext value={{ user, isLoading, refreshUser, error }}>
    {children}
  </CurrentUserContext>
  );
}

