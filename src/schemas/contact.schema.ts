// src/schemas/contact.schema.ts
import { z } from "zod";

export const contactSchema = z.object({
  message: z
    .string()
    .min(10, "Mensagem deve ter no mínimo 10 caracteres")
    .max(1000, "Mensagem muito longa")
    .trim(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
