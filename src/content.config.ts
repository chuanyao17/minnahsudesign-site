import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectsCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    slug: z.string().optional(),
    description: z.string().optional(),
    draft: z.boolean().default(false),
    publishedAt: z.coerce.date().optional(),
    coverImage: image().optional(),
    gallery: z.array(image()).default([]),
    location: z.string().optional(),
    year: z.union([z.string(), z.number()]).optional(),
  }),
});

export const collections = {
  projects: projectsCollection,
};
