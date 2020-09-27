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
app.use(plugin, { echarts, h });                        // 作用插件使用
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
            ECharts: createComponent({ echarts, h }),   // 作为组件使用
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();       // 调用 ECharts 实例的方法
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

Vue.use(plugin, { echarts });                           // 作用插件使用
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
            ECharts: createComponent({ echarts }),      // 作为组件使用
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.inst.getWidth();       // 调用 ECharts 实例的方法
            }
        }
    }
</script>
```
3. <a href="test" target="_blank">更多示例</a>
4. <a href="http://ambit.gitee.io/echarts-for-vue/" target="_blank">效果演示</a>


#### 全局 API
|定义|返回值|说明|
|-|-|-|
|Object `createComponent`(Object *initialOptions*)|组件定义对象|创建组件|
|void `plugin`(Vue *app*, Object *initialOptions*)||插件的安装方法|


#### initialOptions
|名称|类型|默认值|可选|说明|
|-|-|-|-|-|
|echarts|Object|||ECharts 库的全局对象|
|h|Function||✔|Vue 的 `createElement` 方法（使用 Vue 3 时，是**必选**的）|
|ResizeObserver|Function|window.ResizeObserver|✔|全局 `ResizeObserver` 不存在时，可通过 <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a> 提供支持|
|name|String|"ECharts"|✔|组件的注册名称|


#### 实例属性
|名称|类型|只读|说明|
|-|-|-|-|
|inst|Object|✔|ECharts 实例|


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
|autoResize|Boolean|true||自动调整大小（基于 `ResizeObserver` 实现，通过 <a href="https://github.com/que-etc/resize-observer-polyfill" target="_blank">polyfill</a> 可向前兼容）|


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
