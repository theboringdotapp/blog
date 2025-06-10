import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { type CollectionEntry, getCollection } from "astro:content";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

export async function getRelatedInsights(
  projectId: string,
): Promise<CollectionEntry<"blog">[]> {
  const allPosts = await getCollection("blog");

  return allPosts
    .filter(
      (post) =>
        !post.data.draft &&
        post.data.type === "insight" &&
        post.data.projectId === projectId,
    )
    .sort((a, b) => {
      if (!a.data.date && !b.data.date) return 0;
      if (!a.data.date) return -1; // Items without dates come first (future)
      if (!b.data.date) return 1;
      return b.data.date.valueOf() - a.data.date.valueOf();
    });
}

export async function getProjectById(
  projectId: string,
): Promise<CollectionEntry<"projects"> | null> {
  const allProjects = await getCollection("projects");

  return allProjects.find((project) => project.id === projectId) || null;
}
