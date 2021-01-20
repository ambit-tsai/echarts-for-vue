
export function getHooks(echarts) {
    return {
        mounted() {
            this.$nextTick(() => {
                const inst = echarts.init(this.$el, this.initTheme, this.initOpts);
                this.$data._private.dynamic.inst = inst;
                
                if (this.loading) {
                    inst.showLoading(this.loadingType, this.loadingOpts)
                }
                if (this.option) {
                    this.setOption(this.option, this.setOptionOpts);
                }
                if (this.events) {
                    this.events.forEach(args => inst.on(...args));
                }
                if (this.autoResize) {
                    this.addResizeListener();
                }
            });
        },
        
        activated() {
            if (this.autoResize) {
                this.addResizeListener();
            }
        },
        
        deactivated() {
            if (this.autoResize) {
                this.removeResizeListener();
            }
        },
        
        beforeUnmount() {
            this.removeResizeListener();
            this.inst.dispose();
        },
        
    };
}
