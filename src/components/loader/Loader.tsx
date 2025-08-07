import { APP_COLORS } from "@/utils/theme";
import React from "react";

type LoaderProps = {
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
  size?: number;
  color?: string;
  overlayBg?: string;
};

const Loader: React.FC<LoaderProps> = ({
  loading = false,
  error = null,
  onRetry,
  size = 80,
  color = APP_COLORS.SECONDARY_COLOR,
  overlayBg = "bg-black/60",
}) => {
  if (!loading && !error) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50
        flex items-center justify-center
        ${overlayBg}
        transition-all
      `}
    >
      {error ? (
        <div className="p-8 bg-secondaryTextColor rounded-2xl shadow-xl flex flex-col items-center border border-yellow-400 max-w-xs">
          <svg
            className="text-yellow-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            width={size / 1.5}
            height={size / 1.5}
          >
            <path
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v4m0 4h.01M21 19a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v14z"
            />
          </svg>
          <h2 className="text-xl text-yellow-400 font-bold mb-3">Error</h2>
          <p className="text-gray-200 mb-6 text-center break-words">
            {typeof error === "string" ? error : "Something went wrong."}
          </p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="px-5 py-2 rounded-lg bg-yellow-400 text-secondaryTextColor font-semibold hover:bg-yellow-300 transition"
            >
              Retry
            </button>
          )}
        </div>
      ) : (
        <svg
          className={`animate-spin ${color}`}
          width={size}
          height={size}
          viewBox="0 0 50 50"
          fill="none"
        >
          <circle
            className="opacity-20"
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="5"
          />
          <path
            className="opacity-70"
            fill="currentColor"
            d="M25 5a20 20 0 0117.32 10.15c.36.67.12 1.52-.55 1.88a1.38 1.38 0 01-1.87-.56A17 17 0 0025 7a1.5 1.5 0 110-3z"
          />
        </svg>
      )}
      <span className="sr-only">{error ? "Error" : "Loading..."}</span>
    </div>
  );
};

export default Loader;
