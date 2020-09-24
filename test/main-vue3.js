import { createApp, h } from 'vue';
import App from './Vue3App';
import './index.css';


const app = createApp({
    render: () =>  h(App),
});
app.config.devtools = true;
app.mount('#app');