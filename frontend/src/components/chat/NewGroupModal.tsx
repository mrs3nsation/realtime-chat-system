import React, { useState, useEffect } from "react";
import { RetroWindow } from "../common/RetroWindow";
import { RetroFolderIcon } from "../common/RetroIcons";
import { userApi } from "../../services/api";
import { User } from "../../types";
import { useChat } from "../../context/ChatContext";
import { sound } from "../../utils/sound";

interface NewGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NewGroupModal: React.FC<NewGroupModalProps> = ({ isOpen, onClose }) => {
  const { createGroupConversation } = useChat();
  const [groupName, setGroupName] = useState<string>("");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserIds, setSelectedUserIds] = useState<Set<string>>(new Set());
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (!isOpen) return;

    let isMounted = true;
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const results = await userApi.searchUsers(searchQuery);
        if (isMounted) setUsers(results);
      } catch (err) {
        console.error("Failed to load users for group:", err);
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

  const toggleUser = (userId: string) => {
    sound.playClick();
    setSelectedUserIds((prev) => {
      const next = new Set(prev);
      if (next.has(userId)) next.delete(userId);
      else next.add(userId);
      return next;
    });
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!groupName.trim()) {
      setErrorMsg("Please enter a group name");
      sound.playError();
      return;
    }
    if (selectedUserIds.size === 0) {
      setErrorMsg("Please select at least 1 member for the group");
      sound.playError();
      return;
    }

    try {
      setIsSubmitting(true);
      setErrorMsg("");
      sound.playClick();
      await createGroupConversation(groupName.trim(), Array.from(selectedUserIds));
      sound.playSuccess();
      onClose();
    } catch (err: unknown) {
      sound.playError();
      setErrorMsg(err instanceof Error ? err.message : "Failed to create group");
    } finally {
      setIsSubmitting(false);
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
          title="Create New Channel"
          icon={<RetroFolderIcon size={18} />}
          headerColor="purple"
          onClose={onClose}
          floating
        >
          <form onSubmit={handleCreate} style={{ padding: 18, display: "flex", flexDirection: "column", gap: 14 }}>
            {errorMsg && (
              <div
                style={{
                  padding: "8px 12px",
                  backgroundColor: "#ff7675",
                  border: "2px solid var(--border-dark)",
                  borderRadius: 4,
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 600,
                }}
              >
                {errorMsg}
              </div>
            )}

            {/* Group Name Input */}
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
                CHANNEL NAME
              </label>
              <input
                type="text"
                className="retro-input"
                placeholder="e.g. Pixel Warriors, Team Alpha..."
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                autoFocus
              />
            </div>

            {/* Members Search & Selection */}
            <div>
              <label
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  fontFamily: "var(--font-retro)",
                  marginBottom: 6,
                  color: "var(--text-primary)",
                }}
              >
                <span>SELECT MEMBERS</span>
                <span className="retro-badge retro-badge-yellow">{selectedUserIds.size} SELECTED</span>
              </label>

              <div className="retro-search-container" style={{ marginBottom: 8 }}>
                <div className="retro-search-icon">🔍</div>
                <input
                  type="text"
                  className="retro-search-input"
                  placeholder="Filter users..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div
                style={{
                  maxHeight: 180,
                  overflowY: "auto",
                  border: "2px solid var(--border-dark)",
                  borderRadius: 4,
                  backgroundColor: "var(--window-subtle)",
                }}
              >
                {isLoading ? (
                  <div style={{ padding: 16, textAlign: "center", fontFamily: "var(--font-arcade)", fontSize: "1.1rem", color: "var(--text-muted)" }}>
                    Loading directory...
                  </div>
                ) : users.length === 0 ? (
                  <div style={{ padding: 16, textAlign: "center", color: "var(--text-muted)", fontSize: "0.85rem" }}>
                    No users found
                  </div>
                ) : (
                  users.map((u) => {
                    const isChecked = selectedUserIds.has(u.id);
                    return (
                      <div
                        key={u.id}
                        onClick={() => toggleUser(u.id)}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "8px 12px",
                          borderBottom: "1px solid var(--border-subtle)",
                          cursor: "pointer",
                          backgroundColor: isChecked ? "var(--card-bg-selected)" : "var(--card-bg)",
                          color: "var(--text-primary)",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            style={{ width: 16, height: 16, accentColor: "#a55eea", cursor: "pointer" }}
                          />
                          <div>
                            <div style={{ fontWeight: 700, fontSize: "0.85rem", color: "var(--text-primary)" }}>{u.name || u.email.split("@")[0]}</div>
                            <div style={{ fontSize: "0.75rem", color: "var(--text-muted)" }}>{u.email}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10, marginTop: 6 }}>
              <button type="button" className="retro-btn" onClick={onClose}>
                Cancel
              </button>
              <button
                type="submit"
                className="retro-btn retro-btn-purple"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating..." : "Create Channel"}
              </button>
            </div>
          </form>
        </RetroWindow>
      </div>
    </div>
  );
};
