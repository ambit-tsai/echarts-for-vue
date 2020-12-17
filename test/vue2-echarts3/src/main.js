import Vue from 'vue';
import { plugin } from 'echarts-for-vue';
import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import 'echarts/src/chart/bar';
import 'echarts/src/component/title';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/legend';
import 'echarts/src/component/toolbox';
import App from './App.vue';


Vue.config.devtools = true;
Vue.use(plugin, { echarts });


const app = new Vue({
    render: h => h(App),
});
app.$mount();
document.getElementById('app').appendChild(app.$el);
