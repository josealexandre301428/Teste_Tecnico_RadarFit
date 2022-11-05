import { z } from 'zod';

export const productSchema = z.object({
  produto: z.string({
    required_error: 'Product is required',
    invalid_type_error: 'Product must be a string',
  }).min(5, { message: 'Product must be 5 or more characters long' }),
  valor: z.number({
    required_error: 'Valor is required',
    invalid_type_error: 'Valor must be a number',
  }),
  descricao: z.string({
    required_error: 'descricao is required',
    invalid_type_error: 'descricao must be a string',
  }), 
  created: z.date().optional(),
  updated: z.date().optional() });

export type IProduct = z.infer<typeof productSchema>;