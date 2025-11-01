import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode"; // Adjust the import to use the default export
import { auth } from "../../firebase-config"; // Adjust the import path as needed
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
  getIdToken,
} from "firebase/auth";

const COOKIE_NAME = "authToken";

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  hasFetched: boolean | null;
  loading: boolean; // Add loading state
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [hasFetched, setHasFetched] = useState<boolean | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Initial loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await getIdToken(user);
        Cookies.set(COOKIE_NAME, token, { expires: 7 }); // Save token to cookies, expires in 7 days
        setUser(user);
        setIsAuthenticated(true);
      } else {
        Cookies.remove(COOKIE_NAME);
        setUser(null);
        setIsAuthenticated(false);
      }
      setHasFetched(true);
      setLoading(false); // Set loading to false after auth status is determined
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const checkCookieForUser = async () => {
      const token = Cookies.get(COOKIE_NAME);
      if (token) {
        // Decode the token to get user info
        try {
          const decoded: User = jwtDecode(token);
          setUser(decoded);
          setIsAuthenticated(true);
        } catch (error) {
          console.error("Token decode error:", error);
          Cookies.remove(COOKIE_NAME);
          setUser(null);
          setIsAuthenticated(false);
        }
      }
      setHasFetched(true);
      setLoading(false); // Set loading to false after checking cookie
    };

    checkCookieForUser();
  }, []);

  const getToken = async (): Promise<string | null> => {
    return user ? getIdToken(user) : null;
  };

  const login = async (email: string, password: string): Promise<void> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Login error:", error);
      // Handle login errors appropriately
    }
  };

  const logout = async (): Promise<void> => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout error:", error);
      // Handle logout errors appropriately
    }
  };

  return { login, logout, getToken, user, isAuthenticated, hasFetched, loading };
};

type UseAuthReturn = ReturnType<typeof useAuth>;

const Context = React.createContext<UseAuthReturn | undefined>(undefined);

export const useContext = () => {
  const context = React.useContext(Context);

  // Throw an error if the context is undefined to ensure safe consumption
  if (context === undefined) {
    throw new Error("useContext must be used within a Provider");
  }

  return context;
};

export const Provider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const authValue = useAuth(); // Generate the context value

  // Use useMemo to memoize the context value
  const contextValue = React.useMemo(() => authValue, [authValue]);

  // Provide the memoized context value to the Context.Provider
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};
