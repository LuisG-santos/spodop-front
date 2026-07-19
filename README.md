# SPODOP Front-end

Frontend da plataforma **SPODOP**, desenvolvido para auxiliar produtores rurais no planejamento, registro e acompanhamento de aplicações de defensivos agrícolas.

Este projeto é a interface web que consome a API do repositório [`spodop-api`](https://github.com/LuisG-santos/spodop-api).

## 🚀 Tecnologias

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## 📦 Requisitos

Antes de começar, você precisa ter instalado na máquina:

- [Node.js](https://nodejs.org/) (versão 18 ou superior recomendada)
- npm, yarn, pnpm ou bun

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/LuisG-santos/spodop-front.git
cd spodop-front
```

Instale as dependências:

```bash
npm install
```

## ▶️ Executando o projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

- [http://localhost:3000](http://localhost:3000)

## 🔌 Configuração de ambiente

Crie um arquivo `.env.local` na raiz do projeto com as variáveis necessárias para conexão com o backend.

Exemplo:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

> Ajuste a URL conforme o ambiente em que o `spodop-api` estiver rodando.

## 📁 Estrutura do projeto

A estrutura pode variar conforme a evolução do sistema, mas de forma geral:

```bash
spodop-front/
├── app/                # Rotas e páginas (App Router)
├── components/         # Componentes reutilizáveis
├── public/             # Arquivos estáticos
├── styles/             # Estilos globais
└── ...
```

## 🧩 Integração com o backend

Este frontend depende do backend disponível em:

- [`spodop-api`](https://github.com/LuisG-santos/spodop-api)

Certifique-se de que a API esteja em execução e que a variável de ambiente com a URL esteja configurada corretamente.

## 📜 Scripts disponíveis

- `npm run dev` — inicia o ambiente de desenvolvimento
- `npm run build` — gera build de produção
- `npm run start` — executa a aplicação em produção
- `npm run lint` — executa lint do projeto

## 🤝 Contribuição

Contribuições são bem-vindas.

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Push para a branch (`git push origin feature/minha-feature`)
5. Abra um Pull Request

## 📄 Licença

Defina aqui a licença do projeto (ex.: MIT) caso aplicável.
