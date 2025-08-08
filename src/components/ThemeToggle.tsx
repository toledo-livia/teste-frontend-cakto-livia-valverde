"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react"; // Se estiver usando ícones (opcional)

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className={`p-2 rounded-full border transition hover:ring-2 ${
        isDark
          ? "bg-dark-surface text-neon-green border-neon-green hover:ring-neon-green"
          : "bg-white text-gray-800 border-gray-300 hover:ring-gray-400"
      }`}
      aria-label="Alternar tema claro e escuro"
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
