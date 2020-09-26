import { createApp, h } from 'vue';
import App from '/@test/App.vue';

import * as echarts from 'echarts/src/echarts';
import 'echarts/src/chart/line';
import 'echarts/src/chart/bar';
import 'echarts/src/component/tooltip';
import 'echarts/src/component/title';
import 'echarts/src/component/toolbox';
import 'echarts/src/component/legend';
import { plugin } from '/@dist/echarts-for-vue.mjs';


const app = createApp({
    render: () =>  h(App),
});
app.config.devtools = true;
app.use(plugin, { echarts, h });
app.mount('#app');
