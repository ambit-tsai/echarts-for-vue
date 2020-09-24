let Class;


if (typeof ResizeObserver === 'object') {
    Class = ResizeObserver;
} else {
    console.warn('[ECharts-For-Vue] "autoResize" is invalid, you need a ResizeObserver polyfill');
    Class = class ResizeObserver {
        disconnect() {}
        observe() {}
    };
}


export default Class