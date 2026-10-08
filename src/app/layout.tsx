import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { Inter, Fraunces, Stalemate } from "next/font/google";
import "@/index.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const stalemate = Stalemate({ subsets: ["latin"], weight: "400", variable: "--font-stalemate", display: "swap" });

const SITE_URL = "https://portfolio-1-two-lovat.vercel.app";
const TITLE = "Chandan, full-stack developer";
const DESCRIPTION =
  "Chandan is a full-stack developer from Kadapa, India, building web apps and AI agents. Projects, experience and contact.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chandan",
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  icons: { icon: "/CJ.png", apple: "/CJ.png" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og-image.png"],
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
