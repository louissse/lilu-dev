// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// Define a `loader` and `schema` for each collection
const projectsCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/projects" }),
  schema: ({ image }) =>
    z.object({
      order: z.number(),
      title: z.string(),
      subtitle: z.string(),
      live: z.string().optional(),
      github: z.string().optional(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()),
    }),
});

const notesCollection = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/notes" }),
  schema: ({ image }) =>
    z.object({
      pubDate: z.date(),
      title: z.string(),
      author: z.string(),
      description: z.string(),
      image: z
        .object({
          src: image(),
          alt: z.string(),
        })
        .optional(),
      tags: z.array(z.string()),
    }),
});

export const collections = {
  projects: projectsCollection,
  notes: notesCollection,
};
