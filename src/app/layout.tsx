import "@/styles/globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Checkout",
  description: "Página de checkout estilizada com tema claro/escuro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gray-50 dark:bg-gray-900 transition-colors duration-300 text-gray-900 dark:text-gray-100`}
      >
        <ThemeProvider>
          <header className="flex justify-end p-4">
            <ThemeToggle />
          </header>
          <main className="max-w-3xl mx-auto p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
