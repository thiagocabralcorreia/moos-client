# React Forms Lab 🚀

Um laboratório para estudar diferentes abordagens de formulários em React, começando com estado e validação manual, evoluindo para bibliotecas especializadas.

## 📌 Fase Atual

**Stack atual:**

- ⚛️ React + Vite
- 📘 TypeScript
- 🎨 Reablocks (componentes UI)
- 🧭 React Hook Form + Zod (validação tipada)
- 🌐 Jotai (estado global leve)

## 🎯 Objetivo

Este projeto foi criado de forma **intencionalmente repetitiva e verbosa** para demonstrar os problemas que surgem ao gerenciar formulários manualmente:

- ✋ Código duplicado
- 📝 Validação espalhada
- 🔄 Estado repetitivo
- 🐛 Feedback de erro manual

Isso prepara o terreno para entender **por que** bibliotecas como React Hook Form e Zod existem.

## 📁 Estrutura do Projeto

```
react-forms-lab/
├─ src/
│  ├─ components/
│  │  ├─ JotaiPanel.tsx        # Demonstração de estado global (Jotai)
│  │  └─ forms/
│  │     ├─ LoginForm.tsx      # Formulário de login (RHF + Zod)
│  │     ├─ RegisterForm.tsx   # Formulário de cadastro (RHF + Zod)
│  │     └─ ContactForm.tsx    # Formulário de contato (RHF + Zod)
│  ├─ state/atoms.ts           # Átomos globais Jotai
│  ├─ App.tsx                  # Componente principal
│  └─ main.tsx                 # Providers (Theme + Jotai)
├─ JOTAI_GUIDE.md              # Guia prático de Jotai
├─ ZOD_GUIDE.md                # Guia prático de Zod
├─ index.html
├─ package.json
├─ vite.config.ts
└─ README.md
```

## 🚀 Como executar

> ⚠️ **Requisito:** Node.js 20.19+ ou 22.12+
>
> Se você usa `nvm`, execute: `nvm use` (o projeto já tem um arquivo `.nvmrc`)

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 📋 Formulários Implementados

### 🔐 Login Form

- React Hook Form + Zod (`loginSchema`)
- Campos: Email, Senha
- Validações: email válido, senha min 6 chars

### 📝 Register Form

- React Hook Form + Zod (`registerSchema`)
- Campos: Nome, Email
- Validações: nome min 3 chars, email válido

### 📬 Contact Form

- React Hook Form + Zod (`contactSchema`)
- Campos: Mensagem (textarea)
- Validações: mensagem min 10 chars

### 🌐 Jotai Panel

- Toggle de tema (`themeAtom`)
- Contador global + derivado (`counterAtom`, `counterLabelAtom`)
- Login mock global (`loginAtom` → `userAtom`)

## 🔄 Evolução Planejada

Este projeto seguirá uma evolução incremental:

### ✅ Fase 2 - React Hook Form + Zod (Atual)

Validação tipada e gerenciamento de formulário centralizado.

### ✅ Fase 4 - Jotai (Demonstração básica)

Estado global leve com atoms e ações assíncronas.

### 🔜 Próximos

- Integrar `LoginForm` para popular `userAtom` após sucesso.
- Usar `themeAtom` para alternar tema do Reablocks dinamicamente.
- Adicionar toasts globais com atom dedicado.

## 🎓 Aprendizados

- ✅ Formulários tipados com Zod + React Hook Form
- ✅ Estado global simples e derivado com Jotai
- ✅ Padrões de atoms graváveis, derivados e ações async
- ⚙️ Próximo: integrar átomos aos formulários reais e temas

## 📚 Referências

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Reablocks](https://github.com/reaviz/reablocks)

---

**Próximo passo:** "Agora refatore os formulários usando **React Hook Form**"
