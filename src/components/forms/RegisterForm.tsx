// src/components/forms/RegisterForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Input, Button, Text } from "reablocks";
import {
  registerSchema,
  type RegisterFormData,
} from "../../schemas/auth.schema";

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  async function onSubmit(data: RegisterFormData) {
    console.log("Dados validados:", data);
    alert("Cadastro realizado com sucesso");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Nome</Text>
          <Input fullWidth {...register("name")} />
          {errors.name && (
            <Text style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.name.message}
            </Text>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Email</Text>
          <Input fullWidth {...register("email")} />
          {errors.email && (
            <Text style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.email.message}
            </Text>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Cadastrando..." : "Cadastrar"}
        </Button>
      </Stack>
    </form>
  );
}
