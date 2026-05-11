export type Locale = "pt" | "en";

// Re-exports — permitem manter imports antigos `from "@/content/site"` funcionando
export { posts } from "./posts";
export { cases } from "./cases";

export const content = {
  pt: {
    nav: { about: "Sobre", blog: "Ensaios", builtWithAi: "Feito com IA", contact: "Contato" },
    hero: {
      eyebrow: "Growth · IA · Estratégia",
      headline: "Growth com IA, com olhar de estrategista.",
      sub: "Voltando pra growth depois de seis anos em estratégia corporativa. Pensamento divergente e fluência em IA. Olhando primeiro pra serviços financeiros, onde a margem ainda paga curiosidade.",
      ctaPrimary: "Ver projetos",
      ctaGhost: "Ler ensaios",
    },
    about: {
      eyebrow: "Sobre",
      headline: "Estrategista voltando pra growth, com IA aplicada.",
      hookHome: "Consultoria deu o rigor. Startups deram a navegação na incerteza. Corporativo deu a tradução. IA dá a velocidade pra finalmente operar no ritmo de quem pensa em árvore.",
      readMore: "Ler bio completa",
      body: [
        "Estrategista voltando pra growth depois de seis anos em estratégia corporativa. Background plural de propósito: consultoria, startups em estágios diversos e corporações de tamanhos diferentes. Cada uma dessas escolas treinou um músculo diferente em mim, e a combinação dos três é o que me faz ler negócios como sistemas, não como anedotas.",
        "A consultoria estratégica me ensinou rigor. Comecei a carreira na A.T. Kearney, e sou grata até hoje pelo padrão que aprendi ali: como estruturar problemas, como conduzir projetos, como dar e receber feedback, como conversar no nível de quem decide. Boa parte do que faço bem hoje vem desse período.",
        "As startups me ensinaram a operar na incerteza. Passei pela ClickBus liderando expansão internacional na fase Rocket Internet, peguei marketing inteiro de Brasil e México na Assured Labor, ajudei a construir do zero a frente de agência de performance da Pareto, e fui co-fundadora da Maturijobs onde testei mais de dez modelos de negócio em busca de sustentabilidade. Cada uma dessas experiências me ensinou algo diferente sobre o que funciona, o que não funciona e o que parece funcionar mas não escala.",
        "O corporativo grande me ensinou tradução. Na T4F estruturei a área de marketing e dados praticamente do zero. Desde 2020, no Grupo SBF, coordeno o ciclo de planejamento, conduzo teses de avaliação de caminhos de crescimento orgânico e inorgânico, e acompanho projetos de transformação. Aprendi a transformar visão estratégica em plano executável dentro de organizações grandes, com tudo que isso exige de paciência, articulação e leitura política.",
        "Penso em árvore. A maioria do mercado pensa em linha reta. Quando recebo um problema, minha cabeça abre naturalmente várias possibilidades antes de fechar uma. Vejo o sistema inteiro em vez de só o nó imediato. Isso me leva a caminhos que pessoas mais lineares não veem, e leva a decisões mais robustas porque consideram mais ângulos do começo.",
        "Por muito tempo isso foi atrito. Em grupos de estudo, em reuniões, em discussões de tese, eu chegava em soluções que pareciam saídas de outra direção e ninguém entendia até alguém com pensamento mais convencional explicar de outro jeito. Frustrante. Hoje entendo que esse jeito de pensar é meu ativo principal. E que IA é a ferramenta que finalmente me deixa testar várias hipóteses no ritmo em que minha cabeça pensa, sem depender de equipes que se cansam de abrir threads novas.",
        "Minha tese sobre IA: o risco real não é a substituição de funções, é deixar de alavancar IA pra inovação que entrega 1.000x mais valor pro cliente. Quem se contenta com eficiência fica vulnerável a quem usa IA pra mudar o nível de serviço inteiro. Marketing AI-native vai ouvir consumidor em escala impossível antes, identificar padrões em tempo real e diferenciar com mais consciência. E na era dos agentes, empresas negligentes com cliente vão apanhar quando o agente do consumidor faz due diligence em três segundos antes de cada compra.",
        "Estou olhando primeiro pra serviços financeiros, porque é onde a margem ainda paga curiosidade. Em momento de juros altos e risco político-econômico apertado, inovação migra pra setores de alta margem. Mas o método viaja. Pensamento divergente aplicado com IA pra entender mercados funciona em qualquer setor. Tenho curiosidade ativa em tech, educação e saúde, e estou aberta a contextos onde algum desses ângulos faça sentido.",
        "Procuro contextos de crescimento, inovação ou transformação, que demandam pensamento estratégico e execução ágil para entregar resultado. Gosto de treinar e dar autonomia ao time pra garantir os ganhos de curto prazo, enquanto em paralelo já planejamos e construímos as fundações pros grandes saltos de médio e longo prazo. Funciono melhor em culturas colaborativas, focadas em resultado, com comunicação honesta e transparente.",
        "Acredito que aprendizado rápido vai virar meta-habilidade necessária pra todos. Mostrar como aprendo, o que construo, e o que ainda não sei é parte do trabalho, não fraqueza. Esse site é onde compartilho análises, protótipos e ensaios em construção. Se algum desses ângulos te interessa, vamos conversar.",
      ],
      tags: ["Growth", "IA Aplicada", "Estratégia", "Serviços Financeiros"],
      download: "Baixar CV (PDF)",
    },
    blog: {
      eyebrow: "Ensaios",
      headline: "Ensaios sobre IA, growth e o futuro do trabalho.",
      intro: "Alguns são notas de campo. Outros são reações ao que estou lendo. Em todos, tento articular pensamento próprio.",
      viewAll: "Ver todos os ensaios",
      readingTime: "min de leitura",
    },
    builtWithAi: {
      eyebrow: "Projetos",
      headline: "Feito com IA.",
      intro: "Análises, protótipos e ferramentas que estou construindo, com foco inicial no setor financeiro brasileiro.",
      featuredCta: "Ver análise completa",
      viewAll: "Ver todos os projetos",
      tools: "Ferramentas",
      sector: "Setor",
      outcome: "Insight",
      comingSoon: "Em breve",
      institutions: "Análises por instituição",
      featured: "Destaque",
    },
    contact: {
      eyebrow: "Contato",
      headline: "Vamos conversar.",
      intro: "Aberta a conversas sobre Growth, IA, Dados, Estratégia & Execução.",
      linkedin: {
        label: "LinkedIn",
        hint: "Conecte-se comigo",
      },
      whatsapp: {
        label: "WhatsApp",
        hint: "Onde respondo mais rápido",
      },
      email: {
        label: "E-mail",
        hint: "Para tudo o mais",
      },
    },
    footer: {
      tagline: "Growth com IA, com olhar de estrategista.",
      built: "Construído com IA",
    },
  },
  en: {
    nav: { about: "About", blog: "Essays", builtWithAi: "Built with AI", contact: "Contact" },
    hero: {
      eyebrow: "Growth · AI · Strategy",
      headline: "Growth with AI, through a strategist's lens.",
      sub: "Returning to growth after six years in corporate strategy. Divergent thinking and AI fluency. Looking first at financial services, where margins still pay for curiosity.",
      ctaPrimary: "See projects",
      ctaGhost: "Read essays",
    },
    about: {
      eyebrow: "About",
      headline: "Strategist returning to growth, with applied AI.",
      hookHome: "Consulting gave me rigor. Startups taught me to navigate uncertainty. Large corporations taught me translation. AI gives me the speed to finally operate at the pace of someone who thinks in trees.",
      readMore: "Read full bio",
      body: [
        "Strategist returning to growth after six years in corporate strategy. Plural background by design: consulting, startups across various stages, and corporations of different sizes. Each of these schools trained a different muscle in me, and the combination of the three is what makes me read businesses as systems, not as anecdotes.",
        "Strategy consulting taught me rigor. I started my career at A.T. Kearney, and I'm grateful to this day for the standard I learned there: how to structure problems, how to lead projects, how to give and receive feedback, how to operate at the level of decision-makers. Most of what I do well today comes from that period.",
        "Startups taught me to operate in uncertainty. I led international expansion at ClickBus during the Rocket Internet era, ran marketing for Brazil and Mexico at Assured Labor, helped build the performance agency arm at Pareto from scratch, and co-founded Maturijobs, where I tested more than ten business models searching for sustainability. Each of these experiences taught me something different about what works, what doesn't, and what looks like it works but doesn't scale.",
        "Large corporations taught me translation. At T4F, I built the marketing and data area essentially from zero. Since 2020, at Grupo SBF, I've coordinated the planning cycle, led theses on organic and inorganic growth paths, and overseen transformation projects. I learned to turn strategic vision into executable plans inside large organizations, with everything that requires in patience, articulation, and political reading.",
        "I think in trees. Most of the market thinks in straight lines. When I receive a problem, my mind naturally opens several possibilities before closing on one. I see the entire system instead of just the immediate node. This leads me to paths that more linear thinkers don't see, and to more robust decisions because they consider more angles from the start.",
        "For a long time, this was friction. In study groups, meetings, thesis discussions, I'd arrive at solutions that seemed to come from another direction and no one understood them until someone with more conventional thinking explained them differently. Frustrating. Today I understand that this way of thinking is my main asset. And that AI is the tool that finally lets me test multiple hypotheses at the pace my mind thinks, without depending on teams that get tired of opening new threads.",
        "My thesis on AI: the real risk isn't job substitution. It's failing to leverage AI for innovation that delivers 1,000x more value to the customer. Companies that settle for efficiency become vulnerable to those who use AI to change the entire service level. AI-native marketing will listen to consumers at a scale impossible before, identify patterns in real time, and differentiate with more consciousness. And in the agent era, companies negligent with their customers will suffer when the consumer's agent does due diligence in three seconds before each purchase.",
        "I'm looking first at financial services because that's where margins still pay for curiosity. In a moment of high interest rates and tight political-economic risk, innovation migrates to high-margin sectors. But the method travels. Divergent thinking applied with AI to understand markets works in any sector. I have active curiosity in tech, education, and health, and I'm open to contexts where any of these angles makes sense.",
        "I look for contexts of growth, innovation, or transformation that demand strategic thinking and agile execution to deliver results. I like to train and give autonomy to the team to secure short-term gains, while in parallel we already plan and build the foundations for the major medium and long-term leaps. I work best in collaborative cultures focused on results, with honest and transparent communication.",
        "I believe rapid learning will become a meta-skill necessary for everyone. Showing how I learn, what I build, and what I still don't know is part of the work, not a weakness. This site is where I share analyses, prototypes, and essays in progress. If any of these angles interests you, let's talk.",
      ],
      tags: ["Growth", "Applied AI", "Strategy", "Financial Services"],
      download: "Download CV (PDF)",
    },
    blog: {
      eyebrow: "Essays",
      headline: "Essays on AI, growth, and the future of work.",
      intro: "Some are field notes. Others are reactions to what I'm reading. In all of them, I try to articulate my own thinking.",
      viewAll: "View all essays",
      readingTime: "min read",
    },
    builtWithAi: {
      eyebrow: "Projects",
      headline: "Built with AI.",
      intro: "Analyses, prototypes, and tools I'm building, with initial focus on the Brazilian financial sector.",
      featuredCta: "See full analysis",
      viewAll: "View all projects",
      tools: "Tools",
      sector: "Sector",
      outcome: "Insight",
      comingSoon: "Coming soon",
      institutions: "Analyses by institution",
      featured: "Featured",
    },
    contact: {
      eyebrow: "Contact",
      headline: "Let's talk.",
      intro: "Open to conversations about Growth, AI, Data, Strategy and Execution.",
      linkedin: {
        label: "LinkedIn",
        hint: "Let's connect",
      },
      whatsapp: {
        label: "WhatsApp",
        hint: "Where I respond fastest",
      },
      email: {
        label: "E-mail",
        hint: "For everything else",
      },
    },
    footer: {
      tagline: "Growth with AI, through a strategist's lens.",
      built: "Built with AI",
    },
  },
} as const;