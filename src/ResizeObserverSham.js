
export default typeof ResizeObserver === 'function'
    ? ResizeObserver
    : class ResizeObserverSham {
        constructor() {
            console.warn('[ECharts-For-Vue] "autoResize" is invalid, you need a ResizeObserver polyfill');
        }

        disconnect() {}

        observe() {}
    }
