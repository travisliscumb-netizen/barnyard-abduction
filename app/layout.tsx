import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Barnyard Abduction · Rolling Acres Farm",
  description:
    "A touch-first 3D arcade game. Pilot a UFO, beam up the herd, dodge the farmer, and escape before time runs out.",
  applicationName: "Barnyard Abduction",
  manifest: "/manifest.webmanifest",
  openGraph: {
    title: "Barnyard Abduction",
    description: "Beam. Boost. Escape.",
    images: [{ url: "/og.png", width: 1672, height: 941 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Barnyard Abduction",
    description: "Beam. Boost. Escape.",
    images: ["/og.png"],
  },
  other: {
    "codex-preview": "development",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#071018",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
