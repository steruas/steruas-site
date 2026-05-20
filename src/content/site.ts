export type Locale = "pt" | "en";

// Re-exports — permitem manter imports antigos `from "@/content/site"` funcionando
export { posts } from "./posts";
export { cases } from "./cases";

export const content = {
  pt: {
    nav: { about: "Sobre", blog: "Ensaios", builtWithAi: "Feito com IA", contact: "Contato" },
    hero: {
      eyebrow: "Growth · IA · Estratégia",
      headline: "Growth com IA e olhar de estrategista.",
      sub: "Voltando pra growth depois de seis anos em estratégia corporativa. Pensamento divergente acelerado por IA.",
      ctaPrimary: "Ver projetos",
      ctaGhost: "Ler ensaios",
    },
    about: {
      eyebrow: "Sobre",
      headline: "Estrategista voltando pra growth, com IA aplicada.",
      hookHome: "Consultoria deu o rigor. Startups deram a navegação na incerteza. Corporativo deu a tradução. IA dá a velocidade pra finalmente operar no ritmo de quem pensa em árvore.",
      readMore: "Ler bio completa",
      body: [
        "Estrategista, voltando para growth depois de seis anos em estratégia corporativa. Meu background é plural: consultoria, startups em diferentes estágios e grandes corporações. Cada contexto treinou um músculo diferente em mim: rigor analítico, execução na incerteza e capacidade de conduzir transformação em ambientes complexos.",
        "Comecei minha carreira na A.T. Kearney, onde aprendi a estruturar problemas, conduzir projetos e conversar no nível de quem decide. Nas startups, aprendi a operar na incerteza: liderei expansão internacional na ClickBus durante a fase Rocket Internet, assumi o marketing de Brasil e México na Assured Labor, ajudei a construir do zero a operação de performance da Pareto e co-fundei a Maturijobs, onde testei mais de dez modelos de negócio em busca de escala sustentável. Foi nesse período que aprendi a distinguir o que funciona, o que não funciona e o que parece funcionar mas não escala.",
        "Na T4F, reestruturei a área de marketing e estruturei do zero a área de dados. Desde 2020, no Grupo SBF, coordeno o ciclo de planejamento estratégico, conduzo teses de crescimento orgânico e inorgânico e acompanho projetos de transformação corporativa. Em organizações grandes, transformar visão em plano executável depende tanto de método quanto de paciência, articulação e leitura política.",
        "Penso em árvore enquanto a maioria do mercado pensa em linha reta. Quando recebo um problema, abro várias possibilidades antes de fechar uma. Trabalho o sistema inteiro, e não só o nó imediato. Isso me leva a caminhos menos óbvios e a decisões mais robustas, porque consideram mais ângulos desde o início. É também o que me faz ler negócios como sistemas inteiros, e não casos isolados.",
        "IA potencializa esse modo de pensar: o que antes exigia equipes inteiras e ciclos longos hoje cabe em um fim de semana de exploração estruturada.",
        "Minha tese sobre IA: o risco real não está na substituição de funções, está em quem se contenta com eficiência incremental enquanto outros usam IA para transformar toda a cadeia de valor e elevar o nível de serviço ao cliente. Marketing AI-native vai ouvir consumidor em escala impossível antes, identificar padrões em tempo real e ajustar mensagens para maior conexão. Na era dos agentes, empresas negligentes com cliente vão apanhar quando o agente do consumidor faz due diligence em três segundos antes de recomendar uma compra.",
        "Hoje busco contextos de crescimento, inovação ou transformação que demandem pensamento estratégico e execução ágil para entregar resultado. Gosto de treinar e dar autonomia ao time para garantir os ganhos de curto prazo, enquanto em paralelo planejamos e construímos as fundações dos saltos de médio e longo prazo. Funciono melhor em culturas colaborativas, focadas em resultado, com comunicação honesta.",
        "Em momentos de juros altos e risco político-econômico apertado, inovação frequentemente se torna privilégio de setores de alta margem. Por isso foco as análises primeiro no setor financeiro, onde a margem ainda paga curiosidade. Mas o método viaja: pensamento divergente aplicado com IA para entender mercados e oportunidades de crescimento funciona em qualquer setor de informação intensiva. Tenho grande interesse e curiosidade por setores de tech, educação, saúde e agro.",
        "Este site é meu laboratório público: um espaço para compartilhar análises, protótipos e ensaios em construção. Se algum desses ângulos lhe interessa, vamos conversar.",
      ],
      tags: ["Growth", "IA Aplicada", "Estratégia", "Digital Products"],
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
      tagline: "Growth com IA e olhar de estrategista.",
      built: "Construído com IA",
    },
  },
  en: {
    nav: { about: "About", blog: "Essays", builtWithAi: "Built with AI", contact: "Contact" },
    hero: {
      eyebrow: "Growth · AI · Strategy",
      headline: "Growth with AI, through a strategist's lens.",
      sub: "Returning to growth after six years in corporate strategy. Divergent thinking accelerated by AI.",
      ctaPrimary: "See projects",
      ctaGhost: "Read essays",
    },
    about: {
      eyebrow: "About",
      headline: "Strategist returning to growth, with applied AI.",
      hookHome: "Consulting gave me rigor. Startups taught me to navigate uncertainty. Large corporations taught me translation. AI gives me the speed to finally operate at the pace of someone who thinks laterally.",
      readMore: "Read full bio",
      body: [
        "Strategist returning to growth after six years in corporate strategy. My background is plural: consulting, startups at different stages, and large corporations. Each context trained a different muscle: analytical rigor, execution under uncertainty, and the ability to lead transformation in complex environments.",
        "I started my career at A.T. Kearney, where I learned to structure problems, run projects, operate and communicate at the level of decision-makers. In startups, I learned to operate under uncertainty: I led international expansion at ClickBus during the Rocket Internet phase, ran marketing for Brazil and Mexico at Assured Labor, helped build the performance operation at Pareto from scratch, and co-founded Maturijobs, where I tested more than ten business models in search of sustainable scale. That period taught me to tell apart what works, what doesn't, and what looks like it works but doesn't scale.",
        "At T4F, I restructured marketing and built the data function from scratch. Since 2020, at Grupo SBF, I run the strategic planning cycle, lead theses on organic and inorganic growth, and oversee corporate transformation projects. In large organizations, turning vision into an executable plan depends as much on method as on patience, navigation, and political read.",
        "I think laterally while most of the market thinks in straight lines. When I get a problem, I open several possibilities before closing on one. I work the entire system, not just the immediate node. That leads me to less obvious paths and to more robust decisions, because they consider more angles from the start. It's also what makes me read businesses as whole systems rather than isolated cases.",
        "AI amplifies this way of thinking: what once required full teams and long cycles now fits into a weekend of structured exploration.",
        "My thesis on AI: the real risk isn't function replacement, it's settling for incremental efficiency while others use AI to transform the entire value chain and raise the service bar for the customer. AI-native marketing will listen to consumers at a scale previously impossible, identify patterns in real time, and tune messages for sharper connection. In the age of agents, companies careless with customers will lose when the consumer's agent does due diligence in three seconds before recommending a purchase.",
        "I'm looking for contexts of growth, innovation, or transformation that demand strategic thinking and fast execution to deliver results. I like to coach teams and grant autonomy to secure short-term wins, while in parallel we plan and build the foundations for the medium- and long-term jumps. I work best in collaborative cultures focused on results, with honest communication.",
        "In moments of high interest rates and tight political-economic risk, innovation often becomes a privilege of high-margin sectors. That's why I'm focusing my analyses on financial services first, where margin still rewards curiosity. But the method travels: divergent thinking applied with AI to understand markets and growth opportunities works in any information-intensive sector. I have strong interest and curiosity in tech, education, healthcare, and agribusiness.",
        "This site is my public lab: a space to share analyses, prototypes, essays and work in progress. If any of these angles interest you, I'd love to hear from you.",
      ],
      tags: ["Growth", "Applied AI", "Strategy", "Digital Products"],
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
