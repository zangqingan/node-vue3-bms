import { createApp } from 'vue'
// 公共样式
import '@/assets/scss/style.scss'
// 引入路由并使用use方法注册
import router from '@/router/index'
// 注册状态管理
import { createPinia } from 'pinia'
// 入口文件
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.use(createPinia())
app.mount('#app')
