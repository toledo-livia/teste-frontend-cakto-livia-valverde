"use client";

import { useState } from "react";

interface LoadingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export default function LoadingButton({
  children,
  ...props
}: LoadingButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setLoading(true);
    if (props.onClick) await props.onClick(e);
    setTimeout(() => setLoading(false), 2000); // Simula delay de 2s
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={loading}
      className={`w-full py-3 rounded text-white font-semibold transition
        ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
    >
      {loading ? "Processando..." : children}
    </button>
  );
}
