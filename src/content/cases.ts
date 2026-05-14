export const cases = [
  {
    slug: "bacen-reclame-aqui",
    externalUrl: "/trabalhos/bacen-reclame-aqui/index.html",
    title: { pt: "Caso 1: Análise Bacen + Reclame Aqui", en: "Case 1: Bacen + Reclame Aqui Analysis" },
    desc: {
      pt: "Onde estão as oportunidades de growth para cada banco brasileiro. Cruzamento de Bacen + Reclame Aqui com classificação por LLM pra traduzir reclamação em brecha competitiva, instituição por instituição.",
      en: "Where growth opportunities live for each Brazilian bank. Cross-referencing Bacen + Reclame Aqui with LLM classification to translate complaints into competitive openings, institution by institution.",
    },
    tools: ["Claude", "HTML", "XLSX"],
    sector: { pt: "Serviços financeiros", en: "Financial services" },
    status: "active",
    body: {
      pt: [
        "A maioria das instituições financeiras lê reclamações como ruído operacional. Eu leio como mapa de oportunidades de growth. Cada cliente insatisfeito é um cliente que outro banco pode capturar se entender o motivo certo, no momento certo, com a oferta certa.",
        "O Banco Central publica trimestralmente um ranking de reclamações por instituição, com classificação padronizada. O Reclame Aqui publica continuamente reclamações com texto livre, escritas pelo próprio cliente, identificadas por instituição. Cruzando os dois com classificação semântica via LLMs, dá pra mapear onde a experiência se descola da régua regulatória — e mais importante, onde está a próxima brecha competitiva. Não é hipótese: é o que o cliente está literalmente dizendo, em volume.",
        "O dashboard completo traz essa leitura instituição por instituição: o que está dando errado, em que volume, comparado a quem, e o que isso abre como oportunidade de growth pra concorrentes e pra própria instituição que quiser fechar o gap.",
      ],
      en: [
        "Most financial institutions read complaints as operational noise. I read them as a growth opportunity map. Every dissatisfied customer is a customer another bank can capture if it understands the right reason, at the right moment, with the right offer.",
        "The Central Bank publishes quarterly a complaint ranking per institution, with standardized classification. Reclame Aqui continuously publishes complaints in free text, written by the customer themselves, identified by institution. Cross-referencing the two with semantic classification via LLMs, it's possible to map where customer experience drifts from regulatory standards — and more importantly, where the next competitive opening lives. Not hypothesis: it's what customers are literally saying, at scale.",
        "The full dashboard delivers this reading institution by institution: what's going wrong, at what volume, compared to whom, and what that opens as a growth opportunity for competitors and for the institution itself if it wants to close the gap.",
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