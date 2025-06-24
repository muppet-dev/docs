import "./global.css";
import { RootProvider } from "fumadocs-ui/provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import InspectorCoverImage from "../../public/inspector_cover.png";

const inter = Inter({
  subsets: ["latin"],
});

export function generateMetadata(): Metadata {
  const title = {
    template: "%s | muppet",
    default: "muppet - Toolkit for building MCPs",
  };
  const description =
    "Muppet is an open toolkit which standardizes the way you build, test, and deploy your MCPs. If MCP is the USB-C port for AI applications, think of Muppet as the assembly line that produces the USB-C port.";

  return {
    title,
    description,
    keywords: [
      "MCP",
      "MCPs",
      "MCP toolkit",
      "MCP development",
      "Honojs",
      "toolkit",
      "javascript",
      "typescript",
      "hono",
    ],
    metadataBase: new URL("https://muppet.dev"),
    category: "education",
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: {
        width: InspectorCoverImage.width,
        height: InspectorCoverImage.height,
        url: InspectorCoverImage.src,
      },
    },
    openGraph: {
      title,
      description,
      images: {
        width: InspectorCoverImage.width,
        height: InspectorCoverImage.height,
        url: InspectorCoverImage.src,
      },
      siteName: "Muppet Docs",
      url: "/",
      locale: "en_US",
      type: "website",
    },
  };
}

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
