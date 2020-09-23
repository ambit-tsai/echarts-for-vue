
/**
 * echarts-for-vue
 * @version 0.0.3
 * @author Ambit-Tsai <ambit_tsai@qq.com>
 * @license Apache-2.0
 * @see {@link https://github.com/ambit-tsai/echarts-for-vue#readme}
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.EChartsForVue = {}));
}(this, (function (exports) { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function getHooks(echarts) {
    return {
      mounted: function mounted() {
        var inst = echarts.init(this.$el, this.theme, this.initOpts);
        this.inst = inst;

        if (this.loading) {
          inst.showLoading(this.loadingType, this.loadingOpts);
        }

        if (this.option) {
          this.setOption(this.option);
        }

        if (this.events) {
          this.events.forEach(function (args) {
            return inst.on.apply(inst, _toConsumableArray(args));
          });
        }

        if (this.autoResize) {
          this.addResizeListener();
        }
      },
      activated: function activated() {
        this.addResizeListener();
        this.resize();
      },
      deactivated: function deactivated() {
        this.removeResizeListener();
      },
      beforeUnmount: function beforeUnmount() {
        this.removeResizeListener();
        this.inst.dispose();
      }
    };
  }

  /**
   * Create a component
   * @param {echarts} echarts 
   * @param {Vue} [Vue] not required for Vue 2
   * @returns {Object}
   */

  function createComponent(echarts, Vue) {
    var isVue3 = Vue === null || Vue === void 0 ? void 0 : Vue.version.includes('3.');
    var hooks = getHooks(echarts);

    if (!isVue3) {
      hooks.beforeDestroy = hooks.beforeUnmount;
      delete hooks.beforeUnmount;
    }

    return _objectSpread2(_objectSpread2({}, hooks), {}, {
      name: 'ECharts',
      render: isVue3 ? getVue3Render(Vue) : vue2Render,
      props: {
        initTheme: [Object, String],
        initOpts: Object,
        loading: {
          type: Boolean,
          "default": false
        },
        loadingType: {
          type: String,
          "default": 'default'
        },
        loadingOpts: Object,
        option: Object,
        setOptionOpts: Object,
        events: Array,
        autoResize: {
          type: Boolean,
          "default": true
        }
      },
      data: function data() {
        var _this = this;

        return {
          _private: Object.freeze({
            observer: new ResizeObserver(function () {
              return _this.resize();
            }),
            dynamic: {}
          })
        };
      },
      watch: {
        loading: function loading(val) {
          if (val) {
            this.inst.showLoading(this.loadingType, this.loadingOpts);
          } else {
            this.inst.hideLoading();
          }
        },
        option: function option(val) {
          this.setOption(val);
        }
      },
      methods: {
        setOption: function setOption(option, opts) {
          this.inst.setOption(option, _objectSpread2(_objectSpread2({}, this.setOptionOpts), opts));
        },
        resize: function resize() {
          var _this$$el = this.$el,
              clientWidth = _this$$el.clientWidth,
              clientHeight = _this$$el.clientHeight;
          this.inst.resize({
            width: clientWidth,
            height: clientHeight
          });
        },
        addResizeListener: function addResizeListener() {
          this.$data._private.observer.observe(this.$el);
        },
        removeResizeListener: function removeResizeListener() {
          this.$data._private.observer.disconnect();
        }
      },

      /**
       * Install plugin
       * @param {Vue} app 
       */
      install: function install(app) {
        app.component(this.name, this);
      }
    });
  }

  function vue2Render(h) {
    return h('div', {
      attrs: this.$attrs,
      on: this.$listeners,
      style: {
        height: '100%',
        overflow: 'hidden'
      }
    });
  }

  function getVue3Render(Vue) {
    return function () {
      return Vue.h('div', _objectSpread2(_objectSpread2({}, this.$attrs), {}, {
        style: {
          height: '100%',
          overflow: 'hidden'
        }
      }));
    };
  } // TODO: vue 2-3 版本输出
  // TODO: test > webpack、rollup
  // TODO: 英文文档

  exports.createComponent = createComponent;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
