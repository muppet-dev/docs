import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Muppet",
    default: "Muppet - The MCP Development Platform",
  },
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </head>
      <body className="flex flex-col min-h-screen selection:bg-[#79ffe1] dark:selection:bg-[#f81ce5] dark:selection:text-white selection:text-secondary-700">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
