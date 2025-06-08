// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react(), sitemap()],
  vite: {
    optimizeDeps: {
      include: ["zwitch"],
    },
    resolve: {
      alias: {
        "@": "/src",
        "@components": "/src/components",
      },
    },
  },
  output: "static",
  build: {
    inlineStylesheets: "auto",
  },
  server: {
    host: true,
    port: 4321,
  },
  site: "https://www.ramiromoya.com.ar",
  experimental: {
    responsiveImages: true,
  },
  image: {
    experimentalLayout: "constrained",
  },
});
