import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const listings = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/listings' }),
  schema: z.object({
    name: z.string(),
    slug: z.string(),
    brand: z.string(),
    model: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.string(),
    subcategory: z.string().optional(),
    url: z.string().url(),
    affiliateUrl: z.string().url().optional(),
    image: z.string().optional(),
    pricing: z.object({
      price: z.string(),
      salePrice: z.string().optional(),
      currency: z.string().default('USD'),
    }),
    specs: z.object({
      material: z.string(),
      firmness: z.string(),
      height: z.string(),
      warranty: z.string(),
      trial: z.string(),
    }),
    features: z.array(z.string()),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    bestFor: z.array(z.string()),
    rating: z.object({
      overall: z.number().min(0).max(5),
      comfort: z.number().min(0).max(5),
      support: z.number().min(0).max(5),
      cooling: z.number().min(0).max(5),
      value: z.number().min(0).max(5),
    }),
    lastUpdated: z.string(),
    tags: z.array(z.string()),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.string(),
    author: z.string().default('MattressRank Team'),
    image: z.string().optional(),
    tags: z.array(z.string()),
  }),
});

export const collections = { listings, blog };
