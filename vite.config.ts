import { reactRouter } from "@react-router/dev/vite";
import svgr from "vite-plugin-svgr";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tailwindcss(), 
    reactRouter(), 
    tsconfigPaths(), 
    svgr({
      include: "**/*.svg?react",
    })],
  server: {
    proxy: {
      '/api/products': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/api/product': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
    },
  },
});
