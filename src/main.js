import { createApp } from 'vue';
import App from './App.vue';
import router from '@/router/router.js'
import { Quasar } from 'quasar';
import 'quasar/dist/quasar.css'; // подключаем стили quazar

const app = createApp(App);

app
    .use(router)
    .use(Quasar)
    .mount('#app');
