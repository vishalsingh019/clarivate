import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      remotes: {
        dashboard: "http://localhost:5001/assets/remoteEntry.js",
        demoApp: "http://localhost:5002/assets/remoteEntry.js",
      },
      shared: ['react', 'react-dom','react-router-dom'],
      mode: 'development',
    }),
  ],
  server: {
    port: 5000,
  },
});
