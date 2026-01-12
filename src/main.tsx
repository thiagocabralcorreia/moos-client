import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider, theme } from "reablocks";
import { Provider as JotaiProvider } from "jotai";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <JotaiProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </JotaiProvider>
  </StrictMode>
);
