import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: '/src/app',
      service: '/src/service',
      hooks: '/src/hooks',
      assets: '/src/assets',
      ui: '/src/ui',
      molecules: '/src/molecules',
      components: '/src/components',
      templates: '/src/templates',
      pages: '/src/pages',
      routes: '/src/routes',
      types: '/src/types',
      models: '/src/models',
      styles: '/src/styles'
    }
  }
});
