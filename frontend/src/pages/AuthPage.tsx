import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RetroWindow } from "../components/common/RetroWindow";
import {
  RetroGoogleIcon,
  RetroGithubIcon,
  RetroComputerIcon,
} from "../components/common/RetroIcons";
import { RetroProgressBar } from "../components/common/RetroProgressBar";
import { useAuth } from "../context/AuthContext";
import { sound } from "../utils/sound";

type AuthMode = "login" | "signup";

export const AuthPage: React.FC = () => {
  const navigate = useNavigate();
  const { login, register } = useAuth();

  const [mode, setMode] = useState<AuthMode>("login");

  // Form fields
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [name, setName] = useState<string>("");

  // States
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");

  const handleGoogleLogin = () => {
    sound.playClick();
    window.location.href = "/api/auth/google";
  };

  const handleGithubLogin = () => {
    sound.playClick();
    window.location.href = "/api/auth/github";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      sound.playError();
      setErrorMsg("Please enter both email and password");
      return;
    }

    if (mode === "signup" && password.length < 6) {
      sound.playError();
      setErrorMsg("Password must be at least 6 characters");
      return;
    }

    try {
      setIsLoading(true);
      setErrorMsg("");
      sound.playClick();

      if (mode === "login") {
        await login(email.trim(), password);
        sound.playSuccess();
        navigate("/chat");
      } else {
        await register(email.trim(), password, name.trim() || undefined);
        sound.playSuccess();
        setSuccessMsg("Account created! Logging in...");
        setTimeout(() => navigate("/chat"), 1200);
      }
    } catch (err: unknown) {
      sound.playError();
      setErrorMsg(
        err instanceof Error
          ? err.message
          : mode === "login"
          ? "Failed to sign in. Please check your credentials."
          : "Registration failed. Email might already be in use."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 48px)",
        padding: "32px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "100%", maxWidth: 440 }}>
        <RetroWindow
          title="CyberChat 98 - Authentication"
          icon={<RetroComputerIcon size={18} />}
          headerColor="purple"
          onClose={() => navigate("/")}
          floating
        >
          <div style={{ padding: "28px 26px", display: "flex", flexDirection: "column", gap: 16 }}>
            {/* Top Brand Logo & Title (Matching Mercor layout) */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 10 }}>
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 10,
                  backgroundColor: "#a55eea",
                  border: "2.5px solid var(--border-dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "var(--retro-shadow-sm)",
                  color: "#ffffff",
                }}
              >
                <RetroComputerIcon size={30} />
              </div>

              <h2
                style={{
                  fontFamily: "var(--font-retro)",
                  fontSize: "1.45rem",
                  fontWeight: 800,
                  color: "var(--text-primary)",
                  letterSpacing: "-0.5px",
                }}
              >
                {mode === "login" ? "Continue to CyberChat" : "Create CyberChat Account"}
              </h2>
            </div>

            {/* Feedback Alerts */}
            {errorMsg && (
              <div
                style={{
                  padding: "10px 14px",
                  backgroundColor: "#ff7675",
                  border: "2px solid var(--border-dark)",
                  borderRadius: 4,
                  color: "#ffffff",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  boxShadow: "var(--retro-shadow-sm)",
                }}
              >
                ✕ {errorMsg}
              </div>
            )}

            {successMsg && (
              <div
                style={{
                  padding: "10px 14px",
                  backgroundColor: "#55efc4",
                  border: "2px solid var(--border-dark)",
                  borderRadius: 4,
                  color: "#1E1B18",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  boxShadow: "var(--retro-shadow-sm)",
                }}
              >
                ✓ {successMsg}
              </div>
            )}

            {/* Email + Password Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {mode === "signup" && (
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      fontWeight: 700,
                      fontFamily: "var(--font-retro)",
                      marginBottom: 6,
                      color: "var(--text-primary)",
                    }}
                  >
                    Display Name
                  </label>
                  <input
                    type="text"
                    className="retro-input"
                    placeholder="e.g. PixelHero"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
              )}

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-retro)",
                    marginBottom: 6,
                    color: "var(--text-primary)",
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  className="retro-input"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    fontFamily: "var(--font-retro)",
                    marginBottom: 6,
                    color: "var(--text-primary)",
                  }}
                >
                  Password
                </label>
                <input
                  type="password"
                  className="retro-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {isLoading && (
                <RetroProgressBar
                  color="purple"
                  label={mode === "login" ? "Authenticating..." : "Creating account..."}
                />
              )}

              {/* Stacked Primary & Secondary Action Buttons (Matching Mercor layout) */}
              <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
                {/* Primary Action Button */}
                <button
                  type="submit"
                  className="retro-btn retro-btn-lg retro-btn-purple"
                  disabled={isLoading}
                  style={{ width: "100%", fontSize: "0.95rem" }}
                >
                  <span>{isLoading ? "Processing..." : mode === "login" ? "Login" : "Sign Up"}</span>
                </button>

                {/* Secondary Action Button */}
                <button
                  type="button"
                  className="retro-btn retro-btn-lg"
                  onClick={() => {
                    sound.playClick();
                    setErrorMsg("");
                    setMode(mode === "login" ? "signup" : "login");
                  }}
                  style={{
                    width: "100%",
                    fontSize: "0.95rem",
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-primary)",
                  }}
                >
                  <span>{mode === "login" ? "Sign Up" : "Back to Login"}</span>
                </button>
              </div>

              {/* "Or continue with" Divider */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "6px 0" }}>
                <div style={{ flex: 1, height: 1.5, backgroundColor: "var(--border-dark)", opacity: 0.3 }} />
                <span
                  style={{
                    fontFamily: "var(--font-retro)",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    color: "var(--text-muted)",
                  }}
                >
                  Or continue with
                </span>
                <div style={{ flex: 1, height: 1.5, backgroundColor: "var(--border-dark)", opacity: 0.3 }} />
              </div>

              {/* 2-Column Social Buttons (Google + GitHub) */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <button
                  type="button"
                  className="retro-btn"
                  onClick={handleGoogleLogin}
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                >
                  <RetroGoogleIcon size={18} />
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  className="retro-btn"
                  onClick={handleGithubLogin}
                  style={{
                    backgroundColor: "var(--card-bg)",
                    color: "var(--text-primary)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "10px 12px",
                    fontSize: "0.9rem",
                  }}
                >
                  <RetroGithubIcon size={18} />
                  <span>GitHub</span>
                </button>
              </div>
            </form>
          </div>
        </RetroWindow>

        {/* Footer Terms Subtext */}
        <div
          style={{
            textAlign: "center",
            marginTop: 16,
            fontSize: "0.78rem",
            color: "var(--text-muted)",
            fontFamily: "var(--font-retro)",
          }}
        >
          By signing in, you agree to our{" "}
          <span
            style={{
              textDecoration: "underline",
              color: "var(--text-secondary)",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Terms of Service
          </span>
        </div>
      </div>
    </div>
  );
};
