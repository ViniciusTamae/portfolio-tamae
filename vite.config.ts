import react from "@vitejs/plugin-react";
import { defineConfig, loadEnv, type Connect, type Plugin, type ViteDevServer } from "vite";

// Tipagem mínima espelhando api/chat.ts, sem importar o arquivo estaticamente
// (evita puxar as regras de resolução de módulo/extensão que a Vercel exige
// pro build da função real para dentro da checagem de tipos local do Vite).
type ChatHandler = (
  req: { method?: string; body?: unknown },
  res: { status: (code: number) => { json: (body: unknown) => void } },
) => Promise<void>;

// Plugin só para desenvolvimento local: reproduz a função serverless da
// Vercel (api/chat.ts) dentro do próprio servidor do Vite, assim
// `npm run dev` já responde de verdade em /api/chat, sem precisar da CLI
// da Vercel nem de login. Em produção (Vercel), quem roda é o api/chat.ts
// original — este plugin não entra no build.
//
// Carrega api/chat.ts via server.ssrLoadModule (a API oficial do Vite pra
// rodar TS server-side em dev), em vez de um import estático: assim a
// checagem de tipos do vite.config.ts fica isolada das regras de extensão
// de import que a Vercel exige (Node16/NodeNext, por causa do
// "type": "module" do package.json).
function localChatApiPlugin(env: Record<string, string>): Plugin {
  let server: ViteDevServer;

  return {
    name: "local-chat-api",
    configureServer(devServer) {
      server = devServer;
      server.middlewares.use("/api/chat", (async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.end(JSON.stringify({ error: "Método não permitido." }));
          return;
        }

        let raw = "";
        req.on("data", (chunk) => (raw += chunk));
        req.on("end", async () => {
          try {
            if (env.GEMINI_API_KEY) {
              process.env.GEMINI_API_KEY = env.GEMINI_API_KEY;
            }

            const body = raw ? JSON.parse(raw) : {};
            let statusCode = 200;

            const mod = await server.ssrLoadModule("/api/chat.ts");
            const chatHandler = mod.default as ChatHandler;

            await chatHandler(
              { method: "POST", body },
              {
                status(code: number) {
                  statusCode = code;
                  return {
                    json(payload: unknown) {
                      res.statusCode = statusCode;
                      res.setHeader("Content-Type", "application/json");
                      res.end(JSON.stringify(payload));
                    },
                  };
                },
              },
            );
          } catch (error) {
            console.error("[local-chat-api] erro:", error);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ error: "Erro interno no servidor de dev." }));
          }
        });
      }) as Connect.NextHandleFunction);
    },
  };
}

// Em produção (GitHub Pages) defina BASE_PATH="/nome-do-repositorio/" no ambiente de build.
// Localmente e no Docker, mantém "/".
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: process.env.BASE_PATH ?? "/",
    plugins: [react(), localChatApiPlugin(env)],
    server: {
      host: true,
      port: 5173,
    },
    preview: {
      host: true,
      port: 4173,
    },
  };
});
