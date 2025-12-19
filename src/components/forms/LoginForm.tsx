// src/components/forms/LoginForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Input, Button, Text } from "reablocks";
import { loginSchema, type LoginFormData } from "../../schemas/auth.schema";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  async function onSubmit(data: LoginFormData) {
    console.log("Dados validados:", data);
    alert("Login realizado com sucesso");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Email</Text>
          <Input fullWidth {...register("email")} />
          {errors.email && (
            <Text style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.email.message}
            </Text>
          )}
        </div>

        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Senha</Text>
          <Input fullWidth type="password" {...register("password")} />
          {errors.password && (
            <Text style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.password.message}
            </Text>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Entrando..." : "Entrar"}
        </Button>
      </Stack>
    </form>
  );
}
