import { EChartsComponent } from './EChartsComponent.d'
import {
    EChartOption,
    EChartsOptionConfig,
} from 'echarts'


export default {
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
        optionOpts: Object,
        setOptionOpts: Object,  // @Deprecated
        events: Array,
        autoResize: {
            type: Boolean,
            default: true,
        },
    },

    mounted(this: EChartsComponent) {
        // Readonly property "inst"
        Object.defineProperty(this, 'inst', {
            get: () => this.$data._private.inst,
        })
        this.init()
    },
    activated(this: EChartsComponent) {
        if (this.autoResize) {
            this.addResizeListener()
        }
    },
    deactivated(this: EChartsComponent) {
        this.removeResizeListener()
    },

    watch: {
        initTheme(this: EChartsComponent) {
            this.init()
        },
        initOpts(this: EChartsComponent) {
            this.init()
        },
        loading(this: EChartsComponent, val: boolean) {
            const ctx = this
            if (val) {
                ctx.inst.showLoading(ctx.loadingType, ctx.loadingOpts)
            } else {
                ctx.inst.hideLoading()
            }
        },
        autoResize(this: EChartsComponent, val: boolean) {
            if (val) {
                this.addResizeListener()
            } else {
                this.removeResizeListener()
            }
        },
    },
    
    methods: {
        setOption(this: EChartsComponent, option: EChartOption, opts?: EChartsOptionConfig) {
            const ctx = this
            ctx.inst.setOption(option, {
                ...(ctx.optionOpts || ctx.setOptionOpts),
                ...opts,
            })
        },

        resize(this: EChartsComponent) {
            const { clientWidth, clientHeight } = this.$el
            this.inst.resize({
                width: clientWidth,
                height: clientHeight,
            })
        },

        addResizeListener(this: EChartsComponent) {
            this.$data._private.observer.observe(this.$el)
        },

        removeResizeListener(this: EChartsComponent) {
            this.$data._private.observer.disconnect()
        },
    },
}
