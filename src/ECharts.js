import echarts from 'echarts';
import {addListener, removeListener} from 'resize-detector';


export default {
    name: 'ECharts',

    render(h) {
        return h('div', {
            attrs: this.$attrs,
            on: this.$listeners,
            style: {
                height: '100%',
                overflow: 'hidden',
            },
        });
    },

    props: {
        initTheme: [Object, String],
        initOpts: Object,
        loading: {
            type: Boolean,
            default: false,
        },
        loadingType: {
            type: String,
            default: 'default',
        },
        loadingOpts : Object,
        option: Object,
        setOptionOpts: Object,
        events: Array,
        autoResize: {
            type: Boolean,
            default: true,
        },
    },

    data() {
        return {
            resizeChart: echarts.throttle(() => {
                const {clientWidth, clientHeight} = this.$el;
                this.inst.resize({
                    width: clientWidth,
                    height: clientHeight,
                });
            }),
        };
    },

    watch: {
        loading(val) {
            if (val) {
                this.inst.showLoading(this.loadingType, this.loadingOpts);
            } else {
                this.inst.hideLoading();
            }
        },
        option(val) {
            this.setOption(val);
        },
    },

    mounted() {
        const inst = echarts.init(this.$el, this.theme, this.initOpts);
        this.inst = inst;
        
        if (this.loading) {
            inst.showLoading(this.loadingType, this.loadingOpts)
        }
        if (this.option) {
            this.setOption(this.option);
        }
        if (this.events) {
            this.events.forEach(args => inst.on.apply(inst, args));
        }
        if (this.autoResize) {
            this.addResizeListener();
        }
    },

    methods: {
        setOption(option, opts) {
            this.inst.setOption(option, {
                ...this.setOptionOpts,
                ...opts,
            });
        },

        addResizeListener() {
            addListener(this.$el, this.resizeChart);
        },

        removeResizeListener() {
            removeListener(this.$el, this.resizeChart);
        },
    },

    activated() {
        this.addResizeListener();
        this.resizeChart();
    },

    deactivated() {
        this.removeResizeListener();
    },

    beforeDestroy() {
        this.removeResizeListener();
        this.inst.dispose();
    },
    
};
