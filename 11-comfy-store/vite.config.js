// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite tự động nhận diện postcss.config.js nếu nó ở thư mục gốc
  // Bạn không cần cấu hình PostCSS ở đây trừ khi có nhu cầu đặc biệt
});