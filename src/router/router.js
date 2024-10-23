import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/pages/MainPage.vue'

const routes = [
    {
        path: '/',
        component: MainPage
    },

];

const router = createRouter({
    routes,
    history: createWebHistory()
});


export default router;
