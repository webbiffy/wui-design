import { copyFileSync, mkdirSync } from "fs";
import { resolve } from "path";

import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    vanillaExtractPlugin(),
    react(),
    dts({
      include: ["src"],
      exclude: ["src/**/*.stories.tsx", "src/**/*.test.tsx", "src/**/*.css.ts"],
    }),
    {
      name: "copy-themes",
      generateBundle() {
        mkdirSync("dist/themes", { recursive: true });
        copyFileSync("src/themes/theme-1.css", "dist/themes/theme-1.css");
        copyFileSync("src/themes/theme-2.css", "dist/themes/theme-2.css");
      },
    },
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "WuiDesign",
      formats: ["es"],
      fileName: "index",
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "react/jsx-runtime",
        },
      },
    },
    cssCodeSplit: false,
  },
});
