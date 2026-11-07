/**
 * LyricSlide Worship Themes Configuration
 * Cada tema define estilo iconográfico arredondado de baixo contraste,
 * cores de texto correspondentes e gradiente de fundo animado.
 */
window.WORSHIP_THEMES = {
  "theme-cross-grace": {
    id: "theme-cross-grace",
    name: "✝️ Cruz da Graça & Auroras Suaves",
    textColor: "#f1f5f9",
    titleAccent: "#93c5fd",
    cssVariables: {
      "--bg-gradient": "linear-gradient(135deg, #090b14 0%, #151828 50%, #0d0f1a 100%)",
      "--text-color": "#f1f5f9",
      "--title-accent": "#93c5fd"
    },
    svgMarkup: `
      <svg class="w-full h-full absolute inset-0" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="crossGlow" cx="50%" cy="45%" r="42%">
            <stop offset="0%" stop-color="#93c5fd" stop-opacity="0.18" />
            <stop offset="65%" stop-color="#3b82f6" stop-opacity="0.04" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
        </defs>
        <circle cx="500" cy="450" r="340" fill="url(#crossGlow)" class="anim-pulse-gentle" />
        <g class="anim-float" transform-origin="500 450">
          <rect x="484" y="270" width="32" height="360" rx="16" fill="rgba(191,219,254,0.18)" stroke="rgba(219,234,254,0.3)" stroke-width="2" />
          <rect x="380" y="360" width="240" height="32" rx="16" fill="rgba(191,219,254,0.18)" stroke="rgba(219,234,254,0.3)" stroke-width="2" />
          <circle cx="500" cy="376" r="90" fill="none" stroke="rgba(191,219,254,0.16)" stroke-width="2" stroke-dasharray="8 8" />
        </g>
      </svg>
    `
  },

  "theme-heavenly-glory": {
    id: "theme-heavenly-glory",
    name: "☀ Glória Celestial & Raios Dourados",
    textColor: "#fef3c7",
    titleAccent: "#fde68a",
    cssVariables: {
      "--bg-gradient": "radial-gradient(circle at 50% 40%, #281a0b 0%, #160e05 60%, #090602 100%)",
      "--text-color": "#fef3c7",
      "--title-accent": "#fde68a"
    },
    svgMarkup: `
      <svg class="w-full h-full absolute inset-0" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.22" />
            <stop offset="65%" stop-color="#d97706" stop-opacity="0.06" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="1000" fill="url(#sunGlow)" />
        <g class="anim-rotate-slow" opacity="0.45">
          <line x1="500" y1="120" x2="500" y2="280" stroke="rgba(253,230,138,0.3)" stroke-width="4" stroke-linecap="round" />
          <line x1="500" y1="720" x2="500" y2="880" stroke="rgba(253,230,138,0.3)" stroke-width="4" stroke-linecap="round" />
          <line x1="120" y1="500" x2="280" y2="500" stroke="rgba(253,230,138,0.3)" stroke-width="4" stroke-linecap="round" />
          <line x1="720" y1="500" x2="880" y2="500" stroke="rgba(253,230,138,0.3)" stroke-width="4" stroke-linecap="round" />
          <line x1="230" y1="230" x2="340" y2="340" stroke="rgba(253,230,138,0.25)" stroke-width="3" stroke-linecap="round" />
          <line x1="660" y1="660" x2="770" y2="770" stroke="rgba(253,230,138,0.25)" stroke-width="3" stroke-linecap="round" />
          <line x1="770" y1="230" x2="660" y2="340" stroke="rgba(253,230,138,0.25)" stroke-width="3" stroke-linecap="round" />
          <line x1="340" y1="660" x2="230" y2="770" stroke="rgba(253,230,138,0.25)" stroke-width="3" stroke-linecap="round" />
        </g>
        <circle cx="500" cy="500" r="140" fill="none" stroke="rgba(252,211,77,0.22)" stroke-width="2" class="anim-pulse-gentle" />
        <circle cx="500" cy="500" r="80" fill="rgba(251,191,36,0.12)" />
      </svg>
    `
  },

  "theme-holy-spirit": {
    id: "theme-holy-spirit",
    name: "🕊️ Espírito Santo & Brisa Celeste",
    textColor: "#e0f2fe",
    titleAccent: "#7dd3fc",
    cssVariables: {
      "--bg-gradient": "linear-gradient(145deg, #0f172a 0%, #142838 50%, #09131c 100%)",
      "--text-color": "#e0f2fe",
      "--title-accent": "#7dd3fc"
    },
    svgMarkup: `
      <svg class="w-full h-full absolute inset-0" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="doveGlow" cx="50%" cy="46%" r="45%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.18" />
            <stop offset="70%" stop-color="#0284c7" stop-opacity="0.04" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="1000" fill="url(#doveGlow)" />
        <g class="anim-float" transform-origin="500 460">
          <path d="M500,380 C440,320 360,340 330,400 C300,460 360,500 450,470 C420,530 450,570 500,580 C550,570 580,530 550,470 C640,500 700,460 670,400 C640,340 560,320 500,380 Z" 
                fill="rgba(186,230,253,0.14)" 
                stroke="rgba(224,242,254,0.3)" 
                stroke-width="2.5" 
                stroke-linejoin="round" />
          <circle cx="500" cy="620" r="5" fill="rgba(186,230,253,0.3)" />
          <circle cx="500" cy="650" r="3.5" fill="rgba(186,230,253,0.2)" />
        </g>
      </svg>
    `
  },

  "theme-royal-worship": {
    id: "theme-royal-worship",
    name: "👑 Adoração Real & Púrpura Imperial",
    textColor: "#fce7f3",
    titleAccent: "#f472b6",
    cssVariables: {
      "--bg-gradient": "linear-gradient(135deg, #180928 0%, #27103e 50%, #0e0417 100%)",
      "--text-color": "#fce7f3",
      "--title-accent": "#f472b6"
    },
    svgMarkup: `
      <svg class="w-full h-full absolute inset-0" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="crownGlow" cx="50%" cy="45%" r="40%">
            <stop offset="0%" stop-color="#f472b6" stop-opacity="0.16" />
            <stop offset="60%" stop-color="#9d174d" stop-opacity="0.05" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="1000" fill="url(#crownGlow)" />
        <g class="anim-float" transform-origin="500 450">
          <path d="M380,480 L410,380 L470,440 L500,350 L530,440 L590,380 L620,480 C600,510 400,510 380,480 Z" 
                fill="rgba(244,114,182,0.12)" 
                stroke="rgba(251,207,232,0.28)" 
                stroke-width="2" 
                stroke-linejoin="round" 
                stroke-linecap="round" />
          <circle cx="410" cy="370" r="5" fill="rgba(251,207,232,0.3)" />
          <circle cx="500" cy="340" r="6" fill="rgba(251,207,232,0.35)" />
          <circle cx="590" cy="370" r="5" fill="rgba(251,207,232,0.3)" />
        </g>
      </svg>
    `
  },

  "theme-living-water": {
    id: "theme-living-water",
    name: "🌊 Águas Vivas & Fluidez Calmante",
    textColor: "#ccfbf1",
    titleAccent: "#5eead4",
    cssVariables: {
      "--bg-gradient": "radial-gradient(circle at center, #06232d 0%, #03141b 60%, #020a0e 100%)",
      "--text-color": "#ccfbf1",
      "--title-accent": "#5eead4"
    },
    svgMarkup: `
      <svg class="w-full h-full absolute inset-0" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="waterGlow" cx="50%" cy="60%" r="50%">
            <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.16" />
            <stop offset="70%" stop-color="#0f766e" stop-opacity="0.05" />
            <stop offset="100%" stop-color="#000000" stop-opacity="0" />
          </radialGradient>
        </defs>
        <rect width="1000" height="1000" fill="url(#waterGlow)" />
        <g class="anim-wave-slow" opacity="0.6">
          <path d="M-100,580 C150,530 350,630 600,580 C850,530 1050,630 1300,580" fill="none" stroke="rgba(94,234,212,0.22)" stroke-width="3" stroke-linecap="round" />
          <path d="M-100,640 C150,600 380,690 620,640 C860,590 1080,680 1300,640" fill="none" stroke="rgba(94,234,212,0.18)" stroke-width="2.5" stroke-linecap="round" />
          <path d="M-100,700 C180,670 410,740 650,700 C890,660 1100,730 1300,700" fill="none" stroke="rgba(94,234,212,0.14)" stroke-width="2" stroke-linecap="round" />
        </g>
      </svg>
    `
  },

  "theme-night-minimal": {
    id: "theme-night-minimal",
    name: "✨ Vigília Noturna & Estrelas Minimalistas",
    textColor: "#f8fafc",
    titleAccent: "#cbd5e1",
    cssVariables: {
      "--bg-gradient": "linear-gradient(180deg, #0b0f17 0%, #030712 100%)",
      "--text-color": "#f8fafc",
      "--title-accent": "#cbd5e1"
    },
    svgMarkup: `
      <svg class="w-full h-full absolute inset-0" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <g class="anim-pulse-gentle">
          <circle cx="200" cy="180" r="2.5" fill="rgba(248,250,252,0.25)" />
          <circle cx="780" cy="220" r="2" fill="rgba(248,250,252,0.2)" />
          <circle cx="480" cy="140" r="1.5" fill="rgba(248,250,252,0.25)" />
          <circle cx="850" cy="420" r="2" fill="rgba(248,250,252,0.18)" />
          <circle cx="150" cy="480" r="2" fill="rgba(248,250,252,0.22)" />
        </g>
      </svg>
    `
  }
};