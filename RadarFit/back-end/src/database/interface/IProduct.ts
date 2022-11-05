import { z } from 'zod';

export const productSchema = z.object({
  produto: z.string().min(5),
  valor: z.number(),
  descricao: z.string(), 
  created: z.date().optional(),
  updated: z.date().optional() });

export type IProduct = z.infer<typeof productSchema>;