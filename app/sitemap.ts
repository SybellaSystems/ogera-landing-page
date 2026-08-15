import { MetadataRoute } from "next";

const BASE_URL = "https://ogera.sybellasystems.co.rw";

// Helper function to fetch dynamic jobs from your backend API
async function getAllJobSlugs(): Promise<{ slug: string; updatedAt?: string }[]> {
  try {
    const res = await fetch("https://app.ogera.sybellasystems.co.rw/api/public/jobs", {
      next: { revalidate: 3600 }, // Revalidate every hour
    });
    if (!res.ok) return [];
    const data = await res.json();
    // Adjust depending on whether your API returns an array or an object with a data property
    const jobs = Array.isArray(data) ? data : data.jobs || [];
    return jobs.map((job: any) => ({
      slug: job.slug || job.id,
      updatedAt: job.updated_at || job.created_at,
    }));
  } catch (error) {
    console.error("Failed to fetch jobs for sitemap:", error);
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. Static Core Pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/jobs`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/internships`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.9,
    },
  ];

  // 2. Dynamic Job & Internship Detail Pages
  const jobs = await getAllJobSlugs();
  const jobEntries: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${BASE_URL}/jobs/${job.slug}`,
    lastModified: job.updatedAt ? new Date(job.updatedAt) : new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticPages, ...jobEntries];
}