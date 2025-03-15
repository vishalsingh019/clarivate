import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'dashboard',
      filename: 'remoteEntry.js',
      exposes: {
        './Dashboard': './src/pages/Dashboard',
        './ItemsList': './src/pages/ItemsList',
      },
      shared: ['react', 'react-dom',"react-router-dom"], 
    }),
  ],
  server: {
    port: 5001, 
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  build: {
    target: 'esnext',
    minify: false,
    modulePreload: false,
    cssCodeSplit: false,
  },
  preview: {
    host: "localhost",
    port: 5001,
    strictPort: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
