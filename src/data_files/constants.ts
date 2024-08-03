import ogImageSrc from "@images/social.png";

export const SITE = {
  title: "TarKamp",
  tagline: "Apostille dan Legalisasi Dokumen",
  description: "Jasa Apostille, Legalisasi Dokumen dan Penerjemah tersumpah untuk kebutuhan atau persyaratan internasional",
  description_short: "Jasa Apostille, Legalisasi Dokumen dan Penerjemah tersumpah",
  url: "https://legalisirapostille.com",
  author: "Kurnia Muhamad",
};

export const SEO = {
  title: SITE.title,
  description: SITE.description,
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    inLanguage: "en-US",
    "@id": SITE.url,
    url: SITE.url,
    name: SITE.title,
    description: SITE.description,
    isPartOf: {
      "@type": "WebSite",
      url: SITE.url,
      name: SITE.title,
      description: SITE.description,
    },
  },
};

export const OG = {
  locale: "en_US",
  type: "website",
  url: SITE.url,
  title: `${SITE.title}: : Apostille dan Legalisasi Dokumen`,
  description: "Jasa Apostille, Legalisasi Dokumen dan Penerjemah tersumpah untuk kebutuhan atau persyaratan internasional",
  image: ogImageSrc,
};
