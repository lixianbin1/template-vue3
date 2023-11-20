import { join } from "path";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // 本地服务
  server:{
    open:true,
    port:5173,
    host:"0.0.0.0"
  },
  resolve: {
    alias: {
      '@': join(__dirname, "src"),
    }
  }
})
