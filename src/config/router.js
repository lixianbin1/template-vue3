import { createRouter,createWebHashHistory } from "vue-router";

import Index from '@/page/Index.vue'
import Home from '@/page/Home.vue'
import GoJS from '@/page/GoJS.vue'
import Demo from '@/page/Demo.vue'
import Button from '@/page/Button.vue'
import Nofined from '@/page/Nofined.vue'

const routes = [
  {
    path: '/', component: Index,
    children:[
      {path:'/',component:Home},
      {path:'/Demo',component:Demo},
      {path:'/GoJS',component:GoJS},
      {path:'/Buttom',component:Button},
      { path:'/404', component: Nofined},
      { path:'/:catchAll(.*)',redirect:'/404'}
    ]
  },
]

const route = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default route