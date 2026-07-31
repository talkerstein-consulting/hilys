import type { APIRoute } from "astro";
import { birthdayPackages, daySpaPackages } from "../data/packages-data";
import { articles } from "../data/articles-content";

const siteUrl = "https://hilysparklyspa.com";

export const GET: APIRoute = () => {
  const staticPaths = [
    "/",
    "/birthday-packages",
    "/day-spa-packages",
    "/booking",
    "/gallery",
    "/articles",
    "/contact",
    "/waiver-consent",
    "/privacy-policy",
  ];

  const packagePaths = [
    ...birthdayPackages.map((pkg) => `/birthday-packages/${pkg.slug}`),
    ...daySpaPackages.map((pkg) => `/day-spa-packages/${pkg.slug}`),
  ];

  const articlePaths = articles.map((article) => `/articles/${article.slug}`);

  const allPaths = [...staticPaths, ...packagePaths, ...articlePaths];

  const urls = allPaths
    .map(
      (path) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.7"}</priority>
  </url>`
    )
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
