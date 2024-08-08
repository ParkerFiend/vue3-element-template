/* eslint-disable import/no-duplicates */
import 'element-plus/es/components/message/style/css';
import './scss/index.scss';
import 'uno.css';

import { createApp } from 'vue';

import App from './App.vue';
import { setupRouter } from './router/index';
import { setupStore } from './store/index';

const app = createApp(App);
setupRouter(app);
setupStore(app);

app.mount('#app');
