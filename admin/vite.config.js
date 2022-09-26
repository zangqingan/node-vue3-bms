import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  // 配置启动端口
  port: 5000,
  // 项目启动后是否自动在浏览器打开
  open: true,
  // 是否开启 https
  https: false,
  // 服务端渲染
  ssr: false,
   // 将要用到的插件数组
  plugins: [
    vue(),
    // 下面两个elementui-plus按需导入插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  // 配置路径别名
  resolve: {
    alias: {
      // 路径别名
      "@": resolve(__dirname, 'src'), 
    },
    // 使用路径别名时想要省略的后缀名，可以自己增减
    extensions: ['.js', '.json', '.ts'] 
  },
  // CSS 预处理器
  css: {
    preprocessorOptions: {
      // 全局样式
      scss: {
        additionalData: `@import '@/assets/scss/_variables.scss';`
      },
    }
  },
  // 反向代理
  server: {
    // 设为 true ,若端口已被占用则会直接退出，而不是尝试下一个可用端口
    strictPort: false,
    // 为开发服务器配置 CORS
    cors: true,
    // 代理
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },

})
