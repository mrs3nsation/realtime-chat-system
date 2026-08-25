import React, { useState, useEffect } from "react";
import { RetroWindow } from "../common/RetroWindow";
import { RetroMailIcon } from "../common/RetroIcons";
import { userApi } from "../../services/api";
import { User } from "../../types";
import { useChat } from "../../context/ChatContext";
import { sound } from "../../utils/sound";

interface NewChatModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewChatModal: React.FC<NewChatModalProps> = ({ isOpen, onClose }) => {
  const { createDirectConversation } = useChat();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const results = await userApi.searchUsers(searchQuery);
        if (isMounted) setUsers(results);
      } catch (err) {
        console.error("Failed to search users:", err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    const timer = setTimeout(fetchUsers, 250);
    return () => {
      isMounted = false;
      clearTimeout(timer);
    };
  }, [isOpen, searchQuery]);

  if (!isOpen) return null;

  const handleSelectUser = async (userId: string) => {
    try {
      setIsCreating(true);
      sound.playClick();
      await createDirectConversation(userId);
      onClose();
    } catch (err) {
      console.error("Failed to create direct chat:", err);
    } finally {
      setIsCreating(false);
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
      <div style={{ width: "100%", maxWidth: 460 }} onClick={(e) => e.stopPropagation()}>
        <RetroWindow
          title="New Direct Message"
          icon={<RetroMailIcon size={18} />}
          headerColor="orange"
          onClose={onClose}
          floating
        >
          <div style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
            {/* Search Input */}
            <div className="retro-search-container">
              <div className="retro-search-icon">🔍</div>
              <input
                type="text"
                className="retro-search-input"
                placeholder="Search by name or email..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            {/* Users List */}
            <div
              style={{
                maxHeight: 280,
                overflowY: "auto",
                border: "2px solid var(--border-dark)",
                borderRadius: 4,
                backgroundColor: "var(--window-subtle)",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {isLoading ? (
                <div style={{ padding: 24, textAlign: "center", fontFamily: "var(--font-arcade)", fontSize: "1.1rem", color: "var(--text-muted)" }}>
                  Searching directory...
                </div>
              ) : users.length === 0 ? (
                <div style={{ padding: 24, textAlign: "center", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                  No users found matching "{searchQuery}"
                </div>
              ) : (
                users.map((u) => (
                  <div
                    key={u.id}
                    onClick={() => handleSelectUser(u.id)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "10px 14px",
                      borderBottom: "1px solid var(--border-subtle)",
                      cursor: isCreating ? "not-allowed" : "pointer",
                      backgroundColor: "var(--card-bg)",
                      color: "var(--text-primary)",
                      transition: "background-color 0.15s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--card-bg-hover)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "var(--card-bg)")}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: "50%",
                          backgroundColor: "#fed330",
                          color: "#1e1b18",
                          border: "1.5px solid var(--border-dark)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 13,
                          fontWeight: 800,
                        }}
                      >
                        {u.avatarUrl ? (
                          <img src={u.avatarUrl} alt="" style={{ width: "100%", height: "100%", borderRadius: "50%" }} />
                        ) : (
                          (u.name || u.email)[0].toUpperCase()
                        )}
                      </div>
                      <div>
                        <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-primary)" }}>
                          {u.name || u.email.split("@")[0]}
                        </div>
                        <div style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{u.email}</div>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="retro-btn retro-btn-sm retro-btn-teal"
                      disabled={isCreating}
                    >
                      Chat
                    </button>
                  </div>
                ))
              )}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button type="button" className="retro-btn" onClick={onClose}>
                Cancel
              </button>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
