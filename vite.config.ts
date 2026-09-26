import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base '/' —— 站点托管在根路径（141w.github.io 用户站 / wweiqi.is-a.dev），
// 资源以 /assets/... 引用。若改回项目子路径（如 /ww/）需同步改成 '/ww/'。
export default defineConfig({
  plugins: [react()],
  base: '/',
})
