import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'

const htmlPlugin = () => {
  return {
    name: 'html-transform',
    transformIndexHtml(html) {
      return html.replace(
        /<title>(.*?)<\/title>/,
        '<title>Vue3 SQL Highlight</title>'
      )
    }
  }
}

export default defineConfig({
  base: process.env.VITE_ROUTER_MODE === 'hash'
    ? ''
    : '/',
  plugins: [
    vue(),
    svgLoader(),
    htmlPlugin()
  ],
  esbuild: {
    drop: [
      'console',
      'debugger'
    ]
  },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://172.xx.xxx.xx/xxxxxxx/api',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src')
      }
    ]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@/styles/element-variables.scss' as *;`
      }
    }
  }
})
