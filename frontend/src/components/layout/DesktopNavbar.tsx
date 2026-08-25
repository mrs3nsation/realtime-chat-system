import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { sound } from "../../utils/sound";
import { RetroComputerIcon, RetroSparkleIcon } from "../common/RetroIcons";
import { RetroTheme } from "../../types";

interface DesktopNavbarProps {
  currentTheme: RetroTheme;
  onThemeChange: (theme: RetroTheme) => void;
  onOpenProfile?: () => void;
}

export const DesktopNavbar: React.FC<DesktopNavbarProps> = ({
  currentTheme,
  onThemeChange,
  onOpenProfile,
}) => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();
  const [time, setTime] = useState<string>("");
  const [isMuted, setIsMuted] = useState<boolean>(sound.getIsMuted());
  const [showThemeMenu, setShowThemeMenu] = useState<boolean>(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleToggleSound = () => {
    const muted = sound.toggleMute();
    setIsMuted(muted);
    if (!muted) sound.playClick();
  };

  const themes: { key: RetroTheme; label: string; bg: string }[] = [
    { key: "theme-lavender", label: "Lavender Grid", bg: "#d9ceee" },
    { key: "theme-peach", label: "Peach Tan Grid", bg: "#f5e4d3" },
    { key: "theme-mint", label: "Cyber Mint Grid", bg: "#d2ebe3" },
    { key: "theme-cyberdark", label: "Dark Grid", bg: "#191826" },
  ];

  return (
    <header
      style={{
        width: "100%",
        height: 48,
        backgroundColor: "var(--window-bg)",
        borderBottom: "2.5px solid var(--border-dark)",
        boxShadow: "0 2px 0px rgba(0,0,0,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 16px",
        userSelect: "none",
        zIndex: 50,
      }}
    >
      {/* Left: OS Brand & Menu */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {/* Brand Group (Icon + Title) navigating to Landing Page */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "var(--font-pixel)",
            fontSize: "0.9rem",
            fontWeight: 700,
            cursor: "pointer",
            padding: "4px 8px",
            borderRadius: 4,
            transition: "background-color 0.15s ease",
            color: "var(--text-primary)",
          }}
          onClick={() => {
            sound.playClick();
            navigate("/");
          }}
          title="Return to Home / Landing Page"
        >
          <RetroComputerIcon size={26} />
          <span>CYBERCHAT '98</span>
        </div>

        <span style={{ color: "var(--border-dark)", opacity: 0.4 }}>|</span>

        {/* Theme Picker */}
        <div style={{ position: "relative" }}>
          <button
            type="button"
            className="retro-btn retro-btn-sm"
            onClick={() => {
              sound.playClick();
              setShowThemeMenu((prev) => !prev);
            }}
            style={{ fontSize: "0.75rem", padding: "3px 8px" }}
          >
            <RetroSparkleIcon size={14} />
            <span>Theme</span>
          </button>

          {showThemeMenu && (
            <div
              style={{
                position: "absolute",
                top: 32,
                left: 0,
                backgroundColor: "var(--window-bg)",
                border: "2px solid var(--border-dark)",
                borderRadius: 4,
                boxShadow: "var(--retro-shadow-sm)",
                display: "flex",
                flexDirection: "column",
                width: 160,
                zIndex: 100,
                overflow: "hidden",
              }}
            >
              {themes.map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => {
                    sound.playClick();
                    onThemeChange(t.key);
                    setShowThemeMenu(false);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 12px",
                    border: "none",
                    borderBottom: "1px solid var(--border-dark)",
                    background: currentTheme === t.key ? "var(--window-subtle)" : "transparent",
                    fontFamily: "var(--font-retro)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer",
                    textAlign: "left",
                    color: "inherit",
                  }}
                >
                  <span
                    style={{
                      width: 14,
                      height: 14,
                      borderRadius: 2,
                      border: "1px solid var(--border-dark)",
                      backgroundColor: t.bg,
                    }}
                  />
                  <span>{t.label}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Sound FX Toggle */}
        <button
          type="button"
          className="retro-btn retro-btn-sm"
          onClick={handleToggleSound}
          title={isMuted ? "Unmute 8-Bit Sound FX" : "Mute Sound FX"}
          style={{ fontSize: "0.75rem", padding: "3px 8px" }}
        >
          <span>{isMuted ? "🔇 Muted" : "🔊 8-Bit Audio"}</span>
        </button>
      </div>

      {/* Right: Clock & User Info */}
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        {/* Realtime Clock */}
        <div
          style={{
            backgroundColor: "var(--window-subtle)",
            border: "1.5px solid var(--border-dark)",
            borderRadius: 4,
            padding: "3px 10px",
            fontFamily: "var(--font-arcade)",
            fontSize: "1.2rem",
            letterSpacing: 1,
            boxShadow: "inset 1px 1px 0px rgba(0,0,0,0.1)",
          }}
        >
          {time}
        </div>

        {user ? (
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
                padding: "2px 8px",
                border: "1.5px solid var(--border-dark)",
                borderRadius: 20,
                backgroundColor: "var(--card-bg)",
                color: "var(--text-primary)",
                boxShadow: "1px 1px 0px var(--border-dark)",
              }}
              onClick={() => {
                sound.playClick();
                if (onOpenProfile) onOpenProfile();
              }}
            >
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  backgroundColor: "#ff8552",
                  border: "1.5px solid var(--border-dark)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 11,
                  fontWeight: 800,
                  color: "#fff",
                  overflow: "hidden",
                }}
              >
                {user.avatarUrl ? (
                  <img src={user.avatarUrl} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                ) : (
                  (user.name || user.email)[0].toUpperCase()
                )}
              </div>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, fontFamily: "var(--font-retro)" }}>
                {user.name || user.email.split("@")[0]}
              </span>
            </div>

            <button
              type="button"
              className="retro-btn retro-btn-sm retro-btn-danger"
              onClick={() => {
                sound.playClick();
                void logout();
              }}
              style={{ fontSize: "0.75rem", padding: "3px 8px" }}
            >
              Exit
            </button>
          </div>
        ) : null}
      </div>
    </header>
  );
};
