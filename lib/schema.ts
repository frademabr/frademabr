import { z as zod } from 'zod';

// export type MarketingContactSchemaType = zod.infer<typeof MarketingContactSchema>;

export const MarketingContactSchema = zod.object({
  filiais: zod.string().array().min(1, { message: 'Escolha uma filial Fradema!' }),
  outros: zod.string().array().min(1, { message: 'Escolha uma opção para prosseguir!' }),
  email: zod
    .string()
    .min(5, { message: 'Digite seu Email' })
    .email({ message: 'Email precisa ser válido!' }),
  empresa: zod.string(),
  nome: zod.string().min(2, { message: 'Primeiro nome é requerido!' }),
  cel: zod.string().min(11, { message: 'Número de celular não compatível' }),
});
