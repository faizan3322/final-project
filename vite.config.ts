import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: 'localhost', // Explicitly define the host
    port: 5173, // Ensure the correct port
    strictPort: true, // Prevent fallback to another port
    hmr: {
      protocol: 'ws', // Use WebSocket
      host: 'localhost', // Ensure it's pointing to the correct host
      port: 5173, // WebSocket should use the same port
    },
  },
});
