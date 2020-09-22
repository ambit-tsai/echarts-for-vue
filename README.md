
# ECharts For Vue&nbsp;&nbsp;![Version](https://img.shields.io/npm/v/echarts-for-vue.svg)

适用于 Vue 的 ECharts 包装组件，轻便、高效，贴合用户的使用习惯

#### 安装
本组件依赖 `echarts` 与 `resize-detector`
* 已装依赖: `npm i -S echarts-for-vue`
* 未装依赖: `npm i -S echarts resize-detector echarts-for-vue`


#### 用法
```html
<template>
    <ECharts ref="chart" :option="option" />
</template>

<script>
    import ECharts from 'echarts-for-vue';
    export default {
        components: {
            ECharts,
        },
        data() {
            return {
                option: { /*...*/ },
            };
        },
        methods: {
            doSomething() {
                this.$refs.chart.$inst.getWidth();  // 调用 ECharts 实例的方法
            }
        }
    }
</script>
```
1. <a href="docs/index.js" target="_blank">其它示例</a>
1. <a href="https://ambit-tsai.github.io/echarts-for-vue/" target="_blank">效果演示</a>


#### 组件实例的属性
|名称|类型|值|说明|
|-|-|-|-|
|$inst|Object||ECharts 实例|


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
|autoResize|Boolean|true||自动调整大小|


#### methods
|定义|说明|
|-|-|
|void `setOption`(Object *option*, Object *opts*)|调用 ECharts 实例的 `setOption` 方法，<a href="https://echarts.apache.org/zh/api.html#echartsInstance.setOption" target="_blank">详见</a>|
|void `resizeChart`()|调整图表大小（以组件外层 div 大小为准）|
|void `addResizeListener`()|添加 resize 监听器|
|void `removeResizeListener`()|移除 resize 监听器|


#### 联系
1. *微信*: ambit_tsai
1. *QQ群*: 663286147
1. *邮箱*: ambit_tsai@qq.com
