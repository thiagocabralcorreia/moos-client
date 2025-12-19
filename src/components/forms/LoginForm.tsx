// src/components/forms/LoginForm.tsx
import { useState } from "react";
import { Stack, Input, Button, Text } from "reablocks";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!email.includes("@")) {
      setError("Email inválido");
      return;
    }

    if (password.length < 6) {
      setError("Senha deve ter no mínimo 6 caracteres");
      return;
    }

    setError("");
    alert("Login realizado com sucesso");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Email</Text>
          <Input
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>Senha</Text>
          <Input
            fullWidth
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {error && (
          <Text style={{ color: "red", marginBottom: "16px" }}>{error}</Text>
        )}

        <Button type="submit">Entrar</Button>
      </Stack>
    </form>
  );
}
