import { getHooks } from './LifecycleHooks';
import ResizeObserver from './ResizeObserver';


/**
 * Create a component
 * @param {echarts} echarts 
 * @param {function} [h] `createElement`, required for Vue 3
 * @returns {Object}
 */
export function createComponent(echarts, h) {
    const isVue3 = !!h;
    const hooks = getHooks(echarts);

    if (!isVue3) {
        hooks.beforeDestroy = hooks.beforeUnmount;
        delete hooks.beforeUnmount;
    }

    return {
        ...hooks,

        name: 'ECharts',
        render: isVue3 ? getVue3Render(h) : vue2Render,
    
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
                _private: Object.freeze({
                    observer: new ResizeObserver(() => this.resize()),
                    dynamic: {},
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
    
        methods: {
            setOption(option, opts) {
                this.inst.setOption(option, {
                    ...this.setOptionOpts,
                    ...opts,
                });
            },
    
            resize() {
                const {clientWidth, clientHeight} = this.$el;
                this.inst.resize({
                    width: clientWidth,
                    height: clientHeight,
                });
            },
    
            addResizeListener() {
                this.$data._private.observer.observe(this.$el);
            },
    
            removeResizeListener() {
                this.$data._private.observer.disconnect();
            },
        },

    };
}


function vue2Render(h) {
    return h('div', {
        attrs: this.$attrs,
        style: {
            height: '100%',
            overflow: 'hidden',
        },
    });
}


function getVue3Render(h) {
    return function () {
        return h('div', {
            ...this.$attrs,
            style: {
                height: '100%',
                overflow: 'hidden',
            },
        });
    };
}


/**
 * Install plugin
 * @param {Vue} app 
 * @param {Object} options
 */
export function plugin(app, options) {
    const {echarts, h, name} = options;
    const definition = createComponent(echarts, h);
    app.component(name || definition.name, definition);
}
