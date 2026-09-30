(function () {
  'use strict';

  /* ==========================================================
     CONFIGURACIÓN
     ========================================================== */
  var STORE_THEME = 'pf-theme';
  var STORE_LANG  = 'pf-lang';

  var THEMES = ['dark', 'light', 'warm', 'ocean'];
  var LANGS  = ['es', 'en', 'pt'];

  var THEME_COLOR = {
    dark:  '#0a1628',
    light: '#f4f6fb',
    warm:  '#1a1310',
    ocean: '#041b22'
  };

  var currentLang = 'es';

  /* ------------------------------------------------------
     DICCIONARIOS DE TRADUCCIÓN
     ------------------------------------------------------ */
  var I18N = {

    /* ---------------- ESPAÑOL ---------------- */
    es: {
      'doc.title': 'Javier Suárez — Desarrollador Web Frontend & Backend',
      'doc.desc': 'Portafolio profesional de Javier Suárez, Desarrollador Web Frontend y Backend. Interfaces rápidas, accesibles y APIs sólidas.',

      'nav.skip': 'Saltar al contenido',
      'nav.aria': 'Navegación principal',
      'nav.toggle': 'Abrir menú de navegación',
      'nav.exp': 'Experiencia',
      'nav.edu': 'Educación',
      'nav.proj': 'Proyectos',
      'nav.skills': 'Skills',
      'nav.contact': 'Contacto',

      'prefs.theme': 'Tema',
      'prefs.lang': 'Idioma',
      'prefs.themeAria': 'Cambiar tema',
      'prefs.langAria': 'Cambiar idioma',
      'prefs.themeMenu': 'Elegir tema',
      'prefs.langMenu': 'Elegir idioma',
      'theme.dark': 'Oscuro',
      'theme.light': 'Claro',
      'theme.warm': 'Cálido',
      'theme.ocean': 'Océano',

      'hero.greeting': 'Hola, soy',
      'hero.subtitle': 'Desarrollador Web <strong>Frontend</strong> &amp; <strong>Backend</strong>',
      'hero.text': 'Diseño y construyo <b>productos web completos</b>: interfaces rápidas, accesibles y cuidadas al detalle, y APIs robustas que las sostienen. Me muevo con comodidad entre el pixel y la base de datos, y disfruto convertir requisitos complejos en soluciones simples, medibles y fáciles de mantener.',
      'hero.cta': 'Escríbeme',
      'hero.photoAlt': 'Retrato de Javier Suárez',

      'exp.eyebrow': '01 — Trayectoria',
      'exp.title': 'Experiencia Laboral',
      'exp.desc': 'Más de cinco años construyendo productos web en equipos de producto, con foco en rendimiento, accesibilidad y calidad de código.',
      'exp.job1.role': 'Frontend Developer',
      'exp.job1.date': '2022 — Presente',
      'exp.job1.meta': '· Plataforma SaaS B2B · Remoto',
      'exp.job1.desc': 'Responsable de la capa de presentación de una plataforma SaaS utilizada por más de 40.000 usuarios mensuales, trabajando codo a codo con diseño y producto.',
      'exp.job1.a1': 'Reduje el tiempo de carga inicial en un 42% aplicando code splitting, lazy loading de rutas y optimización de assets críticos.',
      'exp.job1.a2': 'Diseñé e implementé una librería interna de componentes reutilizables que aceleró la entrega de nuevas pantallas en un 35%.',
      'exp.job1.a3': 'Impulsé la adopción de buenas prácticas de accesibilidad (WCAG 2.1 AA) y una guía de estilos compartida con diseño.',
      'exp.job2.role': 'Full Stack Developer',
      'exp.job2.date': '2020 — 2022',
      'exp.job2.meta': '· E-commerce multi-tenant · Híbrido',
      'exp.job2.desc': 'Desarrollé y mantuve el núcleo de una plataforma de comercio electrónico con más de 200 tiendas activas, desde la API hasta la interfaz del panel de administración.',
      'exp.job2.a1': 'Construí la API REST que soporta catálogo, carrito y checkout, con cobertura de tests superior al 85%.',
      'exp.job2.a2': 'Optimicé consultas y esquemas de base de datos, reduciendo el tiempo de respuesta medio de 320 ms a 110 ms.',
      'exp.job2.a3': 'Automaticé el pipeline de despliegue, pasando de releases semanales a releases diarias sin incidencias.',

      'edu.eyebrow': '02 — Formación',
      'edu.title': 'Educación',
      'edu.desc': 'Base académica en ingeniería de software, complementada con formación continua en desarrollo web moderno.',
      'edu.c1.title': 'Ingeniería en Sistemas Computacionales',
      'edu.c1.desc': 'Formación sólida en estructuras de datos, algoritmos, arquitectura de software, redes y bases de datos. Proyecto de titulación orientado a sistemas distribuidos y diseño de APIs escalables, con mención honorífica por desempeño académico.',
      'edu.c2.title': 'Formación complementaria',
      'edu.c2.meta': 'Especialización en Desarrollo Web',
      'edu.c2.desc': 'Programas intensivos en JavaScript moderno, arquitecturas frontend basadas en componentes, diseño de APIs REST y buenas prácticas de testing, rendimiento y accesibilidad web.',

      'proj.eyebrow': '03 — Portafolio',
      'proj.title': 'Proyectos',
      'proj.desc': 'Una selección de trabajos donde combino diseño de interfaz, lógica de negocio y datos.',
      'proj.p1.title': 'Sistema Administrativo Universitario',
      'proj.p1.desc': 'Portal académico enfocado en el rol del estudiante, diseñado para que pueda llevar el control, seguimiento y gestión integral de sus estudios: inscripción de asignaturas, historial académico, calificaciones y estado de su plan curricular, todo desde un panel claro y responsive.',
      'proj.p1.code': 'Ver código de Sistema Administrativo Universitario',
      'proj.p1.demo': 'Ver demo de Sistema Administrativo Universitario',
      'proj.p2.title': 'E-commerce Básico',
      'proj.p2.desc': 'Tienda online completamente funcional que incluye catálogo de productos con búsqueda y filtrado, carrito de compras persistente y gestión del flujo de venta completo, desde la selección del producto hasta la confirmación del pedido.',
      'proj.p2.code': 'Ver código de E-commerce Básico',
      'proj.p2.demo': 'Ver demo de E-commerce Básico',

      'gallery.prev': 'Imagen anterior',
      'gallery.next': 'Imagen siguiente',
      'gallery.zoom': 'Ver imagen en grande',
      'gallery.close': 'Cerrar',
      'gallery.lightbox': 'Imagen ampliada',
      'gallery.see1': 'Ver imagen 1',
      'gallery.see2': 'Ver imagen 2',
      'gallery.see3': 'Ver imagen 3',
      'proj.p1.img1': 'Panel principal del Sistema Administrativo Universitario con el horario semanal',
      'proj.p1.img2': 'Panel con tareas de la semana y próximos exámenes',
      'proj.p1.img3': 'Versión móvil del Sistema Administrativo Universitario',
      'proj.p2.img1': 'Catálogo de productos de la tienda con buscador y filtros por categoría',
      'proj.p2.img2': 'Captura completa de la página de la tienda en línea',
      'proj.p2.img3': 'Versión móvil de la tienda con fichas de producto y precios',

      'skills.eyebrow': '04 — Tecnologías',
      'skills.title': 'Skills',
      'skills.desc': 'Herramientas con las que trabajo a diario, del píxel a la base de datos.',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',

      'contact.eyebrow': '05 — Contacto',
      'contact.title': 'Hablemos de tu próximo proyecto',
      'contact.desc': '¿Tienes una idea, una oferta o simplemente quieres saludar? Rellena el formulario y te responderé en menos de 24 horas.',
      'contact.lead': 'Prefiero las conversaciones claras: cuéntame qué necesitas, en qué plazos te mueves y qué esperas conseguir. Si encaja, te propongo un plan; si no, te lo digo con honestidad.',

      'form.name': 'Nombre',
      'form.namePh': 'Tu nombre',
      'form.email': 'Email',
      'form.emailPh': 'tu@email.com',
      'form.subject': 'Asunto',
      'form.subjectPh': '¿Sobre qué quieres hablar?',
      'form.message': 'Mensaje',
      'form.messagePh': 'Cuéntame tu proyecto, plazos y objetivo…',
      'form.hp': 'No rellenar',
      'form.submit': 'Enviar mensaje',
      'form.err.required': 'Este campo es obligatorio.',
      'form.err.email': 'Introduce un email válido.',
      'form.status.pending': 'Enviando…',
      'form.status.success': '¡Mensaje enviado! Te responderé en menos de 24 horas.',
      'form.status.error': 'No se pudo enviar. Inténtalo de nuevo o escríbeme a hola@javiersuarez.dev.',

      'footer.credit': 'Javier Suárez — Hecho con HTML, CSS y Vanilla JS.',
      'footer.top': 'Volver arriba ↑'
    },

    /* ---------------- INGLÉS ---------------- */
    en: {
      'doc.title': 'Javier Suárez — Frontend & Backend Web Developer',
      'doc.desc': 'Professional portfolio of Javier Suárez, Frontend and Backend Web Developer. Fast, accessible interfaces and solid APIs.',

      'nav.skip': 'Skip to content',
      'nav.aria': 'Main navigation',
      'nav.toggle': 'Open navigation menu',
      'nav.exp': 'Experience',
      'nav.edu': 'Education',
      'nav.proj': 'Projects',
      'nav.skills': 'Skills',
      'nav.contact': 'Contact',

      'prefs.theme': 'Theme',
      'prefs.lang': 'Language',
      'prefs.themeAria': 'Change theme',
      'prefs.langAria': 'Change language',
      'prefs.themeMenu': 'Choose a theme',
      'prefs.langMenu': 'Choose a language',
      'theme.dark': 'Dark',
      'theme.light': 'Light',
      'theme.warm': 'Warm',
      'theme.ocean': 'Ocean',

      'hero.greeting': 'Hi, I’m',
      'hero.subtitle': 'Web Developer <strong>Frontend</strong> &amp; <strong>Backend</strong>',
      'hero.text': 'I design and build <b>complete web products</b>: fast, accessible, detail-driven interfaces, and the robust APIs that support them. I move comfortably between the pixel and the database, and I enjoy turning complex requirements into simple, measurable, easy-to-maintain solutions.',
      'hero.cta': 'Get in touch',
      'hero.photoAlt': 'Portrait of Javier Suárez',

      'exp.eyebrow': '01 — Career',
      'exp.title': 'Work Experience',
      'exp.desc': 'More than five years building web products in product teams, focused on performance, accessibility and code quality.',
      'exp.job1.role': 'Frontend Developer',
      'exp.job1.date': '2022 — Present',
      'exp.job1.meta': '· B2B SaaS Platform · Remote',
      'exp.job1.desc': 'In charge of the presentation layer of a SaaS platform used by more than 40,000 monthly users, working side by side with design and product.',
      'exp.job1.a1': 'Reduced initial load time by 42% by applying code splitting, route lazy loading and critical asset optimization.',
      'exp.job1.a2': 'Designed and shipped an internal reusable component library that sped up delivery of new screens by 35%.',
      'exp.job1.a3': 'Drove the adoption of accessibility best practices (WCAG 2.1 AA) and a style guide shared with design.',
      'exp.job2.role': 'Full Stack Developer',
      'exp.job2.date': '2020 — 2022',
      'exp.job2.meta': '· Multi-tenant E-commerce · Hybrid',
      'exp.job2.desc': 'Built and maintained the core of an e-commerce platform with more than 200 active stores, from the API to the admin dashboard interface.',
      'exp.job2.a1': 'Built the REST API powering catalog, cart and checkout, with test coverage above 85%.',
      'exp.job2.a2': 'Optimized queries and database schemas, cutting average response time from 320 ms to 110 ms.',
      'exp.job2.a3': 'Automated the deployment pipeline, moving from weekly releases to daily releases with no incidents.',

      'edu.eyebrow': '02 — Education',
      'edu.title': 'Education',
      'edu.desc': 'Academic background in software engineering, complemented with continuous training in modern web development.',
      'edu.c1.title': 'B.Sc. in Computer Systems Engineering',
      'edu.c1.desc': 'Solid training in data structures, algorithms, software architecture, networks and databases. Graduation project focused on distributed systems and scalable API design, with honors for academic performance.',
      'edu.c2.title': 'Additional training',
      'edu.c2.meta': 'Specialization in Web Development',
      'edu.c2.desc': 'Intensive programs in modern JavaScript, component-based frontend architectures, REST API design and best practices in testing, performance and web accessibility.',

      'proj.eyebrow': '03 — Portfolio',
      'proj.title': 'Projects',
      'proj.desc': 'A selection of work where I combine interface design, business logic and data.',
      'proj.p1.title': 'University Administrative System',
      'proj.p1.desc': 'Academic portal focused on the student role, built to control, track and manage their studies end to end: course enrollment, academic history, grades and the status of their study plan, all from a clear, responsive dashboard.',
      'proj.p1.code': 'View source of University Administrative System',
      'proj.p1.demo': 'View demo of University Administrative System',
      'proj.p2.title': 'Basic E-commerce',
      'proj.p2.desc': 'A fully functional online store with a searchable, filterable product catalog, a persistent shopping cart and the complete sales flow, from picking a product to order confirmation.',
      'proj.p2.code': 'View source of Basic E-commerce',
      'proj.p2.demo': 'View demo of Basic E-commerce',

      'gallery.prev': 'Previous image',
      'gallery.next': 'Next image',
      'gallery.zoom': 'View image full size',
      'gallery.close': 'Close',
      'gallery.lightbox': 'Enlarged image',
      'gallery.see1': 'View image 1',
      'gallery.see2': 'View image 2',
      'gallery.see3': 'View image 3',
      'proj.p1.img1': 'Main dashboard of the University Administrative System with the weekly schedule',
      'proj.p1.img2': 'Dashboard showing the tasks of the week and upcoming exams',
      'proj.p1.img3': 'Mobile version of the University Administrative System',
      'proj.p2.img1': 'Store product catalog with search and category filters',
      'proj.p2.img2': 'Full-page capture of the online store home page',
      'proj.p2.img3': 'Mobile version of the store with product cards and prices',

      'skills.eyebrow': '04 — Technologies',
      'skills.title': 'Skills',
      'skills.desc': 'Tools I use every day, from the pixel to the database.',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',

      'contact.eyebrow': '05 — Contact',
      'contact.title': 'Let’s talk about your next project',
      'contact.desc': 'Got an idea, an offer or just want to say hi? Fill in the form and I will get back to you within 24 hours.',
      'contact.lead': 'I prefer clear conversations: tell me what you need, your timelines and what you expect to achieve. If it fits, I will propose a plan; if not, I will tell you honestly.',

      'form.name': 'Name',
      'form.namePh': 'Your name',
      'form.email': 'Email',
      'form.emailPh': 'you@email.com',
      'form.subject': 'Subject',
      'form.subjectPh': 'What would you like to talk about?',
      'form.message': 'Message',
      'form.messagePh': 'Tell me about your project, timelines and goal…',
      'form.hp': 'Do not fill in',
      'form.submit': 'Send message',
      'form.err.required': 'This field is required.',
      'form.err.email': 'Enter a valid email address.',
      'form.status.pending': 'Sending…',
      'form.status.success': 'Message sent! I will reply within 24 hours.',
      'form.status.error': 'Could not be sent. Try again or email me at hola@javiersuarez.dev.',

      'footer.credit': 'Javier Suárez — Built with HTML, CSS and Vanilla JS.',
      'footer.top': 'Back to top ↑'
    },

    /* ---------------- PORTUGUÉS ---------------- */
    pt: {
      'doc.title': 'Javier Suárez — Desenvolvedor Web Frontend & Backend',
      'doc.desc': 'Portfólio profissional de Javier Suárez, Desenvolvedor Web Frontend e Backend. Interfaces rápidas, acessíveis e APIs sólidas.',

      'nav.skip': 'Ir para o conteúdo',
      'nav.aria': 'Navegação principal',
      'nav.toggle': 'Abrir menu de navegação',
      'nav.exp': 'Experiência',
      'nav.edu': 'Formação',
      'nav.proj': 'Projetos',
      'nav.skills': 'Skills',
      'nav.contact': 'Contato',

      'prefs.theme': 'Tema',
      'prefs.lang': 'Idioma',
      'prefs.themeAria': 'Alterar tema',
      'prefs.langAria': 'Alterar idioma',
      'prefs.themeMenu': 'Escolher tema',
      'prefs.langMenu': 'Escolher idioma',
      'theme.dark': 'Escuro',
      'theme.light': 'Claro',
      'theme.warm': 'Quente',
      'theme.ocean': 'Oceano',

      'hero.greeting': 'Olá, eu sou',
      'hero.subtitle': 'Desenvolvedor Web <strong>Frontend</strong> &amp; <strong>Backend</strong>',
      'hero.text': 'Projeto e construo <b>produtos web completos</b>: interfaces rápidas, acessíveis e cuidadas nos detalhes, e APIs robustas que as sustentam. Movo-me com conforto entre o pixel e o banco de dados e gosto de transformar requisitos complexos em soluções simples, mensuráveis e fáceis de manter.',
      'hero.cta': 'Escreva-me',
      'hero.photoAlt': 'Retrato de Javier Suárez',

      'exp.eyebrow': '01 — Trajetória',
      'exp.title': 'Experiência Profissional',
      'exp.desc': 'Mais de cinco anos construindo produtos web em equipes de produto, com foco em desempenho, acessibilidade e qualidade de código.',
      'exp.job1.role': 'Desenvolvedor Front-end',
      'exp.job1.date': '2022 — Presente',
      'exp.job1.meta': '· Plataforma SaaS B2B · Remoto',
      'exp.job1.desc': 'Responsável pela camada de apresentação de uma plataforma SaaS usada por mais de 40.000 usuários mensais, trabalhando lado a lado com design e produto.',
      'exp.job1.a1': 'Reduzi o tempo de carregamento inicial em 42% aplicando code splitting, lazy loading de rotas e otimização de assets críticos.',
      'exp.job1.a2': 'Criei uma biblioteca interna de componentes reutilizáveis que acelerou a entrega de novas telas em 35%.',
      'exp.job1.a3': 'Impulsionei a adoção de boas práticas de acessibilidade (WCAG 2.1 AA) e um guia de estilos compartilhado com o design.',
      'exp.job2.role': 'Desenvolvedor Full Stack',
      'exp.job2.date': '2020 — 2022',
      'exp.job2.meta': '· E-commerce multi-tenant · Híbrido',
      'exp.job2.desc': 'Desenvolvi e mantive o núcleo de uma plataforma de comércio eletrônico com mais de 200 lojas ativas, da API até a interface do painel de administração.',
      'exp.job2.a1': 'Construí a API REST que suporta catálogo, carrinho e checkout, com cobertura de testes superior a 85%.',
      'exp.job2.a2': 'Otimizei consultas e esquemas de banco de dados, reduzindo o tempo médio de resposta de 320 ms para 110 ms.',
      'exp.job2.a3': 'Automatizei o pipeline de deploy, passando de releases semanais para releases diários sem incidentes.',

      'edu.eyebrow': '02 — Formação',
      'edu.title': 'Educação',
      'edu.desc': 'Base acadêmica em engenharia de software, complementada com formação contínua em desenvolvimento web moderno.',
      'edu.c1.title': 'Engenharia de Sistemas Computacionais',
      'edu.c1.desc': 'Formação sólida em estruturas de dados, algoritmos, arquitetura de software, redes e bancos de dados. Projeto de conclusão voltado a sistemas distribuídos e design de APIs escaláveis, com menção honorífica por desempenho acadêmico.',
      'edu.c2.title': 'Formação complementar',
      'edu.c2.meta': 'Especialização em Desenvolvimento Web',
      'edu.c2.desc': 'Programas intensivos em JavaScript moderno, arquiteturas frontend baseadas em componentes, design de APIs REST e boas práticas de testes, desempenho e acessibilidade web.',

      'proj.eyebrow': '03 — Portfólio',
      'proj.title': 'Projetos',
      'proj.desc': 'Uma seleção de trabalhos onde combino design de interface, lógica de negócio e dados.',
      'proj.p1.title': 'Sistema Administrativo Universitário',
      'proj.p1.desc': 'Portal acadêmico focado no papel do estudante, feito para que ele acompanhe e gerencie integralmente seus estudos: inscrição em disciplinas, histórico acadêmico, notas e situação do plano curricular, tudo em um painel claro e responsivo.',
      'proj.p1.code': 'Ver código do Sistema Administrativo Universitário',
      'proj.p1.demo': 'Ver demo do Sistema Administrativo Universitário',
      'proj.p2.title': 'E-commerce Básico',
      'proj.p2.desc': 'Loja online totalmente funcional com catálogo de produtos, busca e filtros, carrinho persistente e gestão completa do fluxo de venda, da seleção do produto à confirmação do pedido.',
      'proj.p2.code': 'Ver código do E-commerce Básico',
      'proj.p2.demo': 'Ver demo do E-commerce Básico',

      'gallery.prev': 'Imagem anterior',
      'gallery.next': 'Próxima imagem',
      'gallery.zoom': 'Ver imagem em tamanho real',
      'gallery.close': 'Fechar',
      'gallery.lightbox': 'Imagem ampliada',
      'gallery.see1': 'Ver imagem 1',
      'gallery.see2': 'Ver imagem 2',
      'gallery.see3': 'Ver imagem 3',
      'proj.p1.img1': 'Painel principal do Sistema Administrativo Universitário com o horário semanal',
      'proj.p1.img2': 'Painel com tarefas da semana e próximos exames',
      'proj.p1.img3': 'Versão móvel do Sistema Administrativo Universitário',
      'proj.p2.img1': 'Catálogo de produtos da loja com busca e filtros por categoria',
      'proj.p2.img2': 'Captura completa da página da loja on-line',
      'proj.p2.img3': 'Versão móvel da loja com fichas de produto e preços',

      'skills.eyebrow': '04 — Tecnologias',
      'skills.title': 'Skills',
      'skills.desc': 'Ferramentas com as quais trabalho no dia a dia, do pixel ao banco de dados.',
      'skills.frontend': 'Frontend',
      'skills.backend': 'Backend',

      'contact.eyebrow': '05 — Contato',
      'contact.title': 'Vamos falar sobre o seu próximo projeto',
      'contact.desc': 'Tem uma ideia, uma proposta ou só quer dizer olá? Preencha o formulário e respondo em menos de 24 horas.',
      'contact.lead': 'Prefiro conversas claras: me conte o que você precisa, com quais prazos e o que espera alcançar. Se fizer sentido, proponho um plano; se não, digo com honestidade.',

      'form.name': 'Nome',
      'form.namePh': 'Seu nome',
      'form.email': 'E-mail',
      'form.emailPh': 'voce@email.com',
      'form.subject': 'Assunto',
      'form.subjectPh': 'Sobre o que você quer falar?',
      'form.message': 'Mensagem',
      'form.messagePh': 'Conte sobre seu projeto, prazos e objetivo…',
      'form.hp': 'Não preencher',
      'form.submit': 'Enviar mensagem',
      'form.err.required': 'Este campo é obrigatório.',
      'form.err.email': 'Informe um e-mail válido.',
      'form.status.pending': 'Enviando…',
      'form.status.success': 'Mensagem enviada! Respondo em menos de 24 horas.',
      'form.status.error': 'Não foi possível enviar. Tente novamente ou escreva para hola@javiersuarez.dev.',

      'footer.credit': 'Javier Suárez — Feito com HTML, CSS e Vanilla JS.',
      'footer.top': 'Voltar ao topo ↑'
    }
  };

  /* Utilidades */
  function qsa(sel) {
    return Array.prototype.slice.call(document.querySelectorAll(sel));
  }
  function qsaIn(root, sel) {
    return Array.prototype.slice.call(root.querySelectorAll(sel));
  }
  function store(key, value) {
    try { localStorage.setItem(key, value); } catch (e) {}
  }
  function read(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }

  /* ------------------------------------------------------
     1. Año dinámico
     ------------------------------------------------------ */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ------------------------------------------------------
     2. Header con estado "scrolled"
     ------------------------------------------------------ */
  var header = document.getElementById('header');
  var ticking = false;

  function updateHeader() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(updateHeader);
    }
  }, { passive: true });

  updateHeader();

  /* ------------------------------------------------------
     3. Menú móvil
     ------------------------------------------------------ */
  var toggle = document.querySelector('.nav__toggle');
  var menu = document.getElementById('nav-menu');

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var isOpen = menu.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeMenu();
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth > 820) closeMenu();
    });
  }

  /* ------------------------------------------------------
     4. Animaciones de entrada con IntersectionObserver
     ------------------------------------------------------ */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  var reduceMotion = !!(window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  // Stagger: retardo incremental para hijos de grids/listas
  document.querySelectorAll('[data-stagger]').forEach(function (group) {
    Array.prototype.forEach.call(group.children, function (child, i) {
      child.style.setProperty('--stagger', Math.min(i, 6) * 70 + 'ms');
    });
  });

  if (!('IntersectionObserver' in window) || reduceMotion) {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  } else {
    var revealObserver = new IntersectionObserver(function (entries, observer) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

    revealEls.forEach(function (el) { revealObserver.observe(el); });
  }

  /* ------------------------------------------------------
     5. Enlace activo en la navegación
     ------------------------------------------------------ */
  var sections = document.querySelectorAll('main section[id], footer[id]');
  var navLinks = document.querySelectorAll('.nav__link');

  function setActive(id) {
    navLinks.forEach(function (link) {
      var match = link.getAttribute('href') === '#' + id;
      if (match) {
        link.setAttribute('aria-current', 'true');
      } else {
        link.removeAttribute('aria-current');
      }
    });
  }

  if ('IntersectionObserver' in window && sections.length) {
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });

    sections.forEach(function (s) { navObserver.observe(s); });
  }

  /* ------------------------------------------------------
     6. CAMBIO DE TEMA (oscuro / claro / cálido / océano)
     ------------------------------------------------------ */
  function setTheme(name) {
    if (THEMES.indexOf(name) === -1) name = 'dark';

    document.documentElement.setAttribute('data-theme', name);
    store(STORE_THEME, name);

    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta && THEME_COLOR[name]) meta.setAttribute('content', THEME_COLOR[name]);

    qsa('[data-theme-set]').forEach(function (btn) {
      btn.setAttribute('aria-checked', String(btn.getAttribute('data-theme-set') === name));
    });
  }

  /* ------------------------------------------------------
     7. CAMBIO DE IDIOMA (español / inglés / portugués)
     ------------------------------------------------------ */
  function applyDict(dict) {
    qsa('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });

    qsa('[data-i18n-html]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-html')];
      if (v != null) el.innerHTML = v;
    });

    qsa('[data-i18n-ph]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-ph')];
      if (v != null) el.setAttribute('placeholder', v);
    });

    qsa('[data-i18n-alt]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-alt')];
      if (v != null) el.setAttribute('alt', v);
    });

    qsa('[data-i18n-aria]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) lang = 'es';

    var dict = I18N[lang] || I18N.es;
    currentLang = lang;

    document.documentElement.setAttribute('lang', lang);
    store(STORE_LANG, lang);

    if (dict['doc.title']) document.title = dict['doc.title'];

    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['doc.desc']) metaDesc.setAttribute('content', dict['doc.desc']);

    applyDict(dict);
    refreshDynamicText(dict);

    qsa('[data-lang-set]').forEach(function (btn) {
      btn.setAttribute('aria-checked', String(btn.getAttribute('data-lang-set') === lang));
    });
  }

  /* Traduce los mensajes del formulario que se generan con JS */
  function refreshDynamicText(dict) {
    qsa('.form-error[data-error-for]').forEach(function (el) {
      var reason = el.getAttribute('data-reason');
      if (reason && dict['form.err.' + reason]) el.textContent = dict['form.err.' + reason];
    });

    var status = document.querySelector('.form-status');
    if (status) {
      var state = status.getAttribute('data-state');
      if (state && dict['form.status.' + state]) status.textContent = dict['form.status.' + state];
    }

    if (typeof renderLightbox === 'function') renderLightbox();
  }

  /* ------------------------------------------------------
     8. MENÚS DESPLEGABLES DE PREFERENCIAS
     ------------------------------------------------------ */
  function closeOthers(current) {
    qsa('.prefs').forEach(function (root) {
      if (root === current) return;
      var m = root.querySelector('.prefs__menu');
      var b = root.querySelector('.prefs__btn');
      if (m && !m.hidden) {
        m.hidden = true;
        root.classList.remove('is-open');
        if (b) b.setAttribute('aria-expanded', 'false');
      }
    });
  }

  qsa('.prefs').forEach(function (root) {
    var btn = root.querySelector('.prefs__btn');
    var menuEl = root.querySelector('.prefs__menu');
    if (!btn || !menuEl) return;

    function close(focusBtn) {
      menuEl.hidden = true;
      root.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      if (focusBtn) btn.focus();
    }

    function open() {
      closeOthers(root);
      menuEl.hidden = false;
      root.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
      var first = menuEl.querySelector('.prefs__option');
      if (first) first.focus();
    }

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (menuEl.hidden) { open(); } else { close(false); }
    });

    menuEl.addEventListener('click', function (e) {
      var opt = e.target.closest('[data-theme-set], [data-lang-set]');
      if (!opt) return;

      if (opt.hasAttribute('data-theme-set')) setTheme(opt.getAttribute('data-theme-set'));
      if (opt.hasAttribute('data-lang-set')) setLang(opt.getAttribute('data-lang-set'));

      close(true);
    });

    document.addEventListener('click', function (e) {
      if (!root.contains(e.target)) close(false);
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !menuEl.hidden) close(true);
    });
  });

  /* ------------------------------------------------------
     9. FORMULARIO DE CONTACTO — validación + envío simulado
     ------------------------------------------------------ */
  var form = document.getElementById('contact-form');

  if (form) {
    var statusEl = form.querySelector('.form-status');
    var submitBtn = form.querySelector('button[type="submit"]');
    var honeypot = form.querySelector('[name="website"]');
    var submitting = false;

    var RULES = [
      { id: 'cf-name',    name: 'name',    type: 'required' },
      { id: 'cf-email',   name: 'email',   type: 'email' },
      { id: 'cf-subject', name: 'subject', type: 'required' },
      { id: 'cf-message', name: 'message', type: 'required' }
    ];

    function formDict() { return I18N[currentLang] || I18N.es; }

    function setError(rule, reason) {
      var input = document.getElementById(rule.id);
      var err = form.querySelector('[data-error-for="' + rule.name + '"]');
      if (err) {
        err.textContent = formDict()['form.err.' + reason];
        err.setAttribute('data-reason', reason);
      }
      if (input) input.setAttribute('aria-invalid', 'true');
    }

    function clearError(rule) {
      var input = document.getElementById(rule.id);
      var err = form.querySelector('[data-error-for="' + rule.name + '"]');
      if (err) {
        err.textContent = '';
        err.removeAttribute('data-reason');
      }
      if (input) input.removeAttribute('aria-invalid');
    }

    function check(rule) {
      var input = document.getElementById(rule.id);
      if (!input) return true;

      var value = input.value.trim();

      if (!value) { setError(rule, 'required'); return false; }
      if (rule.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        setError(rule, 'email');
        return false;
      }

      clearError(rule);
      return true;
    }

    function setStatus(state) {
      if (!statusEl) return;
      if (state) {
        statusEl.setAttribute('data-state', state);
        statusEl.textContent = formDict()['form.status.' + state] || '';
      } else {
        statusEl.removeAttribute('data-state');
        statusEl.textContent = '';
      }
    }

    RULES.forEach(function (rule) {
      var input = document.getElementById(rule.id);
      if (!input) return;
      input.addEventListener('input', function () {
        if (input.getAttribute('aria-invalid') === 'true') check(rule);
        if (statusEl && statusEl.getAttribute('data-state') === 'error') setStatus(null);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (submitting) return;

      // Honeypot: si un bot completa el campo oculto, se finge el éxito sin enviar nada
      if (honeypot && honeypot.value) {
        form.reset();
        setStatus('success');
        return;
      }

      var firstInvalid = null;
      RULES.forEach(function (rule) {
        if (!check(rule) && !firstInvalid) firstInvalid = rule;
      });

      if (firstInvalid) {
        setStatus(null);
        var invalid = document.getElementById(firstInvalid.id);
        if (invalid) invalid.focus();
        return;
      }

      // Sitio estático (sin backend): se simula el envío y se confirma
      submitting = true;
      if (submitBtn) submitBtn.disabled = true;
      setStatus('pending');

      window.setTimeout(function () {
        submitting = false;
        if (submitBtn) submitBtn.disabled = false;
        form.reset();
        RULES.forEach(clearError);
        setStatus('success');
      }, 900);
    });
  }

  /* ------------------------------------------------------
     9.5 GALERÍAS DE PROYECTOS + LIGHTBOX
     ------------------------------------------------------ */
  var lightbox = document.getElementById('lightbox');
  var lbImg = lightbox ? lightbox.querySelector('.lightbox__img') : null;
  var lbCaption = lightbox ? lightbox.querySelector('.lightbox__caption') : null;
  var lbCounter = lightbox ? lightbox.querySelector('.lightbox__counter') : null;
  var lbState = { gal: null, lastFocus: null };

  function renderLightbox() {
    var api = lbState.gal;
    if (!lightbox || !api || lightbox.hidden) return;
    var img = api.activeImg();
    if (!img || !lbImg) return;
    lbImg.src = img.currentSrc || img.src;
    lbImg.alt = img.alt || '';
    if (lbCaption) lbCaption.textContent = img.alt || '';
    if (lbCounter) lbCounter.textContent = api.index() + 1 + ' / ' + api.count;
  }

  function openLightbox(api) {
    if (!lightbox || !api) return;
    lbState.gal = api;
    lbState.lastFocus = document.activeElement;
    lightbox.hidden = false;
    document.body.classList.add('lightbox-open');
    renderLightbox();
    var closeBtn = lightbox.querySelector('.lightbox__btn--close');
    if (closeBtn) closeBtn.focus();
  }

  function closeLightbox() {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    document.body.classList.remove('lightbox-open');
    var gal = lbState.gal;
    lbState.gal = null;
    var restore = lbState.lastFocus;
    lbState.lastFocus = null;
    if (restore && document.contains(restore)) restore.focus();
    else if (gal) gal.focusZoom();
  }

  function lightboxNav(delta) {
    var api = lbState.gal;
    if (!api) return;
    api.show(api.index() + delta);
  }

  function trapFocus(e) {
    var focusables = lightbox.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusables.length) return;
    var first = focusables[0];
    var last = focusables[focusables.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault(); first.focus();
    } else if (!lightbox.contains(document.activeElement)) {
      e.preventDefault(); first.focus();
    }
  }

  qsa('[data-gallery]').forEach(function (gal) {
    var slides = qsaIn(gal, '.gallery__slide');
    var thumbs = qsaIn(gal, '.gallery__thumb');
    var currentEl = gal.querySelector('[data-gallery-current]');
    var totalEl = gal.querySelector('[data-gallery-total]');
    var zoomBtn = gal.querySelector('.gallery__zoom');
    var index = 0;

    if (totalEl) totalEl.textContent = String(slides.length);

    function show(next) {
      if (!slides.length) return;
      index = ((next % slides.length) + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === index); });
      thumbs.forEach(function (t, i) {
        t.classList.toggle('is-active', i === index);
        if (i === index) t.setAttribute('aria-current', 'true');
        else t.removeAttribute('aria-current');
      });
      if (currentEl) currentEl.textContent = String(index + 1);
      if (lbState.gal === api) renderLightbox();
    }

    function activeImg() {
      var s = slides[index];
      return s ? s.querySelector('img') : null;
    }

    var api = {
      el: gal,
      count: slides.length,
      show: show,
      index: function () { return index; },
      activeImg: activeImg,
      focusZoom: function () { if (zoomBtn) zoomBtn.focus(); }
    };

    var prevBtn = gal.querySelector('.gallery__arrow--prev');
    var nextBtn = gal.querySelector('.gallery__arrow--next');
    if (prevBtn) prevBtn.addEventListener('click', function () { show(index - 1); });
    if (nextBtn) nextBtn.addEventListener('click', function () { show(index + 1); });

    thumbs.forEach(function (t, i) {
      t.addEventListener('click', function () { show(i); });
    });

    if (zoomBtn) zoomBtn.addEventListener('click', function () { openLightbox(api); });

    var slidesList = gal.querySelector('.gallery__slides');
    if (slidesList) slidesList.addEventListener('click', function () { openLightbox(api); });

    return api;
  });

  if (lightbox) {
    Array.prototype.forEach.call(lightbox.querySelectorAll('[data-lb-close]'), function (el) {
      el.addEventListener('click', closeLightbox);
    });

    var lbPrev = lightbox.querySelector('.lightbox__btn--prev');
    var lbNext = lightbox.querySelector('.lightbox__btn--next');
    if (lbPrev) lbPrev.addEventListener('click', function () { lightboxNav(-1); });
    if (lbNext) lbNext.addEventListener('click', function () { lightboxNav(1); });

    document.addEventListener('keydown', function (e) {
      if (lightbox.hidden) return;
      if (e.key === 'Escape') { e.preventDefault(); closeLightbox(); }
      else if (e.key === 'ArrowLeft') { e.preventDefault(); lightboxNav(-1); }
      else if (e.key === 'ArrowRight') { e.preventDefault(); lightboxNav(1); }
      else if (e.key === 'Tab') trapFocus(e);
    });
  }

  /* ------------------------------------------------------
     10. ARRANQUE — aplica preferencias guardadas
     ------------------------------------------------------ */
  var storedTheme = read(STORE_THEME);
  var storedLang = read(STORE_LANG);

  if (!storedTheme && window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: light)').matches) {
    storedTheme = 'light';
  }

  setTheme(storedTheme || 'dark');
  setLang(storedLang || document.documentElement.getAttribute('lang') || 'es');
})();
