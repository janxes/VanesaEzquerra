import React, { useState } from 'react';
import {
  GUTENBERG_SECTIONS,
  FULL_GUTENBERG_PAGE_CODE,
  TT5_CUSTOM_CSS,
  TT5_THEME_JSON_SNIPPET,
  GutenbergSection,
} from './data/gutenbergBlocks';

export default function App() {
  const [studioOpen, setStudioOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'full' | 'sections' | 'css' | 'themejson' | 'verifier'>('full');
  const [selectedSectionId, setSelectedSectionId] = useState<string>(GUTENBERG_SECTIONS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [inspectorMode, setInspectorMode] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    nombre: '',
    email: '',
    ubicacion: '',
    tipoProyecto: 'Obra Nueva Passivhaus',
  });

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2200);
    }
  };

  const openSectionInStudio = (sectionId: string) => {
    setSelectedSectionId(sectionId);
    setActiveTab('sections');
    setStudioOpen(true);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openBooking = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setBookingSubmitted(false);
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingForm.nombre.trim() || !bookingForm.email.trim()) return;
    setBookingSubmitted(true);
  };

  const currentSection: GutenbergSection =
    GUTENBERG_SECTIONS.find((s) => s.id === selectedSectionId) || GUTENBERG_SECTIONS[0];

  return (
    <div className="bg-background font-body-md text-on-background antialiased selection:bg-primary-container selection:text-primary min-h-screen relative">
      {/* Header — Exact Geometry, Typography & Literal Texts */}
      <header
        id="sec-header"
        className={`sticky top-0 w-full z-50 bg-[#FCFCFA]/95 backdrop-blur-md border-b border-outline-variant/30 ${
          inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
        }`}
      >
        {inspectorMode && (
          <button
            onClick={() => openSectionInStudio('header')}
            className="absolute top-2 right-4 z-50 bg-moss-deep text-white text-xs font-label-md px-3 py-1 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">code_blocks</span>
            <span>Ver Bloque Gutenberg: Header TT5</span>
          </button>
        )}
        <div className="h-20 lg:h-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between gap-3">
          <a
            className="inline-flex items-center shrink-0"
            href="#sec-hero"
            onClick={(e) => scrollToSection(e, 'sec-hero')}
          >
            <img
              src="/assets/aistudio/image_e1c48185.png"
              alt="Vanesa Ezquerra"
              className="h-6 sm:h-8 lg:h-9 w-auto object-contain mix-blend-multiply"
            />
          </a>
          <nav className="hidden lg:flex items-center gap-2">
            <a
              className="transition-colors bg-primary-container text-on-primary-container font-bold rounded-full px-4 py-2 text-sm whitespace-nowrap shrink-0"
              href="#sec-bento"
              onClick={(e) => scrollToSection(e, 'sec-bento')}
            >
              Proyectos
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container whitespace-nowrap shrink-0"
              href="#sec-bento"
              onClick={(e) => scrollToSection(e, 'sec-bento')}
            >
              Servicios Passivhaus
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container whitespace-nowrap shrink-0"
              href="#sec-cta-final"
              onClick={(e) => scrollToSection(e, 'sec-cta-final')}
            >
              Consultoría
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container whitespace-nowrap shrink-0"
              href="#sec-autoridad"
              onClick={(e) => scrollToSection(e, 'sec-autoridad')}
            >
              Sobre Mí
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container whitespace-nowrap shrink-0"
              href="#sec-faq"
              onClick={(e) => scrollToSection(e, 'sec-faq')}
            >
              FAQ IA
            </a>
            <a
              className="text-sm text-on-surface-variant hover:text-primary transition-colors px-4 py-2 rounded-full hover:bg-surface-container whitespace-nowrap shrink-0"
              href="#sec-footer"
              onClick={(e) => scrollToSection(e, 'sec-footer')}
            >
              Contacto
            </a>
          </nav>
          <div className="flex items-center gap-2.5 sm:gap-4 shrink-0">
            <a
              className="inline-flex items-center justify-center bg-primary text-on-primary font-label-md text-xs sm:text-sm px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full hover:bg-moss-deep transition-all shadow-sm whitespace-nowrap shrink-0"
              href="#sesion-estrategica"
              onClick={openBooking}
            >
              Sesión Estratégica
            </a>
            <button
              type="button"
              onClick={() => openSectionInStudio('header')}
              title="Abrir Inspector de Bloques Gutenberg TT5"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary-container flex items-center justify-center text-primary border border-outline-variant/40 cursor-pointer hover:bg-primary hover:text-white transition-colors shrink-0"
            >
              <span className="material-symbols-outlined text-[20px]">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="w-full bg-background">
        <div className="flex flex-col w-full text-on-surface bg-background">
          {/* Hero Section */}
          <section
            id="sec-hero"
            className={`relative lg:min-h-[85vh] flex items-center justify-center px-6 lg:px-12 py-12 lg:py-16 overflow-hidden ${
              inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
            }`}
          >
            {inspectorMode && (
              <button
                onClick={() => openSectionInStudio('hero')}
                className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">code_blocks</span>
                <span>Copiar Bloque Gutenberg: Hero Section</span>
              </button>
            )}
            {/* Original background image positioned right center */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundColor: '#1B2218',
                backgroundImage:
                  'url("https://www.vanesaezquerra.com/wp-content/uploads/2016/11/vanesa_ezquerra_home_prueba8.jpg")',
                backgroundPosition: 'right center',
              }}
            />
            {/* Lighter gradient overlay so the right side of the background image is clearly visible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  'linear-gradient(90deg, rgba(0, 0, 0, 0.68) 0%, rgba(0, 0, 0, 0.42) 52%, rgba(0, 0, 0, 0.12) 100%)',
              }}
            />

            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center relative z-10">
              <div className="lg:col-span-8 space-y-5 sm:space-y-6">
                <h1 className="font-headline-xl text-4xl sm:text-6xl lg:text-7xl text-white drop-shadow-md tracking-tight font-extrabold leading-[1.08] relative z-10">
                  Arquitectura Passivhaus de autor{' '}
                  <span className="text-primary-container italic font-normal">sin compromisos.</span>
                </h1>
                <p className="font-body-lg text-gray-100 max-w-2xl text-lg sm:text-xl font-normal leading-relaxed relative z-10 drop-shadow-sm">
                  Reducimos hasta un 90% el consumo energético mediante envolventes térmicas ultraeficientes, control de calidad del aire VMC y un diseño bioclimático profundamente conectado con la naturaleza.
                </p>
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-4">
                  <a
                    className="bg-primary text-on-primary font-label-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-moss-deep transition-all flex items-center gap-3 shadow-lg shadow-primary/10"
                    href="#disena-tu-hogar"
                    onClick={openBooking}
                    style={{ backgroundColor: 'rgb(132, 204, 22)', color: 'rgb(0, 0, 0)' }}
                  >
                    <span className="">Diseña tu hogar sin facturas</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </a>
                  <a
                    className="bg-primary text-on-primary font-label-md px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl hover:bg-moss-deep transition-all shadow-lg shadow-primary/10"
                    href="#reserva-sesion"
                    onClick={openBooking}
                    style={{ backgroundColor: 'rgb(132, 204, 22)', color: 'rgb(0, 0, 0)' }}
                  >
                    Reserva Sesión Estratégica
                  </a>
                </div>
              </div>

              {/* Quick Metrics Column — compact on mobile, offset only on desktop */}
              <div className="lg:col-span-4 flex flex-col justify-between lg:translate-y-12">
                <div className="bg-surface-container-low p-6 sm:p-8 rounded-[2rem] border border-outline-variant/40 relative overflow-hidden group hover:border-primary/40 transition-all shadow-sm">
                  <div className="text-4xl sm:text-5xl font-headline-lg text-primary mb-2 font-bold">
                    -90%
                  </div>
                  <p className="font-body-lg text-on-surface max-w-2xl text-base font-normal leading-relaxed relative z-10">
                    Ahorro drástico en climatización y ausencia absoluta de puentes térmicos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bento Grid Section */}
          <section
            id="sec-bento"
            className={`py-24 px-6 lg:px-12 bg-surface-dim relative ${
              inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
            }`}
          >
            {inspectorMode && (
              <button
                onClick={() => openSectionInStudio('bento')}
                className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">code_blocks</span>
                <span>Copiar Bloque Gutenberg: Bento Grid</span>
              </button>
            )}
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="space-y-3">
                  <span className="font-label-md text-primary uppercase tracking-widest font-semibold">
                    Metodología &amp; Excelencia
                  </span>
                  <h2 className="font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold">
                    Propuesta de Valor &amp; Servicios
                  </h2>
                </div>
                <p className="font-body-md text-on-surface-variant max-w-md">
                  Una simbiosis perfecta entre rigor científico Passivhaus, estética orgánica y tecnología de vanguardia BIM.
                </p>
              </div>

              {/* Bento Grid Layout */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Bloque 1 */}
                <div className="md:col-span-8 bg-surface-container-low p-10 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-700"
                    style={{
                      backgroundImage:
                        'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCHYRpQba6y-RtflXPQR_gtBy8lU6R1zUwyKo_BqaeNbd6MIeOFbXbxTBX5N7Eao0KbcJNh0dD371pJ2pBXe7FijEbbgAg4D8Y-si_o9yL8EM_TZA46v8SO3f3NQa-xeq3kJG8581LfWXt6c-W0HfmdgGss5xN9zjvfhJglOcnYarSxMgfMLSgDt4xe-mVNWDJ5fCWafQQvJCi9FurgVegkBI1TUrohWhaPfxLlL9UncjhtbxP10Ibv"), linear-gradient(135deg, #D7E6CF 0%, #EFEFEA 100%)',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/70 to-transparent" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-primary/15 text-primary font-label-md font-semibold">
                      01 / Certificación Oficial
                    </span>
                    <span className="material-symbols-outlined text-primary text-3xl">verified</span>
                  </div>
                  <div className="relative z-10 pt-32 space-y-2">
                    <h3 className="font-headline-md text-2xl text-moss-deep font-bold">
                      Arquitectura Passivhaus Certificada
                    </h3>
                    <p className="font-body-md text-on-surface-variant max-w-xl">
                      Hasta un 90% menos de energía respecto a la normativa estándar. Incorpora renovación de aire continuo mediante sistema VMC con filtrado antipolen y antipartículas para una salud óptima.
                    </p>
                  </div>
                </div>

                {/* Bloque 2 */}
                <div
                  className="md:col-span-4 p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm text-white"
                  style={{
                    backgroundColor: '#1D3216',
                    backgroundImage:
                      'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBzf-sjUpSU2tiUwCu9gRiuuFh2DvgrAHfX8p6dGT95HfzGqu5RsTq8ZJ9BUT1DIVzXRAMC8ubTjjTlkHLfYDv7JyxiPCKGvt1E_fuVkGO0QejqgOmn-kHmBHPgAOYY1LqAJHXu0IY0ItokfeIgJdShsKsgd6ItsLk-PqPlihaa0TK0QmfUoS_F2xJHAYCYTsXJLHk4FklIt5onrQRrmKnVoQZ_Y9OwGsb5qsp0Zgn7Brqd3kcH5fKd-KkS0qrr5Hn3ug"), radial-gradient(circle at 30% 30%, #2D4A22 0%, #11200D 100%)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                  }}
                >
                  <div className="absolute inset-0 bg-black/60 z-0" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high/80 text-on-surface font-label-md">
                      02 / BIM &amp; 3D
                    </span>
                    <span className="material-symbols-outlined text-primary text-2xl">view_in_ar</span>
                  </div>
                  <div className="relative z-10 py-8">
                    <h3 className="font-headline-sm text-xl text-white font-bold mb-2">
                      Diseño de Autor &amp; BIM
                    </h3>
                    <p className="font-body-sm text-gray-200">
                      Visualización 3D fotorrealista y gemelo digital para comunicación total con el cliente y control absoluto de presupuestos sin sorpresas en obra.
                    </p>
                  </div>
                </div>

                {/* Bloque 3 */}
                <div className="md:col-span-5 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-outline-variant/40 shadow-sm">
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-md">
                      03 / Materiales
                    </span>
                    <span className="material-symbols-outlined text-primary text-2xl">architecture</span>
                  </div>
                  <div className="relative z-10 py-8">
                    <h3 className="font-headline-sm text-xl text-moss-deep font-bold mb-2">
                      Sistemas Constructivos Avanzados
                    </h3>
                    <p className="font-body-sm text-on-surface-variant">
                      Optimización estructural mediante entramado ligero de madera, CLT, Termoarcilla o Steel Framing. Sostenibilidad de ciclo de vida cero carbono.
                    </p>
                  </div>
                </div>

                {/* Bloque 4 */}
                <div className="md:col-span-7 bg-surface-container-low p-8 rounded-[2.5rem] relative overflow-hidden flex flex-col justify-between group border border-primary/30 shadow-sm">
                  <div className="absolute inset-0 bg-primary-container/20 pointer-events-none" />
                  <div className="relative z-10 flex justify-between items-start">
                    <span className="px-4 py-1.5 rounded-full bg-primary text-on-primary font-label-md font-bold">
                      04 / Boutique Studio
                    </span>
                    <span className="material-symbols-outlined text-primary text-2xl">lock_person</span>
                  </div>
                  <div className="relative z-10 py-8 space-y-2">
                    <h3 className="font-headline-sm text-xl text-moss-deep font-bold">
                      Acompañamiento Exclusivo (Cupo Limitado)
                    </h3>
                    <p className="font-body-sm text-on-surface-variant">
                      Solo aceptamos <strong className="text-primary font-semibold">2 proyectos al mes</strong> para garantizar supervisión directa en obra, dirección facultativa rigurosa y formación continua de gremios especializados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Autoridad / EEAT Section */}
          <section
            id="sec-autoridad"
            className={`py-24 px-6 lg:px-12 bg-background relative ${
              inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
            }`}
          >
            {inspectorMode && (
              <button
                onClick={() => openSectionInStudio('autoridad')}
                className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">code_blocks</span>
                <span>Copiar Bloque Gutenberg: Autoridad EEAT</span>
              </button>
            )}
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="font-label-md text-primary uppercase tracking-widest font-semibold">
                  Autoridad Técnica &amp; Credenciales
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold">
                  Rigor certificado respaldado por instituciones líderes.
                </h2>
                <p className="font-body-md text-on-surface-variant leading-relaxed">
                  Vanesa Ezquerra encabeza una nueva generación de arquitectas enfocadas en la descarbonización y el bienestar humano, combinando la titulación oficial Passivhaus Designer con un profundo dominio de la rehabilitación energética avanzada.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-2">
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <div className="text-3xl font-headline-md text-primary font-bold">15+</div>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Años de experiencia proyectando
                    </p>
                  </div>
                  <div className="p-6 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                    <div className="text-3xl font-headline-md text-moss-deep font-bold">100%</div>
                    <p className="text-body-sm text-on-surface-variant mt-1">
                      Blower door test superados
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">workspace_premium</span>
                  <span className="font-headline-sm text-sm text-moss-deep font-bold">
                    Passivhaus Designer
                  </span>
                  <span className="text-body-sm text-on-surface-variant text-xs">PHI Germany</span>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">school</span>
                  <span className="font-headline-sm text-sm text-moss-deep font-bold">
                    Master Rehabilitación
                  </span>
                  <span className="text-body-sm text-on-surface-variant text-xs">
                    Eficiencia Energética
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">groups</span>
                  <span className="font-headline-sm text-sm text-moss-deep font-bold">
                    GBCe &amp; IPHA
                  </span>
                  <span className="text-body-sm text-on-surface-variant text-xs">Socia Titular</span>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">podium</span>
                  <span className="font-headline-sm text-sm text-moss-deep font-bold">AESCAI</span>
                  <span className="text-body-sm text-on-surface-variant text-xs">
                    Calidad de Aire Interior
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">mic</span>
                  <span className="font-headline-sm text-sm text-moss-deep font-bold">
                    RNE &amp; Onda Cero
                  </span>
                  <span className="text-body-sm text-on-surface-variant text-xs">
                    Divulgación y Medios
                  </span>
                </div>
                <div className="p-6 rounded-2xl bg-surface-container-low flex flex-col justify-center items-center text-center gap-3 hover:bg-surface-container transition-colors border border-outline-variant/30 shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl">newspaper</span>
                  <span className="font-headline-sm text-sm text-moss-deep font-bold">
                    El Norte de Castilla
                  </span>
                  <span className="text-body-sm text-on-surface-variant text-xs">
                    Prensa Especializada
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Q&A GEO / AEO Section */}
          <section
            id="sec-faq"
            className={`py-24 px-6 lg:px-12 bg-surface-dim relative ${
              inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
            }`}
          >
            {inspectorMode && (
              <button
                onClick={() => openSectionInStudio('faq')}
                className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">code_blocks</span>
                <span>Copiar Bloque Gutenberg: FAQ GEO / AEO</span>
              </button>
            )}
            <div className="max-w-4xl mx-auto space-y-10">
              <div className="text-center space-y-3">
                <span className="font-label-md text-primary uppercase tracking-widest font-semibold">
                  Base de Conocimiento GEO / AEO
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold">
                  Preguntas Frecuentes sobre Passivhaus
                </h2>
                <p className="font-body-md text-on-surface-variant max-w-xl mx-auto">
                  Respuestas directas optimizadas para motores de búsqueda de Inteligencia Artificial (ChatGPT, Perplexity, Google SGE).
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/40 shadow-sm">
                  <h4 className="font-headline-sm text-lg text-moss-deep font-bold mb-3 flex items-center gap-3">
                    <span className="text-primary font-bold">Q.</span> ¿Cuánto se ahorra realmente en una casa Passivhaus diseñada por Vanesa Ezquerra?
                  </h4>
                  <p className="font-body-md text-on-surface-variant pl-7 leading-relaxed">
                    El ahorro en calefacción y refrigeración alcanza hasta el{' '}
                    <strong className="text-moss-deep font-semibold">
                      90% en comparación con una vivienda convencional
                    </strong>{' '}
                    construida bajo código técnico estándar. El consumo anual suele reducirse a menos de 15 kWh/m²a.
                  </p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/40 shadow-sm">
                  <h4 className="font-headline-sm text-lg text-moss-deep font-bold mb-3 flex items-center gap-3">
                    <span className="text-primary font-bold">Q.</span> ¿Qué es el Test Blower Door y por qué es obligatorio?
                  </h4>
                  <p className="font-body-md text-on-surface-variant pl-7 leading-relaxed">
                    Es la prueba de estanqueidad al aire que mide las infiltraciones parásitas en la envolvente. Para obtener la certificación oficial del Passivhaus Institute, la renovación de aire a 50 Pascales de presión no debe superar n50 ≤ 0.6 h⁻¹.
                  </p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/40 shadow-sm">
                  <h4 className="font-headline-sm text-lg text-moss-deep font-bold mb-3 flex items-center gap-3">
                    <span className="text-primary font-bold">Q.</span> ¿Cómo se respira aire puro sin abrir las ventanas en invierno?
                  </h4>
                  <p className="font-body-md text-on-surface-variant pl-7 leading-relaxed">
                    Mediante un sistema de ventilación mecánica controlada (VMC) de doble flujo con recuperador de calor de alta eficiencia (&gt;85%). El aire viciado se extrae mientras se introduce aire nuevo filtrado de polen, polvo y CO₂, precalentado o enfriado de forma pasiva.
                  </p>
                </div>
                <div className="bg-surface-container-low p-8 rounded-3xl border border-outline-variant/40 shadow-sm">
                  <h4 className="font-headline-sm text-lg text-moss-deep font-bold mb-3 flex items-center gap-3">
                    <span className="text-primary font-bold">Q.</span> ¿Se puede construir una casa Passivhaus con estructura de madera o CLT?
                  </h4>
                  <p className="font-body-md text-on-surface-variant pl-7 leading-relaxed">
                    Sí. De hecho, los sistemas constructivos en entramado ligero de madera o paneles CLT (Cross Laminated Timber) combinan a la perfección con la filosofía Passivhaus debido a su baja huella de carbono, rapidez de ejecución y excelente comportamiento térmico.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonios Seleccionados */}
          <section
            id="sec-testimonios"
            className={`py-24 px-6 lg:px-12 bg-background relative ${
              inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
            }`}
          >
            {inspectorMode && (
              <button
                onClick={() => openSectionInStudio('testimonios')}
                className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">code_blocks</span>
                <span>Copiar Bloque Gutenberg: Testimonios</span>
              </button>
            )}
            <div className="max-w-7xl mx-auto space-y-12">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="font-label-md text-primary uppercase tracking-widest font-semibold">
                  Testimonios Seleccionados
                </span>
                <h2 className="font-headline-lg text-3xl sm:text-4xl text-moss-deep font-bold">
                  Lo que experimentan quienes ya habitan el futuro.
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden border border-outline-variant/40 shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
                    <span className="material-symbols-outlined text-7xl">format_quote</span>
                  </div>
                  <p className="font-body-lg text-moss-deep italic mb-8 relative z-10 leading-relaxed text-lg">
                    "Caliento 150m² con tan solo 2 radiadores toalleros en los baños. El confort térmico constante en todas las habitaciones es algo que jamás habíamos vivido en otra casa."
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-headline-sm text-primary font-bold">
                      M
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-moss-deep text-[16px] font-bold">
                        Mateo &amp; Elena
                      </h5>
                      <p className="text-body-sm text-on-surface-variant">
                        Propietarios de Vivienda Unifamiliar Passivhaus Certificada
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low p-10 rounded-[2.5rem] flex flex-col justify-between relative overflow-hidden border border-outline-variant/40 shadow-sm">
                  <div className="absolute top-0 right-0 p-8 opacity-10 text-primary">
                    <span className="material-symbols-outlined text-7xl">format_quote</span>
                  </div>
                  <p className="font-body-lg text-moss-deep italic mb-8 relative z-10 leading-relaxed text-lg">
                    "El silencio pleno dentro de casa es asombroso. Al estar en la ciudad, el aislamiento acústico combinado con el aire puro constante ha transformado nuestra salud y descanso."
                  </p>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center font-headline-sm text-primary font-bold">
                      S
                    </div>
                    <div>
                      <h5 className="font-headline-sm text-moss-deep text-[16px] font-bold">
                        Sofía R.
                      </h5>
                      <p className="text-body-sm text-on-surface-variant">
                        Rehabilitación Passivhaus EnerPHit
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer CTA Final de Alta Conversión */}
          <section
            id="sec-cta-final"
            className={`py-24 px-6 lg:px-12 bg-surface-dim relative overflow-hidden text-center border-t border-outline-variant/30 ${
              inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
            }`}
          >
            {inspectorMode && (
              <button
                onClick={() => openSectionInStudio('cta-final')}
                className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[14px]">code_blocks</span>
                <span>Copiar Bloque Gutenberg: CTA Final</span>
              </button>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/20 via-transparent to-transparent pointer-events-none" />
            <div className="max-w-4xl mx-auto space-y-8 relative z-10">
              <span className="inline-block px-5 py-2 rounded-full bg-primary-container text-primary font-label-md font-bold">
                Plazas Abiertas Trimestre Actual
              </span>
              <h2 className="font-headline-xl text-3xl sm:text-5xl text-moss-deep font-extrabold tracking-tight">
                Solo 2 proyectos exclusivos al mes.{' '}
                <span className="text-primary block mt-2">Asegura tu sesión estratégica.</span>
              </h2>
              <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto text-lg leading-relaxed">
                Conversación técnica de 20 minutos por videollamada con Vanesa Ezquerra para analizar la viabilidad, presupuesto estimado y hoja de ruta de tu futuro hogar Passivhaus.
              </p>
              <div>
                <a
                  className="inline-flex items-center gap-3 bg-primary text-on-primary font-label-md px-10 py-5 rounded-2xl hover:bg-moss-deep transition-all text-base shadow-xl shadow-primary/20 font-semibold"
                  href="#reservar-20-min"
                  onClick={openBooking}
                  style={{ backgroundColor: 'rgb(132, 204, 22)', color: 'rgb(0, 0, 0)' }}
                >
                  <span className="">Reservar Sesión Estratégica (20 min)</span>
                  <span className="material-symbols-outlined text-[20px]">calendar_month</span>
                </a>
              </div>
              <p className="text-body-sm text-on-surface-variant pt-2">
                Sin compromiso comercial. Rigor técnico garantizado desde el primer minuto.
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer
        id="sec-footer"
        className={`w-full bg-[#EFEFEA] py-16 text-on-surface-variant border-t border-outline-variant/30 relative ${
          inspectorMode ? 'ring-2 ring-inset ring-primary/60' : ''
        }`}
      >
        {inspectorMode && (
          <button
            onClick={() => openSectionInStudio('footer')}
            className="absolute top-4 right-4 z-30 bg-moss-deep text-white text-xs font-label-md px-3 py-1.5 rounded-full shadow-md hover:bg-primary transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[14px]">code_blocks</span>
            <span>Copiar Bloque Gutenberg: Footer TT5</span>
          </button>
        )}
        <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="space-y-3">
            <h4 className="font-headline-sm text-moss-deep font-bold text-lg">Vanesa Ezquerra</h4>
            <p className="text-body-sm text-on-surface-variant">
              Certified Passivhaus Designer &amp; Sustainable Architecture Studio.
            </p>
          </div>
          <div className="space-y-3">
            <h5 className="font-headline-sm text-moss-deep font-bold text-[16px]">Contacto</h5>
            <p className="text-body-sm text-on-surface-variant">studio@vanesaezquerra.com</p>
            <p className="text-body-sm text-on-surface-variant">+34 900 000 000</p>
          </div>
          <div className="space-y-3">
            <h5 className="font-headline-sm text-moss-deep font-bold text-[16px]">Legal</h5>
            <p className="text-body-sm text-on-surface-variant">
              © 2024 Vanesa Ezquerra. All rights reserved.
            </p>
            <p
              onClick={() => setLegalModalOpen(true)}
              className="text-body-sm text-primary hover:underline cursor-pointer font-medium"
            >
              Aviso Legal &amp; Privacidad
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WordPress Twenty Twenty-Five (TT5) Gutenberg Dock */}
      <div className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-moss-deep/95 backdrop-blur-md text-white p-2 rounded-2xl shadow-2xl border border-primary-container/20">
        <button
          type="button"
          onClick={() => setInspectorMode(!inspectorMode)}
          className={`px-3.5 py-2 rounded-xl text-xs font-label-md font-semibold flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
            inspectorMode
              ? 'bg-[#84CC16] text-black'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
        >
          <span className="material-symbols-outlined text-[16px]">select_all</span>
          <span>{inspectorMode ? 'Inspector TT5: Activo' : 'Inspector Secciones'}</span>
        </button>

        <button
          type="button"
          onClick={() => handleCopy(FULL_GUTENBERG_PAGE_CODE, 'floating-copy')}
          className="px-3.5 py-2 rounded-xl text-xs font-label-md font-semibold bg-white/10 hover:bg-white/20 text-white flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[16px]">
            {copiedId === 'floating-copy' ? 'check' : 'content_copy'}
          </span>
          <span>
            {copiedId === 'floating-copy' ? '¡Bloques Copiados!' : 'Copiar Página TT5'}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setStudioOpen(true)}
          className="px-4 py-2 rounded-xl text-xs font-label-md font-bold bg-primary-container text-on-primary-container hover:bg-[#84CC16] hover:text-black flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap"
        >
          <span className="material-symbols-outlined text-[16px]">integration_instructions</span>
          <span>Código Gutenberg TT5</span>
        </button>
      </div>

      {/* WordPress Gutenberg Twenty Twenty-Five (TT5) Export & Verification Modal */}
      {studioOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6">
          <div className="bg-background border border-outline-variant/60 rounded-3xl max-w-6xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            {/* Modal Header */}
            <div className="px-6 py-5 bg-surface-container border-b border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs text-primary font-semibold uppercase tracking-wider">
                  <span>WordPress Block Editor (Gutenberg)</span>
                  <span>·</span>
                  <span>Twenty Twenty-Five (TT5) Ready</span>
                  <span>·</span>
                  <span>100% Textos Literales</span>
                </div>
                <h3 className="font-headline-md text-xl text-moss-deep font-bold mt-1">
                  Conversión Exacta a Bloques Gutenberg — Vanesa Ezquerra
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleCopy(FULL_GUTENBERG_PAGE_CODE, 'modal-header-copy')}
                  className="px-4 py-2 rounded-xl bg-primary text-on-primary text-xs font-semibold flex items-center gap-2 hover:bg-moss-deep transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[16px]">
                    {copiedId === 'modal-header-copy' ? 'check' : 'content_copy'}
                  </span>
                  <span>
                    {copiedId === 'modal-header-copy'
                      ? '¡Copiado al portapapeles!'
                      : 'Copiar Todo el Código Gutenberg'}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setStudioOpen(false)}
                  className="w-9 h-9 rounded-full bg-surface-container-high text-on-surface flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer"
                  aria-label="Cerrar ventana"
                >
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="px-6 py-3 bg-surface-dim border-b border-outline-variant/30 flex flex-wrap items-center gap-2">
              <button
                type="button"
                onClick={() => setActiveTab('full')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'full'
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                1. Página Completa Gutenberg (TT5)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('sections')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'sections'
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                2. Bloques por Sección (8 Secciones)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('css')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'css'
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                3. CSS Adicional Twenty Twenty-Five
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('themejson')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'themejson'
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                4. Configuración theme.json (TT5)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('verifier')}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                  activeTab === 'verifier'
                    ? 'bg-primary text-white'
                    : 'bg-surface-container text-on-surface-variant hover:text-primary'
                }`}
              >
                5. Auditoría de Textos Literales (100%)
              </button>
            </div>

            {/* Modal Body */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {activeTab === 'full' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-headline-sm text-sm font-bold text-moss-deep">
                        Instrucciones de Pegado Directo en WordPress Twenty Twenty-Five (TT5)
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        En tu editor de páginas de WordPress (tema Twenty Twenty-Five), abre el menú superior derecho (⋮) → elige <strong>Editor de código</strong> (Ctrl+Shift+Alt+M) → pega este bloque completo y vuelve al <strong>Editor visual</strong>.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(FULL_GUTENBERG_PAGE_CODE, 'full-tab-copy')}
                      className="px-4 py-2.5 rounded-xl bg-[#84CC16] text-black text-xs font-bold hover:opacity-90 transition-opacity shrink-0 cursor-pointer"
                    >
                      {copiedId === 'full-tab-copy' ? '¡Copiado!' : 'Copiar Código Completo'}
                    </button>
                  </div>
                  <pre className="p-5 rounded-2xl bg-[#11200D] text-[#D7E6CF] text-xs font-mono overflow-x-auto leading-relaxed max-h-[52vh]">
                    <code>{FULL_GUTENBERG_PAGE_CODE}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'sections' && (
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                  <div className="lg:col-span-4 space-y-2">
                    {GUTENBERG_SECTIONS.map((sec) => (
                      <button
                        key={sec.id}
                        type="button"
                        onClick={() => setSelectedSectionId(sec.id)}
                        className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer ${
                          selectedSectionId === sec.id
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-surface-container-low text-on-surface border-outline-variant/40 hover:bg-surface-container'
                        }`}
                      >
                        <div className="font-headline-sm text-xs font-bold">{sec.title}</div>
                        <div
                          className={`text-[11px] mt-1 ${
                            selectedSectionId === sec.id
                              ? 'text-primary-container'
                              : 'text-on-surface-variant'
                          }`}
                        >
                          {sec.subtitle}
                        </div>
                      </button>
                    ))}
                  </div>
                  <div className="lg:col-span-8 space-y-4">
                    <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h4 className="font-headline-sm text-base font-bold text-moss-deep">
                          {currentSection.title}
                        </h4>
                        <p className="text-xs text-on-surface-variant mt-0.5">
                          Bloques empleados: {currentSection.blockTypes.join(' · ')}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleCopy(currentSection.gutenbergCode, `sec-${currentSection.id}`)
                        }
                        className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-moss-deep transition-colors cursor-pointer"
                      >
                        {copiedId === `sec-${currentSection.id}`
                          ? '¡Sección Copiada!'
                          : 'Copiar Esta Sección'}
                      </button>
                    </div>
                    <pre className="p-5 rounded-2xl bg-[#11200D] text-[#D7E6CF] text-xs font-mono overflow-x-auto leading-relaxed max-h-[48vh]">
                      <code>{currentSection.gutenbergCode}</code>
                    </pre>
                  </div>
                </div>
              )}

              {activeTab === 'css' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-headline-sm text-sm font-bold text-moss-deep">
                        Hoja de Estilos para Twenty Twenty-Five (TT5)
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        Garantiza la carga de <strong>Syne</strong>, <strong>DM Sans</strong>, <strong>Material Symbols Outlined</strong> y las rejillas asimétricas de 12 columnas en TT5.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(TT5_CUSTOM_CSS, 'css-copy')}
                      className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-moss-deep transition-colors cursor-pointer"
                    >
                      {copiedId === 'css-copy' ? '¡CSS Copiado!' : 'Copiar CSS Adicional'}
                    </button>
                  </div>
                  <pre className="p-5 rounded-2xl bg-[#11200D] text-[#D7E6CF] text-xs font-mono overflow-x-auto leading-relaxed max-h-[52vh]">
                    <code>{TT5_CUSTOM_CSS}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'themejson' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-wrap items-center justify-between gap-4">
                    <div className="space-y-1">
                      <h4 className="font-headline-sm text-sm font-bold text-moss-deep">
                        Paleta y Tipografía Nativa para theme.json en Twenty Twenty-Five (TT5)
                      </h4>
                      <p className="text-xs text-on-surface-variant">
                        Registra los tokens cromáticos exactos (#FCFCFA, #2D4A22, #1D3216, #D7E6CF, #F4F4F0, #84CC16) y las familias tipográficas Syne y DM Sans en el Editor del Sitio de TT5.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy(TT5_THEME_JSON_SNIPPET, 'themejson-copy')}
                      className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-moss-deep transition-colors cursor-pointer"
                    >
                      {copiedId === 'themejson-copy' ? '¡theme.json Copiado!' : 'Copiar theme.json'}
                    </button>
                  </div>
                  <pre className="p-5 rounded-2xl bg-[#11200D] text-[#D7E6CF] text-xs font-mono overflow-x-auto leading-relaxed max-h-[52vh]">
                    <code>{TT5_THEME_JSON_SNIPPET}</code>
                  </pre>
                </div>
              )}

              {activeTab === 'verifier' && (
                <div className="space-y-4">
                  <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/40">
                    <h4 className="font-headline-sm text-sm font-bold text-moss-deep">
                      Verificación Estricta de Textos Originales (0 palabras modificadas)
                    </h4>
                    <p className="text-xs text-on-surface-variant mt-1">
                      Comprobación literal bloque por bloque de que cada frase, cifra y etiqueta del HTML original está presente de forma idéntica en la vista web y en el código Gutenberg TT5.
                    </p>
                  </div>
                  <div className="space-y-4">
                    {GUTENBERG_SECTIONS.map((sec) => (
                      <div
                        key={sec.id}
                        className="p-5 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-3"
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-headline-sm text-sm font-bold text-moss-deep">
                            {sec.title}
                          </span>
                          <span className="text-xs font-semibold text-primary">
                            {sec.literalTexts.length} cadenas literales verificadas
                          </span>
                        </div>
                        <ul className="space-y-1.5 text-xs text-on-surface-variant">
                          {sec.literalTexts.map((txt, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 bg-background p-2 rounded-lg border border-outline-variant/20"
                            >
                              <span className="material-symbols-outlined text-primary text-[16px] shrink-0 mt-0.5">
                                check_circle
                              </span>
                              <span className="font-body-sm text-on-surface">{txt}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Interactive Modal for Strategic Session Booking */}
      {bookingModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background border border-outline-variant/50 rounded-[2rem] max-w-lg w-full p-8 shadow-2xl relative space-y-6">
            <button
              type="button"
              onClick={() => setBookingModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer"
              aria-label="Cerrar modal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {!bookingSubmitted ? (
              <>
                <div className="space-y-2">
                  <span className="text-xs font-label-md uppercase tracking-widest text-primary font-semibold">
                    Vanesa Ezquerra · Boutique Studio
                  </span>
                  <h3 className="font-headline-lg text-2xl text-moss-deep font-bold">
                    Reservar Sesión Estratégica (20 min)
                  </h3>
                  <p className="text-body-sm text-on-surface-variant">
                    Conversación técnica de 20 minutos por videollamada con Vanesa Ezquerra para analizar la viabilidad, presupuesto estimado y hoja de ruta de tu futuro hogar Passivhaus.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-moss-deep mb-1.5">
                      Nombre completo
                    </label>
                    <input
                      type="text"
                      required
                      value={bookingForm.nombre}
                      onChange={(e) => setBookingForm({ ...bookingForm, nombre: e.target.value })}
                      placeholder="Ej. Elena Martínez"
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/60 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-moss-deep mb-1.5">
                      Correo electrónico
                    </label>
                    <input
                      type="email"
                      required
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      placeholder="tu@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/60 text-sm focus:outline-none focus:border-primary"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-moss-deep mb-1.5">
                        Ubicación de la parcela / inmueble
                      </label>
                      <input
                        type="text"
                        value={bookingForm.ubicacion}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, ubicacion: e.target.value })
                        }
                        placeholder="Provincia / Municipio"
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/60 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-moss-deep mb-1.5">
                        Tipología
                      </label>
                      <select
                        value={bookingForm.tipoProyecto}
                        onChange={(e) =>
                          setBookingForm({ ...bookingForm, tipoProyecto: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface-container-low border border-outline-variant/60 text-sm focus:outline-none focus:border-primary"
                      >
                        <option>Obra Nueva Passivhaus</option>
                        <option>Rehabilitación EnerPHit</option>
                        <option>Consultoría / Certificación</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl font-label-md font-semibold text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-opacity hover:opacity-95"
                    style={{ backgroundColor: 'rgb(132, 204, 22)', color: 'rgb(0, 0, 0)' }}
                  >
                    <span>Confirmar Solicitud de Sesión Estratégica</span>
                    <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                  </button>
                </form>
              </>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary-container text-primary mx-auto flex items-center justify-center">
                  <span className="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h4 className="font-headline-md text-2xl text-moss-deep font-bold">
                  Solicitud recibida para {bookingForm.nombre}
                </h4>
                <p className="text-body-sm text-on-surface-variant max-w-md mx-auto">
                  Hemos enviado los horarios disponibles de este trimestre a{' '}
                  <strong className="text-moss-deep">{bookingForm.email}</strong> desde{' '}
                  <strong className="text-primary">studio@vanesaezquerra.com</strong>.
                </p>
                <button
                  type="button"
                  onClick={() => setBookingModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-moss-deep transition-colors cursor-pointer"
                >
                  Volver a la web
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Legal & Privacy Modal */}
      {legalModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-background border border-outline-variant/50 rounded-[2rem] max-w-lg w-full p-8 shadow-2xl relative space-y-4">
            <button
              type="button"
              onClick={() => setLegalModalOpen(false)}
              className="absolute top-6 right-6 w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary cursor-pointer"
              aria-label="Cerrar aviso legal"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>
            <h3 className="font-headline-md text-xl text-moss-deep font-bold">
              Aviso Legal &amp; Privacidad
            </h3>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              Titular: Vanesa Ezquerra — Certified Passivhaus Designer &amp; Sustainable Architecture Studio. Contacto oficial: studio@vanesaezquerra.com · Teléfono: +34 900 000 000.
            </p>
            <p className="text-body-sm text-on-surface-variant leading-relaxed">
              © 2024 Vanesa Ezquerra. All rights reserved. Todos los datos facilitados durante la reserva de la Sesión Estratégica se tratan bajo estricto cumplimiento del RGPD con la única finalidad de evaluar la viabilidad técnica de su proyecto Passivhaus.
            </p>
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setLegalModalOpen(false)}
                className="px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-moss-deep transition-colors cursor-pointer"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
