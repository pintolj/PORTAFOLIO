<!-- ============================================================
     README · Portafolio Personal
     Paleta: navy #0a1628 · dorado #f0b429 · cian #22d3ee
     ============================================================ -->

<h1 align="center">
  🌐 Portafolio Personal — Javier Suárez
</h1>

<p align="center">
  <strong>Desarrollador Web Frontend &amp; Backend</strong>
</p>

<p align="center">
  Portafolio profesional de una sola página, construido con HTML semántico, CSS moderno y Vanilla JavaScript.
  Sin frameworks, sin dependencias externas, con puntuación perfecta en Lighthouse.
</p>

<p align="center">
  <a href="https://javiersuarez.dev"><img src="https://img.shields.io/badge/Demo-En_vivo-f0b429?style=for-the-badge&logo=vercel&logoColor=0a1628&labelColor=0a1628" alt="Demo"></a>
  <a href="#-instalación"><img src="https://img.shields.io/badge/Docs-Instalación-22d3ee?style=for-the-badge&logo=readthedocs&logoColor=0a1628&labelColor=0a1628" alt="Instalación"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/Licencia-MIT-a8b8cc?style=for-the-badge&logo=opensourceinitiative&logoColor=0a1628&labelColor=0a1628" alt="Licencia MIT"></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white&labelColor=0a1628" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white&labelColor=0a1628" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=0a1628&labelColor=0a1628" alt="JavaScript">
  <img src="https://img.shields.io/badge/Lighthouse-100%2F100-f0b429?style=for-the-badge&logo=lighthouse&logoColor=0a1628&labelColor=0a1628" alt="Lighthouse 100/100">
</p>

---

## 📖 Sobre el proyecto

Este portafolio reúne mi trayectoria profesional, los proyectos en los que he trabajado y las tecnologías con las que construyo software a diario. Fue diseñado con tres principios no negociables:

- ⚡ **Rendimiento extremo** — HTML semántico, CSS moderno y Vanilla JS. Cero frameworks pesados, cero dependencias externas.
- 🎨 **Diseño minimalista y elegante** — paleta navy con acentos dorado y cian, tipografía clara y secciones bien diferenciadas.
- ♿ **Accesibilidad real** — navegación por teclado, roles ARIA, contraste conforme a WCAG AA y respeto por `prefers-reduced-motion`.

El resultado es una página que carga en menos de un segundo, obtiene **100/100 en todas las categorías de Lighthouse** y sigue siendo totalmente responsive en móvil, tablet y escritorio.

---

## ✨ Características

### 🧭 Navegación
- Header **sticky** con `backdrop-filter` y estado visual al hacer scroll.
- Menú móvil con animación de hamburguesa a "X" y cierre automático.
- Resaltado automático del enlace activo según la sección visible.

### 🎯 Secciones
- **Hero** — presentación personal con CTAs de contacto y redes.
- **Experiencia laboral** — timeline vertical con logros medibles.
- **Educación** — tarjetas con formación académica y complementaria.
- **Proyectos** — grid responsive de tarjetas con tags tecnológicos.
- **Skills** — cuadrícula dividida en Frontend y Backend con iconos SVG.
- **Contacto** — formulario con validación en cliente y honeypot anti-spam.

### ⚙️ Rendimiento técnico
- **Iconos SVG inline** — cero peticiones a librerías externas como FontAwesome.
- **IntersectionObserver** para animaciones *fade-up* con `stagger`, sin coste en CPU.
- **CSS con `clamp()` y custom properties** — escalado fluido sin media queries innecesarias.
- **Cero JavaScript bloqueante** — todo el JS se ejecuta en `defer` y está envuelto en un IIFE.
- **Sprite SVG único** — todos los iconos se definen una sola vez y se referencian con `<use>`.

### 📬 Formulario de contacto
- Validación en tiempo real con mensajes accesibles (`aria-live`).
- Estado de envío con feedback visual.
- **Honeypot** oculto para bloquear bots sin afectar la UX.
- Preparado para conectar con Formspree, EmailJS, Netlify Forms o tu propia API.

---

## 🧰 Stack técnico

| Capa | Tecnología | Uso |
|------|-----------|-----|
| **Estructura** | HTML5 semántico | Accesibilidad y SEO |
| **Estilos** | CSS3 moderno | Custom properties, grid, flexbox, `clamp()` |
| **Interacción** | Vanilla JavaScript (ES2020+) | DOM, `IntersectionObserver`, validación |
| **Iconos** | SVG inline + `<symbol>` | Sprite único, sin librerías externas |
| **Tipografía** | System fonts | Carga cero, render nativo |
| **Analítica** | (Opcional) Plausible / Umami | Ligera, respetuosa con la privacidad |

**Sin dependencias. Sin bundler. Sin `node_modules`.** Un solo archivo HTML, un `<style>` y un `<script>`.

---

## 📂 Estructura del proyecto
