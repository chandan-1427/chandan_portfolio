import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Fraunces, Stalemate } from "next/font/google";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/data/site";
import "@/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
// Only used for the footer signature, so it is not preloaded on first paint
const stalemate = Stalemate({ subsets: ["latin"], weight: "400", variable: "--font-stalemate", display: "swap", preload: false });

// Icons and the share image live in public/. Bump ASSET_VERSION after changing
// any of them, so browsers and link previews fetch the new files.
const ASSET_VERSION = "1";
const asset = (path: string) => `${path}?v=${ASSET_VERSION}`;

const SHARE_IMAGE = {
  url: asset("/og-image.png"),
  width: 1200,
  height: 630,
  type: "image/png",
  alt: "Chandan, full-stack developer from Kadapa, India",
};

// The title stays fixed: it's what shows in tabs, bookmarks, history and search results.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Chandan",
  authors: [{ name: "Dakka Chandan", url: SITE_URL }],
  alternates: { canonical: "/" },
  icons: {
    // .ico first as the fallback; browsers that support SVG use the theme-aware one
    icon: [
      { url: asset("/favicon.ico"), sizes: "48x48", type: "image/x-icon" },
      { url: asset("/icons/icon.svg"), sizes: "any", type: "image/svg+xml" },
    ],
    apple: [{ url: asset("/icons/apple-icon.png"), sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "/",
    siteName: "Chandan",
    images: [SHARE_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@chandan_1427",
    images: [SHARE_IMAGE],
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

// Runs before first paint: the intro plays on the first load of a tab,
// then reloads within the session show the page instantly
const introScript = `try{if(sessionStorage.getItem("intro")){document.documentElement.dataset.intro="played"}else{sessionStorage.setItem("intro","1")}}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${stalemate.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: introScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
