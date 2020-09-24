import { h } from 'vue';
import echarts from 'echarts';
import { createComponent } from '../dist/echarts-for-vue.mjs';
import option from './echarts-option';


const ECharts = createComponent(echarts, h);


export default {
    name: 'App',

    render: () => h(ECharts, {
        option,
    }),

}