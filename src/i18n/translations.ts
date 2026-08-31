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
        "Sou Desenvolvedor Full Stack Pleno, com foco em TypeScript, Node.js e NestJS, atuando também com automação inteligente e integração de IA em produtos de escala. Meu perfil transita entre backend, arquitetura de agentes de IA, integrações de e-commerce e infraestrutura.",
        "Tenho experiência implementando arquitetura de agentes com LangChain e tool calling para integração com APIs externas, viabilizando automações inteligentes e respostas contextualizadas. Desenvolvi um sistema de IA para automação de atendimento via WhatsApp, atendendo clientes como DPSP, Boehringer, Indiana e Venâncio, com processamento de linguagem natural e fluxos automatizados.",
        "No Projeto Maria, atuei na otimização de performance por meio de refatoração estratégica e melhorias na arquitetura de processamento. Construí APIs RESTful e GraphQL com NestJS e Node.js, seguindo Clean Code, SOLID e arquitetura escalável, com testes unitários. Também desenvolvi integrações VTEX para e-commerce, com customizações avançadas e otimizações de performance, além de configurar ambientes com Docker e Docker Compose e implementar monitoramento com New Relic para observabilidade e debugging.",
        "Também tenho atuado com IA aplicada ao desenvolvimento e QA, criando automações de testes de fluxos conversacionais com Claude Skills, simulando atendimento real e automatizando completamente a validação desses fluxos.",
        "Tecnicamente, tenho base sólida em TypeScript, JavaScript, Python, Node.js, NestJS, GraphQL, MySQL, Docker e Git. Sou graduado em Análise e Desenvolvimento de Sistemas pela UNIMAR (2025) e atualmente curso o MBA em AI Engineering & Multi-Agents pela FIAP, buscando me aprofundar ainda mais na área de agentes de IA.",
        "Acredito que meu principal diferencial é transitar bem entre desenvolvimento backend, arquitetura de sistemas conversacionais com IA e integrações complexas, sempre buscando transformar soluções experimentais em sistemas robustos rodando em produção.",
      ],
    },
    skills: {
      eyebrow: "ls stack/",
      title: "Stack e ferramentas",
    },
    experience: {
      eyebrow: "git log --oneline --graph",
      title: "Experiência & Formação",
      badgeExperiencia: "experiência",
      badgeFormacao: "formação",
      items: {
        "freelance-fullstack": {
          title: "Desenvolvedor Full Stack Pleno",
          period: "2023 – Presente",
          description:
            "Arquitetura de agentes de IA com LangChain e tool calling, sistemas conversacionais em produção (DPSP, Boehringer, Indiana, Venâncio), APIs REST/GraphQL com NestJS, integrações VTEX, Docker e New Relic.",
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
          name: "Projeto Maria — Otimização de Performance",
          description:
            "Refatoração estratégica e melhorias na arquitetura de processamento de um agente conversacional, reduzindo o tempo de resposta de 3min para 1min30s (~50% mais rápido).",
        },
        evals: {
          name: "Evals de Fluxos Conversacionais",
          description:
            "Sistema de avaliação automatizada de agentes com Claude Skills: simula atendimento real e valida respostas do bot contra casos esperados, automatizando completamente o QA de fluxos conversacionais.",
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
        "I'm a Full Stack Developer focused on TypeScript, Node.js and NestJS, also working on intelligent automation and AI integration in production-scale products. I move between backend, AI agent architecture, e-commerce integrations and infrastructure.",
        "I have experience designing agent architectures with LangChain and tool calling for integration with external APIs, enabling intelligent automations and context-aware responses. I built an AI system for automating WhatsApp customer support for clients like DPSP, Boehringer, Indiana and Venâncio, with natural language processing and automated flows.",
        "On Projeto Maria, I worked on performance optimization through strategic refactoring and processing architecture improvements. I built RESTful and GraphQL APIs with NestJS and Node.js, following Clean Code, SOLID and scalable architecture, with unit tests. I also built VTEX integrations for e-commerce, with advanced customizations and performance optimizations, plus setting up Docker and Docker Compose environments and implementing New Relic monitoring for observability and debugging.",
        "I've also worked with AI applied to development and QA, building test automations for conversational flows with Claude Skills, simulating real support interactions and fully automating the validation of those flows.",
        "Technically, I have a solid foundation in TypeScript, JavaScript, Python, Node.js, NestJS, GraphQL, MySQL, Docker and Git. I graduated in Systems Analysis and Development from UNIMAR (2025) and I'm currently pursuing an MBA in AI Engineering & Multi-Agents at FIAP, going deeper into the AI agents field.",
        "I believe my main strength is moving comfortably between backend development, AI conversational system architecture and complex integrations, always turning experimental solutions into robust systems running in production.",
      ],
    },
    skills: {
      eyebrow: "ls stack/",
      title: "Stack & tools",
    },
    experience: {
      eyebrow: "git log --oneline --graph",
      title: "Experience & Education",
      badgeExperiencia: "experience",
      badgeFormacao: "education",
      items: {
        "freelance-fullstack": {
          title: "Full Stack Developer",
          period: "2023 – Present",
          description:
            "AI agent architecture with LangChain and tool calling, production conversational systems (DPSP, Boehringer, Indiana, Venâncio), REST/GraphQL APIs with NestJS, VTEX integrations, Docker and New Relic.",
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
          name: "Projeto Maria — Performance Optimization",
          description:
            "Strategic refactoring and processing architecture improvements for a conversational agent, cutting response time from 3min to 1min30s (~50% faster).",
        },
        evals: {
          name: "Conversational Flow Evals",
          description:
            "Automated agent evaluation system with Claude Skills: simulates real support interactions and validates bot responses against expected cases, fully automating QA for conversational flows.",
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
