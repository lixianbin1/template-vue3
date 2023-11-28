import { join,resolve } from "path"
import { defineConfig } from 'vite'
import VueI18n from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VueI18n({
      include: [resolve(__dirname, './src/language/**')],
    }),
  ],
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
