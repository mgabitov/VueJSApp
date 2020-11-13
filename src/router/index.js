import Vue from 'vue'
import VueRouter from 'vue-router'
import MainContent from "../components/MainContent";
import Sidebar from "../components/Sidebar";
import SidebarGuest from "../components/SidebarGuest";
import MainContentGuest from "../components/MainContentGuest";
import MainContentSelf from "../components/MainContentSelf";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {layout: 'empty'},
        component: () => import('../views/Home.vue')
    },
    {
        path: '/chat',
        name: 'chat',
        meta: {layout: 'main'},
        components: {
            default: MainContent,
            'sidebar-layout': Sidebar,
            'sidebar-guest': SidebarGuest,
            'guest': MainContentGuest
        },
    },
    {
        path: '/next',
        name: 'next',
        meta: {layout: 'main'},
        components: {
            default: MainContentSelf,
            'sidebar-layout': Sidebar,
            'sidebar-guest': SidebarGuest,
            'guest': MainContentGuest
        }
    },
    {
        path: '/username/:id',
        name: 'username',
        meta: {layout: 'main'},
        component: () => import('../views/Username.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
