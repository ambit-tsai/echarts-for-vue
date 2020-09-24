简体中文 | [English](README.md)


# ECharts For Vue&nbsp;&nbsp;![Version](https://img.shields.io/npm/v/echarts-for-vue.svg)

适用于 Vue 3 和 2 的 ECharts 包装组件


#### 安装
`npm i -S echarts-for-vue`


#### 用法
1. Vue 3
```javascript
import { createApp, h } from 'vue';
import echarts from 'echarts';
import { plugin } from 'echarts-for-vue';

const app = createApp({ /*...*/ });
app.use(plugin, { echarts, h });                    // 作用插件使用
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
            ECharts: createComponent(echarts, h),   // 作为组件使用
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();   // 调用 ECharts 实例的方法
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

Vue.use(plugin, { echarts });                       // 作用插件使用
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
            ECharts: createComponent(echarts),      // 作为组件使用
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();   // 调用 ECharts 实例的方法
            }
        }
    }
</script>
```
3. <a href="test" target="_blank">更多示例</a>
4. <a href="https://ambit-tsai.github.io/echarts-for-vue/" target="_blank">效果演示</a>


#### 全局 API
|定义|返回值|说明|
|-|-|-|
|Object `createComponent`(echarts *echarts* [, Function *h*])|组件定义对象|创建组件。使用 Vue2 时，不需要第二个参数|
|void `plugin`(Vue *app*, Object *options*)||插件的安装方法。参数 `options` 需包含 `echarts`、`h`|


#### 实例属性
|名称|类型|说明|
|-|-|-|
|inst|Object|ECharts 实例|


#### props
|名称|类型|默认值|响应性|说明|
|-|-|-|-|-|
|initTheme|Object, String|||`echarts.init` 方法的入参 `theme`，<a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">详见</a>|
|initOpts|String|||`echarts.init` 方法的入参 `opts`，<a href="https://echarts.apache.org/zh/api.html#echarts.init" target="_blank">详见</a>|
|loading|Boolean|false|✔|显示加载动画效果|
|loadingType|String|"default"||ECharts 实例 `showLoading` 方法的入参 `type`，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">详见</a>|
|loadingOpts|Object|||ECharts 实例 `showLoading` 方法的入参 `opts`，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.showLoading" target="_blank">详见</a>|
|option|Object||✔|ECharts 实例 `setOption` 方法的入参 `option`，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">详见</a>|
|setOptionOpts|Object|||ECharts 实例 `setOption` 方法的入参 `opts`，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">详见</a>|
|events|Array&lt;Arguments&gt;|||数组元素为ECharts 实例 `on` 方法的入参，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.on" target="_blank">详见</a>|
|autoResize|Boolean|true||自动调整大小（基于 `ResizeObserver` 实现，可通过 polyfill 向前兼容）|


#### methods
|定义|说明|
|-|-|
|void `setOption`(Object *option*, Object *opts*)|调用 ECharts 实例的 `setOption` 方法，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">详见</a>|
|void `resize`()|调整图表大小（以组件外层 div 大小为准）|
|void `addResizeListener`()|添加 resize 监听器|
|void `removeResizeListener`()|移除 resize 监听器|


#### 联系
1. *微信*: ambit_tsai
1. *QQ群*: 663286147
1. *邮箱*: ambit_tsai@qq.com
