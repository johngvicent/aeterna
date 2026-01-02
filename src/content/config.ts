import { defineCollection, z } from 'astro:content';

const galeria = defineCollection({
  // 'content' es para archivos .md o .mdx
    type: 'content', 
    schema: z.object({
    title: z.string(),
    epoca: z.enum(['Prehistoria', 'Antigüedad', 'Clásico', 'Medieval', 'Moderna', 'Contemporáneo']),
    description: z.string(),
    image: z.string(), // Aquí irá el link a tu imagen (Unsplash o local)
    author: z.string().optional(),
    date: z.coerce.date().optional(),
    tags: z.array(z.string()).optional(),
    }),
});

// Exportamos la colección para que Astro la reconozca
export const collections = {
    'galeria': galeria,
};