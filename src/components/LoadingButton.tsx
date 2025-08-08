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
    setTimeout(() => setLoading(false), 2000); // Simula delay de 2 segundos
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      disabled={loading}
      className={`
        w-full py-3 rounded-lg font-semibold transition 
        ${
          loading
            ? "bg-gray-500 cursor-not-allowed text-white"
            : "bg-neon-green text-black dark:text-white hover:brightness-110"
        }
      `}
    >
      {loading ? "Processando..." : children}
    </button>
  );
}
