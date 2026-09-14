export const SITE_URL = "https://puregoldendemolition.com";

export const company = {
  legalName: "Pure Golden Wrecking & Demolition Works LLC",
  brand: "Pure Golden Demolition",
  short: "Pure Golden",
  tagline: "Licensed demolition. Controlled takedown. Clean handover.",
  description:
    "Pure Golden Wrecking & Demolition Works LLC is a licensed demolition contractor in Dubai providing villa demolition, building demolition, industrial demolition, partial and interior demolition, excavation, concrete cutting and breaking, site clearance, and debris removal across Dubai and the UAE.",
  email: "info@puregoldendemolition.com",
  phones: [
    { label: "Mobile", e164: "+971505947422", display: "+971 50 594 7422" },
    { label: "Mobile", e164: "+971507485948", display: "+971 50 748 5948" },
    { label: "Mobile", e164: "+971508622954", display: "+971 50 862 2954" },
    { label: "Office", e164: "+97145859574", display: "+971 4 585 9574" },
  ],
  emergency: { e164: "+971505947422", display: "+971 50 594 7422" },
  whatsapp: "971505947422",
  address: {
    street: "Office M-02, Al Mateena",
    locality: "Dubai",
    region: "Dubai",
    country: "AE",
    countryName: "United Arab Emirates",
    display: "Office M-02, Al Mateena, Dubai, UAE",
  },
  hours: "Monday–Saturday 08:00–18:00",
  hoursSchema: ["Mo-Sa 08:00-18:00"],
  geo: { lat: 25.2048, lng: 55.2708 },
  priceRange: "$$",
  sameAs: [SITE_URL],
} as const;

export const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/guides", label: "Guides" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export const whyUs = [
  {
    title: "Licensed contractor in Dubai",
    body: "Work is planned to Dubai Municipality, DDA, and Trakhees requirements so the permit file, method statement, and site controls match the authority that actually governs your plot.",
  },
  {
    title: "Permit and NOC support",
    body: "We help assemble the demolition permit pack: affection plan, DEWA disconnection, telecom NOC, method statement, risk assessment, HSE plan, and neighbour-impact notes.",
  },
  {
    title: "Controlled methods",
    body: "Mechanical demolition, selective interior strip-out, concrete cutting, and sequenced takedown — chosen for structure type, access, and adjoining property risk, not a one-size wrecking approach.",
  },
  {
    title: "Clean site handover",
    body: "Debris is sorted, hauled, and the plot is levelled so the next contractor can start earthwork or construction without inheriting a dump.",
  },
] as const;
