# SPODOP — Front-end

> Projeto em desenvolvimento ativo

Frontend da plataforma **SPODOP** — interface web para autenticação, navegação e operação das funcionalidades de planejamento, registro e acompanhamento de aplicações de defensivos agrícolas, consumindo a API [`spodop-api`](https://github.com/LuisG-santos/spodop-api).

![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=flat-square)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=flat-square)

---

## Funcionalidades

- **Interface da plataforma SPODOP** — camada visual e fluxo de interação com o usuário
- **Autenticação (em evolução)** — integração com endpoints de autenticação da API
- **Validação de formulários** — validação de dados com `zod` + `react-hook-form`
- **Feedback visual de erros e ações** — notificações e padronização de mensagens
- **Consumo centralizado da API** — cliente HTTP configurado com interceptação de erros
- **Design system em construção** — componentes reutilizáveis em `src/components/ui`

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | Next.js 16 (App Router) |
| Linguagem | TypeScript |
| UI | React 19 |
| Estilização | Tailwind CSS v4 |
| Componentes | @base-ui/react + utilitários de UI |
| Formulários | react-hook-form |
| Validação | zod + @hookform/resolvers |
| HTTP Client | axios |
| Notificações | sonner |

---

## Arquitetura

O front segue organização modular com separação por responsabilidade:

```bash
src/
├── app/                  # Layout global, rotas e páginas (App Router)
├── components/
│   └── ui/               # Componentes de interface reutilizáveis
└── lib/
    ├── api.ts            # Instância Axios + interceptador de erros
    ├── api/              # Módulos por domínio (ex.: auth)
    ├── validations/      # Schemas de validação (zod)
    ├── errors/           # Erros customizados da aplicação
    └── utils.ts          # Helpers utilitários (cn, etc.)
```

Fluxo padrão de integração com backend:

```bash
Página/Componente → lib/api/* → Axios (api.ts) → spodop-api
```

---

## Como executar localmente

### Pré-requisitos

- Node.js 18+
- npm (ou yarn/pnpm/bun)
- `spodop-api` rodando localmente ou em ambiente remoto acessível

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
NEXT_PUBLIC_API_URL="http://localhost:3001"
```

> Ajuste a URL para o endereço onde o `spodop-api` estiver disponível.

### Rodando o projeto

```bash
npm run dev
```

Por padrão, o projeto sobe em:

- `http://localhost:8080`

---

## Scripts disponíveis

| Script | Descrição |
|---|---|
| `npm run dev` | Inicia o Next.js em desenvolvimento com Turbopack na porta `8080` |
| `npm run build` | Gera build de produção |
| `npm run start` | Executa a aplicação em modo produção |
| `npm run lint` | Executa verificação de lint |

---

## Integração com o `spodop-api`

Este frontend foi projetado para consumir a API do projeto:

- [`LuisG-santos/spodop-api`](https://github.com/LuisG-santos/spodop-api)

Pontos atuais já implementados:
- Configuração de `baseURL` via variável `NEXT_PUBLIC_API_URL`
- Interceptação de erros HTTP e normalização com `ApiError`
- Módulo inicial de autenticação (`auth/register`)

---

## Roadmap

- [x] Base do projeto com Next.js + TypeScript + Tailwind
- [x] Estrutura inicial de componentes UI reutilizáveis
- [x] Cliente HTTP centralizado com tratamento de erros
- [x] Schema inicial de validação para cadastro de usuário
- [ ] Fluxo completo de autenticação (login, sessão, proteção de rotas)
- [ ] Dashboard inicial com dados da API
- [ ] Módulos de propriedades, talhões e aplicações
- [ ] Estados de carregamento/erro padronizados por tela
- [ ] Testes de componentes e fluxos críticos

---

## Licença

Este projeto está licenciado sob a **MIT License** — veja o arquivo [LICENSE](./LICENSE) para mais detalhes.
