import React, { useEffect } from "react";
import { RetroWindow, WindowColor } from "./RetroWindow";
import { sound } from "../../utils/sound";

export type DialogType = "error" | "warning" | "info" | "question";

interface RetroDialogProps {
  isOpen: boolean;
  type: DialogType;
  title?: string;
  message: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  confirmText?: string;
  cancelText?: string;
}

export const RetroDialog: React.FC<RetroDialogProps> = ({
  isOpen,
  type,
  title,
  message,
  onConfirm,
  onCancel,
  confirmText,
  cancelText,
}) => {
  useEffect(() => {
    if (isOpen) {
      if (type === "error" || type === "warning") {
        sound.playError();
      } else {
        sound.playClick();
      }
    }
  }, [isOpen, type]);

  if (!isOpen) return null;

  const getHeaderColor = (): WindowColor => {
    switch (type) {
      case "error":
        return "pink";
      case "warning":
        return "yellow";
      case "info":
        return "teal";
      case "question":
        return "teal";
      default:
        return "orange";
    }
  };

  const getDialogTitle = (): string => {
    if (title) return title;
    switch (type) {
      case "error":
        return "Error";
      case "warning":
        return "Warning";
      case "info":
        return "Information";
      case "question":
        return "Question";
      default:
        return "System Message";
    }
  };

  const renderIcon = () => {
    switch (type) {
      case "error":
        return (
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#fc5c65",
              border: "2px solid var(--border-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
              color: "#fff",
              flexShrink: 0,
              boxShadow: "var(--retro-shadow-sm)",
            }}
          >
            ✕
          </div>
        );
      case "warning":
        return (
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#fed330",
              border: "2px solid var(--border-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
              color: "#1e1b18",
              flexShrink: 0,
              boxShadow: "var(--retro-shadow-sm)",
            }}
          >
            !
          </div>
        );
      case "info":
        return (
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#48c9b0",
              border: "2px solid var(--border-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
              color: "#1e1b18",
              flexShrink: 0,
              boxShadow: "var(--retro-shadow-sm)",
            }}
          >
            i
          </div>
        );
      case "question":
        return (
          <div
            style={{
              width: 36,
              height: 36,
              borderRadius: "50%",
              backgroundColor: "#a55eea",
              border: "2px solid var(--border-dark)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              fontWeight: 900,
              color: "#fff",
              flexShrink: 0,
              boxShadow: "var(--retro-shadow-sm)",
            }}
          >
            ?
          </div>
        );
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0, 0, 0, 0.45)",
        backdropFilter: "blur(2px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: 16,
      }}
      onClick={onCancel}
    >
      <div
        style={{ width: "100%", maxWidth: 420 }}
        onClick={(e) => e.stopPropagation()}
      >
        <RetroWindow
          title={getDialogTitle()}
          headerColor={getHeaderColor()}
          onClose={onCancel || onConfirm}
          floating
        >
          <div style={{ padding: "20px 24px", display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              {renderIcon()}
              <div
                style={{
                  fontSize: "0.95rem",
                  lineHeight: 1.5,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  paddingTop: 4,
                  wordBreak: "break-word",
                }}
              >
                {message}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", gap: 10 }}>
              {onCancel && (
                <button
                  type="button"
                  className="retro-btn"
                  onClick={() => {
                    sound.playClick();
                    onCancel();
                  }}
                >
                  {cancelText || (type === "question" ? "No" : "Cancel")}
                </button>
              )}
              <button
                type="button"
                className={`retro-btn ${type === "error" ? "retro-btn-danger" : type === "warning" ? "retro-btn-primary" : "retro-btn-teal"}`}
                onClick={() => {
                  sound.playClick();
                  if (onConfirm) onConfirm();
                  else if (onCancel) onCancel();
                }}
              >
                {confirmText || (type === "question" ? "Yes" : "OK")}
              </button>
            </div>
          </div>
        </RetroWindow>
      </div>
    </div>
  );
};
