import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projectSchema = z.object({
  title: z.string(),
  tech: z.array(z.string()),
});

const bioSchema = z.object({
  title: z.string(),
});

const content = defineCollection({
  loader: glob({ pattern: './{en,el}/*.{md,mdx}', base: './src/content' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const enProjects = defineCollection({
  loader: glob({ pattern: './en/projects/*.{md,mdx}', base: './src/content' }),
  schema: projectSchema,
});

const elProjects = defineCollection({
  loader: glob({ pattern: './el/projects/*.{md,mdx}', base: './src/content' }),
  schema: projectSchema,
});

const enBio = defineCollection({
  loader: glob({ pattern: './en/bio/*.{md,mdx}', base: './src/content' }),
  schema: bioSchema,
});

const elBio = defineCollection({
  loader: glob({ pattern: './el/bio/*.{md,mdx}', base: './src/content' }),
  schema: bioSchema,
});

export const collections = { content, enProjects, elProjects, enBio, elBio };
