// src/components/JotaiPanel.tsx
// Demonstração prática de estado global com Jotai.
// Mostra toggle de tema, contador global e um login mock compartilhado.
import { useState } from "react";
import { useAtom } from "jotai";
import { Stack, Card, Text, Button, Input } from "reablocks";
import {
  themeAtom,
  counterAtom,
  counterLabelAtom,
  userAtom,
  loginAtom,
} from "../state/atoms";

export function JotaiPanel() {
  const [theme, setTheme] = useAtom(themeAtom);
  const [, setCounter] = useAtom(counterAtom);
  const [counterLabel] = useAtom(counterLabelAtom);
  const [user, setUser] = useAtom(userAtom);
  const [, login] = useAtom(loginAtom);

  const [email, setEmail] = useState("demo@example.com");
  const [password, setPassword] = useState("Senha@123");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    await login({ email, password });
    setLoading(false);
  }

  function handleLogout() {
    setUser(null);
  }

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <Card style={{ padding: "20px" }}>
      <Stack style={{ gap: 16 }}>
        <Text style={{ fontSize: "1.25rem", fontWeight: 600 }}>
          Estado Global com Jotai
        </Text>

        {/* Tema Global */}
        <div>
          <Text style={{ fontWeight: 600 }}>Tema</Text>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Text>Atual: {theme}</Text>
            <Button onClick={toggleTheme}>Alternar tema</Button>
          </div>
          <Text style={{ fontSize: "12px", color: "#666" }}>
            O valor vive em `themeAtom` e pode ser lido em qualquer componente.
          </Text>
        </div>

        {/* Contador Global */}
        <div>
          <Text style={{ fontWeight: 600 }}>Contador Global</Text>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <Button onClick={() => setCounter((c) => c - 1)}>-</Button>
            <Text>{counterLabel}</Text>
            <Button onClick={() => setCounter((c) => c + 1)}>+</Button>
          </div>
          <Text style={{ fontSize: "12px", color: "#666" }}>
            `counterLabelAtom` deriva do `counterAtom` e atualiza
            automaticamente.
          </Text>
        </div>

        {/* Login Global */}
        <div>
          <Text style={{ fontWeight: 600 }}>Login Global (mock)</Text>
          <Stack style={{ gap: 8 }}>
            <Input
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <Input
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Senha"
            />
            <div style={{ display: "flex", gap: 8 }}>
              <Button onClick={handleLogin} disabled={loading}>
                {loading ? "Autenticando..." : "Login"}
              </Button>
              <Button onClick={handleLogout} variant="secondary">
                Logout
              </Button>
            </div>
            <Text>
              Status: {user ? `Logado como ${user.email}` : "Anônimo"}
            </Text>
            <Text style={{ fontSize: "12px", color: "#666" }}>
              `loginAtom` escreve em `userAtom`; qualquer componente pode
              reagir.
            </Text>
          </Stack>
        </div>
      </Stack>
    </Card>
  );
}
