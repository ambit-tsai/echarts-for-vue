import Vue from 'vue2';
import App from './Vue2App';
import './index.css';


Vue.config.devtools = true;


const app = new Vue({
    render: h => h(App),
});
app.$mount();
document.getElementById('app').appendChild(app.$el);