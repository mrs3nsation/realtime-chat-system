import React, { useState } from "react";
import { RetroWindow } from "../common/RetroWindow";
import { RetroFloppyIcon, RetroSmileyIcon } from "../common/RetroIcons";
import { useAuth } from "../../context/AuthContext";
import { userApi } from "../../services/api";
import { sound } from "../../utils/sound";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AVATAR_PRESETS = [
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Felix",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Luna",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Gizmo",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Bandit",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Shadow",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Princess",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Sparky",
  "https://api.dicebear.com/7.x/pixel-art/svg?seed=Buster",
];

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const { user, refreshProfile } = useAuth();
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");

  // Profile fields
  const [name, setName] = useState<string>(user?.name || "");
  const [avatarUrl, setAvatarUrl] = useState<string>(user?.avatarUrl || "");
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Password fields
  const [currentPassword, setCurrentPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  if (!isOpen || !user) return null;

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsSaving(true);
      setStatusMsg(null);
      sound.playClick();
      await userApi.updateProfile({ name: name.trim() || undefined, avatarUrl: avatarUrl.trim() || undefined });
      await refreshProfile();
      sound.playSuccess();
      setStatusMsg({ type: "success", text: "Profile updated successfully!" });
    } catch (err: unknown) {
      sound.playError();
      setStatusMsg({ type: "error", text: err instanceof Error ? err.message : "Failed to update profile" });
    } finally {
      setIsSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      sound.playError();
      setStatusMsg({ type: "error", text: "New passwords do not match" });
      return;
    }
    if (newPassword.length < 6) {
      sound.playError();
      setStatusMsg({ type: "error", text: "Password must be at least 6 characters" });
      return;
    }

    try {
      setIsSaving(true);
      setStatusMsg(null);
      sound.playClick();
      const msg = await userApi.changePassword({ currentPassword, newPassword });
      sound.playSuccess();
      setStatusMsg({ type: "success", text: msg || "Password changed successfully!" });
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (err: unknown) {
      sound.playError();
      setStatusMsg({ type: "error", text: err instanceof Error ? err.message : "Failed to change password" });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.45)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
        padding: 16,
      }}
      onClick={onClose}
    >
      <div style={{ width: "100%", maxWidth: 480 }} onClick={(e) => e.stopPropagation()}>
        <RetroWindow
          title="User Preferences & Profile"
          icon={<RetroSmileyIcon size={18} />}
          headerColor="teal"
          onClose={onClose}
          floating
        >
          {/* Tabs */}
          <div
            style={{
              display: "flex",
              borderBottom: "2px solid var(--border-dark)",
              backgroundColor: "var(--window-subtle)",
            }}
          >
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTab("profile");
                setStatusMsg(null);
              }}
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                borderRight: "2px solid var(--border-dark)",
                background: activeTab === "profile" ? "var(--window-bg)" : "transparent",
                fontWeight: 700,
                fontFamily: "var(--font-retro)",
                fontSize: "0.9rem",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
            >
              Identity & Avatar
            </button>
            <button
              type="button"
              onClick={() => {
                sound.playClick();
                setActiveTab("password");
                setStatusMsg(null);
              }}
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                background: activeTab === "password" ? "var(--window-bg)" : "transparent",
                fontWeight: 700,
                fontFamily: "var(--font-retro)",
                fontSize: "0.9rem",
                cursor: "pointer",
                color: "var(--text-primary)",
              }}
            >
              Security / Password
            </button>
          </div>

          <div style={{ padding: 20 }}>
            {statusMsg && (
              <div
                style={{
                  padding: "8px 12px",
                  marginBottom: 14,
                  border: "2px solid var(--border-dark)",
                  borderRadius: 4,
                  backgroundColor: statusMsg.type === "success" ? "#55efc4" : "#ff7675",
                  color: statusMsg.type === "success" ? "#1E1B18" : "#fff",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                }}
              >
                {statusMsg.text}
              </div>
            )}

            {activeTab === "profile" ? (
              <form onSubmit={handleSaveProfile} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {/* Email Read-only */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-retro)", marginBottom: 4, color: "var(--text-primary)" }}>
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="text"
                    className="retro-input"
                    value={user.email}
                    disabled
                    style={{ opacity: 0.7, cursor: "not-allowed" }}
                  />
                </div>

                {/* Display Name */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-retro)", marginBottom: 4, color: "var(--text-primary)" }}>
                    DISPLAY NAME
                  </label>
                  <input
                    type="text"
                    className="retro-input"
                    placeholder="Enter your screen name..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                {/* Avatar Selection */}
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-retro)", marginBottom: 6, color: "var(--text-primary)" }}>
                    PIXEL AVATAR PRESETS
                  </label>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 8 }}>
                    {AVATAR_PRESETS.map((preset, idx) => (
                      <div
                        key={idx}
                        onClick={() => {
                          sound.playClick();
                          setAvatarUrl(preset);
                        }}
                        style={{
                          width: "100%",
                          aspectRatio: "1/1",
                          border: avatarUrl === preset ? "3px solid #ff8552" : "2px solid var(--border-dark)",
                          borderRadius: 6,
                          overflow: "hidden",
                          cursor: "pointer",
                          backgroundColor: "var(--card-bg)",
                          padding: 4,
                          boxShadow: avatarUrl === preset ? "2px 2px 0px #ff8552" : "none",
                        }}
                      >
                        <img src={preset} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                    ))}
                  </div>

                  <input
                    type="text"
                    className="retro-input"
                    placeholder="Or enter custom image URL..."
                    value={avatarUrl}
                    onChange={(e) => setAvatarUrl(e.target.value)}
                    style={{ fontSize: "0.85rem" }}
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
                  <button type="button" className="retro-btn" onClick={onClose}>
                    Close
                  </button>
                  <button type="submit" className="retro-btn retro-btn-teal" disabled={isSaving}>
                    <RetroFloppyIcon size={16} />
                    <span>{isSaving ? "Saving..." : "Save Profile"}</span>
                  </button>
                </div>
              </form>
            ) : (
              <form onSubmit={handleChangePassword} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-retro)", marginBottom: 4, color: "var(--text-primary)" }}>
                    CURRENT PASSWORD
                  </label>
                  <input
                    type="password"
                    className="retro-input"
                    placeholder="Enter current password..."
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-retro)", marginBottom: 4, color: "var(--text-primary)" }}>
                    NEW PASSWORD
                  </label>
                  <input
                    type="password"
                    className="retro-input"
                    placeholder="Minimum 6 characters..."
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8rem", fontWeight: 700, fontFamily: "var(--font-retro)", marginBottom: 4, color: "var(--text-primary)" }}>
                    CONFIRM NEW PASSWORD
                  </label>
                  <input
                    type="password"
                    className="retro-input"
                    placeholder="Repeat new password..."
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>

                <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 8 }}>
                  <button type="button" className="retro-btn" onClick={onClose}>
                    Cancel
                  </button>
                  <button type="submit" className="retro-btn retro-btn-primary" disabled={isSaving}>
                    Update Password
                  </button>
                </div>
              </form>
            )}
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
