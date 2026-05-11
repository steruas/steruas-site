export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "quote"; text: string; attribution?: string }
  | { type: "image"; src: string; alt: string; caption?: string };

export type Post = {
  slug: string;
  category: { pt: string; en: string };
  title: { pt: string; en: string };
  excerpt: { pt: string; en: string };
  date: string;
  readingTime: number;
  body: { pt: PostBlock[]; en: PostBlock[] };
  draft?: boolean;
};

const p = (text: string): PostBlock => ({ type: "p", text });
const h2 = (text: string): PostBlock => ({ type: "h2", text });
const quote = (text: string, attribution?: string): PostBlock => ({
  type: "quote",
  text,
  attribution,
});

export const posts: Post[] = [
  {
    slug: "como-preparar-marca-produtos-recomendados-ias",
    category: { pt: "Estratégia, Growth & IA", en: "Strategy, Growth & AI" },
    title: {
      pt: "Como preparar sua marca e produtos para serem recomendados pelas IAs",
      en: "How to prepare your brand and products to be recommended by AI",
    },
    excerpt: {
      pt: "A nova era da busca exige substância: conteúdo proprietário, autoridade construída e gestão ativa de reputação. Por que experiência do cliente virou alavanca de aquisição em serviços financeiros.",
      en: "The new search era demands substance: proprietary content, actively built authority, and active reputation management. Why customer experience became an acquisition lever in financial services.",
    },
    date: "2026-05-11",
    readingTime: 6,
    body: {
      pt: [
        p("Por anos, o jogo de growth digital teve uma lógica clara: comprar cliques, mensurar conversão, otimizar custo de aquisição. Marca era topo de funil; performance era fundo. Quem dominava as duas operações em silos paralelos sobrevivia bem. Eu sei como esse jogo funcionava porque trabalhei com SEM no começo da minha carreira. E sei que mudou — porque a pesquisa em si mudou."),
        p("Até janeiro de 2026, o volume de buscas com mais de quatro termos cresceu 15 vezes. No AI Mode do Google, os usuários fazem buscas duas a três vezes mais longas que as tradicionais. A pesquisa virou conversa, e quem responde melhor ganha."),
        p("Há uma assimetria crescente entre pesquisa humana e pesquisa mediada por agentes. Humanos cansam, comparam três ou quatro opções, escolhem com base no que está mais visível. Agentes processam dezenas de fontes em segundos, ponderam reputação, cruzam termos de contrato, e devolvem uma recomendação."),
        quote(
          "Se um humano fosse comprar uma câmera digital, talvez visitasse cinco sites. O agente dele vai visitar mil vezes mais. Pode chegar a cinco mil sites.",
          "Matthew Prince, CEO da Cloudflare, SXSW 2026"
        ),
        p("É mil vezes mais tráfego pra responder a mesma pergunta. Em 2024, pela primeira vez em uma década, máquinas passaram humanos: 51% do tráfego global da internet já é de bots, segundo o relatório anual da Imperva. A internet de hoje está sendo construída para máquinas, e é preciso preparar a estrutura de dados também para as máquinas."),
        p("Consumidores migram cada vez mais decisões para interface conversacional. Pesquisa recente da McKinsey aponta que instituições financeiras que dominaram a otimização pra esses modelos — disciplina nova chamada Generative Engine Optimization, ou GEO — viram crescimento de até seis vezes em tráfego orgânico não pago."),
        p("O próprio Google já reconheceu publicamente o que essa virada implica."),
        quote(
          "Brand e Performance nunca estiveram tão próximos.",
          "Ana Beatriz Amorim, Google, no Congresso de Lifestyle do Ecommerce Brasil"
        ),
        p("É a forma educada de dizer algo mais incômodo: marca sem substância deixa de existir pra IA. E como cada vez mais clientes vão chegar à decisão de compra mediada por IA, marca sem substância deixa de existir, ponto."),
        p("A pergunta certa não é mais \"minha marca tem reconhecimento?\". É \"minha marca tem material que uma IA consegue ler, atribuir e recomendar com confiança?\". A recomendação prática do Google se organiza em três pilares: conteúdo proprietário denso, autoridade externa construída ativamente, e gestão ativa de reputação."),
        h2("Pilar 1: Conteúdo proprietário estruturado"),
        p("Modelos precisam de informação que explique o que sua empresa faz, pra quem, em que condições. Pra um banco ou fintech, isso significa páginas claras de produto com critérios objetivos de elegibilidade, faixas de preço transparentes, casos de uso explicados em linguagem comum. A Google reforça que conteúdo multimodal — vídeo, imagem, texto aprofundado — tem mais peso que textos curtos genéricos. É documentação utilizável, escrita pra responder perguntas reais de cliente."),
        p("Acionável: mapeie o conteúdo proprietário da sua marca e avalie pela ótica de utilidade pra IA. Páginas institucionais vagas não servem. Servem páginas que respondem diretamente \"pra quem é isso\", \"quanto custa\", \"como funciona em três meses\". Em formato multimodal quando possível."),
        h2("Pilar 2: Autoridade externa verificável"),
        p("Modelos de linguagem inferem confiança da rede de fontes que falam de uma marca. A Google recomenda investir em blogs, artigos de opinião, podcasts e webinars que posicionem a marca como autoridade. Reviews de clientes, colaborações com creators especializados e menções em veículos confiáveis viram combustível. Em setor financeiro especificamente, a marca que produz análise pública sobre seu próprio mercado tem vantagem dupla: aparece em mais resultados de IA e ganha credibilidade orgânica que mídia paga não compra."),
        p("Acionável: identifique três tipos de produção externa que sua marca pode sustentar com qualidade — não dez. Pode ser participação regular em podcasts de setor, um blog próprio com periodicidade, ou parcerias contínuas com creators relevantes. Volume importa menos que consistência e densidade."),
        h2("Pilar 3: Gestão ativa de reputação"),
        p("A Google literalmente cita Reclame Aqui e redes sociais como pontos a monitorar. Acompanhar o que está sendo dito sobre a marca em diversas plataformas deixou de ser função reativa de comunicação e virou prática essencial pra preservar visibilidade orgânica em IA."),
        p("Aqui está o ponto que ainda não foi internalizado pela maioria dos comitês de marketing: experiência do cliente virou alavanca de aquisição. A lógica é direta. Se o cliente reclama publicamente do seu banco, essa reclamação vira texto indexável. Se a IA é treinada nesse texto, ela aprende a associar sua marca a problemas específicos. Quando outro cliente potencial perguntar \"qual o melhor banco pra X\", o modelo pondera a reputação observada."),
        p("Isso reorganiza o cálculo de unit economics. Antes, um cliente mal-atendido custava o LTV perdido daquele cliente, mais boca-a-boca negativo numa rede pequena. Agora soma-se um terceiro custo: degradação de visibilidade orgânica em IA pra novos clientes potenciais. O CAC do próximo cliente sobe porque a experiência do anterior foi ruim."),
        p("E experiência ruim raramente começa no SAC. Começa no produto que não funciona como prometido, na jornada que tem atrito desnecessário, no processo interno que joga o problema do cliente de área em área. O SAC é onde o cliente chega depois que algo já falhou antes. Dimensionar bem o atendimento é necessário, mas tratar o sintoma sem mexer na causa só adia o problema — e na era da IA, adia visivelmente, porque cada interação ruim vira dado público que ensina o modelo o que sua marca representa."),
        p("Pra setor financeiro, isso é especialmente urgente. Bancos e fintechs estão entre as empresas mais reclamadas do país por construção: alta volumetria de transações, situações emocionalmente carregadas, jornadas regulatoriamente densas. O argumento de que \"investir em experiência do cliente não tem ROI claro\" perdeu validade. O ROI passou a estar em dois lugares ao mesmo tempo: na retenção do cliente atual e no posicionamento orgânico junto a modelos de IA."),
        p("Acionável: olhe pra experiência do cliente como sistema, não como função. SAC bem dimensionado importa, mas é a última camada. As camadas anteriores — produto, jornada, processo interno — são onde a maioria das reclamações públicas se origina. Em serviços financeiros, mapear as cinco causas mais frequentes de reclamação no Reclame Aqui e atacá-las na raiz é provavelmente o investimento de growth com maior retorno marginal nos próximos seis meses. E talvez o único cujo retorno aparece em duas linhas do P&L ao mesmo tempo."),
        h2("A virada cultural"),
        p("A mudança que isso exige é cultural, não tática. Empresas acostumadas a comprar cliques tinham um luxo: o canal de aquisição era separado do canal de relacionamento. Você podia ter mídia paga ótima e atendimento medíocre, e a matemática fechava no curto prazo."),
        p("Esse divórcio acabou. Marca, performance, conteúdo e atendimento viraram quatro faces de uma mesma alavanca: o quanto sua empresa é compreendida, citada e recomendada por modelos de linguagem que cada vez mais mediam a decisão de compra. Pra setor financeiro, onde a confiança é o produto e a reputação é parte do que se vende, esse alinhamento é a infraestrutura digital finalmente refletindo o que sempre foi verdade."),
        p("Preparar marca e produtos pra serem recomendados pelas IAs é o novo trabalho de quem cuida de growth, marca e relacionamento ao mesmo tempo."),
      ],
      en: [
        p("For years, digital growth had a clear logic: buy clicks, measure conversion, optimize acquisition cost. Brand was top of funnel; performance was bottom. Companies that dominated both in parallel silos did well. I know how that game worked because I did SEM early in my career. And I know it has changed — because search itself has changed."),
        p("By January 2026, the volume of searches with more than four terms had grown 15-fold. In Google's AI Mode, users run queries two to three times longer than traditional ones. Search has become conversation, and whoever answers best wins."),
        p("There is a growing asymmetry between human search and agent-mediated search. Humans get tired, compare three or four options, choose based on what's most visible. Agents process dozens of sources in seconds, weigh reputation, cross-reference contract terms, and return a recommendation."),
        quote(
          "If a human were shopping for a digital camera, they might visit five websites. Their agent will visit a thousand times more. It could hit five thousand sites.",
          "Matthew Prince, CEO of Cloudflare, SXSW 2026"
        ),
        p("That's a thousand times more traffic to answer the same question. In 2024, for the first time in a decade, machines surpassed humans: 51% of global internet traffic is now bots, according to Imperva's annual report. Today's internet is being built for machines, and data structures need to be ready for machines too."),
        p("Consumers are migrating more and more decisions to the conversational interface. Recent McKinsey research shows that financial institutions that mastered optimization for these models — a new discipline called Generative Engine Optimization, or GEO — saw up to sixfold growth in unpaid organic traffic."),
        p("Google itself has publicly acknowledged what this shift implies."),
        quote(
          "Brand and Performance have never been so close.",
          "Ana Beatriz Amorim, Google, at the Brazilian Ecommerce Lifestyle Conference"
        ),
        p("It is the polite way of saying something more uncomfortable: brands without substance cease to exist for AI. And as more customers reach purchase decisions mediated by AI, brands without substance cease to exist, period."),
        p("The right question is no longer \"does my brand have recognition?\". It is \"does my brand have material that an AI can read, attribute, and recommend with confidence?\". Google's practical recommendation organizes around three pillars: dense proprietary content, actively built external authority, and active reputation management."),
        h2("Pillar 1: Structured proprietary content"),
        p("Models need information that explains what your company does, for whom, under what conditions. For a bank or fintech, that means clear product pages with objective eligibility criteria, transparent pricing tiers, use cases explained in plain language. Google emphasizes that multimodal content — video, image, in-depth text — carries more weight than short generic copy. It is usable documentation, written to answer real customer questions."),
        p("Actionable: map your brand's proprietary content and evaluate it through the lens of AI usefulness. Vague institutional pages don't serve. What serves are pages that directly answer \"who is this for\", \"how much does it cost\", \"how does it work in three months\". In multimodal format where possible."),
        h2("Pillar 2: Verifiable external authority"),
        p("Language models infer trust from the network of sources that talk about a brand. Google recommends investing in blogs, opinion pieces, podcasts, and webinars that position the brand as an authority. Customer reviews, collaborations with specialized creators, and mentions in reputable outlets become fuel. In financial services specifically, the brand that produces public analysis about its own market has a double advantage: it appears in more AI results and gains organic credibility that paid media cannot buy."),
        p("Actionable: identify three types of external production your brand can sustain with quality — not ten. It could be regular appearances on industry podcasts, an owned blog with consistent cadence, or ongoing partnerships with relevant creators. Volume matters less than consistency and density."),
        h2("Pillar 3: Active reputation management"),
        p("Google literally cites Reclame Aqui and social networks as monitoring points. Tracking what is being said about your brand across platforms has stopped being a reactive communications function and become essential practice for preserving organic visibility in AI."),
        p("Here is the point most marketing committees haven't internalized yet: customer experience became an acquisition lever. The logic is direct. If a customer complains publicly about your bank, that complaint becomes indexable text. If AI trains on that text, it learns to associate your brand with specific problems. When another potential customer asks \"which is the best bank for X,\" the model weighs observed reputation."),
        p("This reorganizes unit economics math. Before, a poorly served customer cost the lost LTV of that customer, plus negative word-of-mouth in a small network. Now a third cost is added: degraded organic visibility in AI for new potential customers. The CAC of the next customer goes up because the previous one's experience was bad."),
        p("And bad experience rarely starts at the support desk. It starts in the product that doesn't work as promised, in the journey with unnecessary friction, in the internal process that bounces the customer's problem from area to area. Customer support is where the customer arrives after something has already failed. Sizing the support team well is necessary, but treating the symptom without addressing the cause only delays the problem — and in the AI era, it delays it visibly, because every bad interaction becomes public data that teaches the model what your brand represents."),
        p("For financial services, this is especially urgent. Banks and fintechs are among the most complained-about companies in Brazil by construction: high transaction volume, emotionally charged situations, regulatorily dense journeys. The argument that \"investing in customer experience has no clear ROI\" has lost validity. The ROI now lives in two places simultaneously: in retaining the current customer, and in organic positioning with AI models."),
        p("Actionable: look at customer experience as a system, not as a function. A well-sized support desk matters, but it is the last layer. The previous layers — product, journey, internal process — are where most public complaints originate. In financial services, mapping the five most frequent causes of complaint on Reclame Aqui and addressing them at the root is probably the growth investment with the highest marginal return over the next six months. And possibly the only one whose return shows up in two P&L lines at once."),
        h2("The cultural shift"),
        p("The change this requires is cultural, not tactical. Companies used to buying clicks had a luxury: the acquisition channel was separate from the relationship channel. You could have excellent paid media and mediocre service, and the math worked in the short term."),
        p("That divorce is over. Brand, performance, content, and service have become four faces of the same lever: how well your company is understood, cited, and recommended by language models that increasingly mediate purchase decisions. For financial services, where trust is the product and reputation is part of what's sold, this alignment is digital infrastructure finally reflecting what was always true."),
        p("Preparing brand and products to be recommended by AI is the new work of those who care for growth, brand, and relationship at the same time."),
      ],
    },
  },
  {
    slug: "em-construcao-ensaio-1",
    category: { pt: "Estratégia, Growth & IA", en: "Strategy, Growth & AI" },
    title: { pt: "Em construção", en: "In progress" },
    excerpt: {
      pt: "Ensaio sobre os três tipos de startup de IA, o ponto cego do replace, e por que o foco no Unimaginable é a aposta certa. Em produção.",
      en: "Essay on the three types of AI startups, the blind spot of replace, and why focusing on the Unimaginable is the right bet. In production.",
    },
    date: "2026-05-11",
    readingTime: 1,
    body: {
      pt: [p("Em construção. Publicação prevista para esta semana.")],
      en: [p("In progress. Publication expected this week.")],
    },
  },
  {
    slug: "vocabulario-growth-ia",
    category: { pt: "Estratégia & IA", en: "Strategy & AI" },
    title: {
      pt: "O vocabulário que ainda falta para growth com IA",
      en: "The vocabulary growth-with-AI still lacks",
    },
    excerpt: {
      pt: "Times de growth herdaram a linguagem do funil. Mas IA não opera em funis, opera em loops compostos. Como descrever o que estamos construindo.",
      en: "Growth teams inherited the funnel's language. But AI doesn't run in funnels, it runs in compounding loops. How to describe what we're building.",
    },
    date: "2026-04-22",
    readingTime: 8,
    body: {
      pt: [
        p("Times de growth nasceram dentro de empresas que viam aquisição como funil. AARRR, AIDA, jornada do cliente em fases lineares. Esse vocabulário moldou métricas, ferramentas e estruturas organizacionais. Mas IA não opera em funil. IA opera em loops compostos onde cada interação alimenta o próximo modelo, e o tempo de aprendizado é a métrica que mais importa."),
        p("Quando a equipe segue chamando de 'topo de funil' o que na verdade é 'sinal de treinamento', a discussão estratégica fica enviesada. Você acaba otimizando volume de leads quando deveria estar otimizando qualidade de sinal. E pior: gerentes acima do time, formados na linguagem antiga, fazem perguntas que não têm resposta no novo paradigma."),
        p("[Placeholder de ensaio em construção. O conteúdo final será publicado em breve.]"),
      ],
      en: [
        p("Growth teams were born inside companies that saw acquisition as a funnel. AARRR, AIDA, customer journey in linear stages. This vocabulary shaped metrics, tools, and organizational structures. But AI doesn't run in funnels. AI runs in compounding loops where each interaction feeds the next model, and learning time is the metric that matters most."),
        p("When the team keeps calling 'top of funnel' what is actually 'training signal,' strategic discussion gets biased. You end up optimizing for lead volume when you should be optimizing for signal quality. And worse: managers above the team, trained in the old language, ask questions that have no answer in the new paradigm."),
        p("[Essay in progress. Final content will be published soon.]"),
      ],
    },
    draft: true,
  },
  {
    slug: "bancos-versus-fintechs-ia",
    category: { pt: "Cases & Análises", en: "Cases & Analysis" },
    title: {
      pt: "Por que os bancos vão vencer a próxima onda de IA",
      en: "Why incumbent banks will win the next AI wave",
    },
    excerpt: {
      pt: "Distribuição, dados proprietários e relação regulatória. Uma leitura contraintuitiva do estado atual da competição em serviços financeiros.",
      en: "Distribution, proprietary data, and regulatory leverage. A counterintuitive read on the current state of financial services competition.",
    },
    date: "2026-03-30",
    readingTime: 11,
    body: {
      pt: [
        p("A narrativa dominante diz que fintechs vão dominar o próximo ciclo. A realidade é mais sutil. Bancos incumbentes têm três ativos que IA amplifica: distribuição massiva, dados proprietários acumulados em décadas, e relação regulatória estável. Fintechs têm velocidade e cultura de produto, mas isso não compensa a falta dos três anteriores quando o jogo muda de aquisição pra retenção."),
        p("[Placeholder de ensaio em construção. O conteúdo final será publicado em breve.]"),
      ],
      en: [
        p("The dominant narrative says fintechs will dominate the next cycle. Reality is more nuanced. Incumbent banks have three assets that AI amplifies: massive distribution, proprietary data accumulated over decades, and stable regulatory relationships. Fintechs have speed and product culture, but that doesn't compensate for the lack of the first three when the game shifts from acquisition to retention."),
        p("[Essay in progress. Final content will be published soon.]"),
      ],
    },
    draft: true,
  },
  {
    slug: "agentes-aquisicao",
    category: { pt: "Growth com IA", en: "Growth with AI" },
    title: {
      pt: "Agentes de aquisição: o novo SDR é um modelo",
      en: "Acquisition agents: the new SDR is a model",
    },
    excerpt: {
      pt: "O que muda quando o primeiro contato com o cliente é mediado por um agente. Limites éticos, ganhos reais e o erro mais comum.",
      en: "What changes when the first customer touch is agent-mediated. Ethical limits, real gains, and the most common mistake.",
    },
    date: "2026-03-12",
    readingTime: 7,
    body: {
      pt: [
        p("Quando o primeiro contato comercial é mediado por agente, três coisas mudam de uma vez: o ritmo, o roteiro e o limite ético. Times que tratam isso como 'SDR mais barato' perdem. Times que tratam como 'novo canal com regras próprias' ganham."),
        p("[Placeholder de ensaio em construção. O conteúdo final será publicado em breve.]"),
      ],
      en: [
        p("When the first commercial contact is agent-mediated, three things change at once: the rhythm, the script, and the ethical limit. Teams that treat this as 'cheaper SDR' lose. Teams that treat it as 'new channel with its own rules' win."),
        p("[Essay in progress. Final content will be published soon.]"),
      ],
    },
    draft: true,
  },
  {
    slug: "reclame-aqui-sinal",
    category: { pt: "Cases & Análises", en: "Cases & Analysis" },
    title: {
      pt: "Reclame Aqui como sinal de mercado, não vergonha pública",
      en: "Reclame Aqui as market signal, not public shame",
    },
    excerpt: {
      pt: "Como ler a base do Reclame Aqui com LLMs e descobrir oportunidades de produto que o time de CS já desistiu de explicar.",
      en: "How to read the Reclame Aqui base with LLMs and surface product opportunities the CS team has stopped trying to explain.",
    },
    date: "2026-02-18",
    readingTime: 9,
    body: {
      pt: [
        p("Reclame Aqui é tratado como termômetro de reputação. É também — e principalmente — uma base estruturada de dor de cliente, organizada por empresa e categoria, que com LLMs pode ser lida em escala. O que o time de CS desistiu de explicar pra liderança aparece ali, em volume, com vocabulário do próprio cliente."),
        p("[Placeholder de ensaio em construção. O conteúdo final será publicado em breve.]"),
      ],
      en: [
        p("Reclame Aqui is treated as a reputation thermometer. It is also — and primarily — a structured customer pain database, organized by company and category, that with LLMs can be read at scale. What the CS team has given up trying to explain to leadership shows up there, in volume, with the customer's own vocabulary."),
        p("[Essay in progress. Final content will be published soon.]"),
      ],
    },
  },
  {
    slug: "regulado-rapido",
    category: { pt: "Estratégia & IA", en: "Strategy & AI" },
    title: {
      pt: "Regulado e rápido: o falso dilema do compliance em IA",
      en: "Regulated and fast: the false dilemma of AI compliance",
    },
    excerpt: {
      pt: "A maior parte do atrito que culpamos no jurídico é, na verdade, ausência de design. Um framework para tirar IA do limbo regulatório.",
      en: "Most of the friction we blame on legal is, in fact, missing design. A framework for getting AI out of regulatory limbo.",
    },
    date: "2026-01-29",
    readingTime: 6,
    body: {
      pt: [
        p("Existe um padrão repetido em corporativos com áreas de compliance fortes: cada projeto de IA passa meses em revisão jurídica, e a frustração das equipes técnicas vai aumentando. O diagnóstico fácil é dizer que o jurídico é lento. O diagnóstico correto, na maior parte dos casos, é que o projeto chegou no jurídico mal desenhado."),
        p("[Placeholder de ensaio em construção. O conteúdo final será publicado em breve.]"),
      ],
      en: [
        p("There's a recurring pattern in corporates with strong compliance areas: each AI project spends months in legal review, and frustration on technical teams keeps growing. The easy diagnosis is to say legal is slow. The correct diagnosis, most of the time, is that the project arrived at legal poorly designed."),
        p("[Essay in progress. Final content will be published soon.]"),
      ],
    },
    draft: true,
  },
  {
    slug: "metricas-que-sobram",
    category: { pt: "Growth com IA", en: "Growth with AI" },
    title: {
      pt: "As métricas que sobram quando IA assume o operacional",
      en: "The metrics left standing when AI takes the operational layer",
    },
    excerpt: {
      pt: "CAC e LTV vão continuar. Quase todo o resto precisa ser reescrito. Um inventário honesto do que sobrevive.",
      en: "CAC and LTV survive. Almost everything else needs rewriting. An honest inventory of what makes it through.",
    },
    date: "2026-01-08",
    readingTime: 10,
    body: {
      pt: [
        p("Quando IA assume execução de boa parte do operacional de marketing e vendas, métricas tradicionais ou perdem significado ou precisam ser reescritas. CAC e LTV continuam, porque medem fluxo de caixa real. Mas taxa de conversão por etapa, tempo de resposta de SDR, número de toques antes de fechar — quase todas precisam de redefinição."),
        p("[Placeholder de ensaio em construção. O conteúdo final será publicado em breve.]"),
      ],
      en: [
        p("When AI takes execution of much of marketing and sales operations, traditional metrics either lose meaning or need to be rewritten. CAC and LTV remain, because they measure real cash flow. But conversion rate per stage, SDR response time, number of touches before closing — almost all of them need redefinition."),
        p("[Essay in progress. Final content will be published soon.]"),
      ],
    },
    draft: true,
  },
];