export type Lang = "pt" | "en";

export const translations = {
  pt: {
    nav: {
      sobre: "Sobre",
      skills: "Skills",
      experiencia: "Experiência",
      hackathon: "Hackathon",
      projetos: "Projetos",
      contato: "Contato",
    },
    hero: {
      prompt: "$ whoami",
      role: "Desenvolvedor Full Stack Pleno",
      tagline: "TypeScript · LangChain · Agentes de IA · LLM em Produção",
      summary:
        "Desenvolvedor Full Stack Pleno com foco em TypeScript, Node.js e NestJS, atuando também com automação inteligente e integração de IA em produtos de escala.",
      ctaProjects: "./ver-projetos.sh",
      ctaContact: "$ contato",
      ctaResume: "↓ curriculo.pdf",
    },
    about: {
      eyebrow: "cat sobre.md",
      title: "Quem sou eu",
      panelLabel: "sobre.md",
      paragraphs: [
        "Sou Desenvolvedor Full Stack Pleno, especializado em Engenharia de IA — construção de agentes e sistemas conversacionais com LLMs em produção. Atuei por cerca de 3 anos na Pedbot, onde cresci de Estagiário a Pleno, evoluindo do desenvolvimento full stack tradicional até me tornar responsável pela arquitetura de agentes de IA da empresa, atendendo múltiplos clientes em escala via WhatsApp. Atualmente estou em busca de novas oportunidades.",
        "Minha trajetória passou por migrar sistemas de atendimento de function calling simples para agentes orquestrados com LangChain e LangGraph, incluindo pipelines de extração de dados, validação e resolução de ambiguidade antes da execução de ações automatizadas. Construí também um framework próprio de testes de regressão comportamental para validar esses agentes em produção — sem depender de LLM-as-judge, com validação direta no estado do banco de dados.",
        "No MarIA, chatbot de vendas via WhatsApp, migrei a comunicação entre sistemas de HTTP síncrono para mensageria assíncrona com RabbitMQ, sem impactar a experiência do usuário. Garanti consistência de estado em conversas concorrentes do mesmo usuário com locks distribuídos no Redis e coalescing de mensagens rápidas, evitando race conditions. Construí APIs RESTful e GraphQL com NestJS, além de integrações VTEX para e-commerce, ambientes com Docker/Docker Compose e monitoramento com New Relic.",
        "Também tenho atuado com IA aplicada a QA, criando automações de testes de fluxos conversacionais com Claude Skills, simulando atendimento real de ponta a ponta.",
        "Tecnicamente, tenho base sólida em TypeScript, JavaScript, Python, SQL, Node.js e NestJS, com experiência prática em RAG, prompt engineering, avaliação comparativa entre LLMs (OpenAI e Anthropic/Claude) e infraestrutura de sistemas assíncronos em escala. Sou graduado em Análise e Desenvolvimento de Sistemas pela UNIMAR (2025) e atualmente curso o MBA em AI Engineering & Multi-Agents pela FIAP.",
        "Acredito que meu principal diferencial é a combinação entre progressão técnica real — uma POC que construí virou contrato de cliente pagante — e rigor de qualidade: prefiro validar agentes de IA direto no estado do sistema a confiar em outra LLM julgando a própria LLM.",
      ],
    },
    skills: {
      eyebrow: "ls stack/",
      title: "Stack e ferramentas",
      categories: {
        languages: "linguagens/",
        ai: "ia & llm/",
        backend: "backend & frameworks/",
        apis: "apis/",
        data: "banco de dados & orm/",
        testing: "testes/",
        quality: "lint & qualidade/",
        infra: "infra & devops/",
        methodology: "metodologias/",
      },
    },
    experience: {
      eyebrow: "git log --oneline --graph",
      title: "Experiência & Formação",
      badgeExperiencia: "experiência",
      badgeFormacao: "formação",
      items: {
        "pedbot-pleno": {
          title: "Desenvolvedor Full Stack Pleno",
          period: "fev/2026 – set/2026",
          description:
            "Conduziu testes comparativos entre modelos da OpenAI e da Anthropic (Claude) e implementou RAG nos agentes de atendimento. A POC de agente construída para a DPSP evoluiu para contrato ativo, com redução de 50% no tempo de resposta dos agentes.",
        },
        "pedbot-jr2": {
          title: "Desenvolvedor Júnior II",
          period: "jun/2025 – fev/2026",
          description:
            "Liderou a migração de function calling para agentes orquestrados com LangChain/LangGraph, com pipelines de extração de dados, validação e resolução de ambiguidade antes da execução de ações. Construiu a POC de agente para a DPSP e expandiu o atendimento para mais dois clientes.",
        },
        "pedbot-jr1": {
          title: "Desenvolvedor Júnior I",
          period: "jun/2024 – jun/2025",
          description:
            "Desenvolveu os primeiros chatbots de IA da empresa via function calling, atendendo o cliente Boehringer e uma rede de farmácias.",
        },
        "pedbot-estagio": {
          title: "Estagiário de Desenvolvimento",
          period: "nov/2023 – jun/2024",
          description:
            "Base em React, TypeScript e JavaScript no desenvolvimento full stack, com os primeiros estudos em IA aplicada a produtos.",
        },
        "fiap-mba": {
          title: "AI Engineering & Multi Agents",
          period: "2026 – 2027",
          description:
            "MBA em andamento com foco em engenharia de agentes de IA multiagente.",
        },
        unimar: {
          title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
          period: "2023 – 2025",
          description: "Graduação concluída em 2025.",
        },
        hospital: {
          title: "Suporte Técnico",
          period: "2022 – 2023",
          description:
            "Queries SQL para extração e análise de dados e desenvolvimento de site institucional para consulta de exames e corpo médico.",
        },
        micropro: {
          title: "Análise de Suporte Técnico",
          period: "2020 – 2023",
          description: "Atuação em suporte técnico e análise de sistemas.",
        },
      },
    },
    hackathon: {
      eyebrow: "ls hackathon/",
      panelLabel: "hackathon.md",
      edition: "2ª edição",
      role: "Avaliador",
      description: [
        "No 2º Hackathon Pedbot Techxperience, em parceria com a UNIMAR, atuei como avaliador do evento: mais de 100 inscritos competiram para criar soluções de tecnologia aplicadas à área da saúde, resolvendo dores reais da empresa.",
        "Minha função foi acompanhar as equipes durante a competição e avaliar as soluções apresentadas, dando um ranking aos times com base no que eu via e ouvia ao longo do hackathon.",
        "Foi uma experiência muito positiva para conectar com talentos da região alunos querendo entrar na área de tecnologia e profissionais que já atuam nela.",
      ],
      photos: {
        avaliacao: "Avaliando equipes durante o Hackathon Pedbot Techxperience",
        equipe: "Camiseta da equipe Pedbot no evento",
      },
    },
    projects: {
      eyebrow: "ls projetos/",
      title: "Destaques & repositórios",
      featuredLabel: "cases em produção",
      reposLabelPrefix: "curl api.github.com/users/",
      reposLabelSuffix: "/repos",
      loading: "Carregando repositórios…",
      errorText:
        "Não foi possível carregar os repositórios agora. Veja direto no",
      errorLink: "GitHub",
      noRepos: "Nenhum repositório público encontrado.",
      noDescription: "Sem descrição.",
      noPreview: "sem preview",
      screenshotAlt: "Captura de tela",
      featured: {
        "whatsapp-ai": {
          name: "Atendimento IA via WhatsApp",
          description:
            "Sistema de IA para automação de atendimento via WhatsApp para múltiplos clientes (DPSP, Boehringer, Indiana, Venâncio), com arquitetura de agentes em LangChain, tool calling, NLP e fluxos automatizados em produção.",
        },
        "projeto-maria": {
          name: "MarIA — Chatbot de Vendas via WhatsApp",
          description:
            "POC que substituiu um sistema legado (PHP/Laravel) por um chatbot de vendas com extração inteligente via LLM. Migrei a comunicação de HTTP síncrono para mensageria assíncrona (RabbitMQ), com locks distribuídos no Redis e coalescing de mensagens para evitar race conditions em conversas concorrentes, e extração de slots via LangGraph com validação e resolução de ambiguidade antes de agir.",
        },
        evals: {
          name: "MarIA Evals — Testes de Regressão Comportamental",
          description:
            "Framework próprio para garantir que mudanças no MarIA não quebrem comportamentos já validados, testando cenários de conversa reais de ponta a ponta e validando direto no estado do banco de dados — sem depender de LLM-as-judge.",
        },
        vtex: {
          name: "Integrações VTEX para E-commerce",
          description:
            "Customizações avançadas e otimizações de performance em integrações de e-commerce na plataforma VTEX, com foco em escalabilidade e observabilidade.",
        },
      },
    },
    contact: {
      eyebrow: "./contato.sh",
      title: "Vamos conversar?",
      panelLabel: "contato.sh",
      text: "Estou aberto a novas oportunidades, projetos freelance e conversas sobre engenharia de IA e desenvolvimento full stack.",
      ctaEmail: "./enviar-email.sh",
    },
    chat: {
      panelLabel: "leticia.chat",
      status: "em treinamento",
      greeting: (firstName: string) =>
        `Olá! Eu sou a LeticIA, assistente virtual do ${firstName}. Só respondo perguntas sobre ele — experiência, projetos, skills. Pergunte à vontade!`,
      fallback1: (firstName: string) =>
        `Não consegui me conectar ao meu modelo agora. Tente de novo em instantes, ou fale direto com o ${firstName} pelo e-mail.`,
      fallback2:
        'Minha conexão falhou aqui. Enquanto isso, dá uma olhada na seção "Sobre" ou use o formulário de contato lá embaixo.',
      placeholder: "Pergunte algo…",
      messageLabel: "Mensagem",
      typingLabel: "Digitando",
      sendLabel: "Enviar mensagem",
      minimizeLabel: "Minimizar chat",
      clearLabel: "Limpar e fechar chat",
      openLabel: (name: string) => `Abrir chat com ${name}`,
      dialogLabel: (name: string) => `Chat com ${name}`,
    },
    common: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "E-mail",
    },
  },
  en: {
    nav: {
      sobre: "About",
      skills: "Skills",
      experiencia: "Experience",
      hackathon: "Hackathon",
      projetos: "Projects",
      contato: "Contact",
    },
    hero: {
      prompt: "$ whoami",
      role: "Full Stack Developer",
      tagline: "TypeScript · LangChain · AI Agents · LLMs in Production",
      summary:
        "Full Stack Developer focused on TypeScript, Node.js and NestJS, also working on intelligent automation and AI integration in production-scale products.",
      ctaProjects: "./view-projects.sh",
      ctaContact: "$ contact",
      ctaResume: "↓ resume.pdf",
    },
    about: {
      eyebrow: "cat about.md",
      title: "Who I am",
      panelLabel: "about.md",
      paragraphs: [
        "I'm a Mid-Level Full Stack Developer specialized in AI Engineering — building AI agents and conversational systems with LLMs in production. I spent about 3 years at Pedbot, growing from Intern to Mid-Level, moving from traditional full stack development to owning the company's AI agent architecture, serving multiple clients at scale over WhatsApp. I'm currently open to new opportunities.",
        "My path went through migrating support systems from simple function calling to agents orchestrated with LangChain and LangGraph, including pipelines for data extraction, validation and ambiguity resolution before automated actions run. I also built a proprietary behavioral regression testing framework to validate these agents in production — without relying on LLM-as-judge, validating directly against database state instead.",
        "On MarIA, a WhatsApp sales chatbot, I migrated system communication from synchronous HTTP to asynchronous messaging with RabbitMQ without impacting the user experience. I kept state consistent across concurrent conversations from the same user with Redis distributed locks and fast-message coalescing, avoiding race conditions. I built RESTful and GraphQL APIs with NestJS, plus VTEX e-commerce integrations, Docker/Docker Compose environments and New Relic monitoring.",
        "I've also worked with AI applied to QA, building test automations for conversational flows with Claude Skills, simulating real support interactions end to end.",
        "Technically, I have a solid foundation in TypeScript, JavaScript, Python, SQL, Node.js and NestJS, with hands-on experience in RAG, prompt engineering, comparative LLM evaluation (OpenAI and Anthropic/Claude) and asynchronous systems infrastructure at scale. I graduated in Systems Analysis and Development from UNIMAR (2025) and I'm currently pursuing an MBA in AI Engineering & Multi-Agents at FIAP.",
        "I believe my main strength is the combination of real technical progression — a POC I built turned into a paying client contract — and quality rigor: I'd rather validate AI agents directly against system state than trust one LLM judging another.",
      ],
    },
    skills: {
      eyebrow: "ls stack/",
      title: "Stack & tools",
      categories: {
        languages: "languages/",
        ai: "ai & llm/",
        backend: "backend & frameworks/",
        apis: "apis/",
        data: "database & orm/",
        testing: "testing/",
        quality: "lint & quality/",
        infra: "infra & devops/",
        methodology: "methodologies/",
      },
    },
    experience: {
      eyebrow: "git log --oneline --graph",
      title: "Experience & Education",
      badgeExperiencia: "experience",
      badgeFormacao: "education",
      items: {
        "pedbot-pleno": {
          title: "Mid-Level Full Stack Developer",
          period: "Feb 2026 – Sep 2026",
          description:
            "Ran comparative tests between OpenAI and Anthropic (Claude) models and implemented RAG in the support agents. The agent POC built for DPSP evolved into an active contract, cutting agent response time by 50%.",
        },
        "pedbot-jr2": {
          title: "Junior Developer II",
          period: "Jun 2025 – Feb 2026",
          description:
            "Led the migration from function calling to agents orchestrated with LangChain/LangGraph, with pipelines for data extraction, validation and ambiguity resolution before actions are executed. Built the agent POC for DPSP and expanded support to two more clients.",
        },
        "pedbot-jr1": {
          title: "Junior Developer I",
          period: "Jun 2024 – Jun 2025",
          description:
            "Built the company's first AI chatbots via function calling, supporting client Boehringer and a pharmacy chain.",
        },
        "pedbot-estagio": {
          title: "Development Intern",
          period: "Nov 2023 – Jun 2024",
          description:
            "Foundation in React, TypeScript and JavaScript on full stack development, with first studies in AI applied to products.",
        },
        "fiap-mba": {
          title: "AI Engineering & Multi Agents",
          period: "2026 – 2027",
          description: "MBA in progress focused on multi-agent AI engineering.",
        },
        unimar: {
          title: "Systems Analysis and Development (Technologist)",
          period: "2023 – 2025",
          description: "Graduated in 2025.",
        },
        hospital: {
          title: "Technical Support",
          period: "2022 – 2023",
          description:
            "SQL queries for data extraction and analysis, and development of an institutional website for exam results and medical staff lookup.",
        },
        micropro: {
          title: "Technical Support Analysis",
          period: "2020 – 2023",
          description: "Worked in technical support and systems analysis.",
        },
      },
    },
    hackathon: {
      eyebrow: "ls hackathon/",
      panelLabel: "hackathon.md",
      edition: "2nd edition",
      role: "Judge",
      description: [
        "At the 2nd Hackathon Pedbot Techxperience, in partnership with UNIMAR, I acted as a judge for the event: over 100 registered participants competed to build health-tech solutions addressing real company pain points.",
        "My role was to follow the teams throughout the competition and evaluate the solutions presented, ranking teams based on what I saw and heard during the hackathon.",
        "It was a great experience to connect with talent from the region — students looking to break into tech and professionals already working in the field.",
      ],
      photos: {
        avaliacao: "Judging teams during the Hackathon Pedbot Techxperience",
        equipe: "Pedbot team t-shirt at the event",
      },
    },
    projects: {
      eyebrow: "ls projects/",
      title: "Highlights & repositories",
      featuredLabel: "production cases",
      reposLabelPrefix: "curl api.github.com/users/",
      reposLabelSuffix: "/repos",
      loading: "Loading repositories…",
      errorText:
        "Couldn't load the repositories right now. Check them directly on",
      errorLink: "GitHub",
      noRepos: "No public repositories found.",
      noDescription: "No description.",
      noPreview: "no preview",
      screenshotAlt: "Screenshot",
      featured: {
        "whatsapp-ai": {
          name: "AI-powered WhatsApp Support",
          description:
            "AI system for automating WhatsApp customer support for multiple clients (DPSP, Boehringer, Indiana, Venâncio), with a LangChain agent architecture, tool calling, NLP and automated flows in production.",
        },
        "projeto-maria": {
          name: "MarIA — WhatsApp Sales Chatbot",
          description:
            "POC that replaced a legacy PHP/Laravel system with a sales chatbot featuring intelligent LLM-based extraction. Migrated communication from synchronous HTTP to asynchronous messaging (RabbitMQ), with Redis distributed locks and message coalescing to avoid race conditions in concurrent conversations, and LangGraph-driven slot extraction with validation and ambiguity resolution before acting.",
        },
        evals: {
          name: "MarIA Evals — Behavioral Regression Testing",
          description:
            "Proprietary framework ensuring changes to MarIA don't break already-validated behaviors, testing real end-to-end conversation scenarios and validating directly against database state — without relying on LLM-as-judge.",
        },
        vtex: {
          name: "VTEX E-commerce Integrations",
          description:
            "Advanced customizations and performance optimizations for e-commerce integrations on the VTEX platform, focused on scalability and observability.",
        },
      },
    },
    contact: {
      eyebrow: "./contact.sh",
      title: "Let's talk?",
      panelLabel: "contact.sh",
      text: "I'm open to new opportunities, freelance projects and conversations about AI engineering and full stack development.",
      ctaEmail: "./send-email.sh",
    },
    chat: {
      panelLabel: "leticia.chat",
      status: "in training",
      greeting: (firstName: string) =>
        `Hi! I'm LeticIA, ${firstName}'s virtual assistant. I only answer questions about him — experience, projects, skills. Ask away!`,
      fallback1: (firstName: string) =>
        `I couldn't reach my model right now. Try again in a moment, or reach out to ${firstName} directly by e-mail.`,
      fallback2:
        'My connection failed here. Meanwhile, check out the "About" section or use the contact form below.',
      placeholder: "Ask something…",
      messageLabel: "Message",
      typingLabel: "Typing",
      sendLabel: "Send message",
      minimizeLabel: "Minimize chat",
      clearLabel: "Clear and close chat",
      openLabel: (name: string) => `Open chat with ${name}`,
      dialogLabel: (name: string) => `Chat with ${name}`,
    },
    common: {
      github: "GitHub",
      linkedin: "LinkedIn",
      email: "Email",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];
