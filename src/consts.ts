import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "theboring.app",
  DESCRIPTION: "Tools and Projects made by a humnan, with AI.",
  EMAIL: "arthur@theboring.app",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Tools and Projects to make your life easier.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Learnings about building projects with AI.",
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
