# Portfólio — Ananias Nicolau

Site pessoal em Next.js (App Router) + TypeScript + TailwindCSS + Framer Motion.

## Estrutura

```
app/
  page.tsx            → Início (Hero + preview da stack)
  sobre/page.tsx       → Sobre, formação, certificações, idiomas
  experiencia/page.tsx → Timeline de experiência profissional
  stack/page.tsx       → Diagrama completo de camadas da stack
  contato/page.tsx     → Canais de contato
  layout.tsx           → Layout raiz (fontes, nav, footer)
  template.tsx          → Transição de página (Framer Motion)
components/
  Nav.tsx, Footer.tsx, Avatar.tsx, Reveal.tsx, HeroText.tsx, StackLayers.tsx
data/
  profile.ts            → TODO O CONTEÚDO DO SITE fica aqui
```