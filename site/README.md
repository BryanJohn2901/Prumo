# Prumo, landing page

One-page em Next.js 15 (App Router) que porta o template AIvent para React, seguindo a copy v1.0.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Estrutura

- `content/copy.ts`: toda a copy. Itens pendentes da copy (`[colchetes]`) estão como `null` ou lista vazia e o bloco correspondente fica oculto até ser preenchido.
- `components/sections/*`: uma seção por arquivo, na ordem da copy.
- `components/TemplateEffects.tsx`: runtime do template sem jQuery (preloader, Lenis, WOW, jarallax com vídeo, barra de progresso, "voltar ao topo").
- `public/css`, `public/fonts`, `public/images`, `public/video`: CSS e assets originais do template.

## Pendências antes de publicar

| Campo em `content/copy.ts` | O que preencher |
| --- | --- |
| `site.agendamentoUrl` | Link de agendamento. Hoje os botões levam a `#contato`. |
| `oferta.etapas[].preco` | Preços do diagnóstico, piloto e mensalidade. |
| `oferta.abatimentoConfirmado` | `true` se o diagnóstico for abatido do piloto. |
| `provaSocial.*` | Números, depoimentos, casos e logos reais. |
| `garantia.horasMinimas` | Mínimo de horas da garantia (ativa a seção e o FAQ). |
| `urgencia.limiteMensal` | Limite real de empresas por mês (ativa bloco e frase do PS). |
| `prazoSuporte`, `formasPagamento` | Prazo de resposta e formas de pagamento no FAQ. |
| `rodape.*` | E-mail, telefone e redes. |

As imagens em `public/images/misc` são do template (tema de evento de IA). Troque por imagens da marca quando houver.
