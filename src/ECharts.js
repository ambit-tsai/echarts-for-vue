import { getHooks } from './LifecycleHooks';


/**
 * Create a component
 * @param {echarts} echarts 
 * @param {Vue} [Vue] not required for Vue 2
 * @returns {Object}
 */
export function createComponent(echarts, Vue) {
    const isVue3 = Vue?.version.includes('3.');
    const hooks = getHooks(echarts);

    if (!isVue3) {
        hooks.beforeDestroy = hooks.beforeUnmount;
        delete hooks.beforeUnmount;
    }

    return {
        ...hooks,

        name: 'ECharts',
        render: isVue3 ? getVue3Render(Vue) : vue2Render,
    
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
    
        /**
         * Install plugin
         * @param {Vue} app 
         */
        install(app) {
            app.component(this.name, this);
        },
    };
}


function vue2Render(h) {
    return h('div', {
        attrs: this.$attrs,
        on: this.$listeners,
        style: {
            height: '100%',
            overflow: 'hidden',
        },
    });
}


function getVue3Render(Vue) {
    return function () {
        return Vue.h('div', {
            ...this.$attrs,
            style: {
                height: '100%',
                overflow: 'hidden',
            },
        });
    };
}


// TODO: ResizeObserver 兼容处理
// TODO: vue 2-3 版本输出
// TODO: test > webpack、rollup
// TODO: 英文文档