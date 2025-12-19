import { Stack, Card, Text } from "reablocks";
import { LoginForm } from "./components/forms/LoginForm";
import { RegisterForm } from "./components/forms/RegisterForm";
import { ContactForm } from "./components/forms/ContactForm";

export function App() {
  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "32px" }}>
      <Stack>
        <Text
          style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "24px" }}
        >
          React Forms Lab
        </Text>

        <Card style={{ marginBottom: "24px", padding: "24px" }}>
          <Text
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Login
          </Text>
          <LoginForm />
        </Card>

        <Card style={{ marginBottom: "24px", padding: "24px" }}>
          <Text
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Cadastro
          </Text>
          <RegisterForm />
        </Card>

        <Card style={{ marginBottom: "24px", padding: "24px" }}>
          <Text
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Contato
          </Text>
          <ContactForm />
        </Card>
      </Stack>
    </div>
  );
}

export default App;
