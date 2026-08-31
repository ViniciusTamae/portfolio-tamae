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
  resumeFile: "/curriculo-vinicius-tamae.pdf",
  skills: [
    "TypeScript",
    "JavaScript",
    "Python",
    "Node.js",
    "NestJS",
    "LangChain",
    "GraphQL",
    "REST",
    "MySQL",
    "Docker",
    "Git / Git Flow",
    "New Relic",
    "VTEX",
    "CI/CD",
    "Scrum",
  ],
  timeline: [
    {
      id: "freelance-fullstack",
      place: "Freelance & Projetos",
      start: 2023,
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
