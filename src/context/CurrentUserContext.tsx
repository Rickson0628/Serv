"use client";

import {
  createContext,
  useState,
  useEffect,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

import {
  getCurrentUser,
  logout as logoutRequest,
  type AuthenticatedUser,
} from "@/lib/api/auth";

interface CurrentUserContextType {
  user: AuthenticatedUser | null;
  isLoading: boolean;
  error: string | null;
  refreshUser: () => Promise<void>;
  signOut: () => Promise<void>;
}

interface CurrentUserProviderProps {
  children: ReactNode;
}

export const CurrentUserContext = createContext<
  CurrentUserContextType | undefined
>(undefined);

export function CurrentUserProvider({
  children,
}: CurrentUserProviderProps) {
  const [user, setUser] = useState<AuthenticatedUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);


  // Tracks the most recent session request
  const latestRequestId = useRef(0);
  const isSigningOutRef = useRef(false);

  // Manually refresh the current user
  const refreshUser = useCallback(async (): Promise<void> => {
    if(isSigningOutRef.current){
      return
    }

    const requestId = ++latestRequestId.current;

    setIsLoading(true);
    setError(null);

    try {
      const currentUser = await getCurrentUser();

      if (requestId === latestRequestId.current) {
        setUser(currentUser);
      }
    } catch (err) {
      if (requestId === latestRequestId.current) {
        setError(
          err instanceof Error
            ? err.message
            : "Unable to retrieve current user."
        );
      }
    } finally {
      if (requestId === latestRequestId.current) {
        setIsLoading(false);
      }
    }
  }, []);

  const signOut = useCallback(async (): Promise<void> => {
    if (isSigningOutRef.current) {
      return;
    }
    isSigningOutRef.current = true;
    latestRequestId.current += 1;
    setIsLoading(true);
   
    try {
      await logoutRequest();
      latestRequestId.current += 1;
      setUser(null);
      setError(null);

    } finally {
      isSigningOutRef.current = false;
      setIsLoading(false);
    }

  }, []);


  useEffect(() => {
    let cancelled = false;
    const requestId = ++latestRequestId.current;

    async function fetchUser() {
      try {
        const currentUser = await getCurrentUser();

        if (!cancelled && requestId === latestRequestId.current) {
          setUser(currentUser);
          setError(null);
        }
      } catch (err) {
        if (!cancelled && requestId === latestRequestId.current) {
          setUser(null);
          setError(
            err instanceof Error
              ? err.message
              : "Unable to retrieve current user."
          );
        }
      } finally {
        if (!cancelled && requestId === latestRequestId.current) {
          setIsLoading(false);
        }
      }
    }

    void fetchUser();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <CurrentUserContext
      value={{
        user,
        isLoading,
        error,
        refreshUser,
        signOut
      }}
    >
      {children}
    </CurrentUserContext>
  );
}
