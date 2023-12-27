import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import '@/assets/style/style.css'
import App from './App.vue'
import { Store } from './stores'
import Route from './config/router'
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import i18 from '@/modules/i18n.js'
import '@/modules/go.js';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
app.use(Store)
.use(Route)
.use(i18)
.use(ElementPlus,{
  locale: zhCn,
})
.mount('#app')