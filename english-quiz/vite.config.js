import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/English-Quiz/',
  build: {
    outDir: 'docs',  // Outputs the build files into the 'docs' directory
  },
})
