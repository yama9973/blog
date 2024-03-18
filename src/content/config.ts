import { z, defineCollection } from "astro:content";

const blogsCollection = defineCollection({
    type: 'content',
    schema: z.object({
      title: z.string(),
      description: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      pubDate: z.string().transform((str) => new Date(str))
    })
});

const worksCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        pubDate: z.string()
    })
});

export const collections = {
    blogs: blogsCollection,
    works: worksCollection,
};

