[简体中文](README.zh-CN.md) | English


# ECharts For Vue&nbsp;&nbsp;![Version](https://img.shields.io/npm/v/echarts-for-vue.svg)

ECharts Wrapper Component For Vue 3 and 2


#### Install
`npm i -S echarts-for-vue`


#### Usage
1. Vue 3
```javascript
import { createApp, h } from 'vue';
import echarts from 'echarts';
import { plugin } from 'echarts-for-vue';

const app = createApp({ /*...*/ });
app.use(plugin, { echarts, h });                    // use as a plugin
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
            ECharts: createComponent(echarts, h),   // use as a component
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();   // call the method of the ECharts instance
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

Vue.use(plugin, { echarts });                       // use as a plugin
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
            ECharts: createComponent(echarts),      // use as a component
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();   // call the method of the ECharts instance
            }
        }
    }
</script>
```
3. <a href="test" target="_blank">More examples</a>
4. <a href="https://ambit-tsai.github.io/echarts-for-vue/" target="_blank">Online demo</a>


#### Global API
|Definition|Return|Explain|
|-|-|-|
|Object `createComponent`(echarts *echarts* [, Function *h*])|Component definition object|Create a component. Param `h` isn't required in Vue 2|
|void `plugin`(Vue *app*, Object *options*)||The installation method of plugin. Param `options` has 3 props (`echarts`, `h`, `name`)|


#### Instance Properties
|Name|Type|Explain|
|-|-|-|
|inst|Object|ECharts instance|


#### props
|Name|Type|Default|Reactive|Explain|
|-|-|-|-|-|
|initTheme|Object, String|||The param `theme` of `echarts.init` method, <a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">see</a>|
|initOpts|String|||The param `opts` of `echarts.init` method, <a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">see</a>|
|loading|Boolean|false|✔|Shows loading animation|
|loadingType|String|"default"||The param `type` of ECharts instance `showLoading` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|loadingOpts|Object|||The param `opts` of ECharts instance `showLoading` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|option|Object||✔|The param `option` of ECharts instance `setOption` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|setOptionOpts|Object|||The param `opts` of ECharts instance `setOption` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|events|Array&lt;Arguments&gt;|||The array element is an argument of ECharts instance method `on`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank">see</a>|
|autoResize|Boolean|true||Auto resize (Based on `ResizeObserver`, forward compatibility via polyfill）|


#### methods
|Definition|Explain|
|-|-|
|void `setOption`(Object *option*, Object *opts*)|Call the method `setOption` of ECharts instance, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|void `resize`()|Resize (Based on the size of outer div)|
|void `addResizeListener`()|Add resize listener|
|void `removeResizeListener`()|Remove resize listener|


#### Contact Us
1. *WeChat*: ambit_tsai
1. *QQ Group*: 663286147
1. *E-mail*: ambit_tsai@qq.com
