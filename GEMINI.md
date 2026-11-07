# LyricSlide Studio - Diretrizes de Desenvolvimento

## Visão Geral do Projeto
Este projeto é um apresentador web moderno de letras e slides voltado para cultos, louvor e eventos cristãos (**LyricSlide Studio**). O sistema opera em ambientes de projeção ao vivo (igrejas, auditórios e palcos) e painéis de controle para operadores de mídia.

- **Stack**: Single-Page Application (HTML5, Vanilla JS, Tailwind CSS CDN, FontAwesome, Google Fonts).
- **Dados**: `coletanea.json` (banco de dados de hinos e músicas), `temas.js` (temas visuais com gradientes e artes SVG sutis).
- **Projeção**: Suporte a projeção ao vivo, tela cheia, atalhos de teclado rápidos e controle de palco.

---

## Ferramentas MCP Ativas

### Context7 MCP (`context7`)
O MCP Context7 está configurado e funcional para este projeto. Ele deve ser utilizado para consultar documentações atualizadas sempre que necessário:
- `call_mcp_tool(ServerName: "context7", ToolName: "resolve-library-id", Arguments: { "libraryName": "...", "query": "..." })`
- `call_mcp_tool(ServerName: "context7", ToolName: "query-docs", Arguments: { "libraryId": "...", "query": "..." })`

#### Quando usar Context7:
1. **Tailwind CSS**: Consultar utilitários, classes dinâmicas, variáveis `@theme`, suporte de tipografia fluida e responsividade.
2. **Web APIs**: Implementação de `BroadcastChannel` (sincronização entre janela de controle do operador e tela de projeção), `Fullscreen API`, `Screen Wake Lock API` (impedir que o projetor apague no meio do culto) e `Presentation API`.
3. **Animações e Áudio/Vídeo**: Canvas, Web Animations API e manipulação de SVG dinâmico.

---

## Diretrizes de UI/UX para Apresentação de Louvor

1. **Legibilidade Máxima na Projeção (Audience View)**:
   - Contraste alto (texto claro sobre fundos escuros/atmosféricos).
   - Tipografia fluida com `clamp()` ou classes responsivas para garantir leitura a 20-40 metros de distância.
   - Máximo de 2 a 4 linhas por slide para evitar poluição visual e facilitar o acompanhamento pela congregação.
   - Text shadow suave e consistente para garantir legibilidade sobre qualquer arte gráfica.
   - Movimentos de fundo lentos e sutis (`slowFloat`, pulso suave) que não distraiam a congregação durante o momento de adoração.

2. **Ergonomia do Operador (Tech Booth / Cabine de Som)**:
   - Interface escura de alto contraste para não cegar o operador em cabines com baixa iluminação.
   - Teclas de pânico essenciais:
     - `B`: Blackout imediato (tela preta total).
     - `C`: Clear text (esconder letra mantendo o fundo temático).
     - `L`: Logo/Tema puro.
   - Indicador visual claro e inequívoco de qual slide está **AO VIVO** (Live) e qual é o próximo (Preview).
   - Busca instantânea com foco automático (`/` ou `Ctrl+K`) permitindo encontrar hinos por número ou trecho da letra em segundos.

---

## Regras Estritas para Configuração e Montagem de Letras

1. **Apresentação 100% Contínua e Sequencial (Sem Voltar Slides)**:
   - Toda letra configurada deve seguir uma linha do tempo estritamente linear (apenas avanço para frente).
   - **NUNCA** assuma ou infira que o operador voltará para slides anteriores para cantar refrões, pontes ou estrofes repetidas.

2. **Refrão em Todas as Ocorrências**:
   - É terminantemente proibido colocar o refrão apenas uma vez se a música o canta múltiplas vezes ao longo de sua execução.
   - O refrão deve ser replicado integralmente na ordem cronológica exata em que é cantado.

3. **Preservação Obrigatória de Frases Repetidas**:
   - Frases repetidas **jamais** podem ser ignoradas, sintetizadas ou descartadas.
   - Devem ser representadas utilizando:
     - Notação de repetição explícita (ex: `(2x)`, `(3x)`, `(4x)`); OU
     - Slides próprios duplicados/sequenciais no fluxo da apresentação.
   - No formato de dados (`coletanea.json`), cada slide visual é separado por quebra dupla (`\n\n`), contendo no máximo de 2 a 4 linhas por slide.
