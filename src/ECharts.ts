import { Options } from '..'
import { EChartsComponent } from './EChartsComponent.d'
import ResizeObserverSham from './ResizeObserverSham'
import { EChartOption } from 'echarts'
import commonOptions from './common-options'


export function createComponent({
    echarts,
    h,
    ResizeObserver = ResizeObserverSham,
    name = 'ECharts',
    deepWatchOption = true,
}: Options) {
    const options: Record<string, unknown> = {}  
    if (typeof h === 'function') {
        options.render = getVue3Render(h)
        options.beforeUnmount = beforeUnmount
        options.emits = ['resize']
    } else {
        options.render = vue2Render
        options.beforeDestroy = beforeUnmount
    }

    return {
        ...commonOptions,
        ...options,
        name,
        data(this: EChartsComponent) {
            return {
                _private: Object.preventExtensions({
                    observer: new ResizeObserver(() => {
                        this.resize()
                        this.$emit('resize')
                    }),
                    inst: null,
                }),
            }
        },
        watch: {
            ...commonOptions.watch,
            option: {
                handler(this: EChartsComponent, val: EChartOption) {
                    this.setOption(val)
                },
                deep: deepWatchOption,
            },
        },
        methods: {
            ...commonOptions.methods,
            init(this: EChartsComponent) {
                const ctx = this
                const oldInst = ctx.inst
                if (oldInst) {
                    oldInst.dispose()
                }
                const inst = echarts.init(ctx.$el, ctx.initTheme, ctx.initOpts)
                ctx.$data._private.inst = inst
                if (ctx.loading) {
                    inst.showLoading(ctx.loadingType, ctx.loadingOpts)
                }
                if (ctx.events) {
                    for (const args of ctx.events) {
                        inst.on(...<[any, any]>args)
                    }
                }
                if (ctx.option) {
                    if (oldInst) {
                        ctx.setOption(ctx.option)
                    } else {
                        // Wait for rendering
                        setTimeout(() => ctx.setOption(ctx.option))
                    }
                }
                if (ctx.autoResize) {
                    ctx.addResizeListener()
                }
            },
        },
    }
}


const style = {
    height: '100%',
    overflow: 'hidden',
}
function vue2Render(this: EChartsComponent, h: Function) {
    return h('div', {
        attrs: this.$attrs,
        style,
    })
}
function getVue3Render(h: Function) {
    return function (this: EChartsComponent) {
        return h('div', {
            ...this.$attrs,
            style,
        })
    }
}
function beforeUnmount(this: EChartsComponent) {
    this.removeResizeListener()
    this.inst.dispose()
}


export function plugin(app: { component: Function }, options: Options) {
    const definition = createComponent(options)
    app.component(definition.name, definition)
}
