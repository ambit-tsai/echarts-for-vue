
/**
 * echarts-for-vue
 * @version 0.0.2
 * @author Ambit-Tsai <ambit_tsai@qq.com>
 * @license Apache-2.0
 * @see {@link https://github.com/ambit-tsai/echarts-for-vue#readme}
 */
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('echarts'), require('resize-detector')) :
    typeof define === 'function' && define.amd ? define(['echarts', 'resize-detector'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.ECharts = factory(global.echarts, global.resizeDetector));
}(this, (function (echarts, resizeDetector) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var echarts__default = /*#__PURE__*/_interopDefaultLegacy(echarts);

    var ECharts = {
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
                resizeChart: echarts__default['default'].throttle(() => {
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
            const inst = echarts__default['default'].init(this.$el, this.theme, this.initOpts);
            this.inst = inst;
            
            if (this.loading) {
                inst.showLoading(this.loadingType, this.loadingOpts);
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
                resizeDetector.addListener(this.$el, this.resizeChart);
            },

            removeResizeListener() {
                resizeDetector.removeListener(this.$el, this.resizeChart);
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

    return ECharts;

})));
