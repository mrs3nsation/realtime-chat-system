import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { RetroWindow } from "../components/common/RetroWindow";
import { RetroProgressBar } from "../components/common/RetroProgressBar";
import { RetroComputerIcon } from "../components/common/RetroIcons";
import { useAuth } from "../context/AuthContext";
import { sound } from "../utils/sound";

export const OAuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { loginWithOAuthToken } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = searchParams.get("token");
    if (!token) {
      setError("No authentication token received from OAuth provider");
      sound.playError();
      return;
    }

    const processOAuth = async () => {
      try {
        await loginWithOAuthToken(token);
        sound.playSuccess();
        setTimeout(() => {
          navigate("/chat");
        }, 1000);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Failed to authenticate with token");
        sound.playError();
      }
    };

    void processOAuth();
  }, [searchParams, loginWithOAuthToken, navigate]);

  return (
    <div
      style={{
        minHeight: "calc(100vh - 48px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div style={{ width: "100%", maxWidth: 420 }}>
        <RetroWindow
          title="Connecting to Server..."
          icon={<RetroComputerIcon size={18} />}
          headerColor="orange"
          floating
        >
          <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", gap: 18, textAlign: "center" }}>
            {error ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div
                  style={{
                    padding: "10px 14px",
                    backgroundColor: "#ff7675",
                    border: "2px solid var(--border-dark)",
                    borderRadius: 4,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                  }}
                >
                  ✕ {error}
                </div>
                <button
                  type="button"
                  className="retro-btn"
                  onClick={() => navigate("/auth")}
                >
                  Back to Sign In
                </button>
              </div>
            ) : (
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div style={{ fontFamily: "var(--font-arcade)", fontSize: "1.2rem" }}>
                  AUTHENTICATING OAUTH CREDENTIALS...
                </div>
                <RetroProgressBar color="orange" label="Establishing secure session..." totalSegments={16} />
              </div>
            )}
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
