import React from "react";
import { sound } from "../../utils/sound";

export type WindowColor = "orange" | "teal" | "purple" | "yellow" | "pink";

interface RetroWindowProps {
  title: string;
  icon?: React.ReactNode;
  headerColor?: WindowColor;
  onClose?: () => void;
  onMinimize?: () => void;
  onMaximize?: () => void;
  className?: string;
  style?: React.CSSProperties;
  floating?: boolean;
  children: React.ReactNode;
}

export const RetroWindow: React.FC<RetroWindowProps> = ({
  title,
  icon,
  headerColor = "orange",
  onClose,
  onMinimize,
  onMaximize,
  className = "",
  style,
  floating = false,
  children,
}) => {
  const handleControlClick = (fn?: () => void) => {
    sound.playClick();
    if (fn) fn();
  };

  return (
    <div
      className={`retro-window ${floating ? "floating" : ""} ${className}`}
      style={style}
    >
      <div className={`retro-titlebar ${headerColor}`}>
        <div className="retro-titlebar-title">
          {icon && <span style={{ display: "inline-flex", alignItems: "center" }}>{icon}</span>}
          <span>{title}</span>
        </div>

        <div className="retro-window-controls">
          {onMinimize && (
            <button
              type="button"
              className="retro-btn-win"
              title="Minimize"
              onClick={() => handleControlClick(onMinimize)}
            >
              _
            </button>
          )}
          {onMaximize && (
            <button
              type="button"
              className="retro-btn-win"
              title="Maximize"
              onClick={() => handleControlClick(onMaximize)}
            >
              □
            </button>
          )}
          {onClose && (
            <button
              type="button"
              className="retro-btn-win close"
              title="Close"
              onClick={() => handleControlClick(onClose)}
            >
              ✕
            </button>
          )}
          {!onClose && !onMinimize && !onMaximize && (
            <div style={{ display: "flex", gap: 3 }}>
              <span className="retro-btn-win">_</span>
              <span className="retro-btn-win">□</span>
              <span className="retro-btn-win">✕</span>
            </div>
          )}
        </div>
      </div>

      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
        {children}
      </div>
    </div>
  );
};
