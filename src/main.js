import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import routes from './routes/routes'


const app = createApp(App);

const router = createRouter({
    routes,
    history: createWebHistory(),
});

app.use(router).mount('#app');