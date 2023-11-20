import { createRouter,createWebHashHistory } from "vue-router";

import Home from '@/page/Home.vue'
import Word from '@/page/Word.vue'
import About from '@/page/About.vue'
import Nofined from '@/page/Nofined.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About,
        children:[
        {path:'word',component:Word},
        ]
    },
    { path:'/404', component: Nofined},
    { path:'/:catchAll(.*)',redirect:'/404'}
]

const route = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default route