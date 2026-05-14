export const cases = [
  {
    slug: "bacen-reclame-aqui",
    externalUrl: "/trabalhos/bacen-reclame-aqui/index.html",
    cover: "/cases/bacen-reclame-aqui-cover.png",
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
    slug: "como-construi-este-site",
    cover: "/cases/como-construi-este-site-cover.svg",
    title: { pt: "Caso 2: Como construí este site", en: "Case 2: How I built this site" },
    desc: {
      pt: "O making-of do próprio portfólio. Ferramentas usadas em cada camada, o fluxo da ambição ao deploy, e o que faria diferente se começasse hoje.",
      en: "The making-of of the portfolio itself. Tools used at each layer, the flow from ambition to deploy, and what I'd do differently if I were starting today.",
    },
    tools: ["Claude", "Lovable", "Cloudflare"],
    sector: { pt: "Making-of", en: "Making-of" },
    status: "active",
    body: {
      pt: [
        "Quis transformar a própria construção do site num case. Não tem nada mais honesto, pra uma seção de \"feito com IA\", do que o meta-projeto: a casa se mostrando por dentro. Abaixo, as ferramentas que entraram em cena, o caminho que percorri, e o que faria diferente se começasse hoje.",
      ],
      en: [
        "I wanted to turn the site's own construction into a case. For a \"built with AI\" section, nothing feels more honest than the meta-project: the house showing itself from the inside. Below, the tools that came into play, the path I walked, and what I'd do differently if I were starting today.",
      ],
    },
    institutions: [],
    sections: {
      pt: [
        {
          type: "heading",
          eyebrow: "01 — O Stack",
          title: "Ferramentas, e para que serviu cada uma",
        },
        {
          type: "paragraph",
          text: "Não dá para terceirizar tudo a uma única ferramenta. Cada peça do stack resolveu uma parte específica do problema e entender **quando trocar de ferramenta** foi parte do trabalho.",
        },
        {
          type: "tools-list",
          items: [
            { name: "Claude", role: "Pensar + Refinar", desc: "Abri um projeto dedicado no Claude antes de escrever uma linha de código. Foi ali que escopei objetivos, estrutura de seções e tom. Depois, ao longo da construção, voltei toda vez que precisava decidir arquitetura, escrever copy ou debugar algo que o Lovable não resolvia sozinho." },
            { name: "Lovable", role: "Construir", desc: "Tirou a ideia do papel em minutos. Recebeu o prompt detalhado que o Claude me ajudou a estruturar e devolveu uma primeira versão navegável. Ótimo pra iterar layout rápido, mas o detalhe fino e a manutenção contínua pediram outro lugar." },
            { name: "GitHub", role: "Versionar", desc: "A ponte entre o que era um projeto Lovable e algo realmente meu. Exportei o código pra cá pra ter histórico, branches de experimento e, principalmente, autonomia: a partir do GitHub, o Lovable virou opcional." },
            { name: "VSCode", role: "Refinar", desc: "Onde o código exportado virou algo realmente meu. Tipografia, espaçamentos, microinterações, logo, copy — tudo passou por aqui. Comecei tímida e terminei navegando com confiança entre arquivos." },
            { name: "Terminal", role: "Refinar + Publicar", desc: "A cola que une tudo. Git, npm, scripts de build, deploy. A parte menos sexy e mais essencial — quase nenhum projeto com IA escapa disso. Eu tinha medo do terminal antes, perdi nesse projeto." },
            { name: "Cloudflare", role: "Publicar", desc: "Hospedagem, DNS, SSL e domínio num lugar só, sem custo. Pages faz deploy contínuo direto do GitHub: cada `git push` vira uma nova versão no ar em 1 a 3 minutos." },
          ],
        },
        {
          type: "heading",
          eyebrow: "02 — O Caminho",
          title: "Da ambição ao deploy",
        },
        {
          type: "paragraph",
          text: "Cinco etapas, em loop. A IA fez muito, mas o ritmo veio de saber em que momento usar qual ferramenta — e quando voltar duas casas pra trás.",
        },
        {
          type: "image",
          src: "/cases/como-construi-este-site-cover.svg",
          alt: "Diagrama do fluxo de construção do site",
          caption: "O fluxo, com o loop de refino no centro",
        },
        {
          type: "paragraph",
          text: "Comecei no **Claude**, num projeto dedicado, contando minha ambição: quero um portfólio que mostre meu perfil não-linear, que abrigue um blog sobre IA aplicada a growth, e uma seção pra documentar coisas que eu mesma construí com IA. O Claude não respondeu de cara — abriu uma série de perguntas pra detalhar objetivos, audiência e escopo. Foi um trabalho de pré-produção que me poupou retrabalho enorme depois.",
        },
        {
          type: "paragraph",
          text: "Daí saiu um **prompt longo e detalhado**, que rodei no **Lovable**. A primeira versão veio bonita, mas com a arquitetura incompleta — algumas rotas faltando, sistema de tradução PT/EN meio quebrado, conteúdo em lugares estranhos. Exportei pro **GitHub** e foi aí que a coisa virou de fato minha.",
        },
        {
          type: "paragraph",
          text: "A partir daí, o loop foi sempre o mesmo: **pedia ajustes ao Claude**, que me devolvia orientações pra colar no **terminal** e ajustar no **VSCode**. Refinei o logo, escrevi a copy de cada seção (em chats diferentes, sempre dentro do mesmo projeto), e fui publicando os ensaios um a um. Cada novo ensaio é um `git push` que o Cloudflare detecta e publica.",
        },
        {
          type: "callout",
          label: "Insight central",
          text: "Vibe coding bem feito não é \"IA faz tudo sozinha\". É **dirigir a IA com clareza, gosto e julgamento**. Quem aceita o primeiro output entrega site genérico. Quem itera com critério entrega coisa boa. Essa é a habilidade real.",
        },
        {
          type: "heading",
          eyebrow: "03 — Retrospectiva",
          title: "O que faria diferente",
        },
        {
          type: "paragraph",
          text: "Aprendi muito no caminho, mas aprender não era a entrega — era subproduto. Se fizesse de novo hoje, com o que sei agora, mudaria quatro coisas.",
        },
        {
          type: "lessons",
          items: [
            { title: "Começaria por referências, não por prompt", body: "Buscaria sites portfólio com código aberto antes de prompar do zero. Estruturar e corrigir a arquitetura que veio do Lovable levou muitas interações — e isso não é onde eu gero mais valor. Aprendi no processo, mas teria sido mais produtivo partir de algo já estruturado e gastar tempo só na customização que importa: identidade, copy, casos." },
            { title: "Iria direto de Claude Code, sem medo do terminal", body: "Tinha medo do terminal antes de começar. Perdi esse medo nesse projeto — e ele virou aliado. Numa próxima, pularia o Lovable e iria direto pro Claude Code: mais controle, mais poder, e a curva de aprendizado já é a mesma do \"depois do Lovable\", então faz pouco sentido passar pelo intermediário." },
            { title: "Subiria um CLAUDE.md desde o começo", body: "Pra evitar dar as mesmas instruções repetidamente, o ideal é deixá-las num arquivo de contexto que o Claude lê sempre. Coisas como \"evitar travessões\", \"evitar negativas que soam como IA\", \"como faço meus commits\", \"qual é o estado atual do código\". Cada chat novo começava do zero nessas convenções, e era retrabalho puro." },
            { title: "Aceitaria que projeto ≠ memória completa", body: "Mesmo no mesmo projeto, em chats diferentes o Claude não retém tudo. Esquece como você está commitando, qual é a última versão do código, que decisão você tomou três conversas atrás. Saber disso muda o jeito de começar cada chat: dar contexto explícito vira primeiro passo, não improviso." },
          ],
        },
      ],
      en: [
        {
          type: "heading",
          eyebrow: "01 — The Stack",
          title: "Tools, and what each one was for",
        },
        {
          type: "paragraph",
          text: "You can't outsource everything to one tool. Each piece of the stack solved a specific part of the problem, and understanding **when to switch tools** was part of the work.",
        },
        {
          type: "tools-list",
          items: [
            { name: "Claude", role: "Think + Refine", desc: "I opened a dedicated Claude project before writing a single line of code. That's where I scoped objectives, section structure, and tone. Throughout the build, I came back every time I needed to make an architecture decision, write copy, or debug something Lovable couldn't solve on its own." },
            { name: "Lovable", role: "Build", desc: "Took the idea from paper to screen in minutes. It received the detailed prompt that Claude helped me structure and returned a first navigable version. Great for fast layout iteration, but the fine detail and ongoing maintenance asked for a different place." },
            { name: "GitHub", role: "Version", desc: "The bridge between what was a Lovable project and something truly mine. I exported the code here for history, experiment branches, and most importantly, autonomy: from GitHub on, Lovable became optional." },
            { name: "VSCode", role: "Refine", desc: "Where the exported code became something truly mine. Typography, spacing, micro-interactions, logo, copy — everything passed through here. I started shy and ended up navigating files with confidence." },
            { name: "Terminal", role: "Refine + Ship", desc: "The glue that holds it all together. Git, npm, build scripts, deploy. The least sexy and most essential part — almost no AI project escapes this. I used to be afraid of the terminal. I lost that fear on this project." },
            { name: "Cloudflare", role: "Ship", desc: "Hosting, DNS, SSL, and domain in one place, free of charge. Pages handles continuous deploys straight from GitHub: every `git push` becomes a new version live in 1 to 3 minutes." },
          ],
        },
        {
          type: "heading",
          eyebrow: "02 — The Path",
          title: "From ambition to deploy",
        },
        {
          type: "paragraph",
          text: "Five stages, in a loop. AI did a lot, but the rhythm came from knowing which tool to use at which moment — and when to step two squares back.",
        },
        {
          type: "image",
          src: "/cases/como-construi-este-site-cover.svg",
          alt: "Diagram of the site construction flow",
          caption: "The flow, with the refinement loop at the center",
        },
        {
          type: "paragraph",
          text: "I started in **Claude**, in a dedicated project, telling it about my ambition: I want a portfolio that shows my non-linear background, hosts a blog about AI applied to growth, and a section to document things I've built with AI myself. Claude didn't answer right away — it opened a series of questions to detail objectives, audience, and scope. That pre-production work saved enormous rework later.",
        },
        {
          type: "paragraph",
          text: "Out of that came a **long, detailed prompt**, which I ran in **Lovable**. The first version came out beautiful, but the architecture was incomplete — some routes missing, the PT/EN translation system half-broken, content in strange places. I exported to **GitHub**, and that's where it really became mine.",
        },
        {
          type: "paragraph",
          text: "From there, the loop was always the same: **asked Claude for tweaks**, which returned instructions for me to paste into the **terminal** and refine in **VSCode**. I refined the logo, wrote each section's copy (in different chats, always inside the same project), and published essays one by one. Each new essay is a `git push` that Cloudflare detects and ships.",
        },
        {
          type: "callout",
          label: "Core insight",
          text: "Good vibe coding isn't \"AI does everything on its own.\" It's **directing AI with clarity, taste, and judgment**. Accept the first output and you ship a generic site. Iterate with criteria and you ship something good. That's the real skill.",
        },
        {
          type: "heading",
          eyebrow: "03 — Retrospective",
          title: "What I'd do differently",
        },
        {
          type: "paragraph",
          text: "I learned a lot along the way, but learning wasn't the deliverable — it was a byproduct. If I were doing it over today, with what I know now, I'd change four things.",
        },
        {
          type: "lessons",
          items: [
            { title: "I'd start with references, not a prompt", body: "I'd look for open-source portfolio sites before prompting from scratch. Structuring and fixing the architecture that came out of Lovable took many interactions — and that's not where I create the most value. I learned in the process, but it would have been more productive to start from something already structured and spend time only on the customization that matters: identity, copy, cases." },
            { title: "I'd go straight to Claude Code, no fear of the terminal", body: "I was afraid of the terminal before starting. I lost that fear on this project — and it became an ally. Next time, I'd skip Lovable and go straight to Claude Code: more control, more power, and the learning curve is already the same as \"after Lovable,\" so there's little reason to go through the intermediate step." },
            { title: "I'd set up a CLAUDE.md from day one", body: "To avoid giving the same instructions over and over, the right move is to keep them in a context file Claude reads every time. Things like \"avoid em dashes,\" \"avoid negatives that read as AI,\" \"how I commit,\" \"what's the current state of the code.\" Every new chat started from zero on these conventions, and that was pure rework." },
            { title: "I'd accept that project ≠ full memory", body: "Even inside the same project, Claude doesn't retain everything across chats. It forgets how you're committing, what the latest version of the code is, what decision you made three conversations ago. Knowing this changes how you start each chat: giving explicit context becomes the first step, not improvisation." },
          ],
        },
      ],
    },
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
