import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const DOMAIN = "https://www.physiokolkata.in/"; // <-- your live domain

  // List all static routes manually here
  const staticRoutes = [
    "",
    "about",
    "services",
    "services/physiotherapy",
    "services/sports-injury",
    "services/post-surgery-rehab",
    "departments",
    "gallery",
    "reviews",
    "appointment",
    "contact",
    "blog",
    "faq",
    "privacy-policy",
  ];

  // Generate final URLs
  return staticRoutes.map((route) => ({
    url: `${DOMAIN}/${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
