[简体中文](README.zh-CN.md) | English


# ECharts For Vue&nbsp;&nbsp;![Version](https://img.shields.io/npm/v/echarts-for-vue.svg)
ECharts wrapper component for Vue 3 and 2


#### Features
1. Support for Vue 3 and 2;
1. Conform to the habits of Vue and ECharts users;
1. Provide functional API;
1. Lightweight encapsulation, easy to use;


#### Install
`npm i -S echarts-for-vue`


#### Usage
1. Vue 3
```javascript
import { createApp, h } from 'vue';
import echarts from 'echarts';
import { plugin } from 'echarts-for-vue';

const app = createApp({ /*...*/ });
app.use(plugin, { echarts, h });                        // use as a plugin
```
```html
<template>
    <ECharts ref="chart" :option="option" />
</template>

<script>
    import echarts from 'echarts';
    import { h } from 'vue';
    import { createComponent } from 'echarts-for-vue';

    export default {
        components: {
            ECharts: createComponent({ echarts, h }),   // use as a component
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();       // call the method of the ECharts instance
            }
        }
    }
</script>
```

2. Vue 2
```javascript
import Vue from 'vue';
import echarts from 'echarts';
import { plugin } from 'echarts-for-vue';

Vue.use(plugin, { echarts });                           // use as a plugin
```
```html
<template>
    <ECharts ref="chart" :option="option" />
</template>

<script>
    import echarts from 'echarts';
    import { createComponent } from 'echarts-for-vue';

    export default {
        components: {
            ECharts: createComponent({ echarts }),      // use as a component
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();       // call the method of the ECharts instance
            }
        }
    }
</script>
```
3. <a href="test" target="_blank">More examples</a>
4. <a href="https://ambit-tsai.github.io/echarts-for-vue/" target="_blank">Online demo</a>


#### Global API
|Definition|Return|Explanation|
|-|-|-|
|`createComponent`(*initialOptions*: object): object|Component definition object|Create a component|
|`plugin`(*app*: Vue, *initialOptions*: object): void||The installation method of plugin|


#### initialOptions
|Property|Type|Default|Optional|Explanation|
|-|-|-|-|-|
|echarts|object|||The global object of ECharts library|
|h|function||✔|The method `createElement` of Vue (**Required** for Vue 3)|
|ResizeObserver|function|window.ResizeObserver|✔|When the global `ResizeObserver` doesn't exist, the <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a> provides support|
|name|string|"ECharts"|✔|The registered name of the component|


#### Instance Properties
|Name|Type|ReadOnly|Explanation|
|-|-|-|-|
|inst|object|✔|ECharts instance|


#### props
|Name|Type|Default|Reactive|Explanation|
|-|-|-|-|-|
|initTheme|object \| string|||The parameter `theme` of `echarts.init` method, <a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">see</a>|
|initOpts|string|||The parameter `opts` of `echarts.init` method, <a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">see</a>|
|loading|boolean|false|✔|Shows loading animation|
|loadingType|string|"default"||The parameter `type` of ECharts instance method `showLoading`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|loadingOpts|object|||The parameter `opts` of ECharts instance method `showLoading`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|option|object||✔|The parameter `option` of ECharts instance method `setOption`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|setOptionOpts|object|||The parameter `opts` of ECharts instance method `setOption`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|events|Arguments[]|||An array element is the arguments of ECharts instance method `on`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank">see</a>|
|autoResize|boolean|true||Auto resize (Based on `ResizeObserver`, forward compatibility via <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a>)|
***Beyond the `props` above, the remaining properties are passed to the outer `div`, such as `style`, `class` or `onclick`***


#### methods
|Definition|Explanation|
|-|-|
|`setOption`(*option*: object, *opts*: object): void|Call the method `setOption` of ECharts instance, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|`resize`(): void|Resize chart (Based on the size of outer div)|
|`addResizeListener`(): void|Add "resize" listener|
|`removeResizeListener`(): void|Remove "resize" listener|


#### Contact Us
1. *WeChat*: ambit_tsai
1. *QQ Group*: 663286147
1. *E-mail*: ambit_tsai@qq.com
