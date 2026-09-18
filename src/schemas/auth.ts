import * as zod from "zod";

const emailRegex = /^[\w.-]+@[\w.-]+\.\w{2,}$/;

const cpfRegex = /^(?:\d{3}\.\d{3}\.\d{3}-\d{2}|\d{11})$/;

export const loginSchema = zod.object({
  email: zod.string().regex(emailRegex, "Email inválido"),
  password: zod.string().min(6, "Palavra-passe inválida"),
});

export type LoginForm = zod.infer<typeof loginSchema>;

export const registerSchema = zod.object({
  name: zod.string().min(3, "Nome inválido"),
  email: zod.string().regex(emailRegex, "Email inválido"),
  cpf: zod.string().regex(cpfRegex, "CPF inválido"),
  password: zod.string().min(6, "Palavra-passe inválida"),
  type: zod.enum(["SHOPKEEPER", "COMMON"]),
});

export type RegisterForm = zod.infer<typeof registerSchema>;
