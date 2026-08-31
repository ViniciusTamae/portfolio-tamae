# Portfólio — Vinicius Tamae Chicalé

Site de portfólio pessoal construído com **React + Vite + TypeScript**, tema dark, apresentando bio, skills, experiência/formação, projetos (destaques manuais + repositórios do GitHub via API) e contato.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

## Build de produção

```bash
npm run build
npm run preview
```

## Editando o conteúdo

Todo o conteúdo do site fica centralizado em `src/data/`:

- `src/data/profile.ts` — nome, bio, skills, links sociais, timeline de experiência/formação.
- `src/data/projects.ts` — projetos em destaque (cards manuais).

Os repositórios do GitHub são buscados automaticamente em tempo real via `src/hooks/useGithubRepos.ts` (usuário definido em `profile.githubUser`).

## Docker

Build e execução da versão de produção (Nginx servindo o build estático):

```bash
docker compose up --build web
```

Acesse `http://localhost:8080`.

Ambiente de desenvolvimento com hot reload dentro do container:

```bash
docker compose --profile dev up --build dev
```

Acesse `http://localhost:5173`.

## Deploy no GitHub Pages

O workflow `.github/workflows/deploy.yml` builda e publica o site automaticamente a cada push na branch `main`, usando o nome do repositório como `base` path. Ative o GitHub Pages do repositório com a origem "GitHub Actions" em Settings → Pages.

> ⚠️ O GitHub Pages só serve arquivos estáticos — o chat com IA (seção abaixo) **não funciona** nesse deploy, porque ele depende de uma função serverless. Para ter o chat funcionando, publique (também) na Vercel.

## Chat com IA (`leticia.chat`)

O widget de chat no canto inferior direito é a **LeticIA**, assistente que conversa com um modelo de IA (Google Gemini, `gemini-flash-lite-latest` — variante leve, com cota gratuita maior) respondendo só com base nos dados reais do portfólio (`src/data/*.ts`) — sem fine-tuning, o contexto e os guardrails (escopo travado em falar só sobre o Vinicius, proibido gerar código/opiniões, resistente a jailbreak) ficam no prompt de sistema em `api/chat.ts`. Se a API não responder, o widget cai automaticamente numa resposta de reserva.

**Testando localmente (sem precisar de conta na Vercel):**

```bash
cp .env.example .env.local
# cole sua GEMINI_API_KEY em .env.local
npm run dev
```

Pronto — `npm run dev` sozinho já responde de verdade em `/api/chat`. Isso funciona graças a um plugin do Vite (`vite.config.ts`) que roda a mesma função `api/chat.ts` dentro do servidor de dev, só para desenvolvimento local; em produção quem roda é a função serverless de verdade, sem esse plugin.

**Publicando de vez (com o chat funcionando pra qualquer visitante):**

1. Crie uma chave de API gratuita em [aistudio.google.com/apikey](https://aistudio.google.com/apikey) (se ainda não tiver).
2. Faça deploy do projeto na [Vercel](https://vercel.com) (importe o repositório do GitHub — ela detecta o Vite automaticamente e trata `api/chat.ts` como função serverless).
3. No projeto da Vercel, vá em **Settings → Environment Variables** e adicione `GEMINI_API_KEY` com sua chave.
4. Redeploy. O chat passa a responder de verdade em `https://seu-projeto.vercel.app`.
