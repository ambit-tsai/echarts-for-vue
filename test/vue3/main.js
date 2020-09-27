import { createApp, h } from 'vue';
import App from '/@test/App.vue';
import { plugin } from 'echarts-for-vue';
import ResizeObserver from 'resize-observer-polyfill';

import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import 'echarts/src/chart/bar';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';
import 'echarts/src/component/toolbox';
import 'echarts/src/component/legend';


const app = createApp({
    render: () =>  h(App),
});
app.config.devtools = true;
app.use(plugin, { echarts, h, ResizeObserver });
app.mount('#app');
