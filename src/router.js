import Vue from 'vue'
import VueRouter from 'vue-router'

import PageA from './components/router-a'
import PageB from './components/router-b'

Vue.use(VueRouter)

const routes = [
    { path: '/pageA', component: PageA },
    { path: '/pageB', component: PageB }
]

let router = new VueRouter({
    routes
})

export default router