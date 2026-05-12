export type PostBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
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
const h3 = (text: string): PostBlock => ({ type: "h3", text });
const quote = (text: string, attribution?: string): PostBlock => ({
  type: "quote",
  text,
  attribution,
});

export const posts: Post[] = [
  {
    slug: "como-preparar-marca-produtos-recomendados-ias",
    category: { pt: "Growth & IA", en: "Growth & AI" },
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
    slug: "incentivos-ia-eficiencia-tiram-empresas-do-futuro",
    category: { pt: "Estratégia, Growth & IA", en: "Strategy, Growth & AI" },
    title: {
      pt: "Assist, Replace, Unimaginable: por que seguir os incentivos te tira do futuro",
      en: "Assist, Replace, Unimaginable: why following the incentives takes you out of the future",
    },
    excerpt: {
      pt: "Os três tipos de aposta em IA explicam por que o capital está fluindo pra eficiência enquanto os próximos líderes de mercado nascerão em outro lugar.",
      en: "The three-types framework for AI bets explains why capital is flowing toward efficiency while the next market leaders will be born somewhere else.",
    },
    date: "2026-05-12",
    readingTime: 7,
    body: {
      pt: [
        p("Estamos entrando no ápice da destruição criativa que Schumpeter descreveu há um século. Barreiras de entrada caem em setores que pareciam invioláveis, software vira commodity infinitamente replicável, e times pequenos coordenam frotas de agentes que trabalham 24x7 sem cansar. É reset estratégico em camadas simultâneas, e ninguém pode mais confiar nas antigas regras de competição."),
        p("Nesse contexto, fundadores estão escolhendo onde apostar e líderes incumbentes estão decidindo o que priorizar no roadmap de IA. Quase todo mundo está olhando pra mesma paisagem, mas com lentes diferentes. E é aí que aparece um problema: os incentivos racionais de curto prazo estão empurrando o capital pra um lugar que pode não ser onde os próximos líderes de mercado vão nascer."),
        h2("Os três tipos de aposta em IA, segundo Heller"),
        p("Jake Heller, fundador da Casetext (vendida pra Thomson Reuters por 650 milhões de dólares), deu uma fala no AI Startup School do Y Combinator em junho de 2025 que organiza a paisagem em três categorias. O framework foi pensado pra fundadores escolherem em que onda surfar, mas serve igualmente pra incumbentes decidirem onde alocar budget de transformação."),
        p("Basicamente, os empreendedores que querem criar uma startup em IA têm 3 tipos de empresas a criar:"),
        p("(1) Assist (Copilot) é IA que ajuda profissionais a fazer melhor o que já fazem."),
        p("(2) Replace é IA que substitui inteiramente tarefas que antes exigiam humanos."),
        p("(3) Unimaginable é IA que viabiliza capacidades que antes eram impossíveis."),
        { type: "image", src: "/images/ensaios/heller-framework-puro-pt.svg", alt: "Tabela com o framework original de Jake Heller: três tipos de aposta em IA — Assist (Copilot), Replace e Unimaginable — com definição e exemplo de cada.", caption: "Framework original de Jake Heller. Os três tipos com definição e exemplo." },
        h2("Complementando o framework"),
        p("Andrew Ng deu um argumento adjacente no World Economic Forum em Davos, janeiro de 2026: retornos reais vêm de redesenho top-down de workflow, não de experimentos bottom-up de produtividade incremental. Mapeando isso, tomo a liberdade de adicionar ao framework do Heller um critério adicional que diferencia os três tipos: a unidade de mudança."),
        p("(1) Assist otimiza tarefas dentro do processo existente."),
        p("(2) Replace substitui humanos na realização de tarefas dentro do processo existente."),
        p("(3) Unimaginable redesenha o processo."),
        p("Vale também a menção de que essas categorias não são compartimentos estanques. É muito comum começar em Assist e evoluir para Replace. CoCounsel começou como assistente legal e em 2025 já executa workflows completos. Cursor começou como autocomplete e em 2026 orquestra agentes que executam tarefas multi-arquivo. O movimento Assist → Replace é tendência, não exceção."),
        h2("Por que o capital vai pra Replace, e por que isso pode ser miopia"),
        p("Os incentivos racionais estão alinhados pra direcionar capital principalmente pra Replace. Não é coincidência. É onde o risco é menor e o retorno é tangível. É viável substituir parte das tarefas de um cargo, evals garantem precisão, e o mercado endereçável já existe: você sabe quanto custa manter um time de cem analistas, sabe que se um agente faz o trabalho de dez, o ROI é calculável antes do piloto. Demanda comprovada, métrica clara."),
        p("Assist tem desafio diferente: provar retorno incremental atribuível à ferramenta pode ser difícil. Cálculo do ROI exige medição cuidadosa que poucas empresas têm. Sem essa prova, renovar contratos vira ato de fé."),
        p("E Unimaginable enfrenta o oposto: retorno potencialmente alto, mas em mercados que talvez ainda não existam. Mais incerteza no retorno, maior risco de execução. Sem benchmark de adoção, sem caso comparável, sem framework regulatório. Em ambiente de capital caro, é onde comitês de investimento congelam."),
        p("Em contexto de juros altos no mundo todo, cenário geopolítico apertado entre guerras, tarifas e oscilações no preço do petróleo, empresas priorizam redução de despesas e investimento certeiro. Replace cabe exatamente nesse mandato."),
        p("Mas Ng trouxe um contraponto. Quando um banco usa IA pra revisar empréstimo, a versão Replace é cortar o tempo de 60 minutos pra 10, economizando hora-homem. Cliente ainda espera dias pelo email final. A versão Unimaginable é diferente. Se o processo leva milissegundos, o banco redesenha o workflow inteiro: marketing, application, risk assessment e transferência de fundos viram um loop autônomo. O resultado é produto novo, não economia: empréstimo instantâneo. A primeira empresa é um banco com overhead mais baixo. A segunda é a fintech que tira a primeira do mercado."),
        p("O ponto de Ng é seco: pare de usar IA pra pavimentar atalhos antigos. Use IA pra construir estradas novas. Focar só em eficiência pode te deixar eficiente, mas no passado. Pra incumbente, é risco existencial. Pra empreendedor, é oportunidade de criar negócio enorme."),
        p("Esse é o paradoxo que dá título a esse ensaio. Seguir os incentivos racionais de curto prazo te tira do longo prazo. O framework dos três tipos serve a três leitores diferentes, e cada um precisa fazer uma pergunta distinta. Fundador: qual onda surfar? Replace tem mercado previsível mas janela curta antes de virar commodity. Unimaginable tem risco maior e defensibilidade real. Investidor: onde alocar entre os três quadrantes? Diversificar é mais inteligente que concentrar tudo no quadrante de ROI mais visível, porque o próximo líder vai nascer no menos óbvio. Executivo incumbente: como balancear o roadmap? Se 100% do investimento de IA está em Replace, o portfolio defende posição atual, não captura a próxima."),
        h2("Como o caminho para o sucesso varia por categoria"),
        p("Confiabilidade é pré-requisito em qualquer quadrante. Sem evals rigorosos, sem critério explícito do que é \"great\" pra cada micro-tarefa, sem holdout sets pra evitar overfitting, nenhum produto de IA sai da fase de demo bonita. Esse processo é árduo, e é onde a maioria dos founders desiste. Quando a precisão fica em 60-70%, é tentador declarar vitória. Mas é entre 70% e 99% que mora a diferença entre demo viral e produto sustentável. Isso vale especialmente em domínios sensíveis como direito, saúde e serviços financeiros, onde erro destrói confiança que leva anos pra reconstruir."),
        p("O método de Heller (começar com uma dúzia de evals por prompt, iterar até a IA acertar quase tudo, adicionar mais cinquenta pra estressar casos extremos) vale igual pra qualquer dos três tipos. Mas o desafio dominante acima dessa fundação muda por categoria."),
        h3("Em Assist: provar valor e garantir adesão"),
        p("O risco dominante é de adoção e mensuração. A ferramenta funciona, IA sugere, humano aceita. O desafio é provar que o ganho é real, incremental e atribuível à ferramenta, e não a outras variáveis. Sem essa prova, a renovação trava. E mesmo com prova, se a usabilidade não fizer o profissional adotar no fluxo natural, fica esquecida."),
        h3("Em Replace: precisão técnica em escala"),
        p("O risco dominante é técnico e operacional. Se você substitui dez analistas, o output precisa ter a precisão que eles teriam. Aqui o método de evals importa em sua forma mais aguda: cada caso extremo não descoberto na operação é um cliente perdido ou uma regulação acionada. A assertividade e escala dos usos amplifica tanto o ganho quanto o risco."),
        h3("Em Unimaginable: redesenhar a partir de zero restrição"),
        p("O risco dominante é outro: inventar o que ainda não foi inventado. O ponto de partida é a dor do cliente, não a tecnologia. A pergunta que Heller propõe é a chave: como resolveríamos esse problema se não houvesse limite de trabalho e energia em uma tarefa? Assumindo restrição zero (custo de processamento, tempo humano, latência), qual é a dor real que ninguém está atendendo? Stripe Radar nasceu dessa pergunta. BeeSafe AI também. Redesenhar o processo a partir dessa pergunta é o que diferencia Unimaginable de Replace bem feito. Construir Unimaginable é tecnicamente difícil exatamente por isso. Mas é essa dificuldade que cria moat."),
        h2("O ciclo curto e o ciclo longo"),
        p("A tese de Schumpeter sobre destruição criativa nunca foi sobre saudosismo. Foi sobre o fato de que mercados maduros são derrubados não por quem otimiza o produto existente, mas por quem cria a categoria seguinte. IA é o ferramental mais poderoso que essa lógica já teve. O capital vai pra Replace por motivos racionais de curto prazo, e Replace vai gerar muito valor nessa década. Mas os próximos líderes de mercado vão nascer no Unimaginable."),
        p("Quem só fizer eficiência com IA pode estar fazendo bem feito o jogo errado."),
        { type: "image", src: "/images/ensaios/assist-replace-unimaginable-pt.svg", alt: "Tabela comparativa completa dos três tipos de aposta em IA: Assist (Copilot), Replace e Unimaginable, comparados em unidade da mudança, mercado endereçável, nível de risco, como ter sucesso e exemplos.", caption: "Framework completo: os três tipos comparados em unidade da mudança, mercado endereçável, risco, caminho pra ter sucesso e exemplos." },
      ],
      en: [
        p("We are entering the peak of the creative destruction Schumpeter described a century ago. Entry barriers are falling in sectors that seemed inviolable, software is becoming an infinitely replicable commodity, and small teams now coordinate fleets of agents that work 24/7 without rest. It's a strategic reset in simultaneous layers, and no one can rely on the old rules of competition anymore."),
        p("In this context, founders are choosing where to bet and leaders of incumbent companies are deciding what to prioritize on the AI roadmap. Almost everyone is looking at the same landscape, but through different lenses. And that's where a problem appears: rational short-term incentives are pushing capital toward a place that may not be where the next market leaders will be born."),
        h2("The three types of AI bets, according to Heller"),
        p("Jake Heller, founder of Casetext (sold to Thomson Reuters for $650 million), gave a talk at Y Combinator's AI Startup School in June 2025 that organizes the landscape into three categories. The framework was designed for founders to choose which wave to surf, but it works equally well for incumbents deciding where to allocate transformation budget."),
        p("Basically, entrepreneurs who want to build an AI startup have 3 types of companies they can create:"),
        p("(1) Assist (Copilot) is AI that helps professionals do better what they already do."),
        p("(2) Replace is AI that fully replaces tasks that previously required humans."),
        p("(3) Unimaginable is AI that enables capabilities that were previously impossible."),
        { type: "image", src: "/images/ensaios/heller-framework-puro-en.svg", alt: "Table with Jake Heller's original framework: three types of AI bets — Assist (Copilot), Replace, and Unimaginable — with definition and example for each.", caption: "Jake Heller's original framework. The three types with definition and example." },
        h2("Complementing the framework"),
        p("Andrew Ng made an adjacent argument at the World Economic Forum in Davos, January 2026: real returns come from top-down workflow redesign, not from bottom-up experiments of incremental productivity. Mapping this, I take the liberty to add to Heller's framework an additional criterion that differentiates the three types: the unit of change."),
        p("(1) Assist optimizes tasks within the existing process."),
        p("(2) Replace substitutes humans in performing tasks within the existing process."),
        p("(3) Unimaginable redesigns the process."),
        p("Worth also mentioning that these categories are not airtight compartments. It is very common to start as Assist and evolve to Replace. CoCounsel started as a legal assistant and by 2025 already executes complete workflows. Cursor started as autocomplete and by 2026 orchestrates agents that execute multi-file tasks. The Assist → Replace movement is a trend, not an exception."),
        h2("Why capital goes to Replace, and why this can be myopia"),
        p("Rational incentives are aligned to direct capital primarily toward Replace. It's not a coincidence. It's where the risk is lower and the return is tangible. It's viable to substitute part of the tasks of a role, evals ensure accuracy, and the addressable market already exists: you know how much it costs to maintain a team of one hundred analysts, you know that if an agent does the work of ten, ROI is calculable before the pilot. Proven demand, clear metric."),
        p("Assist has a different challenge: proving incremental return attributable to the tool can be difficult. ROI calculation requires careful measurement that few companies have. Without that proof, renewing contracts becomes an act of faith."),
        p("And Unimaginable faces the opposite: potentially high return, but in markets that may not yet exist. More uncertainty in return, higher execution risk. No adoption benchmark, no comparable case, no regulatory framework. In an environment of expensive capital, this is where investment committees freeze."),
        p("In a context of high interest rates globally, with a tight geopolitical scenario between wars, tariffs, and oil price swings, companies prioritize cost reduction and targeted investment. Replace fits exactly into that mandate."),
        p("But Ng brought a counterpoint. When a bank uses AI to review a loan, the Replace version is cutting review time from 60 minutes to 10, saving man-hours. The customer still waits days for the final email. The Unimaginable version is different. If the process takes milliseconds, the bank redesigns the entire workflow: marketing, application, risk assessment, and fund transfer become an autonomous loop. The result is a new product, not savings: instant loan. The first company is a bank with lower overhead. The second is the fintech that puts the first one out of business."),
        p("Ng's point is dry: stop using AI to pave the old cow paths. Use AI to build new highways. Focusing only on efficiency may leave you efficient, but in the past. For incumbents, it's existential risk. For entrepreneurs, it's an opportunity to create enormous new business."),
        p("This is the paradox that titles this essay. Following rational short-term incentives takes you out of the long term. The three-types framework serves three different readers, and each needs to ask a distinct question. Founder: which wave to surf? Replace has a predictable market but a short window before becoming a commodity. Unimaginable has higher risk and real defensibility. Investor: where to allocate among the three quadrants? Diversifying is smarter than concentrating everything in the quadrant with the most visible ROI, because the next leader will be born in the less obvious one. Incumbent executive: how to balance the roadmap? If 100% of the company's AI investment is in Replace, the portfolio defends current position, not captures the next."),
        h2("How the path to success varies by category"),
        p("Reliability is a prerequisite in any quadrant. Without rigorous evals, without explicit criteria for what is \"great\" for each micro-task, without holdout sets to avoid overfitting, no AI product moves beyond the beautiful demo stage. This process is arduous, and where most founders give up. When accuracy is at 60-70%, it's tempting to declare victory. But it's between 70% and 99% where the difference lives between viral demo and sustainable product. This applies especially in sensitive domains like law, health, and financial services, where product error destroys trust that takes years to rebuild."),
        p("Heller's method (starting with a dozen evals per prompt, iterating until the AI gets almost everything right, adding fifty more to stress edge cases) applies equally to any of the three types. But the dominant challenge above this foundation changes by category."),
        h3("In Assist: prove value and ensure adoption"),
        p("The dominant risk is adoption and measurement. The tool works, AI suggests, human accepts. The challenge is proving that the gain is real, incremental, and attributable to the tool, and not to other variables. Without that proof, renewal stalls. And even with proof, if the usability doesn't make the professional adopt it in the natural workflow, it gets forgotten."),
        h3("In Replace: technical accuracy at scale"),
        p("The dominant risk is technical and operational. If you replace ten analysts, the output needs to have the accuracy they would have. Here the evals method matters in its sharpest form: each edge case not discovered in operation is a lost customer or a triggered regulation. The accuracy and scale of usage amplifies both gain and risk."),
        h3("In Unimaginable: redesign from zero constraint"),
        p("The dominant risk is another: inventing what hasn't been invented yet. The starting point is the customer's pain, not technology. The question Heller proposes is the key: how would we solve this problem if there were no limit to work and energy spent on a task? Assuming zero constraint (processing cost, human time, latency), what is the real pain that nobody is addressing? Stripe Radar was born from this question. BeeSafe AI too. Redesigning the process from this question is what differentiates Unimaginable from well-done Replace. Building Unimaginable is technically difficult exactly because of this. But it's that difficulty that creates the moat."),
        h2("The short cycle and the long cycle"),
        p("Schumpeter's thesis on creative destruction was never about nostalgia. It was about the fact that mature markets are knocked down not by those who optimize the existing product, but by those who create the next category. AI is the most powerful tooling this logic has ever had. Capital will go to Replace for rational short-term reasons, and Replace will indeed generate a lot of value this decade. But the next market leaders will be born in Unimaginable."),
        p("Whoever only does efficiency with AI may be doing the wrong game very well."),
        { type: "image", src: "/images/ensaios/assist-replace-unimaginable-en.svg", alt: "Complete comparative table of the three types of AI bets: Assist (Copilot), Replace, and Unimaginable, compared across unit of change, addressable market, risk level, how to succeed, and examples.", caption: "The complete framework: the three types compared across unit of change, addressable market, risk, path to success, and examples." },
      ],
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