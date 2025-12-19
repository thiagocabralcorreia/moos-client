// src/components/forms/ContactForm.tsx
import { useState } from "react";
import { Stack, Button, Text, Textarea } from "reablocks";

export function ContactForm() {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (message.trim().length < 10) {
      setError("Mensagem muito curta");
      return;
    }

    setError("");
    alert("Mensagem enviada");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack>
        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>
            Mensagem
          </Text>
          <Textarea
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        {error && (
          <Text style={{ color: "red", marginBottom: "16px" }}>{error}</Text>
        )}

        <Button type="submit">Enviar</Button>
      </Stack>
    </form>
  );
}
