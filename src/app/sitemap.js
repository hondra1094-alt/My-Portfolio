import { projects } from "@/data/projects";

export default async function sitemap() {
  const staticRoutes = ["", "/about", "/projects", "/resume"].map((route) => ({
    url: `${process.env.SITE_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const projectRoutes = projects.map((project) => ({
    url: `${process.env.SITE_URL}/projects/${project.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
