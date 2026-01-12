// src/state/atoms.ts
// Atoms são a unidade mínima de estado no Jotai.
// Cada atom é um estado global isolado e independente.
import { atom } from "jotai";

// Controle de tema global (light/dark)
export const themeAtom = atom<"light" | "dark">("light");

// Usuário autenticado simples (mock)
export type User = { name: string; email: string } | null;
export const userAtom = atom<User>(null);

// Contador global para demonstrar composição e ações
export const counterAtom = atom<number>(0);

// Atom derivado: texto amigável do contador
export const counterLabelAtom = atom((get) => `Cliques: ${get(counterAtom)}`);

// Atom async mock para login (simula call)
export const loginAtom = atom(
  null,
  async (_get, set, payload: { email: string; password: string }) => {
    // Aqui você poderia chamar um serviço real.
    // Simulação rápida:
    await new Promise((r) => setTimeout(r, 400));
    set(userAtom, { name: "Usuário", email: payload.email });
  }
);
