import * as z from "zod";

export const MarketingContactSchema = z.object({
  filiais: z
    .string({ message: "Escolha uma filial Fradema!" })
    .array()
    .min(3,{ message: "Escolha uma filial Fradema!" }),
  outros: z.string().array().optional(),
  email: z.string().email({ message: "Email precisa ser válido!" }),
  empresa: z.string().optional(),
  nome: z
    .string({ message: "Campo requerido!" })
    .regex(/^[a-zA-Z]+$/, { message: "Formato Inválido" })
    .min(2, { message: "Nome é requerido!" }),
  cel: z
    .string()
    .regex(/^[0-9]*$/)
    .min(11, { message: "Celular deve ser no formato (xx)999998877, com DDD" }),
});
