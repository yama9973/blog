import { z, defineCollection } from "astro:content";

const DateStringSchema = z.string().refine(value => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(value);
}, {
    message: 'Invalid date format. The correct format is: YYYY-MM-DD.',
});

const postsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        pubDate: DateStringSchema
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
        pubDate: DateStringSchema
    })
});

export const collections = {
    posts: postsCollection,
    works: worksCollection
};
