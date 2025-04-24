import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 3000,
  },
  base: '/Nova-landingPage/', // برای GitHub Pages
  preview: {
    base: '/', // برای تست محلی
  },
});
