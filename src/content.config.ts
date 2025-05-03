import { z, defineCollection } from "astro:content";
import { glob } from 'astro/loaders';

const postsCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/posts" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
});

const worksCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: "./src/content/works" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    image: z.object({
      url: z.string(),
      alt: z.string()
    })
  })
});


export const collections = {
  posts: postsCollection,
  works: worksCollection
};

