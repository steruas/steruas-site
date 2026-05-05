export type Locale = "pt" | "en";

export const content = {
  pt: {
    nav: { about: "Sobre", blog: "Blog", builtWithAi: "Feito com IA", contact: "Contato" },
    hero: {
      eyebrow: "Growth · IA · Serviços Financeiros",
      headline: "Growth, repensado com IA.",
      sub: "Estrategista de growth com foco em serviços financeiros. Construindo o que o mercado ainda não tem vocabulário para descrever.",
      ctaPrimary: "Ver projetos",
      ctaGhost: "Ler ensaios",
    },
    about: {
      eyebrow: "Sobre",
      headline: "Uma trajetória não-linear, treinada para enxergar padrões.",
      body: [
        "Passei a última década entre produto, marketing e dados — sempre na fronteira em que disciplinas se contradizem. O que parecia divergência virou vantagem: leio sistemas de crescimento como quem lê demonstrações financeiras.",
        "Minha aposta atual é em serviços financeiros. É o setor com maior assimetria entre o que a IA pode fazer e o que as equipes ainda fazem na mão. É onde rigor analítico e fluência em IA viram alavanca real, não slide de conferência.",
        "Este site existe como evidência. Cada ensaio e cada caso aqui foi construído com IA — não para impressionar, mas porque é assim que trabalho agora.",
      ],
      tags: ["Growth", "AI Strategy", "Financial Services", "Product"],
      download: "Baixar CV (PDF)",
    },
    blog: {
      eyebrow: "Editorial",
      headline: "Ensaios sobre IA, growth e o setor financeiro.",
      intro: "Notas de campo de quem está construindo growth com IA dentro de um setor regulado, conservador e cheio de oportunidade.",
      viewAll: "Ver todos os posts",
      readingTime: "min de leitura",
    },
    builtWithAi: {
      eyebrow: "Casos",
      headline: "Feito com IA.",
      intro: "Análises e ferramentas que construí usando IA, com foco no setor financeiro brasileiro.",
      featuredTitle: "[Caso 1: Análise Bacen + Reclame Aqui]",
      featuredDesc: [
        "Cruzamento entre reclamações registradas no Banco Central e o Reclame Aqui para mapear onde a experiência do cliente bancário se descola da régua regulatória — e onde está a próxima vaga competitiva.",
        "Pipeline construído com Python, LLMs para classificação semântica e dashboards interativos. O resultado é uma leitura inédita do mercado, atualizável trimestralmente.",
      ],
      featuredCta: "Ver análise completa",
      tools: "Ferramentas",
      sector: "Setor",
      outcome: "Insight",
    },
    contact: {
      eyebrow: "Contato",
      headline: "Vamos conversar.",
      intro: "Aberta a conversas sobre growth com IA, posições em fintechs e instituições financeiras, ou colaborações editoriais.",
      name: "Nome",
      email: "Email",
      message: "Mensagem",
      submit: "Enviar",
      sending: "Enviando…",
      success: "Mensagem enviada. Respondo em até 48h.",
      error: "Algo deu errado. Tente novamente.",
      whatsapp: "Enviar mensagem no WhatsApp",
    },
    footer: {
      tagline: "Growth com IA para serviços financeiros.",
      built: "Construído com IA",
    },
  },
  en: {
    nav: { about: "About", blog: "Writing", builtWithAi: "Built with AI", contact: "Contact" },
    hero: {
      eyebrow: "Growth · AI · Financial Services",
      headline: "Growth, rethought with AI.",
      sub: "Growth strategist focused on financial services. Building what the market doesn't yet have vocabulary to describe.",
      ctaPrimary: "See projects",
      ctaGhost: "Read essays",
    },
    about: {
      eyebrow: "About",
      headline: "A non-linear path, trained to see patterns.",
      body: [
        "I've spent the last decade between product, marketing, and data — always on the edge where disciplines contradict each other. What looked like divergence became an edge: I read growth systems the way others read financial statements.",
        "My current bet is financial services. It's the sector with the largest gap between what AI can do and what teams still do by hand. It's where analytical rigor and AI fluency become real leverage, not a conference slide.",
        "This site exists as evidence. Every essay and case here was built with AI — not to impress, but because it's how I work now.",
      ],
      tags: ["Growth", "AI Strategy", "Financial Services", "Product"],
      download: "Download CV (PDF)",
    },
    blog: {
      eyebrow: "Editorial",
      headline: "Essays on AI, growth, and financial services.",
      intro: "Field notes from building AI-native growth inside a regulated, conservative, opportunity-rich sector.",
      viewAll: "View all posts",
      readingTime: "min read",
    },
    builtWithAi: {
      eyebrow: "Cases",
      headline: "Built with AI.",
      intro: "Analyses and tools I've built using AI, focused on the Brazilian financial sector.",
      featuredTitle: "[Case 1: Bacen + Reclame Aqui Analysis]",
      featuredDesc: [
        "A cross-reference between complaints filed with the Brazilian Central Bank and Reclame Aqui to map where banking customer experience drifts from regulatory standards — and where the next competitive opening lives.",
        "Pipeline built with Python, LLMs for semantic classification, and interactive dashboards. The output is a novel read on the market, refreshable each quarter.",
      ],
      featuredCta: "See full analysis",
      tools: "Tools",
      sector: "Sector",
      outcome: "Insight",
    },
    contact: {
      eyebrow: "Contact",
      headline: "Let's talk.",
      intro: "Open to conversations about AI-native growth, roles at fintechs and financial institutions, or editorial collaborations.",
      name: "Name",
      email: "Email",
      message: "Message",
      submit: "Send",
      sending: "Sending…",
      success: "Message sent. I reply within 48h.",
      error: "Something went wrong. Try again.",
      whatsapp: "Message on WhatsApp",
    },
    footer: {
      tagline: "AI-native growth for financial services.",
      built: "Built with AI",
    },
  },
} as const;

export const posts = [
  {
    slug: "vocabulario-growth-ia",
    category: { pt: "Estratégia & IA", en: "Strategy & AI" },
    title: { pt: "O vocabulário que ainda falta para growth com IA", en: "The vocabulary growth-with-AI still lacks" },
    excerpt: {
      pt: "Times de growth herdaram a linguagem do funil. Mas IA não opera em funis — opera em loops compostos. Como descrever o que estamos construindo.",
      en: "Growth teams inherited the funnel's language. But AI doesn't run in funnels — it runs in compounding loops. How to describe what we're building.",
    },
    date: "2026-04-22", readingTime: 8,
  },
  {
    slug: "bancos-versus-fintechs-ia",
    category: { pt: "Cases & Análises", en: "Cases & Analysis" },
    title: { pt: "Por que os bancos vão vencer a próxima onda de IA", en: "Why incumbent banks will win the next AI wave" },
    excerpt: {
      pt: "Distribuição, dados proprietários e relação regulatória. Uma leitura contraintuitiva do estado atual da competição em serviços financeiros.",
      en: "Distribution, proprietary data, and regulatory leverage. A counterintuitive read on the current state of financial services competition.",
    },
    date: "2026-03-30", readingTime: 11,
  },
  {
    slug: "agentes-aquisicao",
    category: { pt: "Growth com IA", en: "Growth with AI" },
    title: { pt: "Agentes de aquisição: o novo SDR é um modelo", en: "Acquisition agents: the new SDR is a model" },
    excerpt: {
      pt: "O que muda quando o primeiro contato com o cliente é mediado por um agente. Limites éticos, ganhos reais e o erro mais comum.",
      en: "What changes when the first customer touch is agent-mediated. Ethical limits, real gains, and the most common mistake.",
    },
    date: "2026-03-12", readingTime: 7,
  },
  {
    slug: "reclame-aqui-sinal",
    category: { pt: "Cases & Análises", en: "Cases & Analysis" },
    title: { pt: "Reclame Aqui como sinal de mercado, não vergonha pública", en: "Reclame Aqui as market signal, not public shame" },
    excerpt: {
      pt: "Como ler a base do Reclame Aqui com LLMs e descobrir oportunidades de produto que o time de CS já desistiu de explicar.",
      en: "How to read the Reclame Aqui base with LLMs and surface product opportunities the CS team has stopped trying to explain.",
    },
    date: "2026-02-18", readingTime: 9,
  },
  {
    slug: "regulado-rapido",
    category: { pt: "Estratégia & IA", en: "Strategy & AI" },
    title: { pt: "Regulado e rápido: o falso dilema do compliance em IA", en: "Regulated and fast: the false dilemma of AI compliance" },
    excerpt: {
      pt: "A maior parte do atrito que culpamos no jurídico é, na verdade, ausência de design. Um framework para tirar IA do limbo regulatório.",
      en: "Most of the friction we blame on legal is, in fact, missing design. A framework for getting AI out of regulatory limbo.",
    },
    date: "2026-01-29", readingTime: 6,
  },
  {
    slug: "metricas-que-sobram",
    category: { pt: "Growth com IA", en: "Growth with AI" },
    title: { pt: "As métricas que sobram quando IA assume o operacional", en: "The metrics left standing when AI takes the operational layer" },
    excerpt: {
      pt: "CAC e LTV vão continuar. Quase todo o resto precisa ser reescrito. Um inventário honesto do que sobrevive.",
      en: "CAC and LTV survive. Almost everything else needs rewriting. An honest inventory of what makes it through.",
    },
    date: "2026-01-08", readingTime: 10,
  },
] as const;

export const cases = [
  {
    title: { pt: "[Caso 2: Mapa de churn em crédito]", en: "[Case 2: Credit churn map]" },
    desc: { pt: "Modelo de propensão e narrativa de retenção para carteira de crédito pessoal.", en: "Propensity model and retention narrative for a personal credit book." },
    tools: ["Python", "Claude", "dbt"],
    sector: { pt: "Crédito", en: "Credit" },
  },
  {
    title: { pt: "[Caso 3: Onboarding com agentes]", en: "[Case 3: Agent-led onboarding]" },
    desc: { pt: "Fluxo de KYC assistido por agente com queda de 38% no abandono em testes.", en: "Agent-assisted KYC flow with 38% drop in abandonment in tests." },
    tools: ["LangGraph", "OpenAI", "Figma"],
    sector: { pt: "Fintech", en: "Fintech" },
  },
] as const;
