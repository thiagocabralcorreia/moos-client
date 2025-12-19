// src/components/forms/RegisterForm.tsx
import { useState } from "react";
import { Stack, Input, Button, Text } from "reablocks";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors: string[] = [];

    if (name.trim().length < 3) {
      validationErrors.push("Nome muito curto");
    }

    if (!email.includes("@")) {
      validationErrors.push("Email inválido");
    }

    setErrors(validationErrors);

    if (validationErrors.length === 0) {
      alert("Cadastro realizado");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Nome</Text>
          <Input
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Email</Text>
          <Input
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {errors.length > 0 && (
          <div style={{ marginBottom: "16px" }}>
            {errors.map((err) => (
              <Text key={err} style={{ color: "red", display: "block" }}>
                {err}
              </Text>
            ))}
          </div>
        )}

        <Button type="submit">Cadastrar</Button>
      </Stack>
    </form>
  );
}
