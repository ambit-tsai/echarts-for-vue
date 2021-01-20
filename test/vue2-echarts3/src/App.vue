<template>
    <div class="App">
        <ECharts
            class="chart"
            ref="chart"
            :option="option"
            :setOptionOpts="{ notMerge: true }"
            :loading="loading"
            :loadingOpts="{ text: 'Wait for 0.5s' }"
            :events="[
                ['dblclick', onDblclick],
            ]"
        />

        <ol>
            <li>Resize the window to test the feature "autoResize";</li>
            <li><button @click="toggleChartOption" :disabled="loading">Click here</button> to toggle the chart options;</li>
            <li>Double click the symbol to test the event listener;</li>
            <li>For details, see <a href="https://github.com/ambit-tsai/echarts-for-vue/tree/master/test/vue2-echarts3/" target="_blank">/test/vue2-echarts3/</a>;</li>
        </ol>
    </div>
</template>


<script>
import { Option1, Option2 } from './options';

export default {
    data() {
        return {
            option: Option2,
            loading: false,
        };
    },
    methods: {
        toggleChartOption() {
            this.loading = true;
            setTimeout(() => {
                this.option = this.option === Option1 ? Option2 : Option1;
                this.loading = false;
            }, 500);
        },
        onDblclick() {
            alert('The listener is triggered');
        },
    },
};
</script>


<style>
html, body {
    height: 100%;
    margin: 0;
}
#app {
    width: 60%;
    height: 65%;
    margin-left: auto;
    margin-right: auto;
}
@media (max-width: 992px) {
    #app {
        width: 80%;
        height: 80%;
    }
}
</style>
<style scoped>
.App {
    height: 100%;
    display: flex;
    flex-direction: column;
}
.chart {
    height: 0;
    flex-grow: 1;
}
</style>