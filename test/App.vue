<template>
    <ECharts ref="chart" :option="option" />
</template>


<script>
import option from './echarts-option';

export default {
    data() {
        return {
            option,
        };
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
    height: 60%;
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