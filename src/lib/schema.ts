import { company, SITE_URL } from "@/data/company";
import { faqs } from "@/data/faqs";
import { processSteps } from "@/data/process";
import { services } from "@/data/services";
import type { Guide } from "@/data/guides";
import type { Service } from "@/data/services";

const orgId = `${SITE_URL}/#organization`;
const siteId = `${SITE_URL}/#website`;

export function organizationSchema() {
  return {
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": orgId,
    name: company.legalName,
    alternateName: [company.brand, company.short],
    url: SITE_URL,
    email: company.email,
    telephone: company.phones[0].e164,
    image: `${SITE_URL}/images/hero.jpg`,
    logo: `${SITE_URL}/favicon.svg`,
    priceRange: company.priceRange,
    address: {
      "@type": "PostalAddress",
      streetAddress: company.address.street,
      addressLocality: company.address.locality,
      addressRegion: company.address.region,
      addressCountry: company.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: company.geo.lat,
      longitude: company.geo.lng,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: company.phones[0].e164,
        contactType: "sales",
        areaServed: "AE",
        availableLanguage: ["English", "Arabic"],
      },
      {
        "@type": "ContactPoint",
        telephone: company.emergency.e164,
        contactType: "emergency",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      },
    ],
    areaServed: {
      "@type": "City",
      name: "Dubai",
      containedInPlace: { "@type": "Country", name: "United Arab Emirates" },
    },
    knowsAbout: services.map((s) => s.name),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Demolition services in Dubai",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          url: `${SITE_URL}/services/${s.slug}`,
        },
      })),
    },
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": siteId,
    url: SITE_URL,
    name: company.brand,
    publisher: { "@id": orgId },
    inLanguage: "en-AE",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE_URL}/faq?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function faqSchema(items: { q: string; a: string }[] = faqs) {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function howToSchema() {
  return {
    "@type": "HowTo",
    name: "How villa demolition works in Dubai",
    description:
      "The six-step process Pure Golden uses for licensed villa and building demolition in Dubai, from inspection to clean handover.",
    totalTime: "P35D",
    step: processSteps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.name,
      text: s.text,
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@type": "Service",
    name: service.name,
    serviceType: service.name,
    description: service.answer,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": orgId },
    areaServed: { "@type": "City", name: "Dubai" },
    image: `${SITE_URL}${service.image}`,
  };
}

export function articleSchema(guide: Guide) {
  return {
    "@type": "Article",
    headline: guide.h1,
    description: guide.description,
    dateModified: "2026-09-01",
    author: { "@id": orgId },
    publisher: { "@id": orgId },
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".direct-answer", "h1", "h2"],
    },
  };
}

export function graph(nodes: object[]) {
  return {
    "@context": "https://schema.org",
    "@graph": [organizationSchema(), websiteSchema(), ...nodes],
  };
}
