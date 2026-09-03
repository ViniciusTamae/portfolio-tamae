// Stack por projeto (nomes de tecnologia não mudam por idioma). Nome e
// descrição de cada projeto vivem em src/i18n/translations.ts, casados pelo
// campo `id`.
export type FeaturedProject = {
  id: string;
  stack: string[];
};

export const featuredProjects: FeaturedProject[] = [
  {
    id: "whatsapp-ai",
    stack: ["LangChain", "Node.js", "TypeScript", "NLP", "Tool Calling"],
  },
  {
    id: "projeto-maria",
    stack: [
      "NestJS",
      "LangGraph",
      "RabbitMQ",
      "Redis",
      "GraphQL",
      "TypeORM",
      "PostgreSQL",
      "Typesense",
    ],
  },
  {
    id: "evals",
    stack: ["TypeScript", "Node.js", "PostgreSQL", "YAML", "Zod"],
  },
  {
    id: "vtex",
    stack: ["VTEX", "NestJS", "Docker", "New Relic"],
  },
];
