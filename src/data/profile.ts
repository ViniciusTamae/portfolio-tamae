// Fatos estruturais, independentes de idioma. O texto narrativo (bio, título
// de cada cargo/formação, período, descrição) vive em src/i18n/translations.ts,
// casado com estes registros pelo campo `id`.
export const profile = {
  name: "Vinicius Tamae Chicalé",
  location: "Brasil · Remoto",
  email: "tamaevinicius@gmail.com",
  github: "https://github.com/ViniciusTamae",
  githubUser: "ViniciusTamae",
  linkedin: "https://www.linkedin.com/in/vinicius-tamae-97a50223b/",
  whatsapp: "https://wa.me/5514997085466",
  resumeFile: "/curriculo-vinicius-tamae.pdf",
  // Agrupado por área — o rótulo de cada grupo (traduzível) vive em
  // translations.ts, casado pelo campo `id`, no mesmo padrão da timeline.
  // Ordem deliberada: o que mais diferencia (IA/LLM) aparece logo depois
  // das linguagens, não no meio da lista. Categorias de item único
  // (mensageria, validação, observabilidade) foram incorporadas a
  // infra & devops para reduzir a lista sem perder nenhuma tag.
  skillGroups: [
    { id: "languages", items: ["TypeScript", "JavaScript", "Python", "SQL"] },
    {
      id: "ai",
      items: [
        "LangChain",
        "LangGraph",
        "Claude / Anthropic API",
        "OpenAI API",
        "RAG",
        "Function / Tool Calling",
        "Prompt Engineering",
        "Slot Filling",
        "Agent Evals",
        "Vector Search (Typesense)",
      ],
    },
    { id: "backend", items: ["NestJS", "Node.js", "Express"] },
    { id: "apis", items: ["REST", "GraphQL (Apollo)"] },
    { id: "data", items: ["PostgreSQL", "TypeORM", "Redis"] },
    { id: "testing", items: ["Jest", "ts-jest", "tsx"] },
    { id: "quality", items: ["ESLint", "Prettier"] },
    {
      id: "infra",
      items: [
        "Docker",
        "Docker Compose",
        "Git / Git Flow",
        "CI/CD",
        "RabbitMQ",
        "Zod",
        "New Relic",
      ],
    },
    { id: "methodology", items: ["Scrum", "Clean Code", "SOLID", "Behavioral Regression Testing"] },
  ],
  timeline: [
    {
      id: "pedbot-pleno",
      place: "Pedbot",
      start: 2026.1,
      type: "experiencia" as const,
    },
    {
      id: "pedbot-jr2",
      place: "Pedbot",
      start: 2025.5,
      type: "experiencia" as const,
    },
    {
      id: "pedbot-jr1",
      place: "Pedbot",
      start: 2024.5,
      type: "experiencia" as const,
    },
    {
      id: "pedbot-estagio",
      place: "Pedbot",
      start: 2023.9,
      type: "experiencia" as const,
    },
    {
      id: "fiap-mba",
      place: "FIAP — MBA",
      start: 2026,
      type: "formacao" as const,
    },
    {
      id: "unimar",
      place: "UNIMAR",
      start: 2023,
      type: "formacao" as const,
    },
    {
      id: "hospital",
      place: "Hospital Espírita de Marília",
      start: 2022,
      type: "experiencia" as const,
    },
    {
      id: "micropro",
      place: "MicroPro",
      start: 2020,
      type: "formacao" as const,
    },
  ],
};

export type TimelineItem = (typeof profile.timeline)[number];
