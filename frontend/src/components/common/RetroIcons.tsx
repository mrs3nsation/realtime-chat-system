import React from "react";

export const RetroComputerIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="13" rx="2" fill="#7bed9f" stroke="#1E1B18" strokeWidth="2" />
    <rect x="6" y="5" width="12" height="9" rx="1" fill="#2ed573" stroke="#1E1B18" strokeWidth="1.5" />
    <path d="M10 16v3M14 16v3M6 19h12" stroke="#1E1B18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RetroFloppyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="3" y="3" width="18" height="18" rx="2" fill="#70a1ff" stroke="#1E1B18" strokeWidth="2" />
    <rect x="7" y="3" width="10" height="7" fill="#ffffff" stroke="#1E1B18" strokeWidth="1.5" />
    <rect x="9" y="5" width="3" height="4" fill="#1E1B18" />
    <circle cx="12" cy="15" r="3.5" fill="#ffffff" stroke="#1E1B18" strokeWidth="1.5" />
    <circle cx="12" cy="15" r="1.5" fill="#1E1B18" />
  </svg>
);

export const RetroFolderIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 6a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z" fill="#fed330" stroke="#1E1B18" strokeWidth="2" />
    <path d="M3 9h18" stroke="#1E1B18" strokeWidth="1.5" />
  </svg>
);

export const RetroMailIcon: React.FC<{ size?: number; badge?: number; className?: string }> = ({ size = 24, badge, className = "" }) => (
  <div style={{ position: "relative", display: "inline-flex" }}>
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2" fill="#ffeaa7" stroke="#1E1B18" strokeWidth="2" />
      <path d="M3 7l9 6 9-6" stroke="#1E1B18" strokeWidth="2" strokeLinecap="round" />
    </svg>
    {badge !== undefined && badge > 0 && (
      <span
        style={{
          position: "absolute",
          top: -6,
          right: -6,
          background: "#fc5c65",
          color: "#fff",
          fontSize: 10,
          fontFamily: "var(--font-pixel)",
          padding: "1px 5px",
          borderRadius: 8,
          border: "1.5px solid #1E1B18",
        }}
      >
        {badge}
      </span>
    )}
  </div>
);

export const RetroGlobeIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" fill="#48c9b0" stroke="#1E1B18" strokeWidth="2" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" stroke="#1E1B18" strokeWidth="1.5" />
  </svg>
);

export const RetroSmileyIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="9" fill="#fed330" stroke="#1E1B18" strokeWidth="2" />
    <circle cx="9" cy="10" r="1.5" fill="#1E1B18" />
    <circle cx="15" cy="10" r="1.5" fill="#1E1B18" />
    <path d="M8 14c1 2 2.5 3 4 3s3-1 4-3" stroke="#1E1B18" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const RetroFlowerIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({ size = 24, className = "", color = "#ff9ff3" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="7" r="3.5" fill={color} stroke="#1E1B18" strokeWidth="1.5" />
    <circle cx="12" cy="17" r="3.5" fill={color} stroke="#1E1B18" strokeWidth="1.5" />
    <circle cx="7" cy="12" r="3.5" fill={color} stroke="#1E1B18" strokeWidth="1.5" />
    <circle cx="17" cy="12" r="3.5" fill={color} stroke="#1E1B18" strokeWidth="1.5" />
    <circle cx="12" cy="12" r="3.5" fill="#fed330" stroke="#1E1B18" strokeWidth="1.5" />
  </svg>
);

export const RetroSparkleIcon: React.FC<{ size?: number; className?: string; color?: string }> = ({ size = 24, className = "", color = "#ff8552" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" fill={color} stroke="#1E1B18" strokeWidth="2" />
  </svg>
);

export const RetroPixelHeartIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      d="M4 6h3v3H4zm3-3h3v3H7zm3 0h4v3h-4zm4 0h3v3h-3zm3 3h3v3h-3zm0 3h3v3h-3zm-3 3h3v3h-3zm-3 3h3v3h-3zm-2 2h2v2h-2zm-3-2h3v3h-3zm-3-3h3v3h-3zm-3-3h3v3H4zm0-3h3v3H4zm3 0h10v3H7z"
      fill="#fc5c65"
    />
  </svg>
);

export const RetroGoogleIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

export const RetroGithubIcon: React.FC<{ size?: number }> = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);
