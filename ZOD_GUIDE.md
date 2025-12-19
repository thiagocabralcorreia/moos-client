# Validações com Zod

Este projeto utiliza [Zod](https://zod.dev/) para validações de formulários, integrado com [React Hook Form](https://react-hook-form.com/).

## Estrutura

```
src/
  schemas/          # Schemas de validação Zod
    auth.schema.ts
    contact.schema.ts
  components/
    forms/          # Formulários com validação
```

## Schemas Disponíveis

### Auth Schema (`src/schemas/auth.schema.ts`)

**loginSchema**

- `email`: string obrigatória, deve ser email válido
- `password`: string obrigatória, mínimo 6 caracteres

**registerSchema**

- `name`: string obrigatória, 3-100 caracteres
- `email`: string obrigatória, deve ser email válido
- `password`: opcional, mínimo 6 caracteres, deve conter maiúsculas, minúsculas e números

### Contact Schema (`src/schemas/contact.schema.ts`)

**contactSchema**

- `message`: string obrigatória, 10-1000 caracteres

## Como Usar

### Exemplo de uso com React Hook Form

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema";

function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    // Dados já validados pelo Zod
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}

      <button type="submit" disabled={isSubmitting}>
        Enviar
      </button>
    </form>
  );
}
```

### Validação Manual com Zod

```tsx
import { loginSchema } from "./schemas/auth.schema";

// Validação síncrona
const result = loginSchema.safeParse({
  email: "test@example.com",
  password: "123456",
});

if (result.success) {
  console.log(result.data); // Dados validados e tipados
} else {
  console.log(result.error.errors); // Lista de erros
}

// Validação assíncrona (lança erro se inválido)
try {
  const data = await loginSchema.parseAsync(formData);
  console.log(data);
} catch (error) {
  console.error(error);
}
```

### Criar Novos Schemas

```typescript
import { z } from "zod";

// Schema básico
export const mySchema = z.object({
  field: z.string().min(1, "Campo obrigatório"),
});

// Schema com transformações
export const userSchema = z.object({
  name: z.string().trim().toLowerCase(),
  age: z.coerce.number().int().positive(),
});

// Schema com validações customizadas
export const passwordSchema = z
  .object({
    password: z
      .string()
      .min(8, "Mínimo 8 caracteres")
      .regex(/[A-Z]/, "Deve conter maiúscula")
      .regex(/[a-z]/, "Deve conter minúscula")
      .regex(/[0-9]/, "Deve conter número"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas não conferem",
    path: ["confirmPassword"],
  });

// Type inference
export type MyFormData = z.infer<typeof mySchema>;
```

## Recursos Avançados do Zod

### Validações Comuns

```typescript
z.string().email("Email inválido")
z.string().url("URL inválida")
z.string().uuid("UUID inválido")
z.string().regex(/pattern/, "Formato inválido")
z.number().min(0).max(100)
z.number().int("Deve ser inteiro")
z.number().positive("Deve ser positivo")
z.date()
z.boolean()
z.enum(["option1", "option2"])
z.array(z.string())
z.object({ ... })
```

### Campos Opcionais e Padrões

```typescript
const schema = z.object({
  required: z.string(),
  optional: z.string().optional(),
  nullable: z.string().nullable(),
  withDefault: z.string().default("valor padrão"),
  nullish: z.string().nullish(), // undefined ou null
});
```

### Transformações

```typescript
const schema = z.object({
  // Remove espaços e converte para minúsculas
  email: z.string().trim().toLowerCase(),

  // Converte string para número
  age: z.coerce.number(),

  // Transformação customizada
  date: z.string().transform((str) => new Date(str)),
});
```

### Validações Customizadas

```typescript
const schema = z
  .object({
    password: z.string(),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Senhas devem ser iguais",
    path: ["confirmPassword"],
  });
```

## Vantagens

✅ **Type-safe**: TypeScript infere automaticamente os tipos  
✅ **Declarativo**: Validações claras e fáceis de ler  
✅ **Reutilizável**: Schemas podem ser compostos e estendidos  
✅ **Mensagens customizadas**: Erros amigáveis ao usuário  
✅ **Performance**: Validações muito rápidas  
✅ **Zero dependências**: Biblioteca leve

## Referências

- [Documentação Zod](https://zod.dev/)
- [React Hook Form + Zod](https://react-hook-form.com/get-started#SchemaValidation)
- [Zod GitHub](https://github.com/colinhacks/zod)
