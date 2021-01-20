
export function getHooks(echarts) {
    return {
        mounted() {
            const ctx = this;
            ctx.$nextTick(() => {
                const inst = echarts.init(ctx.$el, ctx.initTheme, ctx.initOpts);
                ctx.$data._private.dynamic.inst = inst;
                
                if (ctx.loading) {
                    inst.showLoading(ctx.loadingType, ctx.loadingOpts)
                }
                if (ctx.option) {
                    ctx.setOption(ctx.option, ctx.setOptionOpts);
                }
                if (ctx.events) {
                    ctx.events.forEach(args => inst.on.apply(inst, args));
                }
                if (ctx.autoResize) {
                    ctx.addResizeListener();
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
