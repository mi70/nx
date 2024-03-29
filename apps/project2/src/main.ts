import './styles.scss';

import router from './router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './app/App.vue';
import { i18n } from '@nx/utils';

const app = createApp(App);

app.use(router);
app.use(createPinia());
app.use(i18n);

app.mount('#root');
