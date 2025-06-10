import rss from "@astrojs/rss";
import { SITE } from "@consts";
import { getCollection } from "astro:content";

export async function GET(context) {
  const blog = (await getCollection("blog")).filter((post) => !post.data.draft);

  const projects = (await getCollection("projects")).filter(
    (project) => !project.data.draft && project.data.released,
  );

  const items = [...blog, ...projects]
    .filter((item) => item.data.date) // Only include items with dates for RSS
    .sort(
      (a, b) =>
        new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf(),
    );

  return rss({
    title: SITE.TITLE,
    description: SITE.DESCRIPTION,
    site: context.site,
    items: items.map((item) => ({
      title: item.data.title,
      description: item.data.description,
      pubDate: item.data.date,
      link: `/${item.collection}/${item.id}/`,
    })),
  });
}
