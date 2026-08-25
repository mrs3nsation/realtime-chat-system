import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Agentation } from "agentation";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { ChatProvider } from "./context/ChatContext";
import { DesktopNavbar } from "./components/layout/DesktopNavbar";
import { LandingPage } from "./pages/LandingPage";
import { AuthPage } from "./pages/AuthPage";
import { OAuthCallback } from "./pages/OAuthCallback";
import { ChatPage } from "./pages/ChatPage";
import { ProfileModal } from "./components/chat/ProfileModal";
import { RetroTheme } from "./types";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div
        style={{
          minHeight: "calc(100vh - 48px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "var(--font-arcade)",
          fontSize: "1.3rem",
        }}
      >
        BOOTING CYBERCHAT OS...
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return <>{children}</>;
};

const AppContent: React.FC = () => {
  const [theme, setTheme] = useState<RetroTheme>(() => {
    return (localStorage.getItem("retro_theme") as RetroTheme) || "theme-lavender";
  });
  const [showProfile, setShowProfile] = useState<boolean>(false);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("retro_theme", theme);
  }, [theme]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <DesktopNavbar
        currentTheme={theme}
        onThemeChange={(newTheme) => setTheme(newTheme)}
        onOpenProfile={() => setShowProfile(true)}
      />

      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth/callback" element={<OAuthCallback />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <ChatPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <ProfileModal isOpen={showProfile} onClose={() => setShowProfile(false)} />

      {/* Visual AI Feedback Toolbar */}
      <Agentation />
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ChatProvider>
          <AppContent />
        </ChatProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
