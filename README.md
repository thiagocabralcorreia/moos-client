# React Forms Lab 🚀

Um laboratório para estudar diferentes abordagens de formulários em React, começando com estado e validação manual, evoluindo para bibliotecas especializadas.

## 📌 Fase Atual: Fase 1 - Base (Manual)

**Stack atual:**

- ⚛️ React + Vite
- 📘 TypeScript
- 🎨 Reablocks (componentes UI)
- 🔧 Estado e validação **manual** (`useState`, `onChange`, `onSubmit`)
- ❌ Sem React Hook Form
- ❌ Sem Zod
- ❌ Sem Jotai

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
│  │  └─ forms/
│  │     ├─ LoginForm.tsx      # Formulário de login
│  │     ├─ RegisterForm.tsx   # Formulário de cadastro
│  │     └─ ContactForm.tsx    # Formulário de contato
│  ├─ App.tsx                  # Componente principal
│  └─ main.tsx
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

- Campos: Email, Senha
- Validações:
  - Email deve conter "@"
  - Senha deve ter no mínimo 6 caracteres
- Feedback: Mensagem de erro única

### 📝 Register Form

- Campos: Nome, Email
- Validações:
  - Nome deve ter no mínimo 3 caracteres
  - Email deve conter "@"
- Feedback: Lista de erros múltiplos

### 📬 Contact Form

- Campos: Mensagem (textarea)
- Validações:
  - Mensagem deve ter no mínimo 10 caracteres
- Feedback: Mensagem de erro única

## 🔄 Evolução Planejada

Este projeto seguirá uma evolução incremental:

### ✅ Fase 1 - Base (Atual)

Estado e validação manual

### 🔜 Fase 2 - React Hook Form

Refatoração usando React Hook Form para gerenciar estado e validação

### 🔜 Fase 3 - Zod

Adição de schemas de validação tipados com Zod

### 🔜 Fase 4 - Jotai

Gerenciamento de estado compartilhado entre formulários

### 🔜 Fase 5 - Arquitetura Escalável

Organização em camadas, separação de responsabilidades

## 🎓 Aprendizados

### Problemas da abordagem manual:

- ❌ Muito código boilerplate
- ❌ Difícil manter consistência
- ❌ Validação duplicada
- ❌ Estado espalhado por múltiplos `useState`
- ❌ Sem tipagem forte nas validações

### Próximos passos resolverão:

- ✅ Centralização de estado com React Hook Form
- ✅ Validação tipada com Zod
- ✅ Estado compartilhado com Jotai
- ✅ Código mais limpo e manutenível

## 📚 Referências

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Reablocks](https://github.com/reaviz/reablocks)

---

**Próximo passo:** "Agora refatore os formulários usando **React Hook Form**"
