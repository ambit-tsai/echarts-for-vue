import * as echarts from 'echarts'


type EChartsNS = typeof echarts
type TypeOfResizeObserver = typeof ResizeObserver
type Options = {
    echarts: EChartsNS
    h?: Function
    ResizeObserver?: TypeOfResizeObserver
    name?: string
    deepWatchOption?: boolean
}


declare module "echarts-for-vue" {
    export function createComponent(options: Options): object
    export function plugin(app: { component: Function }, options: Options): void
}
