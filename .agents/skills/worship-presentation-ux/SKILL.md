---
name: worship-presentation-ux
description: Diretrizes especializadas de UI/UX para softwares de projeção de louvor, slides para igrejas, telões de palco e consoles de operadores ao vivo. Use sempre que for projetar, refatorar ou adicionar recursos visuais e interativos ao apresentador de slides.
---

# Worship Presentation UI/UX Skill

Este skill define os padrões e melhores práticas de design e usabilidade específicos para sistemas de projeção de letras e louvor em igrejas e eventos ao vivo.

---

## 1. Padrões de Telão e Projeção (Audience View)

### 1.1 Hierarquia e Densidade de Conteúdo
- **Regra dos 4 versos**: Nunca exceda 4 linhas por slide de letra de música (ideal: 2 a 3 linhas).
- **Quebras de linha musicais**: Quebre linhas respeitando o ritmo e a respiração da melodia, nunca quebre no meio de uma frase sem sentido semântico.
- **Tamanho de Fonte Dinâmico**:
  - Use tamanhos fluidos baseados no viewport (ex: `font-size: clamp(2rem, 5vw, 4.5rem)`).
  - Garanta que textos longos diminuam proporcionalmente para nunca causar estouro de tela ou quebra indesejada.
- **Sombras de Texto (Legibilidade Universal)**:
  - Aplique `text-shadow` escuro composto para que o texto seja legível mesmo se o fundo tiver áreas claras:
    ```css
    text-shadow: 0 4px 16px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.95);
    ```

### 1.2 Transições e Efeitos Visuais
- **Transições Suaves**:
  - Duração de transição entre letras: `250ms - 400ms` usando `ease-out` ou `cubic-bezier(0.4, 0, 0.2, 1)`.
  - Mudança de tema visual de fundo: transição mais lenta (`700ms - 1000ms`) para não chamar atenção excessiva.
- **Animações Ambientais**:
  - Animações contínuas de SVG ou vídeo devem ser lentas (ciclos de 10s a 25s), com movimentos sutis (`translateY`, rotação sutil, pulso de opacidade de 0.05 a 0.2).
  - Devem induzir serenidade e foco na adoração, nunca distração.

---

## 2. Ergonomia da Cabine de Mídia (Operator Console)

### 2.1 Interface Anti-Fadiga e Baixa Iluminação
- **Tema Dark Confortável**: Fundo entre `#090b14` e `#1e293b`, textos em `#f1f5f9` e acentos em tons suaves (azul, índigo, âmbar).
- **Status "AO VIVO" Inequívoco**:
  - O slide ativo no projetor deve ter uma borda vibrante (ex: `border-2 border-emerald-500` ou `ring-2 ring-red-500`) e um badge explícito `[NO AR / LIVE]`.
  - O próximo slide (preview) deve ter destaque secundário (ex: borda azul ou amarela sutil).

### 2.2 Botões e Ações de Pânico
Ações de emergência devem estar sempre visíveis no topo da tela e acessíveis por atalho único:
| Ação | Atalho | Comportamento |
| :--- | :--- | :--- |
| **Blackout** | `B` | Tela fica preta instantaneamente (durante orações, pregações ou emergências). |
| **Limpar Texto** | `C` | Esconde o texto da letra, mantendo o fundo temático ativo no projetor. |
| **Tema Puro / Logo** | `L` | Volta a exibir o tema ou logotipo oficial da igreja. |
| **Tela Cheia** | `F` ou `F11` | Abre a visualização de projeção em modo tela cheia. |

### 2.3 Navegação e Teclas Rápidas
- `Seta para Baixo` / `Espaço` / `PageDown`: Avançar para o próximo slide.
- `Seta para Cima` / `PageUp`: Voltar slide anterior.
- `Foco na Busca`: `/` ou `Ctrl+K` para pesquisar instantaneamente por número do hino ou letra.
- **Tags de Estrutura**: Exibir badges identificando a seção da música:
  - `[V1]`, `[V2]`: Versos
  - `[C]`, `[Refrão]`: Refrão / Coro (destaque em cor diferente, ex: âmbar ou azul)
  - `[B]`, `[Ponte]`: Ponte / Interlúdio
  - `[Final]`: Final / Outro

---

## 3. Gestão Multi-Telas (Multi-Monitor Workflow)

- **Dual-Window Sync**:
  - Janela de Controle (Operador) e Janela de Projeção (Telão / Projetor) devem se comunicar via `BroadcastChannel` ou eventos de `window.opener`.
  - A janela do projetor deve ser limpa, sem barras de rolagem, sem cabeçalhos e sem controles.
- **Screen Wake Lock**:
  - Ativar a `navigator.wakeLock.request('screen')` para impedir que o sistema operacional ative protetor de tela ou apague o monitor durante o culto.

---

## 4. Estruturação Contínua e Sequencial de Letras (Lyrics Flow & Repetições)

### 4.1 Sequencialidade Obrigatória (Zero Inferência de Retorno)
- **Apresentação Linear Contínua**: O operador de mídia durante o culto opera com avanço linear contínuo (`Seta para Baixo`, `Barra de Espaço`, `PageDown`). **NUNCA** monte uma apresentação inferindo ou exigindo que o operador precise voltar manualmente a slides anteriores para exibir refrões, pontes ou estrofes já cantadas.
- **Refrões e Seções em Todas as Ocorrências**:
  - Se um refrão for cantado após a Estrofe 1, novamente após a Estrofe 2 e repetido no final, ele **DEVE** ser inserido explicitamente em **todas** essas posições sequenciais na letra.
  - **PROIBIDO** colocar o refrão apenas uma vez no início ou meio da música esperando que o operador "volte lá atrás". Cada repetição deve ter seus próprios slides no ponto exato da linha do tempo da música.

### 4.2 Tratamento de Frases e Versos Repetidos
- **Não Ignorar Frases Repetidas**: Frases repetidas nunca devem ser resumidas, omitidas ou consideradas "redundantes". Se o louvor repete a frase, ela deve existir na projeção.
- **Formas de Representar Repetições**:
  1. **Indicador Explícito de Repetição**: Usar a notação `(2x)`, `(3x)`, `(4x)` na linha anterior ou junto à frase, por exemplo:
     ```text
     (2x)
     Está nas mãos do meu Jesus, que vivo está
     ```
  2. **Slides Próprios Dedicados**: Se a repetição representar uma mudança dinâmica, ministração ou se o verso repetido demandar um slide próprio, desdobre em slides sequenciais independentes:
     ```text
     Está nas mãos do meu Jesus, que vivo está

     Está nas mãos do meu Jesus, que vivo está
     ```
- **Quebras de Slide (`\n\n`)**:
  - No banco de dados `coletanea.json`, cada slide de projeção é delimitado por linha em branco dupla (`\n\n`).
  - Mantenha no máximo 2 a 4 versos por bloco para garantir legibilidade e conforto na leitura.
  - Seções especiais mantêm suas tags estruturais imediatamente acima do verso: `[Refrão]`, `[Ponte]`, `[Final]`, etc.
