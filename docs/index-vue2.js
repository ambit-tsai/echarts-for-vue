var ECharts = EChartsForVue.createComponent(echarts, Vue);

var app = new Vue({
    data() {
        return {
            loading: true,
            option: window.Option2,
            setOptionOpts: {
                notMerge: false,
            },
        };
    },

    render(h) {
        return h(ECharts, {
            ref: 'chart',
            props: {
                loading: this.loading,
                loadingOpts: {
                    text: 'Close after 3 seconds',
                },
                option: this.option,
                setOptionOpts: this.setOptionOpts,
                events: [
                    ['click', this.onClick],        // listen to click event
                ],
            },
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


app.$mount();
document.getElementById('app').appendChild(app.$el)
Vue.config.devtools = true;