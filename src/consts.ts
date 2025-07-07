import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "theboring.app",
  DESCRIPTION:
    "Boring vibecoded tools, made in a couple of days. Learnings included.",
  EMAIL: "arthur@theboring.app",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION:
    "Boring vibecoded tools, made in a couple of days. Learnings included.",
};

export const BLOG: Metadata = {
  TITLE: "Timeline",
  DESCRIPTION: "My thoughts, learnings, and insights as I build projects.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "All theboring.app projects so far.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/theboringdotapp",
  },
];
