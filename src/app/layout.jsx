import "@/index.css";

const SITE_URL = "https://portfolio-1-two-lovat.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Chandan",
  description: "Portfolio of Chandan — Full Stack Developer & AI Engineer. View projects, skills, and experience.",
  alternates: { canonical: "/" },
  icons: { icon: "/CJ.png", apple: "/CJ.png" },
  openGraph: {
    title: "Chandan — Full Stack Developer & AI Engineer",
    description: "Portfolio showcasing projects, skills, and experience.",
    type: "website",
    url: "/",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chandan — Full Stack Developer & AI Engineer",
    description: "Portfolio showcasing projects, skills, and experience.",
    images: ["/og-image.png"],
  },
};

export const viewport = {
  themeColor: "#1F1F1E",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
