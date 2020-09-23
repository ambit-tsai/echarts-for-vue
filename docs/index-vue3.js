var ECharts = EChartsForVue.createComponent(echarts, Vue);

var app = Vue.createApp({
    data() {
        return {
            loading: true,
            option: window.Option2,
            setOptionOpts: {
                notMerge: false,
            },
        };
    },

    render() {
        return Vue.h(ECharts, {
            ref: 'chart',
            loading: this.loading,
            loadingOpts: {
                text: 'Close after 3 seconds',
            },
            option: this.option,
            setOptionOpts: this.setOptionOpts,
            events: [
                ['click', this.onClick],        // listen to click event
            ],
        });
    },

    mounted() {
        setTimeout(() => {
            // Switch to another chart
            this.setOptionOpts.notMerge = true;
            this.option = window.Option1;
            this.loading = false;
        }, 3000);
    },

    methods: {
        onClick() {
            const inst = this.$refs.chart.inst;     // get the echarts instance
            alert(`Trigger click event: width(${inst.getWidth()}), height(${inst.getHeight()})`);
        },
    },
});


app.config.devtools = true;
app.mount('#app');