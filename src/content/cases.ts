export const cases = [
  {
    slug: "bacen-reclame-aqui",
    externalUrl: "/trabalhos/bacen-reclame-aqui/index.html",
    title: { pt: "Caso 1: Análise Bacen + Reclame Aqui", en: "Case 1: Bacen + Reclame Aqui Analysis" },
    desc: {
      pt: "Cruzamento entre reclamações registradas no Banco Central e o Reclame Aqui pra mapear onde a experiência do cliente bancário se descola da régua regulatória.",
      en: "A cross-reference between complaints filed with the Brazilian Central Bank and Reclame Aqui to map where banking customer experience drifts from regulatory standards.",
    },
    tools: ["Python", "LLMs", "dbt"],
    sector: { pt: "Serviços financeiros", en: "Financial services" },
    status: "active",
    body: {
      pt: [
        "A maioria das instituições financeiras lê reclamações como ruído operacional. Eu leio como sinal de mercado. O Banco Central publica trimestralmente um ranking de reclamações por instituição, com classificação padronizada. O Reclame Aqui publica continuamente reclamações com texto livre, escritas pelo próprio cliente, identificadas por instituição.",
        "Cruzando os dois com classificação semântica via LLMs, dá pra mapear onde a experiência do cliente se descola da régua regulatória, e onde está a próxima vaga competitiva. Não é hipótese: é o que o cliente está literalmente dizendo, em volume.",
        "[Análise em construção. Cada instituição abaixo terá página dedicada com leitura específica do que aparece nos dados.]",
      ],
      en: [
        "Most financial institutions read complaints as operational noise. I read them as market signal. The Central Bank publishes quarterly a complaint ranking per institution, with standardized classification. Reclame Aqui continuously publishes complaints in free text, written by the customer themselves, identified by institution.",
        "Cross-referencing the two with semantic classification via LLMs, it's possible to map where customer experience drifts from regulatory standards, and where the next competitive opening lives. Not hypothesis: it's what customers are literally saying, at scale.",
        "[Analysis in progress. Each institution below will have a dedicated page with specific reading of what appears in the data.]",
      ],
    },
    institutions: [
      {
        slug: "nubank",
        name: "Nubank",
        body: {
          pt: [
            "[Análise específica do Nubank em construção. Vai cobrir as principais frentes de reclamação dos últimos trimestres, padrões identificados via LLM no texto do Reclame Aqui, e onde a experiência se descola da régua regulatória do Bacen.]",
          ],
          en: [
            "[Nubank-specific analysis in progress. Will cover the main complaint vectors from recent quarters, patterns identified via LLM in Reclame Aqui text, and where the experience drifts from Bacen's regulatory standards.]",
          ],
        },
      },
      {
        slug: "mercado-pago",
        name: "Mercado Pago",
        body: {
          pt: [
            "[Análise específica do Mercado Pago em construção. Vai cobrir as principais frentes de reclamação dos últimos trimestres, padrões identificados via LLM no texto do Reclame Aqui, e onde a experiência se descola da régua regulatória do Bacen.]",
          ],
          en: [
            "[Mercado Pago-specific analysis in progress. Will cover the main complaint vectors from recent quarters, patterns identified via LLM in Reclame Aqui text, and where the experience drifts from Bacen's regulatory standards.]",
          ],
        },
      },
    ],
  },
  {
    slug: "mapa-churn-credito",
    title: { pt: "Caso 2: Mapa de churn em crédito", en: "Case 2: Credit churn map" },
    desc: {
      pt: "Modelo de propensão e narrativa de retenção para carteira de crédito pessoal.",
      en: "Propensity model and retention narrative for a personal credit book.",
    },
    tools: ["Python", "Claude", "dbt"],
    sector: { pt: "Crédito", en: "Credit" },
    status: "coming-soon",
    body: { pt: [], en: [] },
    institutions: [],
  },
  {
    slug: "onboarding-agentes",
    title: { pt: "Caso 3: Onboarding com agentes", en: "Case 3: Agent-led onboarding" },
    desc: {
      pt: "Fluxo de KYC assistido por agente com queda de 38% no abandono em testes.",
      en: "Agent-assisted KYC flow with 38% drop in abandonment in tests.",
    },
    tools: ["LangGraph", "OpenAI", "Figma"],
    sector: { pt: "Fintech", en: "Fintech" },
    status: "coming-soon",
    body: { pt: [], en: [] },
    institutions: [],
  },
] as const;