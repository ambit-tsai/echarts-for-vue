[简体中文](README.zh-CN.md) | English


# ECharts For Vue&nbsp;&nbsp;![Version](https://img.shields.io/npm/v/echarts-for-vue.svg)

ECharts wrapper component for Vue 3 and 2


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
|Definition|Return|Explain|
|-|-|-|
|Object `createComponent`(Object *initialOptions*)|Component definition object|Create a component|
|void `plugin`(Vue *app*, Object *initialOptions*)||The installation method of plugin|


#### initialOptions
|Name|Type|Default|Optional|Explain|
|-|-|-|-|-|
|echarts|Object|||The global object of ECharts library|
|h|Function||✔|The method `createElement` of Vue (**Required** for Vue 3)|
|ResizeObserver|Function|window.ResizeObserver|✔|When the global `ResizeObserver` doesn't exist, the <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a> provides support|
|name|String|"ECharts"|✔|The registered name of the component|


#### Instance Properties
|Name|Type|ReadOnly|Explain|
|-|-|-|-|
|inst|Object|✔|ECharts instance|


#### props
|Name|Type|Default|Reactive|Explain|
|-|-|-|-|-|
|initTheme|Object, String|||The parameter `theme` of `echarts.init` method, <a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">see</a>|
|initOpts|String|||The parameter `opts` of `echarts.init` method, <a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">see</a>|
|loading|Boolean|false|✔|Shows loading animation|
|loadingType|String|"default"||The parameter `type` of ECharts instance `showLoading` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|loadingOpts|Object|||The parameter `opts` of ECharts instance `showLoading` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">see</a>|
|option|Object||✔|The parameter `option` of ECharts instance `setOption` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|setOptionOpts|Object|||The parameter `opts` of ECharts instance `setOption` method, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|events|Array&lt;Arguments&gt;|||An array element is the arguments of ECharts instance method `on`, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank">see</a>|
|autoResize|Boolean|true||Auto resize (Based on `ResizeObserver`, forward compatibility via <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a>)|


#### methods
|Definition|Explain|
|-|-|
|void `setOption`(Object *option*, Object *opts*)|Call the method `setOption` of ECharts instance, <a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">see</a>|
|void `resize`()|Resize chart (Based on the size of outer div)|
|void `addResizeListener`()|Add "resize" listener|
|void `removeResizeListener`()|Remove "resize" listener|


#### Contact Us
1. *WeChat*: ambit_tsai
1. *QQ Group*: 663286147
1. *E-mail*: ambit_tsai@qq.com
