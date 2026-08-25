import React from "react";

interface RetroProgressBarProps {
  totalSegments?: number;
  activeSegments?: number;
  percentage?: number;
  color?: "orange" | "teal" | "purple" | "yellow" | "pink";
  label?: string;
  className?: string;
}

export const RetroProgressBar: React.FC<RetroProgressBarProps> = ({
  totalSegments = 16,
  activeSegments,
  percentage,
  color = "purple",
  label,
  className = "",
}) => {
  const activeCount =
    activeSegments !== undefined
      ? activeSegments
      : percentage !== undefined
      ? Math.round((percentage / 100) * totalSegments)
      : totalSegments;

  return (
    <div className={`retro-progress-container ${className}`}>
      {label && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "0.85rem",
            fontWeight: 700,
            fontFamily: "var(--font-retro)",
          }}
        >
          <span>{label}</span>
          {percentage !== undefined && <span>{Math.min(100, Math.max(0, percentage))}%</span>}
        </div>
      )}
      <div className="retro-progress-bar">
        {Array.from({ length: totalSegments }).map((_, idx) => {
          const isActive = idx < activeCount;
          return (
            <div
              key={idx}
              className={`progress-segment ${color}`}
              style={{
                backgroundColor: isActive ? undefined : "transparent",
                borderRight: idx < totalSegments - 1 ? "1.5px solid var(--border-dark)" : "none",
                opacity: isActive ? 1 : 0.15,
                animationDelay: `${idx * 0.08}s`,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
