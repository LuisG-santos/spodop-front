# AgroGestor — Frontend

> 🚧 Projeto em desenvolvimento ativo

Interface web da plataforma **AgroGestor** — sistema voltado ao agronegócio para monitoramento climático, sugestão de janelas de aplicação de defensivos agrícolas, gestão de propriedades e talhões e geração de documentos de aplicação.

Este repositório é o **frontend** da plataforma. O backend (API REST) está em [`LuisG-santos/spodop-api`](https://github.com/LuisG-santos/spodop-api).

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square&logo=zod&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=axios&logoColor=white)

---

## Funcionalidades

- 🌦️ **Monitoramento climático** — visualização de condições meteorológicas por propriedade
- 🪣 **Janelas de aplicação** — exibição de períodos ideais para aplicação de defensivos com base no clima
- 🏡 **Gestão de propriedades e talhões** — cadastro, edição e acompanhamento
- 📋 **Registro de aplicações** — interface para controle de produtos, doses e tipos de defensivo
- 📄 **Geração de documentos** — exportação dos registros de aplicação
- 🔐 **Autenticação** — cadastro e login integrados à API com JWT
- 🤖 **IA (em breve)** — integração com a Claude API para assistência inteligente ao produtor

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router + Turbopack) |
| Linguagem | TypeScript |
| UI | React 19 |
| Estilização | Tailwind CSS v4 |
| Componentes | shadcn/ui + @base-ui/react |
| Formulários | react-hook-form |
| Validação | zod + @hookform/resolvers |
| HTTP Client | axios |
| Notificações | sonner |
| Tema | next-themes |
| Ícones | lucide-react |

---

## Arquitetura

O frontend segue organização modular com separação clara por responsabilidade:

```
src/
├── app/                        # Rotas e páginas (App Router)
│   ├── (auth)/                 # Grupo de rotas de autenticação
│   │   └── register/           # Página de cadastro
│   ├── layout.tsx              # Layout global da aplicação
│   └── page.tsx                # Página inicial
│
├── components/
│   └── ui/                     # Componentes de interface reutilizáveis
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       └── sonner.tsx
│
└── lib/
    ├── api.ts                  # Instância Axios + interceptador de erros
    ├── api/                    # Módulos de integração por domínio
    │   └── auth.ts             # Chamadas aos endpoints de autenticação
    ├── validations/            # Schemas de validação (zod)
    │   └── users/
    │       └── register.schema.ts
    ├── errors/                 # Classe ApiError para erros normalizados
    └── utils.ts                # Helpers (cn, etc.)
```

Fluxo padrão de uma ação do usuário:

```
Página → react-hook-form (validação zod) → lib/api/* → api.ts (Axios) → spodop-api
```

---

## Integração com a API

Este frontend consome a [`spodop-api`](https://github.com/LuisG-santos/spodop-api) — API REST construída em Node.js + Express + Prisma + PostgreSQL.

### Cliente HTTP

O arquivo `src/lib/api.ts` centraliza toda a comunicação com o backend:

- `baseURL` configurada via variável de ambiente `NEXT_PUBLIC_API_URL`
- Interceptador de resposta que normaliza erros da API em instâncias de `ApiError`, carregando `message`, `field` e `code`

### Módulos de integração (`src/lib/api/`)

Cada arquivo representa um domínio da API:

| Arquivo | Domínio | Endpoints cobertos |
|---|---|---|
| `auth.ts` | Autenticação | `POST /auth/register` |

> Novos módulos serão adicionados conforme os endpoints da API forem implementados (propriedades, talhões, aplicações, clima).

### Endpoints da API disponíveis

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/user` | Criação de usuário |
| `GET` | `/user/:id` | Busca usuário por ID |
| `PUT` | `/user/:id` | Atualização de usuário |
| `POST` | `/auth/login` | Login e geração de token JWT |

---

## Como executar localmente

### Pré-requisitos

- Node.js 18+
- `spodop-api` rodando localmente — veja o [README da API](https://github.com/LuisG-santos/spodop-api#como-executar-localmente)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/LuisG-santos/spodop-front.git
cd spodop-front

# Instale as dependências
npm install
```

### Variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

> A porta padrão da `spodop-api` é `3000`. Ajuste se necessário.

### Rodando o projeto

```bash
npm run dev
```

O frontend estará disponível em `http://localhost:8080`.

---

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia em desenvolvimento com Turbopack na porta `8080` |
| `npm run build` | Gera build de produção |
| `npm run start` | Executa em modo produção |
| `npm run lint` | Verifica erros de lint |

---

## Roadmap

- [x] Base do projeto com Next.js + TypeScript + Tailwind v4
- [x] Componentes UI reutilizáveis (Button, Card, Dialog, Sonner)
- [x] Cliente HTTP centralizado com tratamento de erros normalizado
- [x] Schema de validação para cadastro de usuário (zod)
- [x] Integração com endpoint de registro (`POST /auth/register`)
- [ ] Página e fluxo de login (`POST /auth/login`)
- [ ] Proteção de rotas autenticadas
- [ ] Dashboard inicial com dados do usuário
- [ ] Módulos de propriedades e talhões
- [ ] Módulo de aplicações de defensivos
- [ ] Módulo de monitoramento climático
- [ ] Geração e exportação de documentos (PDF)
- [ ] Integração com Claude API (IA)

---

## Repositórios do projeto

| Repositório | Descrição |
|---|---|
| [`spodop-api`](https://github.com/LuisG-santos/spodop-api) | Backend — Node.js + Express + Prisma + PostgreSQL |
| [`spodop-front`](https://github.com/LuisG-santos/spodop-front) | Frontend — Next.js + React + Tailwind CSS |

---

## Licença

MIT
