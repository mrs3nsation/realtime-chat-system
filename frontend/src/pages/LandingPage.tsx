import React from "react";
import { useNavigate } from "react-router-dom";
import { RetroWindow } from "../components/common/RetroWindow";
import {
  RetroComputerIcon,
  RetroFloppyIcon,
  RetroFolderIcon,
  RetroGlobeIcon,
  RetroMailIcon,
  RetroSmileyIcon,
  RetroFlowerIcon,
  RetroPixelHeartIcon,
  RetroSparkleIcon,
} from "../components/common/RetroIcons";
import { sound } from "../utils/sound";
import { useAuth } from "../context/AuthContext";

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLaunch = () => {
    sound.playClick();
    if (user) {
      navigate("/chat");
    } else {
      navigate("/auth");
    }
  };

  return (
    <div
      style={{
        minHeight: "calc(100vh - 48px)",
        padding: "24px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Floating Decorative Retro Stickers (Matching Reference Images) */}
      <div className="sticker animate-float" style={{ position: "absolute", top: "12%", left: "6%", zIndex: 1 }}>
        <RetroFlowerIcon size={44} color="#ff7675" />
      </div>
      <div className="sticker animate-float" style={{ position: "absolute", top: "15%", right: "8%", zIndex: 1, animationDelay: "1s" }}>
        <RetroSparkleIcon size={38} color="#fed330" />
      </div>
      <div className="sticker animate-float" style={{ position: "absolute", bottom: "16%", left: "8%", zIndex: 1, animationDelay: "1.5s" }}>
        <RetroPixelHeartIcon size={40} />
      </div>
      <div className="sticker animate-float" style={{ position: "absolute", bottom: "18%", right: "7%", zIndex: 1, animationDelay: "0.5s" }}>
        <RetroSmileyIcon size={44} />
      </div>

      {/* Main OS Window */}
      <div style={{ width: "100%", maxWidth: 840, position: "relative", zIndex: 10 }}>
        <RetroWindow
          title="CyberChat '98 Console"
          icon={<RetroComputerIcon size={20} />}
          headerColor="orange"
          floating
        >
          <div style={{ padding: "32px 28px", display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Header Hero Section */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 14 }}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#ffeaa7",
                  color: "#1e1b18",
                  padding: "4px 14px",
                  border: "2px solid var(--border-dark)",
                  borderRadius: 20,
                  boxShadow: "var(--retro-shadow-sm)",
                  fontFamily: "var(--font-pixel)",
                  fontSize: "0.8rem",
                }}
              >
                <span>⚡ ULTRA-FAST REALTIME CHAT SYSTEM</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-retro)",
                  fontSize: "2.5rem",
                  fontWeight: 800,
                  letterSpacing: "-0.5px",
                  color: "var(--text-primary)",
                  lineHeight: 1.2,
                }}
              >
                CHAT LIKE IT'S 1998
              </h1>

              {/* Hero Vibe Subtext */}
              <p
                style={{
                  width: "100%",
                  maxWidth: 680,
                  fontSize: "1.08rem",
                  fontWeight: 500,
                  lineHeight: 1.6,
                  textAlign: "center",
                  color: "var(--text-primary)",
                  opacity: 0.7,
                  fontFamily: "var(--font-retro)",
                  margin: "0 auto",
                }}
              >
                Welcome to CyberChat '98 — a nostalgic retro sanctuary for hanging out with friends, exchanging banter in lively channels, and chatting in raw 90s cyber vibes.
              </p>
            </div>

            {/* 3 Feature Windows Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 16,
              }}
            >
              {/* Feature 1 */}
              <div
                style={{
                  border: "2px solid var(--border-dark)",
                  borderRadius: 6,
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--retro-shadow-sm)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#48c9b0",
                    color: "#1e1b18",
                    padding: "6px 10px",
                    borderBottom: "2px solid var(--border-dark)",
                    fontWeight: 700,
                    fontFamily: "var(--font-retro)",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <RetroMailIcon size={16} />
                  <span>3-WAY AUTH PORTAL</span>
                </div>
                <div style={{ padding: 12, fontSize: "0.85rem", lineHeight: 1.45, color: "var(--text-secondary)" }}>
                  Sign in instantly with <strong>Google</strong>, <strong>GitHub</strong>, or <strong>Email</strong>.
                </div>
              </div>

              {/* Feature 2 */}
              <div
                style={{
                  border: "2px solid var(--border-dark)",
                  borderRadius: 6,
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--retro-shadow-sm)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#fed330",
                    color: "#1e1b18",
                    padding: "6px 10px",
                    borderBottom: "2px solid var(--border-dark)",
                    fontWeight: 700,
                    fontFamily: "var(--font-retro)",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <RetroFolderIcon size={16} />
                  <span>CHANNELS & DMS</span>
                </div>
                <div style={{ padding: 12, fontSize: "0.85rem", lineHeight: 1.45, color: "var(--text-secondary)" }}>
                  Create custom group channels or direct conversations with realtime delivery, read receipts, and typing pulses.
                </div>
              </div>

              {/* Feature 3 */}
              <div
                style={{
                  border: "2px solid var(--border-dark)",
                  borderRadius: 6,
                  backgroundColor: "var(--card-bg)",
                  boxShadow: "var(--retro-shadow-sm)",
                  overflow: "hidden",
                }}
              >
                <div
                  style={{
                    backgroundColor: "#a55eea",
                    color: "#ffffff",
                    padding: "6px 10px",
                    borderBottom: "2px solid var(--border-dark)",
                    fontWeight: 700,
                    fontFamily: "var(--font-retro)",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <RetroFloppyIcon size={16} />
                  <span>MEDIA & 8-BIT AUDIO</span>
                </div>
                <div style={{ padding: 12, fontSize: "0.85rem", lineHeight: 1.45, color: "var(--text-secondary)" }}>
                  Share files and photos with retro frames, plus synthesized 8-bit sound effects and customizable grid themes.
                </div>
              </div>
            </div>

            {/* Launch CTA */}
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, marginTop: 4 }}>
              <button
                type="button"
                className="retro-btn retro-btn-lg retro-btn-orange"
                onClick={handleLaunch}
                style={{
                  fontSize: "1.15rem",
                  padding: "14px 36px",
                  letterSpacing: "0.5px",
                }}
              >
                <span>🚀 {user ? "OPEN ACTIVE CHAT" : "LAUNCH CHAT / SIGN IN"}</span>
              </button>

              <div
                style={{
                  fontSize: "0.85rem",
                  fontFamily: "var(--font-arcade)",
                  color: "var(--text-muted)",
                  letterSpacing: 0.5,
                }}
              >
                v1.0.0
              </div>
            </div>
          </div>
        </RetroWindow>
      </div>

      {/* Desktop Quick Shortcuts (Bottom Grid) */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: 24,
          marginTop: 28,
          zIndex: 10,
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
            padding: 6,
          }}
          onClick={handleLaunch}
        >
          <RetroGlobeIcon size={32} />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "var(--font-retro)" }}>
            Network
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
            padding: 6,
          }}
          onClick={handleLaunch}
        >
          <RetroFloppyIcon size={32} />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "var(--font-retro)" }}>
            Database
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
            cursor: "pointer",
            padding: 6,
          }}
          onClick={handleLaunch}
        >
          <RetroMailIcon size={32} badge={3} />
          <span style={{ fontSize: "0.75rem", fontWeight: 700, fontFamily: "var(--font-retro)" }}>
            Inbox
          </span>
        </div>
      </div>
    </div>
  );
};
