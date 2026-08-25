import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { User } from "../types";
import { authApi, userApi, setAccessToken, getAccessToken } from "../services/api";
import { socketService } from "../services/socket";

interface AuthContextType {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name?: string) => Promise<void>;
  loginWithOAuthToken: (token: string) => Promise<void>;
  logout: () => Promise<void>;
  verifyEmail: (token: string) => Promise<string>;
  resendVerification: (email: string) => Promise<string>;
  refreshProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(getAccessToken());
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const initAuth = useCallback(async () => {
    try {
      setIsLoading(true);
      // Try refresh first to see if valid cookie exists
      const res = await authApi.refresh();
      if (res.accessToken && res.user) {
        setToken(res.accessToken);
        setAccessToken(res.accessToken);
        setUser(res.user);
        socketService.connect(res.accessToken);
        return;
      }
    } catch {
      // If refresh fails, check if current access token works
      const existing = getAccessToken();
      if (existing) {
        try {
          const profile = await userApi.getMe();
          setUser(profile);
          socketService.connect(existing);
        } catch {
          setAccessToken(null);
          setToken(null);
          setUser(null);
        }
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void initAuth();
  }, [initAuth]);

  const login = async (email: string, password: string) => {
    const res = await authApi.login({ email, password });
    setToken(res.accessToken);
    setAccessToken(res.accessToken);
    setUser(res.user);
    socketService.connect(res.accessToken);
  };

  const register = async (email: string, password: string, name?: string) => {
    const res = await authApi.register({ email, password, name });
    setToken(res.accessToken);
    setAccessToken(res.accessToken);
    setUser(res.user);
    socketService.connect(res.accessToken);
  };

  const loginWithOAuthToken = async (oauthToken: string) => {
    setToken(oauthToken);
    setAccessToken(oauthToken);
    const profile = await userApi.getMe();
    setUser(profile);
    socketService.connect(oauthToken);
  };

  const logout = async () => {
    try {
      await authApi.logout();
    } catch {
      // Ignore network logout errors
    }
    setAccessToken(null);
    setToken(null);
    setUser(null);
    socketService.disconnect();
  };

  const verifyEmail = async (verifyToken: string) => {
    return await authApi.verifyEmail(verifyToken);
  };

  const resendVerification = async (email: string) => {
    return await authApi.resendVerification(email);
  };

  const refreshProfile = async () => {
    if (token) {
      const profile = await userApi.getMe();
      setUser(profile);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isLoading,
        login,
        register,
        loginWithOAuthToken,
        logout,
        verifyEmail,
        resendVerification,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}
