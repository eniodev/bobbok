import { defineCollection } from 'astro:content';
import { z } from 'zod';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string().regex(/^[a-z0-9-]+$/)).default([]),
    category: z.string().regex(/^[a-z0-9-]+$/),
    published: z.boolean().default(false),
  }),
});

export const collections = { posts };
