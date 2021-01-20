(()=>{var t={4091:(t,e,n)=>{"use strict";var i=n(54);const o="function"==typeof ResizeObserver?ResizeObserver:class{constructor(){console.warn('[ECharts-For-Vue] "autoResize" is invalid, you need a ResizeObserver polyfill')}disconnect(){}observe(){}};function a(t){return t("div",{attrs:this.$attrs,style:{height:"100%",overflow:"hidden"}})}function s(t){return function(){return t("div",{...this.$attrs,style:{height:"100%",overflow:"hidden"}})}}var r=n(8966),l=(n(9894),n(5831),n(9045),n(3121),n(6009),n(2124),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"App"},[n("ECharts",{ref:"chart",staticClass:"chart",attrs:{option:t.option,setOptionOpts:{notMerge:!1},loading:t.loading,loadingOpts:{text:"Wait for 0.8s"},events:[["dblclick",t.onDblclick]]}}),t._v(" "),n("ol",[n("li",[t._v('Resize the window to test the feature "autoResize";')]),t._v(" "),n("li",[n("button",{attrs:{disabled:t.loading},on:{click:t.toggleChartOption}},[t._v("Click here")]),t._v(" to toggle the chart options;")]),t._v(" "),n("li",[t._v("Double click the symbol to test the event listener;")]),t._v(" "),t._m(0)])],1)});l._withStripped=!0;const h=Object.freeze({title:{text:"Example"},tooltip:{trigger:"axis",axisPointer:{type:"cross",label:{backgroundColor:"#6a7985"}}},legend:{data:["邮件营销","联盟广告","视频广告","直接访问","搜索引擎"]},toolbox:{feature:{saveAsImage:{}}},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:["周一","周二","周三","周四","周五","周六","周日"]}],yAxis:[{type:"value"}],series:[{name:"邮件营销",type:"line",stack:"总量",areaStyle:{},data:[120,132,101,134,90,230,210]},{name:"联盟广告",type:"line",stack:"总量",areaStyle:{},data:[220,182,191,234,290,330,310]},{name:"视频广告",type:"line",stack:"总量",areaStyle:{},data:[150,232,201,154,190,330,410]},{name:"直接访问",type:"line",stack:"总量",areaStyle:{},data:[320,332,301,334,390,330,320]},{name:"搜索引擎",type:"line",stack:"总量",label:{normal:{show:!0,position:"top"}},areaStyle:{},data:[820,932,901,934,1290,1330,1320]}]}),p=Object.freeze({tooltip:{trigger:"axis",axisPointer:{type:"cross",crossStyle:{color:"#999"}}},toolbox:{feature:{dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar"]},restore:{show:!0},saveAsImage:{show:!0}}},legend:{data:["蒸发量","降水量","平均温度"]},xAxis:[{type:"category",data:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],axisPointer:{type:"shadow"}}],yAxis:[{type:"value",name:"水量",min:0,max:250,interval:50,axisLabel:{formatter:"{value} ml"}},{type:"value",name:"温度",min:0,max:25,interval:5,axisLabel:{formatter:"{value} °C"}}],series:[{name:"蒸发量",type:"bar",data:[2,4.9,7,23.2,25.6,76.7,135.6,162.2,32.6,20,6.4,3.3]},{name:"降水量",type:"bar",data:[2.6,5.9,9,26.4,28.7,70.7,175.6,182.2,48.7,18.8,6,2.3]},{name:"平均温度",type:"line",yAxisIndex:1,data:[2,2.2,3.3,4.5,6.3,10.2,20.3,23.4,23,16.5,12,6.2]}]}),d={data:()=>({option:p,loading:!1}),methods:{toggleChartOption(){this.loading=!0,setTimeout((()=>{this.option=this.option===h?p:h,this.option={series:[{data:p.series[0].data.sort((()=>Math.random()-.5))},{data:p.series[1].data.sort((()=>Math.random()-.5))}]},this.loading=!1}),100)},onDblclick(){alert("The listener is triggered")}}};n(3554),n(2496);var c=(0,n(810).Z)(d,l,[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[t._v("For details, see "),n("a",{attrs:{href:"https://github.com/ambit-tsai/echarts-for-vue/tree/master/test/vue2-echarts3/",target:"_blank"}},[t._v("/test/vue2-echarts3/")]),t._v(";")])}],!1,null,"5dcabce3",null);c.options.__file="vue2-echarts3/src/App.vue";const u=c.exports;i.Z.config.devtools=!0,i.Z.use((function(t,e){const n=function({echarts:t,h:e,ResizeObserver:n=o,name:i="ECharts"}){const r="function"==typeof e,l=function(t){return{mounted(){const e=t.init(this.$el,this.initTheme,this.initOpts);this.$data._private.dynamic.inst=e,this.loading&&e.showLoading(this.loadingType,this.loadingOpts),this.option&&this.setOption(this.option,this.setOptionOpts),this.events&&this.events.forEach((t=>e.on(...t))),this.autoResize&&this.addResizeListener()},activated(){this.autoResize&&this.addResizeListener()},deactivated(){this.autoResize&&this.removeResizeListener()},beforeUnmount(){this.removeResizeListener(),this.inst.dispose()}}}(t);return r||(l.beforeDestroy=l.beforeUnmount,delete l.beforeUnmount),{...l,name:i,render:r?s(e):a,props:{initTheme:[Object,String],initOpts:Object,loading:{type:Boolean,default:!1},loadingType:{type:String,default:"default"},loadingOpts:Object,option:Object,setOptionOpts:Object,events:Array,autoResize:{type:Boolean,default:!0}},data(){return{_private:Object.freeze({observer:new n((()=>this.resize())),dynamic:{}})}},computed:{inst(){return this.$data._private.dynamic.inst}},watch:{loading(t){t?this.inst.showLoading(this.loadingType,this.loadingOpts):this.inst.hideLoading()},option(t){this.setOption(t,this.setOptionOpts)},autoResize(t){t?this.addResizeListener():this.removeResizeListener()}},methods:{setOption(t,e){this.inst.setOption(t,{...this.setOptionOpts,...e})},resize(){const{clientWidth:t,clientHeight:e}=this.$el;this.inst.resize({width:t,height:e})},addResizeListener(){this.$data._private.observer.observe(this.$el)},removeResizeListener(){this.$data._private.observer.disconnect()}}}}(e);t.component(n.name,n)}),{echarts:r});const g=new i.Z({render:t=>t(u)});g.$mount(),document.getElementById("app").appendChild(g.$el)},9725:(t,e,n)=>{var i=n(994),o=n(3476)(i);o.push([t.id,"\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n#app {\n    width: 60%;\n    height: 65%;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (max-width: 992px) {\n#app {\n        width: 80%;\n        height: 80%;\n}\n}\n","",{version:3,sources:["webpack://./../../../vue2-echarts3/src/App.vue"],names:[],mappings:";AA0DA;IACA,YAAA;IACA,SAAA;AACA;AACA;IACA,UAAA;IACA,WAAA;IACA,iBAAA;IACA,kBAAA;AACA;AACA;AACA;QACA,UAAA;QACA,WAAA;AACA;AACA",sourcesContent:['<template>\n    <div class="App">\n        <ECharts\n            class="chart"\n            ref="chart"\n            :option="option"\n            :setOptionOpts="{ notMerge: false }"\n            :loading="loading"\n            :loadingOpts="{ text: \'Wait for 0.8s\' }"\n            :events="[\n                [\'dblclick\', onDblclick],\n            ]"\n        />\n\n        <ol>\n            <li>Resize the window to test the feature "autoResize";</li>\n            <li><button @click="toggleChartOption" :disabled="loading">Click here</button> to toggle the chart options;</li>\n            <li>Double click the symbol to test the event listener;</li>\n            <li>For details, see <a href="https://github.com/ambit-tsai/echarts-for-vue/tree/master/test/vue2-echarts3/" target="_blank">/test/vue2-echarts3/</a>;</li>\n        </ol>\n    </div>\n</template>\n\n\n<script>\nimport { Option1, Option2 } from \'./options\';\n\nexport default {\n    data() {\n        return {\n            option: Option2,\n            loading: false,\n        };\n    },\n    methods: {\n        toggleChartOption() {\n            this.loading = true;\n            setTimeout(() => {\n                this.option = this.option === Option1 ? Option2 : Option1;\n                this.option = {\n                    series: [{\n                        data: Option2.series[0].data.sort(() => Math.random() - .5),\n                    }, {\n                        data: Option2.series[1].data.sort(() => Math.random() - .5),\n                    }],\n                };\n                this.loading = false;\n            }, 100);\n        },\n        onDblclick() {\n            alert(\'The listener is triggered\');\n        },\n    },\n};\n<\/script>\n\n\n<style>\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n#app {\n    width: 60%;\n    height: 65%;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (max-width: 992px) {\n    #app {\n        width: 80%;\n        height: 80%;\n    }\n}\n</style>\n<style scoped>\n.App {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.chart {\n    height: 0;\n    flex-grow: 1;\n}\n</style>'],sourceRoot:""}]),t.exports=o},3316:(t,e,n)=>{var i=n(994),o=n(3476)(i);o.push([t.id,"\n.App[data-v-5dcabce3] {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.chart[data-v-5dcabce3] {\n    height: 0;\n    flex-grow: 1;\n}\n","",{version:3,sources:["webpack://./../../../vue2-echarts3/src/App.vue"],names:[],mappings:";AA4EA;IACA,YAAA;IACA,aAAA;IACA,sBAAA;AACA;AACA;IACA,SAAA;IACA,YAAA;AACA",sourcesContent:['<template>\n    <div class="App">\n        <ECharts\n            class="chart"\n            ref="chart"\n            :option="option"\n            :setOptionOpts="{ notMerge: false }"\n            :loading="loading"\n            :loadingOpts="{ text: \'Wait for 0.8s\' }"\n            :events="[\n                [\'dblclick\', onDblclick],\n            ]"\n        />\n\n        <ol>\n            <li>Resize the window to test the feature "autoResize";</li>\n            <li><button @click="toggleChartOption" :disabled="loading">Click here</button> to toggle the chart options;</li>\n            <li>Double click the symbol to test the event listener;</li>\n            <li>For details, see <a href="https://github.com/ambit-tsai/echarts-for-vue/tree/master/test/vue2-echarts3/" target="_blank">/test/vue2-echarts3/</a>;</li>\n        </ol>\n    </div>\n</template>\n\n\n<script>\nimport { Option1, Option2 } from \'./options\';\n\nexport default {\n    data() {\n        return {\n            option: Option2,\n            loading: false,\n        };\n    },\n    methods: {\n        toggleChartOption() {\n            this.loading = true;\n            setTimeout(() => {\n                this.option = this.option === Option1 ? Option2 : Option1;\n                this.option = {\n                    series: [{\n                        data: Option2.series[0].data.sort(() => Math.random() - .5),\n                    }, {\n                        data: Option2.series[1].data.sort(() => Math.random() - .5),\n                    }],\n                };\n                this.loading = false;\n            }, 100);\n        },\n        onDblclick() {\n            alert(\'The listener is triggered\');\n        },\n    },\n};\n<\/script>\n\n\n<style>\nhtml, body {\n    height: 100%;\n    margin: 0;\n}\n#app {\n    width: 60%;\n    height: 65%;\n    margin-left: auto;\n    margin-right: auto;\n}\n@media (max-width: 992px) {\n    #app {\n        width: 80%;\n        height: 80%;\n    }\n}\n</style>\n<style scoped>\n.App {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n.chart {\n    height: 0;\n    flex-grow: 1;\n}\n</style>'],sourceRoot:""}]),t.exports=o},3554:(t,e,n)=>{var i=n(9725);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,n(9441).Z)("0b384a35",i,!1,{})},2496:(t,e,n)=>{var i=n(3316);"string"==typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals),(0,n(9441).Z)("3eacc627",i,!1,{})}},e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={id:i,exports:{}};return t[i](o,o.exports,n),o.exports}n.m=t,n.x=t=>{},n.d=(t,e)=>{for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t={179:0},e=[[4091,741]],i=t=>{},o=(o,a)=>{for(var s,r,[l,h,p,d]=a,c=0,u=[];c<l.length;c++)r=l[c],n.o(t,r)&&t[r]&&u.push(t[r][0]),t[r]=0;for(s in h)n.o(h,s)&&(n.m[s]=h[s]);for(p&&p(n),o&&o(a);u.length;)u.shift()();return d&&e.push.apply(e,d),i()},a=self.webpackChunk=self.webpackChunk||[];function s(){for(var i,o=0;o<e.length;o++){for(var a=e[o],s=!0,r=1;r<a.length;r++){var l=a[r];0!==t[l]&&(s=!1)}s&&(e.splice(o--,1),i=n(n.s=a[0]))}return 0===e.length&&(n.x(),n.x=t=>{}),i}a.forEach(o.bind(null,0)),a.push=o.bind(null,a.push.bind(a));var r=n.x;n.x=()=>(n.x=r||(t=>{}),(i=s)())})(),n.x()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9tYWluLmpzIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==