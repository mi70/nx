import './styles.scss';

import router from './router';

import { createApp } from 'vue';
import App from './app/App.vue';
import { createPinia } from 'pinia';

const app = createApp(App);
app.use(createPinia());
app.use(router);

app.mount('#root');
