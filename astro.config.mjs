import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://remotepchepl.ru',
  server: { port: 8080 },
  base: '/',
  output: 'static',
  integrations: [tailwind()],
});