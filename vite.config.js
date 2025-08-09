import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for React app with relative base for static hosting
export default defineConfig({
  plugins: [react()],
  base: './',
});


