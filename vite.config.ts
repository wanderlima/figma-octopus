import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteSingleFile } from "vite-plugin-singlefile";

const entries = {
  main: resolve(__dirname, "./src/main.ts"),
  app: resolve(__dirname, "./src/app.html"),
};

const input = {};

if (process.env["INPUT"]) {
  const entry = process.env["INPUT"];
  input[entry] = entries[entry];
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  build: {
    target: "esnext",
    outDir: "dist",
    assetsDir: "",
    sourcemap: false,
    minify: false,
    assetsInlineLimit: 100000000,
    chunkSizeWarningLimit: 100000000,
    cssCodeSplit: false,
    emptyOutDir: false,
    rollupOptions: {
      input,
      output: {
        inlineDynamicImports: true,
        entryFileNames: `[name].js`,
        chunkFileNames: `[name].js`,
        assetFileNames: `[name].[ext]`,
      },
    },
  },
});
