export interface GutenbergSection {
  id: string;
  title: string;
  subtitle: string;
  blockTypes: string[];
  gutenbergCode: string;
  literalTexts: string[];
}

export const TT5_CUSTOM_CSS = `/* ==========================================================================
   TWENTY TWENTY-FIVE (TT5) — ESTILOS DE GEOMETRÍA, TIPOGRAFÍA Y PALETA EXACTA
   Pegar en: Apariencia > Editor > Estilos > CSS Adicional (o en style.css del tema hijo TT5)
   ========================================================================== */

@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..900;1,9..40,100..900&family=Syne:wght@400..800&display=swap');

:root {
  --ve-background: #FCFCFA;
  --ve-surface: #FCFCFA;
  --ve-surface-dim: #F4F4F0;
  --ve-surface-container-low: #F7F7F4;
  --ve-surface-container: #EFEFEA;
  --ve-surface-container-high: #E5E5DE;
  --ve-surface-container-highest: #DDDED6;
  --ve-on-background: #1B2218;
  --ve-on-surface: #1B2218;
  --ve-on-surface-variant: #4F594C;
  --ve-primary: #2D4A22;
  --ve-on-primary: #FFFFFF;
  --ve-primary-container: #D7E6CF;
  --ve-on-primary-container: #11200D;
  --ve-secondary: #687563;
  --ve-secondary-container: #E3E9E0;
  --ve-outline: #808C7C;
  --ve-outline-variant: #D0D7CC;
  --ve-linen: #F7F6F2;
  --ve-moss-deep: #1D3216;
  --ve-lime-cta: rgb(132, 204, 22);
}

/* Reset de márgenes verticales de bloques de nivel superior en TT5 */
.wp-site-blocks > main > :first-child,
.ve-tt5-canvas > :first-child {
  margin-top: 0 !important;
}
.wp-site-blocks > main > :last-child,
.ve-tt5-canvas > :last-child {
  margin-bottom: 0 !important;
}

/* Tipografías exactas Syne & DM Sans con fallback inmediato de sistema (Arial, Helvetica) mientras descarga (display=swap) */
.ve-font-headline {
  font-family: "Syne", Arial, Helvetica, sans-serif !important;
}
.ve-font-body {
  font-family: "DM Sans", Arial, Helvetica, sans-serif !important;
}
.material-symbols-outlined {
  font-family: 'Material Symbols Outlined';
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  line-height: 1;
  text-transform: none;
  letter-spacing: normal;
  word-wrap: normal;
  white-space: nowrap;
  direction: ltr;
}

/* Contenedor máximo 7xl (1280px) alineado con el diseño original */
.ve-container-7xl {
  max-width: 80rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100%;
}
.ve-container-4xl {
  max-width: 56rem !important;
  margin-left: auto !important;
  margin-right: auto !important;
  width: 100%;
}

/* Header Fijo con Backdrop Blur */
.ve-tt5-header {
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 50;
  background-color: rgba(252, 252, 250, 0.9);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(208, 215, 204, 0.3);
}

/* Hero Grid 12 Columnas (8 + 4) */
.ve-hero-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .ve-hero-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .ve-hero-col-8 {
    grid-column: span 8 / span 8;
  }
  .ve-hero-col-4 {
    grid-column: span 4 / span 4;
    transform: translateY(7rem);
  }
}

/* Bento Grid 12 Columnas (8 + 4 y 5 + 7) */
.ve-bento-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}
@media (min-width: 768px) {
  .ve-bento-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .ve-bento-span-8 { grid-column: span 8 / span 8; }
  .ve-bento-span-4 { grid-column: span 4 / span 4; }
  .ve-bento-span-5 { grid-column: span 5 / span 5; }
  .ve-bento-span-7 { grid-column: span 7 / span 7; }
}

/* EEAT Grid 12 Columnas (5 + 7) */
.ve-eeat-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 3rem;
  align-items: center;
}
@media (min-width: 1024px) {
  .ve-eeat-grid {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }
  .ve-eeat-span-5 { grid-column: span 5 / span 5; }
  .ve-eeat-span-7 { grid-column: span 7 / span 7; }
}
.ve-credentials-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}
@media (min-width: 640px) {
  .ve-credentials-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}`;

export const TT5_THEME_JSON_SNIPPET = `{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "layout": {
      "contentSize": "896px",
      "wideSize": "1280px"
    },
    "color": {
      "palette": [
        { "slug": "background", "color": "#FCFCFA", "name": "Background" },
        { "slug": "surface-dim", "color": "#F4F4F0", "name": "Surface Dim" },
        { "slug": "surface-container-low", "color": "#F7F7F4", "name": "Surface Container Low" },
        { "slug": "surface-container", "color": "#EFEFEA", "name": "Surface Container" },
        { "slug": "surface-container-high", "color": "#E5E5DE", "name": "Surface Container High" },
        { "slug": "on-background", "color": "#1B2218", "name": "On Background" },
        { "slug": "on-surface-variant", "color": "#4F594C", "name": "On Surface Variant" },
        { "slug": "primary", "color": "#2D4A22", "name": "Primary" },
        { "slug": "primary-container", "color": "#D7E6CF", "name": "Primary Container" },
        { "slug": "on-primary-container", "color": "#11200D", "name": "On Primary Container" },
        { "slug": "outline-variant", "color": "#D0D7CC", "name": "Outline Variant" },
        { "slug": "moss-deep", "color": "#1D3216", "name": "Moss Deep" },
        { "slug": "lime-cta", "color": "#84CC16", "name": "Lime CTA" }
      ]
    },
    "typography": {
      "fontFamilies": [
        {
          "fontFamily": "\\"Syne\\", Arial, Helvetica, sans-serif",
          "name": "Syne (Headlines)",
          "slug": "syne"
        },
        {
          "fontFamily": "\\"DM Sans\\", Arial, Helvetica, sans-serif",
          "name": "DM Sans (Body & Labels)",
          "slug": "dm-sans"
        }
      ]
    }
  }
}`;

export const GUTENBERG_SECTIONS: GutenbergSection[] = [
  {
    id: 'header',
    title: '01. Header & Navegación Principal',
    subtitle: 'Template Part: header.html en Twenty Twenty-Five (TT5)',
    blockTypes: ['core/group', 'core/paragraph', 'core/buttons', 'core/button', 'core/html'],
    literalTexts: [
      'Vanesa Ezquerra',
      'Proyectos',
      'Servicios Passivhaus',
      'Consultoría',
      'Sobre Mí',
      'FAQ IA',
      'Contacto',
      'Sesión Estratégica',
      'person'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"header","align":"full","className":"ve-tt5-header sticky top-0 w-full z-50 bg-[#FCFCFA]/95 backdrop-blur-md border-b border-outline-variant/30","style":{"spacing":{"padding":{"top":"0px","bottom":"0px","left":"1.5rem","right":"1.5rem"}},"color":{"background":"#FCFCFAf2"}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<header class="wp-block-group alignfull ve-tt5-header sticky top-0 w-full z-50 bg-[#FCFCFA]/95 backdrop-blur-md border-b border-outline-variant/30 has-background" style="background-color:#FCFCFAf2;padding-top:0px;padding-right:1.5rem;padding-bottom:0px;padding-left:1.5rem">
  <!-- wp:group {"className":"h-20 lg:h-24 max-w-7xl mx-auto flex items-center justify-between gap-3","layout":{"type":"flex","flexWrap":"nowrap","justifyContent":"space-between"}} -->
  <div class="wp-block-group h-20 lg:h-24 max-w-7xl mx-auto flex items-center justify-between gap-3">
    <!-- wp:image {"width":300,"height":39,"sizeSlug":"full","linkDestination":"custom","className":"m-0 shrink-0"} -->
    <figure class="wp-block-image size-full is-resized m-0 shrink-0"><a href="#"><img src="/assets/aistudio/image_e1c48185.png" alt="Vanesa Ezquerra" width="300" height="39" style="height:34px;width:auto;object-fit:contain;mix-blend-mode:multiply;"/></a></figure>
    <!-- /wp:image -->

    <!-- wp:group {"tagName":"nav","className":"hidden lg:flex items-center gap-2","layout":{"type":"flex","flexWrap":"nowrap"}} -->
    <nav class="wp-block-group hidden lg:flex items-center gap-2">
      <!-- wp:paragraph {"className":"transition-colors bg-primary-container text-on-primary-container font-bold rounded-full px-4 py-2 text-sm m-0","style":{"color":{"background":"#D7E6CF","text":"#11200D"},"border":{"radius":"9999px"}}} -->
      <p class="transition-colors bg-primary-container text-on-primary-container font-bold rounded-full px-4 py-2 text-sm m-0 has-text-color has-background" style="border-radius:9999px;background-color:#D7E6CF;color:#11200D"><a href="#">Proyectos</a></p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0 has-text-color" style="color:#4F594C"><a href="#">Servicios Passivhaus</a></p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0 has-text-color" style="color:#4F594C"><a href="#">Consultoría</a></p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0 has-text-color" style="color:#4F594C"><a href="#">Sobre Mí</a></p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0 has-text-color" style="color:#4F594C"><a href="#">FAQ IA</a></p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container m-0 has-text-color" style="color:#4F594C"><a href="#">Contacto</a></p>
      <!-- /wp:paragraph -->
    </nav>
    <!-- /wp:group -->

    <!-- wp:group {"className":"flex items-center gap-3 sm:gap-4 shrink-0","layout":{"type":"flex","flexWrap":"nowrap"}} -->
    <div class="wp-block-group flex items-center gap-3 sm:gap-4 shrink-0">
      <!-- wp:buttons -->
      <div class="wp-block-buttons">
        <!-- wp:button {"className":"inline-flex items-center justify-center bg-primary text-on-primary font-label-md rounded-full hover:bg-moss-deep transition-all shadow-sm","style":{"color":{"background":"#2D4A22","text":"#FFFFFF"},"border":{"radius":"9999px"},"spacing":{"padding":{"top":"0.5rem","bottom":"0.5rem","left":"1rem","right":"1rem"}}}} -->
        <div class="wp-block-button inline-flex items-center justify-center bg-primary text-on-primary font-label-md rounded-full hover:bg-moss-deep transition-all shadow-sm"><a class="wp-block-button__link has-text-color has-background wp-element-button" href="#" style="border-radius:9999px;background-color:#2D4A22;color:#FFFFFF;padding-top:0.5rem;padding-right:1rem;padding-bottom:0.5rem;padding-left:1rem">Sesión Estratégica</a></div>
        <!-- /wp:button -->
      </div>
      <!-- /wp:buttons -->
      <!-- wp:html -->
      <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-container flex items-center justify-center text-primary border border-outline-variant/40" style="background-color:#D7E6CF;color:#2D4A22;border-color:rgba(208,215,204,0.4);">
        <span class="material-symbols-outlined text-[20px]">person</span>
      </div>
      <!-- /wp:html -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</header>
<!-- /wp:group -->`
  },
  {
    id: 'hero',
    title: '02. Hero Section & Quick Metrics (-90%)',
    subtitle: 'Bloque Cover / Group con Grid 12 Columnas (8 + 4 con offset en desktop)',
    blockTypes: ['core/cover', 'core/group', 'core/heading', 'core/paragraph', 'core/html'],
    literalTexts: [
      'Arquitectura Passivhaus de autor sin compromisos.',
      'Reducimos hasta un 90% el consumo energético mediante envolventes térmicas ultraeficientes, control de calidad del aire VMC y un diseño bioclimático profundamente conectado con la naturaleza.',
      'Diseña tu hogar sin facturas',
      'arrow_forward',
      'Reserva Sesión Estratégica',
      '-90%',
      'La tranquilidad de contar con una diseñadora que predice la energía que va a consumir tu vivienda antes de construirla y durante toda su vida útil, garantizando confort absoluto y bienestar para tu familia.'
    ],
    gutenbergCode: `<!-- wp:cover {"url":"/assets/aistudio/vanesa_ezquerra_arquitectura_3efeb153.webp","dimRatio":30,"overlayColor":"black","focalPoint":{"x":1,"y":0.5},"minHeight":85,"minHeightUnit":"vh","align":"full","className":"relative lg:min-h-[85vh] flex items-center justify-center px-6 lg:px-12 py-12 lg:py-16 overflow-hidden","style":{"spacing":{"padding":{"top":"3rem","bottom":"3rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<div class="wp-block-cover alignfull relative lg:min-h-[85vh] flex items-center justify-center px-6 lg:px-12 py-12 lg:py-16 overflow-hidden" style="padding-top:3rem;padding-right:1.5rem;padding-bottom:3rem;padding-left:1.5rem;min-height:85vh">
  <span aria-hidden="true" class="wp-block-cover__background has-black-background-color has-background-dim-30 has-background-dim" style="background:linear-gradient(90deg, rgba(0,0,0,0.68) 0%, rgba(0,0,0,0.42) 52%, rgba(0,0,0,0.12) 100%);"></span>
  <img class="wp-block-cover__image-background" alt="Vanesa Ezquerra Arquitectura Passivhaus" src="/assets/aistudio/vanesa_ezquerra_arquitectura_3efeb153.webp" width="1900" height="1051" style="object-position:100% 50%" data-object-fit="cover" data-object-position="100% 50%"/>
  <div class="wp-block-cover__inner-container">
    <!-- wp:group {"className":"max-w-7xl mx-auto w-full ve-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10","layout":{"type":"default"}} -->
    <div class="wp-block-group max-w-7xl mx-auto w-full ve-hero-grid grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
      <!-- wp:group {"className":"lg:col-span-8 ve-hero-col-8 space-y-5 sm:space-y-6","layout":{"type":"default"}} -->
      <div class="wp-block-group lg:col-span-8 ve-hero-col-8 space-y-5 sm:space-y-6">
        <!-- wp:heading {"level":1,"className":"ve-font-headline font-headline-xl text-4xl sm:text-6xl lg:text-7xl text-white drop-shadow-md tracking-tight font-extrabold leading-[1.08] relative z-10","style":{"typography":{"fontWeight":"800","lineHeight":"1.08","letterSpacing":"-0.025em"},"color":{"text":"#FFFFFF"}}} -->
        <h1 class="wp-block-heading ve-font-headline font-headline-xl text-4xl sm:text-6xl lg:text-7xl text-white drop-shadow-md tracking-tight font-extrabold leading-[1.08] relative z-10 has-text-color" style="color:#FFFFFF;font-weight:800;letter-spacing:-0.025em;line-height:1.08">Arquitectura Passivhaus de autor <span class="text-primary-container italic font-normal" style="color:#D7E6CF;font-style:italic;font-weight:400;">sin compromisos.</span></h1>
        <!-- /wp:heading -->

        <!-- wp:paragraph {"className":"ve-font-body font-body-lg text-gray-100 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed relative z-10","style":{"color":{"text":"#F3F4F6"},"typography":{"lineHeight":"1.625"}}} -->
        <p class="ve-font-body font-body-lg text-gray-100 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed relative z-10 has-text-color" style="color:#F3F4F6;line-height:1.625">Reducimos hasta un 90% el consumo energético mediante envolventes térmicas ultraeficientes, control de calidad del aire VMC y un diseño bioclimático profundamente conectado con la naturaleza.</p>
        <!-- /wp:paragraph -->

        <!-- wp:html -->
        <div class="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
          <a class="bg-primary text-on-primary font-label-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-moss-deep transition-all flex items-center gap-3 shadow-lg shadow-primary/10" href="#" style="background-color: rgb(132, 204, 22); color: rgb(0, 0, 0); border-radius: 1rem; padding: 0.875rem 1.75rem; text-decoration: none; font-family: 'DM Sans', sans-serif;">
            <span class="">Diseña tu hogar sin facturas</span>
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
          <a class="bg-primary text-on-primary font-label-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-moss-deep transition-all shadow-lg shadow-primary/10" href="#" style="background-color: rgb(132, 204, 22); color: rgb(0, 0, 0); border-radius: 1rem; padding: 0.875rem 1.75rem; text-decoration: none; font-family: 'DM Sans', sans-serif;">Reserva Sesión Estratégica</a>
        </div>
        <!-- /wp:html -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"className":"lg:col-span-4 ve-hero-col-4 flex flex-col justify-between lg:translate-y-12","style":{"spacing":{"padding":{"top":"0px","bottom":"0px"}}},"layout":{"type":"default"}} -->
      <div class="wp-block-group lg:col-span-4 ve-hero-col-4 flex flex-col justify-between lg:translate-y-12" style="padding-top:0px;padding-bottom:0px;">
        <!-- wp:group {"className":"bg-surface-container-low/80 backdrop-blur-md p-5 sm:p-7 rounded-[2rem] border border-outline-variant/40 relative overflow-hidden group hover:border-primary/40 transition-all shadow-sm grid grid-cols-12 items-center gap-3 sm:gap-4 lg:flex lg:flex-col lg:items-start lg:gap-3","style":{"color":{"background":"#F7F7F4cc"},"border":{"radius":"2rem","width":"1px","color":"#D0D7CC66"},"spacing":{"padding":{"top":"1.5rem","bottom":"1.5rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"default"}} -->
        <div class="wp-block-group bg-surface-container-low/80 backdrop-blur-md p-5 sm:p-7 rounded-[2rem] border border-outline-variant/40 relative overflow-hidden group hover:border-primary/40 transition-all shadow-sm grid grid-cols-12 items-center gap-3 sm:gap-4 lg:flex lg:flex-col lg:items-start lg:gap-3 has-border-color has-background" style="border-color:#D0D7CC66;border-width:1px;border-radius:2rem;background-color:rgba(247,247,244,0.8);padding-top:1.5rem;padding-right:1.5rem;padding-bottom:1.5rem;padding-left:1.5rem">
          <!-- wp:paragraph {"className":"col-span-3 lg:w-full ve-font-headline text-2xl sm:text-3xl xl:text-5xl font-headline-lg text-primary font-bold leading-none border-r lg:border-r-0 lg:border-b border-outline-variant/60 pr-2.5 lg:pr-0 lg:pb-3 m-0","style":{"color":{"text":"#2D4A22"},"typography":{"fontWeight":"700"}}} -->
          <p class="col-span-3 lg:w-full ve-font-headline text-2xl sm:text-3xl xl:text-5xl font-headline-lg text-primary font-bold leading-none border-r lg:border-r-0 lg:border-b border-outline-variant/60 pr-2.5 lg:pr-0 lg:pb-3 m-0 has-text-color" style="color:#2D4A22;font-weight:700">-90%</p>
          <!-- /wp:paragraph -->
          <!-- wp:paragraph {"className":"col-span-9 lg:w-full ve-font-body font-body-lg text-on-surface text-[16px] sm:text-[18px] font-normal leading-snug relative z-10 m-0","style":{"color":{"text":"#1B2218"}}} -->
          <p class="col-span-9 lg:w-full ve-font-body font-body-lg text-on-surface text-[16px] sm:text-[18px] font-normal leading-snug relative z-10 m-0 has-text-color" style="color:#1B2218">La tranquilidad de contar con una diseñadora que predice la energía que va a consumir tu vivienda antes de construirla y durante toda su vida útil, garantizando confort absoluto y bienestar para tu familia.</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
  </div>
</div>
<!-- /wp:cover -->`
  },
  {
    id: 'bento',
    title: '03. Bento Grid: Propuesta de Valor & Servicios',
    subtitle: 'Sección con cabecera flex y Bento Grid de 12 columnas (8+4 y 5+7)',
    blockTypes: ['core/group', 'core/heading', 'core/paragraph', 'core/html'],
    literalTexts: [
      'Metodología & Excelencia',
      'Propuesta de Valor & Servicios',
      'Una simbiosis perfecta entre rigor científico Passivhaus, estética orgánica y tecnología de vanguardia BIM.',
      '01 / Certificación Oficial',
      'verified',
      'Arquitectura Passivhaus Certificada',
      'Hasta un 90% menos de energía respecto a la normativa estándar. Incorpora renovación de aire continuo mediante sistema VMC con filtrado antipolen y antipartículas para una salud óptima.',
      '02 / BIM & 3D',
      'view_in_ar',
      'Diseño de Autor & BIM',
      'Visualización 3D fotorrealista y gemelo digital para comunicación total con el cliente y control absoluto de presupuestos sin sorpresas en obra.',
      '03 / Materiales',
      'architecture',
      'Sistemas Constructivos Avanzados',
      'Optimización estructural mediante entramado ligero de madera, CLT, Termoarcilla o Steel Framing. Sostenibilidad de ciclo de vida cero carbono.',
      '04 / Boutique Studio',
      'lock_person',
      'Acompañamiento Exclusivo (Cupo Limitado)',
      'Solo aceptamos 2 proyectos al mes para garantizar supervisión directa en obra, dirección facultativa rigurosa y formación continua de gremios especializados.'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"section","align":"full","className":"py-24 px-6 lg:px-12 bg-surface-dim","style":{"color":{"background":"#F4F4F0"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<section class="wp-block-group alignfull py-24 px-6 lg:px-12 bg-surface-dim has-background" style="background-color:#F4F4F0;padding-top:6rem;padding-right:1.5rem;padding-bottom:6rem;padding-left:1.5rem">
  <!-- wp:group {"className":"max-w-7xl mx-auto space-y-12","layout":{"type":"default"}} -->
  <div class="wp-block-group max-w-7xl mx-auto space-y-12">
    <!-- wp:group {"className":"flex flex-col md:flex-row md:items-end justify-between gap-6","layout":{"type":"flex","flexWrap":"wrap","justifyContent":"space-between","verticalAlignment":"bottom"}} -->
    <div class="wp-block-group flex flex-col md:flex-row md:items-end justify-between gap-6">
      <!-- wp:group {"className":"space-y-3","layout":{"type":"default"}} -->
      <div class="wp-block-group space-y-3">
        <!-- wp:paragraph {"className":"font-label-md text-primary uppercase tracking-widest font-semibold m-0","style":{"color":{"text":"#2D4A22"},"typography":{"textTransform":"uppercase","letterSpacing":"0.1em","fontWeight":"600"}}} -->
        <p class="font-label-md text-primary uppercase tracking-widest font-semibold m-0 has-text-color" style="color:#2D4A22;font-weight:600;letter-spacing:0.1em;text-transform:uppercase">Metodología &amp; Excelencia</p>
        <!-- /wp:paragraph -->
        <!-- wp:heading {"level":2,"className":"ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold m-0","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
        <h2 class="wp-block-heading ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold m-0 has-text-color" style="color:#1D3216;font-weight:700">Propuesta de Valor &amp; Servicios</h2>
        <!-- /wp:heading -->
      </div>
      <!-- /wp:group -->
      <!-- wp:paragraph {"className":"font-body-md text-on-surface-variant max-w-md m-0","style":{"color":{"text":"#4F594C"}}} -->
      <p class="font-body-md text-on-surface-variant max-w-md m-0 has-text-color" style="color:#4F594C">Una simbiosis perfecta entre rigor científico Passivhaus, estética orgánica y tecnología de vanguardia BIM.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"className":"ve-bento-grid grid grid-cols-1 md:grid-cols-12 gap-6","layout":{"type":"default"}} -->
    <div class="wp-block-group ve-bento-grid grid grid-cols-1 md:grid-cols-12 gap-6">
      <!-- wp:group {"className":"md:col-span-8 ve-bento-span-8 bg-surface-container-low p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm","style":{"color":{"background":"#F7F7F4"},"border":{"radius":"2.5rem","width":"1px","color":"#D0D7CC66"},"spacing":{"padding":{"top":"2.5rem","bottom":"2.5rem","left":"2.5rem","right":"2.5rem"}}},"layout":{"type":"default"}} -->
      <div class="wp-block-group md:col-span-8 ve-bento-span-8 bg-surface-container-low p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm has-border-color has-background" style="border-color:#D0D7CC66;border-width:1px;border-radius:2.5rem;background-color:#F7F7F4;padding-top:2.5rem;padding-right:2.5rem;padding-bottom:2.5rem;padding-left:2.5rem">
        <!-- wp:html -->
        <div class="absolute inset-0 bg-cover bg-center opacity-95 group-hover:scale-[1.02] transition-transform duration-700" style="background-image: url(&quot;https://lh3.googleusercontent.com/aida-public/AB6AXuCHYRpQba6y-RtflXPQR_gtBy8lU6R1zUwyKo_BqaeNbd6MIeOFbXbxTBX5N7Eao0KbcJNh0dD371pJ2pBXe7FijEbbgAg4D8Y-si_o9yL8EM_TZA46v8SO3f3NQa-xeq3kJG8581LfWXt6c-W0HfmdgGss5xN9zjvfhJglOcnYarSxMgfMLSgDt4xe-mVNWDJ5fCWafQQvJCi9FurgVegkBI1TUrohWhaPfxLlL9UncjhtbxP10Ibv&quot;);"></div>
        <div class="absolute inset-0 pointer-events-none" style="background: linear-gradient(to top, rgba(247, 247, 244, 0.92) 0%, rgba(247, 247, 244, 0.82) 33%, rgba(247, 247, 244, 0) 45%);"></div>
        <div class="relative z-10 flex justify-between items-start">
          <span class="px-4 py-1.5 rounded-full bg-surface-container-low/85 backdrop-blur-sm text-primary font-label-md font-semibold">01 / Certificación Oficial</span>
          <span class="material-symbols-outlined text-primary text-3xl drop-shadow-sm">verified</span>
        </div>
        <!-- /wp:html -->
        <!-- wp:group {"className":"relative z-10 pt-32 space-y-2","layout":{"type":"default"}} -->
        <div class="wp-block-group relative z-10 pt-32 space-y-2">
          <!-- wp:heading {"level":3,"className":"ve-font-headline font-headline-md text-2xl text-moss-deep font-bold","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
          <h3 class="wp-block-heading ve-font-headline font-headline-md text-2xl text-moss-deep font-bold has-text-color" style="color:#1D3216;font-weight:700">Arquitectura Passivhaus Certificada</h3>
          <!-- /wp:heading -->
          <!-- wp:paragraph {"className":"font-body-md text-on-surface-variant max-w-xl","style":{"color":{"text":"#4F594C"}}} -->
          <p class="font-body-md text-on-surface-variant max-w-xl has-text-color" style="color:#4F594C">Hasta un 90% menos de energía respecto a la normativa estándar. Incorpora renovación de aire continuo mediante sistema VMC con filtrado antipolen y antipartículas para una salud óptima.</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"className":"md:col-span-4 ve-bento-span-4 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm text-white","style":{"border":{"radius":"2.5rem","width":"1px","color":"#D0D7CC66"},"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"2rem","right":"2rem"}}},"layout":{"type":"default"}} -->
      <div class="wp-block-group md:col-span-4 ve-bento-span-4 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm text-white has-border-color" style="border-color:#D0D7CC66;border-width:1px;border-radius:2.5rem;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem;background-image:url('https://lh3.googleusercontent.com/aida-public/AB6AXuBzf-sjUpSU2tiUwCu9gRiuuFh2DvgrAHfX8p6dGT95HfzGqu5RsTq8ZJ9BUT1DIVzXRAMC8ubTjjTlkHLfYDv7JyxiPCKGvt1E_fuVkGO0QejqgOmn-kHmBHPgAOYY1LqAJHXu0IY0ItokfeIgJdShsKsgd6ItsLk-PqPlihaa0TK0QmfUoS_F2xJHAYCYTsXJLHk4FklIt5onrQRrmKnVoQZ_Y9OwGsb5qsp0Zgn7Brqd3kcH5fKd-KkS0qrr5Hn3ug');background-size:cover;background-position:center center;">
        <!-- wp:html -->
        <div class="absolute inset-0 bg-black/60 z-0"></div>
        <div class="relative z-10 flex justify-between items-start">
          <span class="px-4 py-1.5 rounded-full bg-surface-container-high/80 text-on-surface font-label-md">02 / BIM &amp; 3D</span>
          <span class="material-symbols-outlined text-primary text-2xl">view_in_ar</span>
        </div>
        <!-- /wp:html -->
        <!-- wp:group {"className":"relative z-10 py-8","layout":{"type":"default"}} -->
        <div class="wp-block-group relative z-10 py-8">
          <!-- wp:heading {"level":3,"className":"ve-font-headline font-headline-sm text-xl text-white font-bold mb-2","style":{"color":{"text":"#FFFFFF"},"typography":{"fontWeight":"700"}}} -->
          <h3 class="wp-block-heading ve-font-headline font-headline-sm text-xl text-white font-bold mb-2 has-text-color" style="color:#FFFFFF;font-weight:700">Diseño de Autor &amp; BIM</h3>
          <!-- /wp:heading -->
          <!-- wp:paragraph {"className":"font-body-sm text-gray-200","style":{"color":{"text":"#E5E7EB"}}} -->
          <p class="font-body-sm text-gray-200 has-text-color" style="color:#E5E7EB">Visualización 3D fotorrealista y gemelo digital para comunicación total con el cliente y control absoluto de presupuestos sin sorpresas en obra.</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"className":"md:col-span-5 ve-bento-span-5 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm","style":{"color":{"background":"#F7F7F4"},"border":{"radius":"2.5rem","width":"1px","color":"#D0D7CC66"},"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"2rem","right":"2rem"}}},"layout":{"type":"default"}} -->
      <div class="wp-block-group md:col-span-5 ve-bento-span-5 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm has-border-color has-background" style="border-color:#D0D7CC66;border-width:1px;border-radius:2.5rem;background-color:#F7F7F4;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem">
        <!-- wp:html -->
        <div class="relative z-10 flex justify-between items-start">
          <span class="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md">03 / Materiales</span>
          <span class="material-symbols-outlined text-primary text-2xl">architecture</span>
        </div>
        <!-- /wp:html -->
        <!-- wp:group {"className":"relative z-10 py-8","layout":{"type":"default"}} -->
        <div class="wp-block-group relative z-10 py-8">
          <!-- wp:heading {"level":3,"className":"ve-font-headline font-headline-sm text-xl text-moss-deep font-bold mb-2","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
          <h3 class="wp-block-heading ve-font-headline font-headline-sm text-xl text-moss-deep font-bold mb-2 has-text-color" style="color:#1D3216;font-weight:700">Sistemas Constructivos Avanzados</h3>
          <!-- /wp:heading -->
          <!-- wp:paragraph {"className":"font-body-sm text-on-surface-variant","style":{"color":{"text":"#4F594C"}}} -->
          <p class="font-body-sm text-on-surface-variant has-text-color" style="color:#4F594C">Optimización estructural mediante entramado ligero de madera, CLT, Termoarcilla o Steel Framing. Sostenibilidad de ciclo de vida cero carbono.</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->

      <!-- wp:group {"className":"md:col-span-7 ve-bento-span-7 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-primary/30 shadow-sm","style":{"color":{"background":"#F7F7F4"},"border":{"radius":"2.5rem","width":"1px","color":"#2D4A224d"},"spacing":{"padding":{"top":"2rem","bottom":"2rem","left":"2rem","right":"2rem"}}},"layout":{"type":"default"}} -->
      <div class="wp-block-group md:col-span-7 ve-bento-span-7 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-primary/30 shadow-sm has-border-color has-background" style="border-color:#2D4A224d;border-width:1px;border-radius:2.5rem;background-color:#F7F7F4;padding-top:2rem;padding-right:2rem;padding-bottom:2rem;padding-left:2rem">
        <!-- wp:html -->
        <div class="absolute inset-0 bg-primary-container/20 pointer-events-none"></div>
        <div class="relative z-10 flex justify-between items-start">
          <span class="px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md font-bold">04 / Boutique Studio</span>
          <span class="material-symbols-outlined text-primary text-2xl">lock_person</span>
        </div>
        <!-- /wp:html -->
        <!-- wp:group {"className":"relative z-10 py-8 space-y-2","layout":{"type":"default"}} -->
        <div class="wp-block-group relative z-10 py-8 space-y-2">
          <!-- wp:heading {"level":3,"className":"ve-font-headline font-headline-sm text-xl text-moss-deep font-bold","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
          <h3 class="wp-block-heading ve-font-headline font-headline-sm text-xl text-moss-deep font-bold has-text-color" style="color:#1D3216;font-weight:700">Acompañamiento Exclusivo (Cupo Limitado)</h3>
          <!-- /wp:heading -->
          <!-- wp:paragraph {"className":"font-body-sm text-on-surface-variant","style":{"color":{"text":"#4F594C"}}} -->
          <p class="font-body-sm text-on-surface-variant has-text-color" style="color:#4F594C">Solo aceptamos <strong class="text-primary font-semibold">2 proyectos al mes</strong> para garantizar supervisión directa en obra, dirección facultativa rigurosa y formación continua de gremios especializados.</p>
          <!-- /wp:paragraph -->
        </div>
        <!-- /wp:group -->
      </div>
      <!-- /wp:group -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->`
  },
  {
    id: 'autoridad',
    title: '04. Autoridad Técnica & Credenciales (EEAT)',
    subtitle: 'Sección 12 columnas (5 narrativa + métricas y 7 grid de 6 credenciales)',
    blockTypes: ['core/group', 'core/heading', 'core/paragraph', 'core/html'],
    literalTexts: [
      'Autoridad Técnica & Credenciales',
      'Rigor certificado respaldado por instituciones líderes.',
      'Vanesa Ezquerra encabeza una nueva generación de arquitectas enfocadas en la descarbonización y el bienestar humano, combinando la titulación oficial Passivhaus Designer con un profundo dominio de la rehabilitación energética avanzada.',
      '15+',
      'Años de experiencia proyectando',
      '100%',
      'Blower door test superados',
      'Passivhaus Designer',
      'PHI Germany',
      'Master Rehabilitación',
      'Eficiencia Energética',
      'GBCe & IPHA',
      'Socia Titular',
      'AESCAI',
      'Calidad de Aire Interior',
      'RNE & Onda Cero',
      'Divulgación y Medios',
      'El Norte de Castilla',
      'Prensa Especializada'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"section","align":"full","className":"py-24 px-6 lg:px-12 bg-background","style":{"color":{"background":"#FCFCFA"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<section class="wp-block-group alignfull py-24 px-6 lg:px-12 bg-background has-background" style="background-color:#FCFCFA;padding-top:6rem;padding-right:1.5rem;padding-bottom:6rem;padding-left:1.5rem">
  <!-- wp:group {"className":"max-w-7xl mx-auto ve-eeat-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center","layout":{"type":"default"}} -->
  <div class="wp-block-group max-w-7xl mx-auto ve-eeat-grid grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <!-- wp:group {"className":"lg:col-span-5 ve-eeat-span-5 space-y-6","layout":{"type":"default"}} -->
    <div class="wp-block-group lg:col-span-5 ve-eeat-span-5 space-y-6">
      <!-- wp:paragraph {"className":"font-label-md text-primary uppercase tracking-widest font-semibold","style":{"color":{"text":"#2D4A22"},"typography":{"textTransform":"uppercase","letterSpacing":"0.1em","fontWeight":"600"}}} -->
      <p class="font-label-md text-primary uppercase tracking-widest font-semibold has-text-color" style="color:#2D4A22;font-weight:600;letter-spacing:0.1em;text-transform:uppercase">Autoridad Técnica &amp; Credenciales</p>
      <!-- /wp:paragraph -->
      <!-- wp:heading {"level":2,"className":"ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
      <h2 class="wp-block-heading ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold has-text-color" style="color:#1D3216;font-weight:700">Rigor certificado respaldado por instituciones líderes.</h2>
      <!-- /wp:heading -->
      <!-- wp:paragraph {"className":"font-body-md text-on-surface-variant leading-relaxed","style":{"color":{"text":"#4F594C"}}} -->
      <p class="font-body-md text-on-surface-variant leading-relaxed has-text-color" style="color:#4F594C">Vanesa Ezquerra encabeza una nueva generación de arquitectas enfocadas en la descarbonización y el bienestar humano, combinando la titulación oficial Passivhaus Designer con un profundo dominio de la rehabilitación energética avanzada.</p>
      <!-- /wp:paragraph -->
      <!-- wp:html -->
      <div class="grid grid-cols-2 gap-4 pt-2">
        <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
          <div class="text-3xl font-headline-md text-primary font-bold">15+</div>
          <p class="text-body-sm text-on-surface-variant mt-1">Años de experiencia proyectando</p>
        </div>
        <div class="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
          <div class="text-3xl font-headline-md text-moss-deep font-bold">100%</div>
          <p class="text-body-sm text-on-surface-variant mt-1">Blower door test superados</p>
        </div>
      </div>
      <!-- /wp:html -->
    </div>
    <!-- /wp:group -->

    <!-- wp:group {"className":"lg:col-span-7 ve-eeat-span-7 ve-credentials-grid grid grid-cols-2 sm:grid-cols-3 gap-4","layout":{"type":"default"}} -->
    <div class="wp-block-group lg:col-span-7 ve-eeat-span-7 ve-credentials-grid grid grid-cols-2 sm:grid-cols-3 gap-4">
      <!-- wp:html -->
      <div class="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
        <span class="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
        <span class="font-headline-sm text-sm text-moss-deep font-bold">Passivhaus Designer</span>
        <span class="text-body-sm text-on-surface-variant text-xs">PHI Germany</span>
      </div>
      <div class="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
        <span class="material-symbols-outlined text-primary text-3xl">school</span>
        <span class="font-headline-sm text-sm text-moss-deep font-bold">Master Rehabilitación</span>
        <span class="text-body-sm text-on-surface-variant text-xs">Eficiencia Energética</span>
      </div>
      <div class="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
        <span class="material-symbols-outlined text-primary text-3xl">groups</span>
        <span class="font-headline-sm text-sm text-moss-deep font-bold">GBCe &amp; IPHA</span>
        <span class="text-body-sm text-on-surface-variant text-xs">Socia Titular</span>
      </div>
      <div class="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
        <span class="material-symbols-outlined text-primary text-3xl">podium</span>
        <span class="font-headline-sm text-sm text-moss-deep font-bold">AESCAI</span>
        <span class="text-body-sm text-on-surface-variant text-xs">Calidad de Aire Interior</span>
      </div>
      <div class="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
        <span class="material-symbols-outlined text-primary text-3xl">mic</span>
        <span class="font-headline-sm text-sm text-moss-deep font-bold">RNE &amp; Onda Cero</span>
        <span class="text-body-sm text-on-surface-variant text-xs">Divulgación y Medios</span>
      </div>
      <div class="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
        <span class="material-symbols-outlined text-primary text-3xl">newspaper</span>
        <span class="font-headline-sm text-sm text-moss-deep font-bold">El Norte de Castilla</span>
        <span class="text-body-sm text-on-surface-variant text-xs">Prensa Especializada</span>
      </div>
      <!-- /wp:html -->
    </div>
    <!-- /wp:group -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->`
  },
  {
    id: 'faq',
    title: '05. Preguntas Frecuentes sobre Passivhaus (2 Columnas Acordeón — 6 Preguntas)',
    subtitle: 'Rejilla de 2 columnas con 6 bloques acordeón desplegables a petición del usuario',
    blockTypes: ['core/group', 'core/columns', 'core/column', 'core/details', 'core/heading', 'core/paragraph'],
    literalTexts: [
      'Claridad & Confianza para tu Proyecto',
      'Preguntas Frecuentes sobre Passivhaus',
      'Resolvemos de forma clara y cercana las dudas más habituales antes de diseñar y construir tu vivienda saludable de consumo casi nulo.',
      'Q. ¿Cuánto se ahorra realmente en una casa Passivhaus diseñada por Vanesa Ezquerra?',
      'El ahorro en calefacción y refrigeración alcanza hasta el 90% en comparación con una vivienda convencional construida bajo código técnico estándar. El consumo anual suele reducirse a menos de 15 kWh/m²a.',
      'Q. ¿Qué es el Test Blower Door y por qué es obligatorio?',
      'Es la prueba de estanqueidad al aire que mide las infiltraciones parásitas en la envolvente. Para obtener la certificación oficial del Passivhaus Institute, la renovación de aire a 50 Pascales de presión no debe superar n50 ≤ 0.6 h⁻¹.',
      'Q. ¿Cómo se respira aire puro sin abrir las ventanas en invierno?',
      'Mediante un sistema de ventilación mecánica controlada (VMC) de doble flujo con recuperador de calor de alta eficiencia (>85%). El aire viciado se extrae mientras se introduce aire nuevo filtrado de polen, polvo y CO₂, precalentado o enfriado de forma pasiva.',
      'Q. ¿Se puede construir una casa Passivhaus con estructura de madera o CLT?',
      'Sí. De hecho, los sistemas constructivos en entramado ligero de madera o paneles CLT (Cross Laminated Timber) combinan a la perfección con la filosofía Passivhaus debido a su baja huella de carbono, rapidez de ejecución y excelente comportamiento térmico.',
      'Q. ¿Cuánto tiempo se tarda en diseñar y construir una vivienda Passivhaus?',
      'El proceso completo suele oscilar entre 12 y 16 meses: de 4 a 6 meses para el diseño personalizado, simulación energética y licencias, y entre 6 y 10 meses de ejecución en obra gracias a sistemas constructivos de alta precisión.',
      'Q. ¿Es más cara una casa Passivhaus que una vivienda tradicional?',
      'La inversión inicial supone entre un 5% y un 8% adicional respecto a una construcción estándar, pero se amortiza desde el primer día gracias al ahorro del 90% en facturas, mayor confort y la revalorización patrimonial del inmueble.'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"section","align":"full","className":"py-24 px-6 lg:px-12 bg-surface-dim","style":{"color":{"background":"#F4F4F0"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<section class="wp-block-group alignfull py-24 px-6 lg:px-12 bg-surface-dim has-background" style="background-color:#F4F4F0;padding-top:6rem;padding-right:1.5rem;padding-bottom:6rem;padding-left:1.5rem">
  <!-- wp:group {"className":"max-w-7xl mx-auto space-y-10","layout":{"type":"default"}} -->
  <div class="wp-block-group max-w-7xl mx-auto space-y-10">
    <!-- wp:group {"className":"text-center space-y-3","layout":{"type":"default"}} -->
    <div class="wp-block-group text-center space-y-3">
      <!-- wp:paragraph {"align":"center","className":"font-label-md text-primary uppercase tracking-widest font-semibold","style":{"color":{"text":"#2D4A22"},"typography":{"textTransform":"uppercase","letterSpacing":"0.1em","fontWeight":"600"}}} -->
      <p class="has-text-align-center font-label-md text-primary uppercase tracking-widest font-semibold has-text-color" style="color:#2D4A22;font-weight:600;letter-spacing:0.1em;text-transform:uppercase">Claridad &amp; Confianza para tu Proyecto</p>
      <!-- /wp:paragraph -->
      <!-- wp:heading {"textAlign":"center","level":2,"className":"ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
      <h2 class="wp-block-heading has-text-align-center ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold has-text-color" style="color:#1D3216;font-weight:700">Preguntas Frecuentes sobre Passivhaus</h2>
      <!-- /wp:heading -->
      <!-- wp:paragraph {"align":"center","className":"font-body-md text-on-surface-variant max-w-2xl mx-auto","style":{"color":{"text":"#4F594C"}}} -->
      <p class="has-text-align-center font-body-md text-on-surface-variant max-w-2xl mx-auto has-text-color" style="color:#4F594C">Resolvemos de forma clara y cercana las dudas más habituales antes de diseñar y construir tu vivienda saludable de consumo casi nulo.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:group -->

    <!-- wp:html -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      <details class="group bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm transition-all">
        <summary class="font-headline-sm text-lg text-moss-deep font-bold flex items-start justify-between gap-4 cursor-pointer list-none">
          <span class="flex items-start gap-3">
            <span class="text-primary font-bold shrink-0">Q.</span>
            <span>¿Cuánto se ahorra realmente en una casa Passivhaus diseñada por Vanesa Ezquerra?</span>
          </span>
          <span class="material-symbols-outlined text-primary transition-transform duration-200 group-open:rotate-180 shrink-0 mt-0.5">expand_more</span>
        </summary>
        <p class="font-body-md text-on-surface-variant pl-7 pt-4 leading-relaxed border-t border-outline-variant/30 mt-4">
          El ahorro en calefacción y refrigeración alcanza hasta el <strong class="text-moss-deep font-semibold">90% en comparación con una vivienda convencional</strong> construida bajo código técnico estándar. El consumo anual suele reducirse a menos de 15 kWh/m²a.
        </p>
      </details>

      <details class="group bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm transition-all">
        <summary class="font-headline-sm text-lg text-moss-deep font-bold flex items-start justify-between gap-4 cursor-pointer list-none">
          <span class="flex items-start gap-3">
            <span class="text-primary font-bold shrink-0">Q.</span>
            <span>¿Qué es el Test Blower Door y por qué es obligatorio?</span>
          </span>
          <span class="material-symbols-outlined text-primary transition-transform duration-200 group-open:rotate-180 shrink-0 mt-0.5">expand_more</span>
        </summary>
        <p class="font-body-md text-on-surface-variant pl-7 pt-4 leading-relaxed border-t border-outline-variant/30 mt-4">
          Es la prueba de estanqueidad al aire que mide las infiltraciones parásitas en la envolvente. Para obtener la certificación oficial del Passivhaus Institute, la renovación de aire a 50 Pascales de presión no debe superar n50 ≤ 0.6 h⁻¹.
        </p>
      </details>

      <details class="group bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm transition-all">
        <summary class="font-headline-sm text-lg text-moss-deep font-bold flex items-start justify-between gap-4 cursor-pointer list-none">
          <span class="flex items-start gap-3">
            <span class="text-primary font-bold shrink-0">Q.</span>
            <span>¿Cómo se respira aire puro sin abrir las ventanas en invierno?</span>
          </span>
          <span class="material-symbols-outlined text-primary transition-transform duration-200 group-open:rotate-180 shrink-0 mt-0.5">expand_more</span>
        </summary>
        <p class="font-body-md text-on-surface-variant pl-7 pt-4 leading-relaxed border-t border-outline-variant/30 mt-4">
          Mediante un sistema de ventilación mecánica controlada (VMC) de doble flujo con recuperador de calor de alta eficiencia (&gt;85%). El aire viciado se extrae mientras se introduce aire nuevo filtrado de polen, polvo y CO₂, precalentado o enfriado de forma pasiva.
        </p>
      </details>

      <details class="group bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm transition-all">
        <summary class="font-headline-sm text-lg text-moss-deep font-bold flex items-start justify-between gap-4 cursor-pointer list-none">
          <span class="flex items-start gap-3">
            <span class="text-primary font-bold shrink-0">Q.</span>
            <span>¿Se puede construir una casa Passivhaus con estructura de madera o CLT?</span>
          </span>
          <span class="material-symbols-outlined text-primary transition-transform duration-200 group-open:rotate-180 shrink-0 mt-0.5">expand_more</span>
        </summary>
        <p class="font-body-md text-on-surface-variant pl-7 pt-4 leading-relaxed border-t border-outline-variant/30 mt-4">
          Sí. De hecho, los sistemas constructivos en entramado ligero de madera o paneles CLT (Cross Laminated Timber) combinan a la perfección con la filosofía Passivhaus debido a su baja huella de carbono, rapidez de ejecución y excelente comportamiento térmico.
        </p>
      </details>

      <details class="group bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm transition-all">
        <summary class="font-headline-sm text-lg text-moss-deep font-bold flex items-start justify-between gap-4 cursor-pointer list-none">
          <span class="flex items-start gap-3">
            <span class="text-primary font-bold shrink-0">Q.</span>
            <span>¿Cuánto tiempo se tarda en diseñar y construir una vivienda Passivhaus?</span>
          </span>
          <span class="material-symbols-outlined text-primary transition-transform duration-200 group-open:rotate-180 shrink-0 mt-0.5">expand_more</span>
        </summary>
        <p class="font-body-md text-on-surface-variant pl-7 pt-4 leading-relaxed border-t border-outline-variant/30 mt-4">
          El proceso completo suele oscilar entre 12 y 16 meses: de 4 a 6 meses para el diseño personalizado, simulación energética y licencias, y entre 6 y 10 meses de ejecución en obra gracias a sistemas constructivos de alta precisión.
        </p>
      </details>

      <details class="group bg-surface-container-low p-6 sm:p-8 rounded-3xl border border-outline-variant/40 shadow-sm transition-all">
        <summary class="font-headline-sm text-lg text-moss-deep font-bold flex items-start justify-between gap-4 cursor-pointer list-none">
          <span class="flex items-start gap-3">
            <span class="text-primary font-bold shrink-0">Q.</span>
            <span>¿Es más cara una casa Passivhaus que una vivienda tradicional?</span>
          </span>
          <span class="material-symbols-outlined text-primary transition-transform duration-200 group-open:rotate-180 shrink-0 mt-0.5">expand_more</span>
        </summary>
        <p class="font-body-md text-on-surface-variant pl-7 pt-4 leading-relaxed border-t border-outline-variant/30 mt-4">
          La inversión inicial supone entre un 5% y un 8% adicional respecto a una construcción estándar, pero se amortiza desde el primer día gracias al ahorro del 90% en facturas, mayor confort y la revalorización patrimonial del inmueble.
        </p>
      </details>
    </div>
    <!-- /wp:html -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->`
  },
  {
    id: 'testimonios',
    title: '06. Testimonios Seleccionados',
    subtitle: 'Bloque Columns (2 columnas iguales) con tarjetas rounded-[2.5rem]',
    blockTypes: ['core/group', 'core/columns', 'core/column', 'core/heading', 'core/paragraph', 'core/html'],
    literalTexts: [
      'Testimonios Seleccionados',
      'Lo que experimentan quienes ya habitan el futuro.',
      '"Caliento 150m² con tan solo 2 radiadores toalleros en los baños. El confort térmico constante en todas las habitaciones es algo que jamás habíamos vivido en otra casa."',
      'M',
      'Mateo & Elena',
      'Propietarios de Vivienda Unifamiliar Passivhaus Certificada',
      '"El silencio pleno dentro de casa es asombroso. Al estar en la ciudad, el aislamiento acústico combinado con el aire puro constante ha transformado nuestra salud y descanso."',
      'S',
      'Sofía R.',
      'Rehabilitación Passivhaus EnerPHit'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"section","align":"full","className":"py-24 px-6 lg:px-12 bg-background","style":{"color":{"background":"#FCFCFA"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<section class="wp-block-group alignfull py-24 px-6 lg:px-12 bg-background has-background" style="background-color:#FCFCFA;padding-top:6rem;padding-right:1.5rem;padding-bottom:6rem;padding-left:1.5rem">
  <!-- wp:group {"className":"max-w-7xl mx-auto space-y-12","layout":{"type":"default"}} -->
  <div class="wp-block-group max-w-7xl mx-auto space-y-12">
    <!-- wp:group {"className":"text-center max-w-2xl mx-auto space-y-3","layout":{"type":"default"}} -->
    <div class="wp-block-group text-center max-w-2xl mx-auto space-y-3">
      <!-- wp:paragraph {"align":"center","className":"font-label-md text-primary uppercase tracking-widest font-semibold","style":{"color":{"text":"#2D4A22"},"typography":{"textTransform":"uppercase","letterSpacing":"0.1em","fontWeight":"600"}}} -->
      <p class="has-text-align-center font-label-md text-primary uppercase tracking-widest font-semibold has-text-color" style="color:#2D4A22;font-weight:600;letter-spacing:0.1em;text-transform:uppercase">Testimonios Seleccionados</p>
      <!-- /wp:paragraph -->
      <!-- wp:heading {"textAlign":"center","level":2,"className":"ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
      <h2 class="wp-block-heading has-text-align-center ve-font-headline font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold has-text-color" style="color:#1D3216;font-weight:700">Lo que experimentan quienes ya habitan el futuro.</h2>
      <!-- /wp:heading -->
    </div>
    <!-- /wp:group -->

    <!-- wp:columns {"className":"grid grid-cols-1 md:grid-cols-2 gap-8"} -->
    <div class="wp-block-columns grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- wp:column {"className":"bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden border border-outline-variant/40 shadow-sm","style":{"color":{"background":"#F7F7F4"},"border":{"radius":"2.5rem","width":"1px","color":"#D0D7CC66"},"spacing":{"padding":{"top":"2.5rem","bottom":"2.5rem","left":"2.5rem","right":"2.5rem"}}}} -->
      <div class="wp-block-column bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden border border-outline-variant/40 shadow-sm has-border-color has-background" style="border-color:#D0D7CC66;border-width:1px;border-radius:2.5rem;background-color:#F7F7F4;padding-top:2.5rem;padding-right:2.5rem;padding-bottom:2.5rem;padding-left:2.5rem">
        <!-- wp:html -->
        <div class="absolute top-0 right-0 p-8 opacity-10 text-primary">
          <span class="material-symbols-outlined text-7xl">format_quote</span>
        </div>
        <!-- /wp:html -->
        <!-- wp:paragraph {"className":"font-body-lg text-moss-deep italic mb-8 relative z-10 leading-relaxed text-lg","style":{"color":{"text":"#1D3216"},"typography":{"fontStyle":"italic","fontSize":"1.125rem"}}} -->
        <p class="font-body-lg text-moss-deep italic mb-8 relative z-10 leading-relaxed text-lg has-text-color" style="color:#1D3216;font-size:1.125rem;font-style:italic">"Caliento 150m² con tan solo 2 radiadores toalleros en los baños. El confort térmico constante en todas las habitaciones es algo que jamás habíamos vivido en otra casa."</p>
        <!-- /wp:paragraph -->
        <!-- wp:html -->
        <div class="flex items-center gap-4 relative z-10">
          <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-headline-sm text-primary font-bold">M</div>
          <div>
            <h5 class="font-headline-sm text-moss-deep text-[16px] font-bold">Mateo &amp; Elena</h5>
            <p class="text-body-sm text-on-surface-variant">Propietarios de Vivienda Unifamiliar Passivhaus Certificada</p>
          </div>
        </div>
        <!-- /wp:html -->
      </div>
      <!-- /wp:column -->

      <!-- wp:column {"className":"bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden border border-outline-variant/40 shadow-sm","style":{"color":{"background":"#F7F7F4"},"border":{"radius":"2.5rem","width":"1px","color":"#D0D7CC66"},"spacing":{"padding":{"top":"2.5rem","bottom":"2.5rem","left":"2.5rem","right":"2.5rem"}}}} -->
      <div class="wp-block-column bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden border border-outline-variant/40 shadow-sm has-border-color has-background" style="border-color:#D0D7CC66;border-width:1px;border-radius:2.5rem;background-color:#F7F7F4;padding-top:2.5rem;padding-right:2.5rem;padding-bottom:2.5rem;padding-left:2.5rem">
        <!-- wp:html -->
        <div class="absolute top-0 right-0 p-8 opacity-10 text-primary">
          <span class="material-symbols-outlined text-7xl">format_quote</span>
        </div>
        <!-- /wp:html -->
        <!-- wp:paragraph {"className":"font-body-lg text-moss-deep italic mb-8 relative z-10 leading-relaxed text-lg","style":{"color":{"text":"#1D3216"},"typography":{"fontStyle":"italic","fontSize":"1.125rem"}}} -->
        <p class="font-body-lg text-moss-deep italic mb-8 relative z-10 leading-relaxed text-lg has-text-color" style="color:#1D3216;font-size:1.125rem;font-style:italic">"El silencio pleno dentro de casa es asombroso. Al estar en la ciudad, el aislamiento acústico combinado con el aire puro constante ha transformado nuestra salud y descanso."</p>
        <!-- /wp:paragraph -->
        <!-- wp:html -->
        <div class="flex items-center gap-4 relative z-10">
          <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-headline-sm text-primary font-bold">S</div>
          <div>
            <h5 class="font-headline-sm text-moss-deep text-[16px] font-bold">Sofía R.</h5>
            <p class="text-body-sm text-on-surface-variant">Rehabilitación Passivhaus EnerPHit</p>
          </div>
        </div>
        <!-- /wp:html -->
      </div>
      <!-- /wp:column -->
    </div>
    <!-- /wp:columns -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->`
  },
  {
    id: 'ebook',
    title: '07. Ebook Descargable Passivhaus',
    subtitle: 'Sección 2 columnas (Portada Ebook 1410×2250 + Mensaje de Autora & CTA)',
    blockTypes: ['core/group', 'core/columns', 'core/column', 'core/image', 'core/heading', 'core/paragraph', 'core/html'],
    literalTexts: [
      '¿Quieres saber más sobre los proyectos passivhaus?',
      'Sabía que, una vez hayas leído un poco sobre el Passivhaus, querías leer más sobre Passivhaus por eso he escrito este ebook con todo mi cariño para ti, como arquitecto Passivhaus. Para que sepas de verdad, lo que entraña el Passivhaus bien hecho, y no te pierdas la oportunidad de tener información seria de la mano de un arquitecto passivhaus certificado, como yo.',
      'SI, Quiero mi ebook.'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"section","align":"full","className":"py-24 px-6 lg:px-12 bg-surface-container-low relative border-t border-outline-variant/30","style":{"color":{"background":"#F7F7F4"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<section class="wp-block-group alignfull py-24 px-6 lg:px-12 bg-surface-container-low relative border-t border-outline-variant/30 has-background" style="background-color:#F7F7F4;padding-top:6rem;padding-right:1.5rem;padding-bottom:6rem;padding-left:1.5rem">
  <!-- wp:columns {"className":"max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"} -->
  <div class="wp-block-columns max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <!-- wp:column {"className":"lg:col-span-5 flex justify-center"} -->
    <div class="wp-block-column lg:col-span-5 flex justify-center">
      <!-- wp:image {"width":1410,"height":2250,"sizeSlug":"full","className":"w-full max-w-[280px] sm:max-w-[330px] h-auto rounded-2xl shadow-2xl border border-outline-variant/40"} -->
      <figure class="wp-block-image size-full is-resized w-full max-w-[280px] sm:max-w-[330px] h-auto rounded-2xl shadow-2xl border border-outline-variant/40"><img src="/assets/aistudio/image_9ba97cfd.png" alt="Ebook: 5 cosas que debes saber sobre el Passivhaus y que nadie te cuenta — Vanesa Ezquerra" width="1410" height="2250" loading="lazy" decoding="async" style="width:100%;height:auto;border-radius:1rem;"/></figure>
      <!-- /wp:image -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"className":"lg:col-span-7 space-y-6"} -->
    <div class="wp-block-column lg:col-span-7 space-y-6">
      <!-- wp:html -->
      <div>
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-container text-primary font-label-md font-semibold text-sm">
          <span class="material-symbols-outlined text-[18px]">menu_book</span>
          <span>Guía Descargable Gratuita · Edición 2026</span>
        </span>
      </div>
      <!-- /wp:html -->

      <!-- wp:heading {"level":2,"className":"ve-font-headline font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-moss-deep font-bold leading-tight","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700"}}} -->
      <h2 class="wp-block-heading ve-font-headline font-headline-lg text-3xl sm:text-4xl lg:text-5xl text-moss-deep font-bold leading-tight has-text-color" style="color:#1D3216;font-weight:700">¿Quieres saber más sobre los proyectos passivhaus?</h2>
      <!-- /wp:heading -->

      <!-- wp:paragraph {"className":"font-body-lg text-on-surface-variant text-lg leading-relaxed","style":{"color":{"text":"#4F594C"}}} -->
      <p class="font-body-lg text-on-surface-variant text-lg leading-relaxed has-text-color" style="color:#4F594C">Sabía que, una vez hayas leído un poco sobre el Passivhaus, querías leer más sobre Passivhaus por eso he escrito este ebook con todo mi cariño para ti, como arquitecto Passivhaus. Para que sepas de verdad, lo que entraña el Passivhaus bien hecho, y no te pierdas la oportunidad de tener información seria de la mano de un arquitecto passivhaus certificado, como yo.</p>
      <!-- /wp:paragraph -->

      <!-- wp:html -->
      <div class="pt-2">
        <a href="#descargar-ebook" class="inline-flex items-center gap-3 font-label-md px-8 sm:px-10 py-4 sm:py-5 rounded-2xl hover:opacity-95 transition-all text-base font-bold shadow-xl shadow-primary/15" style="background-color: rgb(132, 204, 22); color: rgb(0, 0, 0);">
          <span>SI, Quiero mi ebook.</span>
          <span class="material-symbols-outlined text-[20px]">download</span>
        </a>
      </div>
      <!-- /wp:html -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
</section>
<!-- /wp:group -->`
  },
  {
    id: 'cta-final',
    title: '08. Footer CTA Final de Alta Conversión',
    subtitle: 'Sección centrada con gradiente sutil y CTA Lima rgb(132, 204, 22)',
    blockTypes: ['core/group', 'core/heading', 'core/paragraph', 'core/html'],
    literalTexts: [
      'Plazas Abiertas Trimestre Actual',
      'Solo 2 proyectos exclusivos al mes. Asegura tu sesión estratégica.',
      'Conversación técnica de 20 minutos por videollamada con Vanesa Ezquerra para analizar la viabilidad, presupuesto estimado y hoja de ruta de tu futuro hogar Passivhaus.',
      'Reservar Sesión Estratégica (20 min)',
      'calendar_month',
      'Sin compromiso comercial. Rigor técnico garantizado desde el primer minuto.'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"section","align":"full","className":"py-24 px-6 lg:px-12 bg-surface-dim relative overflow-hidden text-center border-t border-outline-variant/30","style":{"color":{"background":"#F4F4F0"},"spacing":{"padding":{"top":"6rem","bottom":"6rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"896px"}} -->
<section class="wp-block-group alignfull py-24 px-6 lg:px-12 bg-surface-dim relative overflow-hidden text-center border-t border-outline-variant/30 has-background" style="background-color:#F4F4F0;padding-top:6rem;padding-right:1.5rem;padding-bottom:6rem;padding-left:1.5rem">
  <!-- wp:html -->
  <div class="absolute inset-0 bg-gradient-to-t from-primary-container/20 via-transparent to-transparent pointer-events-none"></div>
  <!-- /wp:html -->
  <!-- wp:group {"className":"max-w-4xl mx-auto space-y-8 relative z-10","layout":{"type":"default"}} -->
  <div class="wp-block-group max-w-4xl mx-auto space-y-8 relative z-10">
    <!-- wp:html -->
    <div>
      <span class="inline-block px-5 py-2 rounded-full bg-primary-container text-primary font-label-md font-bold">
        Plazas Abiertas Trimestre Actual
      </span>
    </div>
    <!-- /wp:html -->
    <!-- wp:heading {"textAlign":"center","level":2,"className":"ve-font-headline font-headline-xl text-3xl sm:text-5xl text-moss-deep font-extrabold tracking-tight","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"800"}}} -->
    <h2 class="wp-block-heading has-text-align-center ve-font-headline font-headline-xl text-3xl sm:text-5xl text-moss-deep font-extrabold tracking-tight has-text-color" style="color:#1D3216;font-weight:800">Solo 2 proyectos exclusivos al mes. <span class="text-primary block mt-2">Asegura tu sesión estratégica.</span></h2>
    <!-- /wp:heading -->
    <!-- wp:paragraph {"align":"center","className":"font-body-lg text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed","style":{"color":{"text":"#4F594C"}}} -->
    <p class="has-text-align-center font-body-lg text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed has-text-color" style="color:#4F594C">Conversación técnica de 20 minutos por videollamada con Vanesa Ezquerra para analizar la viabilidad, presupuesto estimado y hoja de ruta de tu futuro hogar Passivhaus.</p>
    <!-- /wp:paragraph -->
    <!-- wp:html -->
    <div>
      <a class="inline-flex items-center gap-3 bg-primary text-on-primary font-label-md px-10 py-5 rounded-2xl hover:bg-moss-deep transition-all text-base shadow-xl shadow-primary/20 font-semibold" href="#" style="background-color: rgb(132, 204, 22); color: rgb(0, 0, 0);">
        <span class="">Reservar Sesión Estratégica (20 min)</span>
        <span class="material-symbols-outlined text-[20px]">calendar_month</span>
      </a>
    </div>
    <!-- /wp:html -->
    <!-- wp:paragraph {"align":"center","className":"text-body-sm text-on-surface-variant pt-2","style":{"color":{"text":"#4F594C"}}} -->
    <p class="has-text-align-center text-body-sm text-on-surface-variant pt-2 has-text-color" style="color:#4F594C">Sin compromiso comercial. Rigor técnico garantizado desde el primer minuto.</p>
    <!-- /wp:paragraph -->
  </div>
  <!-- /wp:group -->
</section>
<!-- /wp:group -->`
  },
  {
    id: 'footer',
    title: '09. Footer Institucional (3 Columnas)',
    subtitle: 'Template Part: footer.html en Twenty Twenty-Five (TT5)',
    blockTypes: ['core/group', 'core/columns', 'core/column', 'core/heading', 'core/paragraph'],
    literalTexts: [
      'Vanesa Ezquerra',
      'Certified Passivhaus Designer & Sustainable Architecture Studio.',
      'Contacto',
      'hola@vanesaezquerra.com',
      '649-050-448',
      'Legal',
      '© 2026 Vanesa Ezquerra. All rights reserved.',
      'Aviso Legal & Privacidad'
    ],
    gutenbergCode: `<!-- wp:group {"tagName":"footer","align":"full","className":"w-full bg-[#EFEFEA] py-16 text-on-surface-variant border-t border-outline-variant/30","style":{"color":{"background":"#EFEFEA","text":"#4F594C"},"spacing":{"padding":{"top":"4rem","bottom":"4rem","left":"1.5rem","right":"1.5rem"}}},"layout":{"type":"constrained","contentSize":"1280px"}} -->
<footer class="wp-block-group alignfull w-full bg-[#EFEFEA] py-16 text-on-surface-variant border-t border-outline-variant/30 has-text-color has-background" style="background-color:#EFEFEA;color:#4F594C;padding-top:4rem;padding-right:1.5rem;padding-bottom:4rem;padding-left:1.5rem">
  <!-- wp:columns {"className":"max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10"} -->
  <div class="wp-block-columns max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
    <!-- wp:column {"className":"space-y-3"} -->
    <div class="wp-block-column space-y-3">
      <!-- wp:heading {"level":4,"className":"ve-font-headline font-headline-sm text-moss-deep font-bold text-lg","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700","fontSize":"1.125rem"}}} -->
      <h4 class="wp-block-heading ve-font-headline font-headline-sm text-moss-deep font-bold text-lg has-text-color" style="color:#1D3216;font-size:1.125rem;font-weight:700">Vanesa Ezquerra</h4>
      <!-- /wp:heading -->
      <!-- wp:paragraph {"className":"text-body-sm text-on-surface-variant","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-body-sm text-on-surface-variant has-text-color" style="color:#4F594C">Certified Passivhaus Designer &amp; Sustainable Architecture Studio.</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"className":"space-y-3"} -->
    <div class="wp-block-column space-y-3">
      <!-- wp:heading {"level":5,"className":"ve-font-headline font-headline-sm text-moss-deep font-bold text-[16px]","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700","fontSize":"16px"}}} -->
      <h5 class="wp-block-heading ve-font-headline font-headline-sm text-moss-deep font-bold text-[16px] has-text-color" style="color:#1D3216;font-size:16px;font-weight:700">Contacto</h5>
      <!-- /wp:heading -->
      <!-- wp:paragraph {"className":"text-body-sm text-on-surface-variant","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-body-sm text-on-surface-variant has-text-color" style="color:#4F594C"><a href="mailto:hola@vanesaezquerra.com">hola@vanesaezquerra.com</a></p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-body-sm text-on-surface-variant","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-body-sm text-on-surface-variant has-text-color" style="color:#4F594C"><a href="tel:649050448">649-050-448</a></p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->

    <!-- wp:column {"className":"space-y-3"} -->
    <div class="wp-block-column space-y-3">
      <!-- wp:heading {"level":5,"className":"ve-font-headline font-headline-sm text-moss-deep font-bold text-[16px]","style":{"color":{"text":"#1D3216"},"typography":{"fontWeight":"700","fontSize":"16px"}}} -->
      <h5 class="wp-block-heading ve-font-headline font-headline-sm text-moss-deep font-bold text-[16px] has-text-color" style="color:#1D3216;font-size:16px;font-weight:700">Legal</h5>
      <!-- /wp:heading -->
      <!-- wp:paragraph {"className":"text-body-sm text-on-surface-variant","style":{"color":{"text":"#4F594C"}}} -->
      <p class="text-body-sm text-on-surface-variant has-text-color" style="color:#4F594C">© 2026 Vanesa Ezquerra. All rights reserved.</p>
      <!-- /wp:paragraph -->
      <!-- wp:paragraph {"className":"text-body-sm text-primary hover:underline cursor-pointer font-medium","style":{"color":{"text":"#2D4A22"}}} -->
      <p class="text-body-sm text-primary hover:underline cursor-pointer font-medium has-text-color" style="color:#2D4A22">Aviso Legal &amp; Privacidad</p>
      <!-- /wp:paragraph -->
    </div>
    <!-- /wp:column -->
  </div>
  <!-- /wp:columns -->
  <!-- wp:html -->
  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Architect"],
  "name": "Vanesa Ezquerra",
  "alternateName": "Vanesa Ezquerra Arquitectura",
  "url": "https://vanesaezquerra.com",
  "logo": "https://www.vanesaezquerra.com/wp-content/uploads/2017/01/cropped-vanesa-Logo-1-linea.png",
  "image": "https://www.vanesaezquerra.com/wp-content/uploads/2017/01/vanesa-ezquerra-foto.jpg",
  "description": "Estudio de arquitectura de autor especializado en el diseño y certificación de Casas Pasivas (Passivhaus) y alta eficiencia energética.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palencia",
    "addressRegion": "Castilla y León",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.652251",
    "longitude": "-4.724532"
  },
  "telephone": "+34000000000",
  "email": "contacto@vanesaezquerra.com",
  "priceRange": "$$$",
  "knowsAbout": [
    "Passivhaus",
    "Casas Pasivas",
    "Arquitectura Sostenible",
    "Eficiencia Energética",
    "EnerPHit",
    "Construcción Bioclimática"
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Madrid"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Valladolid"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Burgos"
    },
    {
      "@type": "AdministrativeArea",
      "name": "León"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Salamanca"
    },
    {
      "@type": "AdministrativeArea",
      "name": "País Vasco"
    }
  ],
  "sameAs": [
    "https://linkedin.com",
    "https://instagram.com",
    "https://facebook.com",
    "URL_ENTREVISTA_CADENA_SER_O_NOTICIA",
    "URL_ENTREVISTA_ONDA_CERO_O_NOTICIA",
    "URL_NOTICIA_EL_NORTE_DE_CASTILLA"
  ]
}
  </script>
  <!-- /wp:html -->
</footer>
<!-- /wp:group -->`
  }
];

export const SCHEMA_JSON_LD = `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Architect"],
  "name": "Vanesa Ezquerra",
  "alternateName": "Vanesa Ezquerra Arquitectura",
  "url": "https://vanesaezquerra.com",
  "logo": "https://www.vanesaezquerra.com/wp-content/uploads/2017/01/cropped-vanesa-Logo-1-linea.png",
  "image": "https://www.vanesaezquerra.com/wp-content/uploads/2017/01/vanesa-ezquerra-foto.jpg",
  "description": "Estudio de arquitectura de autor especializado en el diseño y certificación de Casas Pasivas (Passivhaus) y alta eficiencia energética.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Palencia",
    "addressRegion": "Castilla y León",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "41.652251",
    "longitude": "-4.724532"
  },
  "telephone": "+34000000000",
  "email": "contacto@vanesaezquerra.com",
  "priceRange": "$$$",
  "knowsAbout": [
    "Passivhaus",
    "Casas Pasivas",
    "Arquitectura Sostenible",
    "Eficiencia Energética",
    "EnerPHit",
    "Construcción Bioclimática"
  ],
  "areaServed": [
    {
      "@type": "AdministrativeArea",
      "name": "Madrid"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Valladolid"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Burgos"
    },
    {
      "@type": "AdministrativeArea",
      "name": "León"
    },
    {
      "@type": "AdministrativeArea",
      "name": "Salamanca"
    },
    {
      "@type": "AdministrativeArea",
      "name": "País Vasco"
    }
  ],
  "sameAs": [
    "https://linkedin.com",
    "https://instagram.com",
    "https://facebook.com",
    "URL_ENTREVISTA_CADENA_SER_O_NOTICIA",
    "URL_ENTREVISTA_ONDA_CERO_O_NOTICIA",
    "URL_NOTICIA_EL_NORTE_DE_CASTILLA"
  ]
}
</script>`;

export const FULL_GUTENBERG_PAGE_CODE = GUTENBERG_SECTIONS.map(
  (s) => `<!-- =====================================================================\n     SECCIÓN: ${s.title}\n     ===================================================================== -->\n${s.gutenbergCode}`
).join('\n\n');

export const LLMS_TXT_CONTENT = `# Vanesa Ezquerra - Arquitectura Passivhaus de Autor

> Estudio de arquitectura premium especializado en el diseño, construcción y rehabilitación bajo el estándar Passivhaus (Casas Pasivas) de consumo casi nulo y alta eficiencia energética en España.

## Información Corporativa y de Confianza (E-E-A-T)
* **Profesional:** Vanesa Ezquerra (Arquitecta Certificada Passivhaus Designer).
* **Enfoque comercial:** Servicio de alta exclusividad (máximo 2 proyectos nuevos al mes) enfocado en calidad y personalización.
* **Contacto Principal:** [Formulario de contacto y Reserva de Sesión Estratégica](https://vanesaezquerra.com)
* **Ubicación Base:** Valladolid, Castilla y León, España.

### Apariciones en Medios y Avales de Marca
* [Entrevista en Radio Nacional de España (RNE)](https://vanesaezquerra.com) : Divulgación sobre el estándar Passivhaus y ahorro energético.
* [Mención en Cadena SER](https://vanesaezquerra.com) : Ponencia sobre el futuro de las viviendas eficientes.
* [Reportaje en Onda Cero](https://vanesaezquerra.com) : Declaraciones sobre la edificación sostenible y el clima de la meseta.
* [Perfil Oficial en el Passivhaus Institut](https://vanesaezquerra.com) : Certificación oficial de la entidad reguladora alemana.

## Servicios Principales
* [Casas Pasivas (Obra Nueva)](https://vanesaezquerra.com) : Diseño desde cero de viviendas bajo criterios bioclimáticos y certificación Passivhaus.
* [Rehabilitación Energética (EnerPHit)](https://vanesaezquerra.com) : Adaptación de viviendas y edificios existentes para reducir hasta un 90% su consumo energético.
* [Consultoría Passivhaus](https://vanesaezquerra.com) : Asesoramiento técnico para constructoras, promotores y particulares.

## Áreas de Servicio Local (Páginas de Destino)
Páginas de aterrizaje específicas con detalles climáticos, normativas locales y proyectos asignados a cada provincia:
* [Arquitecto Passivhaus en Madrid](https://vanesaezquerra.com) : Proyectos eficientes en la Comunidad de Madrid.
* [Arquitecto Passivhaus en Valladolid](https://vanesaezquerra.com) : Construcción sostenible en la provincia de Valladolid.
* [Arquitecto Passivhaus en Burgos](https://vanesaezquerra.com) : Diseños de aislamiento adaptados al clima extremo de Burgos.
* [Arquitecto Passivhaus en León](https://vanesaezquerra.com) : Viviendas bioclimáticas en la provincia de León.
* [Arquitecto Passivhaus en Salamanca](https://vanesaezquerra.com) : Proyectos y arquitectura de autor en Salamanca.
* [Arquitecto Passivhaus en País Vasco](https://vanesaezquerra.com) : Arquitectura sostenible adaptada al entorno del norte.

## Recursos de Interés y Captación (Blog)
* [¿Cuánto cuesta construir una casa Passivhaus?](https://vanesaezquerra.com) : Guía de costes detallada y retorno de la inversión.
* [Cambio de uso de local a vivienda](https://vanesaezquerra.com) : Requisitos técnicos, normativas y viabilidad del proyecto.`;

export const LLMS_FULL_TXT_CONTENT = `# Vanesa Ezquerra - Arquitectura Passivhaus de Autor (Documentación Completa)

> Este documento contiene la especificación técnica completa de los servicios, metodología de diseño, cobertura geográfica, criterios de viabilidad de proyectos y preguntas frecuentes del estudio de arquitectura de Vanesa Ezquerra.

---

## 1. Metodología Técnica y Estándar Passivhaus
El estudio aplica rigurosamente los 5 principios fundamentales del estándar Passivhaus del *Passivhaus Institut* de Alemania, adaptados a la climatología de la península ibérica (meseta central y zona norte):

1. **Aislamiento Térmico Excelente:** Optimización del espesor de la envolvente según la provincia para minimizar pérdidas en invierno y ganancias en verano.
2. **Ausencia de Puentes Térmicos:** Diseño de detalle en juntas, cimentaciones y encuentros para garantizar la continuidad del aislamiento.
3. **Hermeticidad al Aire:** Control estricto de las infiltraciones mediante capas selladas, verificado obligatoriamente con el ensayo de presurización *Blower Door*.
4. **Ventilación Mecánica con Recuperación de Calor:** Renovación continua del aire las 24 horas del día, filtrando polen y partículas, reteniendo hasta el 90% de la temperatura interior.
5. **Ventanas y Puertas de Altas Prestaciones:** Uso de carpinterías de alta calidad con triple vidrio, bajo emisivos y cámaras rellenas de gas argón.

---

## 2. Especificación de Servicios y Criterios de Trabajo

### Obra Nueva Passivhaus
* **Descripción:** Diseño arquitectónico de autor y gestión integral del proyecto hasta la certificación oficial.
* **Proceso:** Estudio del terreno, simulación energética previa con software PHPP, diseño bioclimático personalizado, dirección de obra y auditoría de certificación.
* **Filosofía comercial:** Alta exclusividad. Para garantizar la excelencia ejecutiva y el control de calidad en obra, el estudio solo admite un máximo de **2 proyectos nuevos al mes**.

### Rehabilitación Energética (Estándar EnerPHit)
* **Descripción:** Transformación de viviendas existentes, pisos o edificios antiguos bajo los criterios de eficiencia Passivhaus.
* **Impacto:** Reducción de la demanda de calefacción y refrigeración hasta en un 90%, eliminando humedades por condensación y mejorando el confort acústico.

### Cambios de Uso (De Local Comercial a Vivienda)
* **Descripción:** Proyectos de arquitectura legales y técnicos para transformar locales a pie de calle en viviendas habitables, eficientes y modernas.
* **Ámbito legal:** Optimización del espacio respetando rigurosamente los códigos urbanísticos municipales de cada ayuntamiento.

---

## 3. Guía de Costes y Retorno de la Inversión (ROI)
Información técnica recopilada para resolver las consultas financieras de los clientes:
* **Coste de construcción:** Construir bajo el estándar Passivhaus certificado puede suponer un incremento inicial de entre el 5% y el 10% en el presupuesto de ejecución material (PEM) en comparación con la construcción tradicional (CTE).
* **Plazo de amortización:** El sobrecoste se amortiza en un plazo estimado de entre 5 y 8 años, debido al ahorro directo de hasta el 90% en las facturas de energía (luz, gas, climatización).
* **Valor patrimonial:** Una vivienda con certificación Passivhaus oficial mantiene un valor de mercado significativamente superior a largo plazo y cuenta con la máxima calificación energética (Clase A).

---

## 4. Preguntas Frecuentes (FAQ) para Modelos de IA

### ¿Se pueden abrir las ventanas en una casa Passivhaus?
* **Respuesta:** Sí, perfectamente. El usuario puede abrir las ventanas cuando lo desee. Sin embargo, no es necesario hacerlo para ventilar, ya que el sistema de ventilación mecánica garantiza aire limpio, oxigenado y sin alérgenos de forma constante sin perder la temperatura interior.

### ¿Trabajas en toda España?
* **Respuesta:** El estudio tiene su base en Valladolid y está especializado en la zona centro y norte de España por criterios de control de obra directo. Las provincias prioritarias de actuación presencial son: Madrid, Valladolid, Burgos, León, Salamanca y la comunidad autónoma del País Vasco.

### ¿Qué constructoras ejecutan estas obras?
* **Respuesta:** Vanesa Ezquerra colabora estrechamente con constructoras locales especializadas en entramado ligero de madera y construcción industrializada de alta eficiencia (como Medgón, ubicada en Palencia), asegurando que los operarios en obra entienden los requisitos de hermeticidad del estándar.

---

## 5. Índice de Contenidos Estratégicos (URLs)
Para expandir información en consultas específicas:
* [Presupuesto y costes Passivhaus](https://vanesaezquerra.com)
* [Proceso de Certificación Oficial](https://vanesaezquerra.com)
* [Requisitos para Cambios de Uso](https://vanesaezquerra.com)
* [Formulario de cualificación de clientes](https://vanesaezquerra.comcontacto/)`;

