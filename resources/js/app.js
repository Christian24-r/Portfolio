import './bootstrap';
import { createApp } from 'vue';
import App from './component/App.vue';
import Route from './route';


createApp(App).use(Route).mount('#app')
