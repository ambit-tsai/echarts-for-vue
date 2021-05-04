import { ResizeObserverConstructor } from '..'


function ResizeObserverSham() {
    console.warn('[ECharts-For-Vue] "autoResize" is invalid, you need a ResizeObserver polyfill');
}

const noop = () => {}
ResizeObserverSham.prototype.disconnect = noop
ResizeObserverSham.prototype.observe = noop


export default typeof ResizeObserver === 'function'
    ? ResizeObserver
    : <ResizeObserverConstructor><unknown> ResizeObserverSham
