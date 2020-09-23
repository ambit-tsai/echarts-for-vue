
export function getHooks(echarts) {
    return {
        mounted() {
            const inst = echarts.init(this.$el, this.theme, this.initOpts);
            this.inst = inst;
            
            if (this.loading) {
                inst.showLoading(this.loadingType, this.loadingOpts)
            }
            if (this.option) {
                this.setOption(this.option);
            }
            if (this.events) {
                this.events.forEach(args => inst.on(...args));
            }
            if (this.autoResize) {
                this.addResizeListener();
            }
        },
        
        activated() {
            this.addResizeListener();
            this.resize();
        },
        
        deactivated() {
            this.removeResizeListener();
        },
        
        beforeUnmount() {
            this.removeResizeListener();
            this.inst.dispose();
        },
    };
}
