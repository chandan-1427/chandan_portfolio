import App from "@/App";
import { PROFILE, LINKS } from "@/data/profile";
import { SITE_URL } from "@/data/site";

// Structured data so search engines know this page is about a person.
// Only facts that are already visible on the page.
const person = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.fullName,
  alternateName: PROFILE.name,
  jobTitle: "Full-stack developer",
  url: SITE_URL,
  email: `mailto:${PROFILE.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kadapa",
    addressRegion: "Andhra Pradesh",
    addressCountry: "IN",
  },
  sameAs: LINKS.map((link) => link.href),
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
      />
      <App />
    </>
  );
}
