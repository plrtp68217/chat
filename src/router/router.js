import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from '@/pages/LoginPage.vue'
import MainPage from '@/pages/MainPage.vue'

const routes = [
    {
        path: '/',
        component: LoginPage
    },

    {
        path: '/main',
        component: MainPage

    }

];

const router = createRouter({
    routes,
    history: createWebHistory()
});


export default router;
