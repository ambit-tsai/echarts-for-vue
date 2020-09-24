import echarts from 'echarts';
import { createComponent } from '../dist/echarts-for-vue.mjs';
import option from './echarts-option';


const ECharts = createComponent(echarts);


export default {
    name: 'App',

    render: h => h(ECharts, {
        props: { option },
    }),

}