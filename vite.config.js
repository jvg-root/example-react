import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import eslintPlugin from "vite-plugin-eslint";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), tailwindcss()],
})
