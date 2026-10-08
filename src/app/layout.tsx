import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Fraunces, Stalemate } from "next/font/google";
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/data/site";
import "@/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
// Only used for the footer signature, so it is not preloaded on first paint
const stalemate = Stalemate({ subsets: ["latin"], weight: "400", variable: "--font-stalemate", display: "swap", preload: false });

// Icons and share images come from files in this folder (icon.svg, favicon.ico,
// apple-icon.png, opengraph-image.png, twitter-image.png).
// The title stays fixed: it's what shows in tabs, bookmarks, history and search results.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Chandan",
  authors: [{ name: "Dakka Chandan", url: SITE_URL }],
  alternates: { canonical: "/" },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "/",
    siteName: "Chandan",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@chandan_1427",
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
