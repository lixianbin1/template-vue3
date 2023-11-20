import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Store} from './stores'
import Route from './config/router'
createApp(App).use(Store).use(Route).mount('#app')
