// src/components/forms/ContactForm.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack, Button, Text, Textarea } from "reablocks";
import {
  contactSchema,
  type ContactFormData,
} from "../../schemas/contact.schema";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    console.log("Dados validados:", data);
    alert("Mensagem enviada com sucesso");
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <div style={{ marginBottom: "16px" }}>
          <Text style={{ display: "block", marginBottom: "8px" }}>
            Mensagem
          </Text>
          <Textarea fullWidth {...register("message")} />
          {errors.message && (
            <Text style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
              {errors.message.message}
            </Text>
          )}
        </div>

        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Enviando..." : "Enviar"}
        </Button>
      </Stack>
    </form>
  );
}
