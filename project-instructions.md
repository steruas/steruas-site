
## SEO e indexação

Como o site foi configurado pra ser indexado pelo Google e como manter isso saudável ao adicionar conteúdo novo.

### Estado atual da configuração

Tudo isto já está implementado, não precisa refazer:

- `public/robots.txt` permitindo todos os crawlers, apontando pro sitemap
- `public/sitemap.xml` listando rotas PT e EN com `hreflang`
- `src/routes/$locale.tsx` define:
  - `<title>` começando com "Stéphanie Nakamura Ruas"
  - Schema.org `Person` com `name` completo, `alternateName` cobrindo variações (SteRuas, sem acento, etc.), `address` SP/BR, `sameAs` com LinkedIn
  - `<link rel="canonical">` por idioma
  - `<link rel="alternate" hreflang>` PT/EN/x-default
  - Open Graph completo (`og:url`, `og:locale`, `og:site_name`)

Search Console e domínios:

- `steruas.com` verificado via DNS no Cloudflare
- `stenakamura.com` verificado (redireciona 301 pro steruas.com)
- Sitemap submetido como `https://steruas.com/sitemap.xml` (URL completa, obrigatório em propriedades do tipo Domain)
- Bing Webmaster Tools importado do Google Search Console (cobre ChatGPT, Copilot, Perplexity, que usam o índice do Bing)
- LinkedIn linkando pro steruas.com no campo "Website" do perfil

### Quando publicar conteúdo novo

Pra acelerar a indexação de um ensaio ou case novo, três passos:

**1. Adicionar URL no `public/sitemap.xml`**

Copia o bloco de uma URL similar existente e adapta. Estrutura padrão:

\`\`\`xml
<url>
  <loc>https://steruas.com/pt/ensaios/SLUG-NOVO</loc>
  <xhtml:link rel="alternate" hreflang="pt-BR" href="https://steruas.com/pt/ensaios/SLUG-NOVO"/>
  <xhtml:link rel="alternate" hreflang="en" href="https://steruas.com/en/ensaios/SLUG-NOVO"/>
  <lastmod>YYYY-MM-DD</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
\`\`\`

Adicionar tanto a versão PT quanto a EN (mesmo que slug seja idêntico, o Google trata como duas URLs distintas).

**2. Pedir indexação manual no Search Console**

Search Console → URL inspection → cola a URL → espera análise → "Test live URL" → "Request indexing". Faz isso pra PT e EN da página nova.

Quota diária do Google é de ~10-15 URLs por dia, então dá pra cobrir ensaios e cases sem problema.

**3. Postar no LinkedIn com o link**

Backlink imediato + tração social. O LinkedIn é o multiplicador de indexação mais valioso porque já rankeia bem pra busca por "Stéphanie Nakamura Ruas".

### Como diagnosticar problemas

**Site não aparece em `site:steruas.com` depois de 7 dias?**

Roda no terminal:

\`\`\`bash
curl -sI https://steruas.com/robots.txt
curl -sI https://steruas.com/sitemap.xml
curl -sL https://steruas.com/ | grep -iE 'noindex|<title|description'
\`\`\`

O que checar:
- robots e sitemap respondendo 200 (não 404)
- nenhum `noindex` no HTML
- title e description aparecendo no HTML inicial (pré-renderizado)

Depois no Search Console → Pages → ver status de cada URL. Se aparecer "Crawled - currently not indexed", é normal nos primeiros dias. Se aparecer "Discovered - currently not indexed" por semanas, o Google acha que a página não vale indexar (sinal de conteúdo fraco ou duplicado).

**Sitemap dá "invalid" no Search Console?**

Em propriedades do tipo Domain, tem que submeter a URL completa (`https://steruas.com/sitemap.xml`), não só `sitemap.xml`. A documentação do Google ainda confunde isso.

**Algum ensaio antigo não está sendo indexado?**

Bem provável que esteja fora do sitemap. Confere `public/sitemap.xml` e adiciona se faltar.

### Cronograma esperado pra conteúdo novo

- 24-48h: Google rastreia a página
- 3-7 dias: aparece em `site:steruas.com`
- 2-3 semanas: aparece em buscas pelo título/keywords

### O que NÃO fazer

- Não criar `noindex` ou `disallow` em rotas reais (mesmo as em rascunho. Melhor não publicar do que publicar com noindex, que pode confundir o Google depois)
- Não mudar slug de página já indexada sem fazer 301 redirect
- Não submeter sitemap toda vez no Search Console. Submete uma vez, ele recrawla sozinho conforme `lastmod` muda
- Não pedir indexação manual em massa (Google bloqueia, vira sinal ruim)
- Não esquecer de atualizar `<lastmod>` no sitemap quando editar conteúdo substancialmente. Isso é o que faz o Google saber que vale recrawlar
