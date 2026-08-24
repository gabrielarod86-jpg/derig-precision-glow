# Área de Produtos Dérig — páginas dedicadas

Hoje o site é uma landing page única (`/`) com seções âncora. O plano cria uma área de produtos real, com página índice e sub-páginas por família, e corrige os pontos apontados.

## Estrutura de rotas

```text
/produtos                      índice do catálogo (todas as famílias)
/produtos/implantes            linha de implantes (cards por modelo)
/produtos/implantes/$slug      página do implante (texto completo, diâmetros)
/produtos/componentes          componentes protéticos por família de conexão
/produtos/kits                 kits cirúrgicos, protético, fresas e instrumentais
/produtos/digital              linha digital (inclui família mini pilares)
/produtos/zigomaticos          implantes zigomáticos + componentes específicos
```

Cada página com `head()` próprio (title, description, og:title, og:description) e navegação de retorno. O header do site passa a linkar "Produtos" para `/produtos` (âncoras da home mantidas para as demais seções).

## Conteúdo dos implantes

Fichas com o texto enviado, na íntegra:

- **Bioneck TRI — Triplo Canal Interno**: alto poder de compactação, sulcos retentivos nas roscas, Ø 3,5 / 4,3 mm, superfície Biotite (duplo ataque ácido), acompanha parafuso de cobertura.
- **Biodent HEX — Hexágono Externo**: alto poder de expansão óssea, sulcos retentivos, instalação com menos trauma, Ø 3,75 mm, Biotite, parafuso de cobertura.
- **Kort HEX — Hexágono Externo (curto)**: macrogeometria cilíndrica levemente cônica na porção apical, plataforma reduzida (swifting), Ø 4 e 5 mm, Biotite, parafuso de cobertura.

Cada ficha exibe: conexão, diâmetros disponíveis, superfície, itens inclusos e CTA "Fale com um consultor".

## Correções e inclusões pedidas

1. **Cone Morse (CMH)** — a página passa a listar **Bioneck CMH, Dynamic CMH e Biodent CMH** (hoje o Biodent CMH não aparece).
2. **Linha de implantes** — incluir **Biodent CMH** e o **implante de Ø 3,0 mm**.
3. **Linha digital** — incluir a **família de mini pilares**: mini pilar, transferente de escaneamento e análogo.
4. **Implantes longos** — nova família: **Biodent CMH 18, 20 e 22 mm**.
5. **Zigomáticos** — nova família com implantes e componentes específicos, incluindo **mini pilares de 45°** com as respectivas alturas de cinta.
6. **Componentes** — remover a foto genérica hoje repetida entre famílias; cada família recebe sua própria imagem (ou fica sem imagem, com card tipográfico, enquanto a foto correta não chega).
7. **Kits** — trocar todas as fotos atuais (kits coloridos) pelas novas fotos enviadas.

## Imagens

As fotos que você vai anexar serão aplicadas nos produtos correspondentes (Bioneck TRI, Biodent HEX, Kort HEX, kits, componentes, mini pilares, zigomáticos). Onde ainda não houver foto, o card usa um placeholder neutro do design system — sem reutilizar imagem de outra família — para ser substituído depois sem mexer no layout.

## Detalhes técnicos

- Dados do catálogo centralizados em `src/data/products.ts` (famílias, modelos, slug, conexão, diâmetros, descrição, imagem opcional), consumidos por todas as páginas — evita duplicação e facilita atualizar fotos/textos.
- Componentes novos em `src/components/produtos/` (grid de família, card de produto, ficha de especificações), reaproveitando `card-premium`, `eyebrow`, `btn-primary` já existentes.
- Rotas em `src/routes/produtos.*.tsx` no padrão TanStack (arquivo por rota; `$slug` para o detalhe), sem alterar `routeTree.gen.ts` manualmente.
- Home: a seção `FeaturedProducts` passa a apontar para as novas rotas em vez de âncoras `#contato`.
- Mobile mantido no mesmo padrão: cards em carrossel horizontal, CTA fixo e leitura confortável.
