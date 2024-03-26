/// <reference types="vitest" />
import path, { resolve } from "path";
import { defineConfig } from "vite";
import { defaultExclude } from "vitest/config";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      rollupTypes: true,
      exclude: ["src/stories"],
    }),
  ],
  build: {
    lib: {
      name: "giuzus-probable-invention",
      fileName: "giuzus-probable-invention",

      entry: resolve(__dirname, "src/index.ts"),
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  assetsInclude: ["**/*.md"],
  base: "https://giuzus.github.io/probable-invention",
  test: {
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
    exclude: [...defaultExclude],
    passWithNoTests: true,
    coverage: {
      enabled: false,
      exclude: ["src/main.tsx"],
      include: ["src/**/*.tsx"],
      provider: "v8",
      reporter: ["lcov", "text", "html"],
      thresholds: {
        lines: 90,
        statements: 90,
        branches: 90,
        functions: 90,
      },
    },
  },
});
