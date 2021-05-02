import * as echarts from 'echarts'


type Options = {
    echarts: typeof echarts
    h?: Function
    ResizeObserver?: typeof ResizeObserver
    name?: string
}


declare module "echarts-for-vue" {
    export function createComponent(options: Options): object
    export function plugin(app: any, options: Options): void
}
