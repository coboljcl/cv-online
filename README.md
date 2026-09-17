# CV Online — Portafolio de Allan Zúñiga

> **Programador COBOL · Mainframe · Sector bancario**

Sitio web personal y portafolio profesional desarrollado con **Astro** y **Tailwind CSS**, publicado como sitio estático en **GitHub Pages**. Combina el desarrollo clásico de sistemas (**COBOL**, **DB2**, **JCL**, **CICS**) con el desarrollo asistido por IA (_vibe coding_) usando agentes, subagentes y skills para orquestar todo el proyecto.

🔗 **Web en producción:** https://coboljcl.github.io/cv-online/

---

## 📌 Características

- 🎨 **Tema oscuro** con acentos azul y naranja, coherente con la identidad de sistemas/mainframe.
- 📱 **Responsive**: barra lateral con menú hamburguesa en móvil y sidebar fija en escritorio.
- 🧭 **Navegación con scroll-spy** que resalta la sección activa, con animación de onda (_ripple_) al hacer clic.
- 🖱️ **Botón flotante de scroll** que avanza sección a sección y cambia a icono de inicio al llegar al final.
- 📄 **Secciones**: Hero, Perfil, Experiencia (acordeón), Proyectos, Tecnologías, Educación, Habilidades y Contacto.
- 💬 **Formulario de contacto** conectado a **Web3Forms** (sin backend, sin exponer datos personales).
- 🔍 **SEO optimizado**: título, description, Open Graph y Twitter Card con banner para compartir.
- 🧩 **Estructura modular**: componentes reutilizables y datos centralizados.

---

## 🧱 Stack

| Tecnología                               | Uso                               |
| :--------------------------------------- | :-------------------------------- |
| [Astro](https://astro.build)             | Framework de sitio estático       |
| [Tailwind CSS](https://tailwindcss.com)  | Estilos y diseño responsive       |
| [Web3Forms](https://web3forms.com)       | Backend de formulario de contacto |
| [GitHub Pages](https://pages.github.com) | Hosting del sitio                 |

---

## 📁 Estructura del proyecto

```text
/
├── public/
│   ├── assets/          # Imágenes (avatar, hero, etc.)
│   └── og-banner.png    # Banner para Open Graph / compartir
├── src/
│   ├── components/      # Componentes de UI (Hero, Profile, Experience...)
│   ├── data/            # Datos centralizados del CV
│   ├── layouts/         # Layout.astro (estructura + sidebar + SEO)
│   ├── pages/           # index.astro (composición de la página)
│   ├── styles/          # global.css (tema, animaciones)
│   └── types/           # Tipos TypeScript del CV
├── astro.config.mjs     # Configuración de Astro (base, assets)
└── package.json
```

---

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto:

| Comando           | Acción                                                |
| :---------------- | :---------------------------------------------------- |
| `npm install`     | Instala las dependencias                              |
| `npm run dev`     | Arranca el servidor de desarrollo en `localhost:4321` |
| `npm run check`   | Ejecuta `astro check` para validar Astro y TypeScript |
| `npm run build`   | Compila el sitio de producción en `./dist/`           |
| `npm run verify`  | Ejecuta `npm run check && npm run build`              |
| `npm run preview` | Previsualiza el build de producción                   |

---

## ✅ Verificación

Antes de publicar cambios, ejecuta:

```bash
npm run verify
```

Este comando valida el proyecto con `astro check` y genera el build de producción.

---

## 🌍 Despliegue en GitHub Pages

Actualmente el sitio se publica desde GitHub Pages con el flujo del repositorio. Antes de publicar cambios, valida el proyecto:

```bash
npm run verify
```

Luego genera el build de producción:

```bash
npm run build
```

La automatización con GitHub Actions queda como mejora pendiente porque GitHub exige permisos especiales para subir archivos en `.github/workflows/`.

> ⚠️ **Importante:** la carpeta de assets del build está configurada como `astro/` (no `_astro/`) porque GitHub Pages no sirve carpetas que empiezan por subrayado. Ver `astro.config.mjs`.

---

## 👤 Sobre el autor

**Allan Zúñiga** — Programador COBOL Junior con más de 2 años y medio de experiencia en entornos Mainframe para el sector bancario (Bankinter, Morabanc, Deutsche Bank). Especializado en COBOL, DB2, JCL y CICS, en el área de inversión, carteras y fondos.

- 🌐 **Web:** https://coboljcl.github.io/cv-online/
- 💼 **LinkedIn:** [allan-zúñiga](https://www.linkedin.com/in/allan-z%C3%BA%C3%B1iga-359957181)
- 🐙 **GitHub:** [coboljcl](https://github.com/coboljcl)

---

## 📄 Licencia

Proyecto personal. Todos los derechos reservados.
