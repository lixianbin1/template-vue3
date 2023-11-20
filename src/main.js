import { createApp } from 'vue'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import {Store} from './stores'
import Route from './config/router'
import ElementPlus from 'element-plus'
createApp(App)
.use(Store)
.use(Route)
.use(ElementPlus)
.mount('#app')
