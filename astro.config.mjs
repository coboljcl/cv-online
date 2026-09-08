// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: "https://coboljcl.github.io",
  base: "/cv-online/",
  build: {
    // GitHub Pages no sirve la carpeta por defecto '_astro/' (subrayado).
    // La renombramos a 'astro/' para que el CSS/JS carguen correctamente.
    assets: 'astro'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});