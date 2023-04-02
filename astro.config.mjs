import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'http://remotepchepl.ru',
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});