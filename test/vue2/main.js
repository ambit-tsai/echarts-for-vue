import Vue from 'vue';
import App from '../App.vue';
import { plugin } from 'echarts-for-vue';
import ResizeObserver from 'resize-observer-polyfill';

import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import 'echarts/src/chart/bar';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';
import 'echarts/src/component/toolbox';
import 'echarts/src/component/legend';


Vue.config.devtools = true;
Vue.use(plugin, { echarts, ResizeObserver });


const app = new Vue({
    render: h => h(App),
});
app.$mount();
document.getElementById('app').appendChild(app.$el);
