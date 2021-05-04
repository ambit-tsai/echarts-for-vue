import * as echarts from 'echarts'


type EChartsNS = typeof echarts
type ResizeObserverConstructor = typeof ResizeObserver
type Options = {
    echarts: EChartsNS
    h?: Function
    ResizeObserver?: ResizeObserverConstructor
    name?: string
    deepWatchOption?: boolean
}


declare module "echarts-for-vue" {
    export function createComponent(options: Options): object
    export function plugin(app: { component: Function }, options: Options): void
}
