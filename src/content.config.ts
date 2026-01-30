import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const content = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const enProjects = defineCollection({
  loader: glob({ pattern: './en/projects/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()),
  }),
});

const elProjects = defineCollection({
  loader: glob({ pattern: './el/projects/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    tech: z.array(z.string()),
  }),
});

const enBio = defineCollection({
  loader: glob({ pattern: './en/bio/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
  }),
});

const elBio = defineCollection({
  loader: glob({ pattern: './el/bio/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { content, enProjects, elProjects, enBio };
