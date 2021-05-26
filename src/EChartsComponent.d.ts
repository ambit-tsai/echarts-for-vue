import {
    ECharts,
    EChartOption,
    EChartsOptionConfig,
    EChartsLoadingOption,
} from 'echarts'


type EventArguments = 
    | [string, Function]
    | [string, Function, object]
    | [string, string|object, Function]
    | [string, string|object, Function, object]


export type EChartsComponent = {
    $el: HTMLDivElement
    $data: {
        _private: {
            observer: ResizeObserver
            inst: ECharts
        }
    }
    $attrs: Record<string, string>
    $emit: Function
    inst: ECharts

    initTheme?: string | object
    initOpts?: {
        devicePixelRatio?: number
        renderer?: string
        width?: number | string
        height?: number | string
    }
    loading: boolean
    loadingType: string
    loadingOpts?: EChartsLoadingOption
    option: EChartOption
    optionOpts?: EChartsOptionConfig
    setOptionOpts?: EChartsOptionConfig // @Deprecated
    events?: EventArguments[]
    autoResize: boolean

    init(): void
    setOption(option: EChartOption, opts?: EChartsOptionConfig): void
    resize(): void
    addResizeListener(): void
    removeResizeListener(): void
}
