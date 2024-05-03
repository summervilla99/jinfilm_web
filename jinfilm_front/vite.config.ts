import * as path from "path";

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:8000',  // Django 서버 주소
    },
  },
  resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
