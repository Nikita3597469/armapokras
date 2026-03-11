import { MetadataRoute } from "next";

const BASE = "https://armapokras.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/uslugi", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/uslugi/pokraska", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/uslugi/polirovka", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/uslugi/dopolnitelnye", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/price", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/portfolio", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/kontakty", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map((route) => ({
    url: `${BASE}${route.url}`,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
