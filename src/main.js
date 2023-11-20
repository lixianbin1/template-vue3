import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {Store} from '@/stores'
createApp(App).use(Store).mount('#app')
