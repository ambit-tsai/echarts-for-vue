[简体中文](https://gitee.com/ambit/echarts-for-vue) | English


# ECharts For Vue&nbsp;&nbsp;![Version](https://img.shields.io/npm/v/echarts-for-vue.svg)
📊📈 ECharts wrapper component for Vue 3, 2 and TypeScript


## Features
1. Support for Vue 3 and 2;
1. Support auto resize;
1. Conform to the habits of Vue and ECharts users;
1. Provide pure function API, no side effects;
1. Lightweight encapsulation, easy to use;


## Install
```
npm i -S echarts-for-vue
```


## Usage
1. Vue 3
```javascript
import { createApp, h } from 'vue';
import { plugin } from 'echarts-for-vue';
import * as echarts from 'echarts';

const app = createApp({ /*...*/ });
app.use(plugin, { echarts, h });                        // use as a plugin
```
```html
<template>
    <ECharts ref="chart" :option="option" />
</template>

<script>
    import { createComponent } from 'echarts-for-vue';
    import * as echarts from 'echarts';
    import { h } from 'vue';

    export default {
        components: {
            ECharts: createComponent({ echarts, h }),   // use as a component
        },
        data: () => ({
            option: { /*...*/ },
        }),
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();       // call the method of ECharts instance
            },
        },
    }
</script>
```

2. Vue 2
```javascript
import Vue from 'vue';
import { plugin } from 'echarts-for-vue';
import * as echarts from 'echarts';

Vue.use(plugin, { echarts });                           // use as a plugin
```
```html
<template>
    <ECharts ref="chart" :option="option" />
</template>

<script>
    import { createComponent } from 'echarts-for-vue';
    import * as echarts from 'echarts';

    export default {
        components: {
            ECharts: createComponent({ echarts }),      // use as a component
        },
        data: () => ({
            option: { /*...*/ },
        }),
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();       // call the method of ECharts instance
            },
        },
    }
</script>
```
3. <a href="test" target="_blank">More examples</a>
4. <a href="https://ambit-tsai.github.io/echarts-for-vue/" target="_blank">Online demo</a>


## Global API
|Definition|Return|Description|
|-|-|-|
|`createComponent`(*options*: Options): object|Component definition object|Create a component|
|`plugin`(*app*: Vue, *options*: Options): void||The installation method of plugin|


## Options
|Property|Type|Default|Optional|Description|
|-|-|-|-|-|
|echarts|typeof echarts|||The global object of ECharts library|
|h|Function||✔|The method `createElement` of Vue (**Required** for Vue 3)|
|ResizeObserver|typeof ResizeObserver|window.ResizeObserver|✔|When the global `ResizeObserver` doesn't exist, the <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a> provides support|
|name|string|"ECharts"|✔|The registered name of the component|
|deepWatchOption|boolean|true|✔|deep watch prop "option"|


## Instance Properties
|Name|Type|ReadOnly|Description|
|-|-|-|-|
|inst|ECharts|✔|ECharts instance|


## props
|Name|Type|Default|Reactive|Description|
|-|-|-|-|-|
|initTheme|object \| string||✔|The parameter `theme` of `echarts.init` method, <a href="https://echarts.apache.org/en/api.html#echarts.init" target="_blank">see</a>|
|initOpts|object||✔|The parameter `opts` of `echarts.init` method, <a href="https://echarts.apache.org/en/api.html#echarts.init" target="_blank">see</a>|
|loading|boolean|false|✔|Shows loading animation|
|loadingType|string|"default"||The parameter `type` of ECharts instance method `showLoading`, <a href="https://echarts.apache.org/en/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|loadingOpts|EChartsLoadingOption|||The parameter `opts` of ECharts instance method `showLoading`, <a href="https://echarts.apache.org/en/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|option|EChartOption||✔|The parameter `option` of ECharts instance method `setOption`, <a href="https://echarts.apache.org/en/api.html#echartsInstance.setOption" target="_blank">see</a>|
|optionOpts|EChartsOptionConfig|||The parameter `opts` of ECharts instance method `setOption`, <a href="https://echarts.apache.org/en/api.html#echartsInstance.setOption" target="_blank">see</a>|
|events|Arguments[]|||An array element is the arguments of ECharts instance method `on`, <a href="https://echarts.apache.org/en/api.html#echartsInstance.on" target="_blank">see</a>|
|autoResize|boolean|true|✔|Auto resize|

***Beyond the `props` above, the remaining properties are passed to the root element of the component, such as `style`, `class` or `onclick`***


## Events
|Name|Description|
|-|-|
|resize|Trigger when chart is resized|


## methods
|Definition|Description|
|-|-|
|`setOption`(*option*: EChartOption, *opts*?: EChartsOptionConfig): void|Call the method `setOption` of ECharts instance, <a href="https://echarts.apache.org/en/api.html#echartsInstance.setOption" target="_blank">see</a>|
|`resize`(): void|Resize chart (Based on the size of root element)|
|`addResizeListener`(): void|Add "resize" listener|
|`removeResizeListener`(): void|Remove "resize" listener|


## Contact
1. *WeChat*: cai_fanwei
1. *QQ*: 854521460
1. *QQ Group*: 663286147
1. *E-mail*: ambit_tsai@qq.com
