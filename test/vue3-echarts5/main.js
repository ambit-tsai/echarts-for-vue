import { createApp, h } from 'vue';
import App from '/@src/App.vue';
import { plugin } from 'echarts-for-vue';
import * as echarts from 'echarts/esm/echarts';
import 'echarts/esm/chart/line';
import 'echarts/esm/chart/bar';
import 'echarts/esm/component/title';
import 'echarts/esm/component/tooltip';
import 'echarts/esm/component/legend';
import 'echarts/esm/component/toolbox';


const app = createApp({
    render: () =>  h(App),
});
app.config.devtools = true;
app.use(plugin, { echarts, h });
app.mount('#app');