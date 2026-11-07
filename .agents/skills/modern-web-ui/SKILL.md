---
name: modern-web-ui
description: Melhores práticas e padrões de design system para interfaces web modernas com Tailwind CSS, micro-interações, acessibilidade e animações CSS de alta performance.
---

# Modern Web UI & Design System Skill

Este skill orienta a construção e manutenção de interfaces elegantes, fluidas e acessíveis usando Tailwind CSS e tecnologias modernas da web.

---

## 1. Princípios de Design & Tailwind CSS

### 1.1 Hierarquia Visual e Espaçamento
- Use escala de espaçamento consistente (múltiplos de 4px: `p-2`, `p-4`, `p-6`, `gap-3`, `gap-4`).
- Contraste e cores semânticas:
  - Fundo principal: `bg-slate-950` / `bg-neutral-900`
  - Superfícies de cards e modais: `bg-slate-900/80` com `backdrop-blur-md` e bordas sutis `border border-slate-800`
  - Acentos de interação: `emerald-500` (sucesso / no ar), `indigo-500` / `blue-500` (seleção primária), `amber-500` (destaque / avisos).

### 1.2 Tipografia e Legibilidade
- Emparelhe fontes complementares:
  - Sans-serif neutra para controles e interface: Inter, Outfit.
  - Serif ou Display para momentos solenes e títulos de hinos: Cinzel, Merriweather, Playfair Display.
- Sempre defina `line-height` adequado para leitura rápida (`leading-relaxed` ou `leading-snug` dependendo do tamanho).

---

## 2. Micro-interações e Feedback Visual

- **Estados Hover e Active**:
  - Transições curtas (`duration-150 ease-out`).
  - Efeitos táteis de escala suave no clique: `active:scale-95`.
- **Indicadores de Teclado**:
  - Exibir visualmente os atalhos de teclado nos botões usando tags `<kbd class="px-1.5 py-0.5 text-xs bg-slate-800 border border-slate-700 rounded text-slate-400">Ctrl+K</kbd>`.
- **Acessibilidade (a11y)**:
  - Elementos interativos devem ter foco visível (`focus-visible:ring-2 focus-visible:ring-blue-500`).
  - Alvos de toque/clique confortáveis (mínimo de 40x40px para botões operacionais).
