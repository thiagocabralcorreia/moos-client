# Estado Global com Jotai

Este guia mostra como o projeto usa [Jotai](https://jotai.org/) para estado global simples, com exemplos práticos.

## Onde está o exemplo?

- Átomos: `src/state/atoms.ts`
- Painel de demonstração: `src/components/JotaiPanel.tsx`
- Provider: `src/main.tsx` (envolve a árvore com `<Provider>`)
- Uso na UI: o `JotaiPanel` é exibido na home (`src/App.tsx`).

## Átomos criados

```ts
// src/state/atoms.ts
export const themeAtom = atom<"light" | "dark">("light");
export const userAtom = atom<User | null>(null);
export const counterAtom = atom<number>(0);
export const counterLabelAtom = atom((get) => `Cliques: ${get(counterAtom)}`);
export const loginAtom = atom(
  null,
  async (_get, set, payload: { email: string; password: string }) => {
    await new Promise((r) => setTimeout(r, 400));
    set(userAtom, { name: "Usuário", email: payload.email });
  }
);
```

- **Primitivo**: `themeAtom`, `userAtom`, `counterAtom` são estados globais simples.
- **Derivado**: `counterLabelAtom` lê outro atom com `get` e computa um valor.
- **Gravável (write-only)**: `loginAtom` não expõe valor; apenas executa uma ação assíncrona e escreve em `userAtom`.

## Uso nos componentes

```tsx
// src/components/JotaiPanel.tsx
const [theme, setTheme] = useAtom(themeAtom);
const [counterLabel] = useAtom(counterLabelAtom);
const [, setCounter] = useAtom(counterAtom);
const [user, setUser] = useAtom(userAtom);
const [, login] = useAtom(loginAtom);

setCounter((c) => c + 1); // incrementa globalmente
setTheme((t) => (t === "light" ? "dark" : "light")); // toggle de tema
await login({ email, password }); // ação async que preenche userAtom
setUser(null); // logout global
```

### O que o painel demonstra

- **Tema global**: botão alterna `light/dark` guardado em `themeAtom`.
- **Contador global + derivado**: `counterAtom` e `counterLabelAtom` reagem juntos.
- **Login mock global**: `loginAtom` simula autenticação e escreve em `userAtom`; logout zera.

## Provider

O Provider do Jotai já envolve a árvore em `src/main.tsx`:

```tsx
<JotaiProvider>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</JotaiProvider>
```

## Como criar seus próprios átomos

1. **Crie um atom**

```ts
import { atom } from "jotai";
export const todoFilterAtom = atom<"all" | "done" | "todo">("all");
```

2. **Use com `useAtom`**

```tsx
import { useAtom } from "jotai";
import { todoFilterAtom } from "../state/atoms";

const [filter, setFilter] = useAtom(todoFilterAtom);
```

3. **Atom derivado**

```ts
export const todosAtom = atom<Todo[]>([]);
export const visibleTodosAtom = atom((get) => {
  const filter = get(todoFilterAtom);
  const todos = get(todosAtom);
  if (filter === "done") return todos.filter((t) => t.done);
  if (filter === "todo") return todos.filter((t) => !t.done);
  return todos;
});
```

4. **Atom com ação (write-only)**

```ts
export const addTodoAtom = atom(null, (_get, set, text: string) => {
  set(todosAtom, (prev) => [
    ...prev,
    { id: crypto.randomUUID(), text, done: false },
  ]);
});
```

## Dicas rápidas

- Use `useAtomValue` para só ler; `useSetAtom` para só escrever (melhora re-render).
- Atoms são focados: prefira vários atoms pequenos a um objeto gigante.
- Derivados mantêm consistência sem duplicar lógica.
- Para dados async, atoms de write/read podem lidar com Promises; Jotai suspende por padrão em modo Suspense.

## Próximos passos sugeridos

- Conectar `LoginForm` para gravar em `userAtom` após sucesso.
- Usar `themeAtom` para alterar o tema do Reablocks dinamicamente.
- Criar um atom de toasts/alertas globais para feedback unificado.
