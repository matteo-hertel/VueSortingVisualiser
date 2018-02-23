export function delay(time, data = null) {
  return new Promise(resolve => {
    setTimeout(() => resolve(data), time);
  });
}

export function delayWithData(data) {
  return function delsayWrapper(time) {
    return delay(time, data);
  };
}

export function getColorWithValues(min, max) {
  const getColor = getColorWithCache();
  return function getColorWithDefaults(input) {
    return getColor(input, min, max);
  };
}
function getColorWithCache() {
  const cache = new Map();
  function innerGetColor(input, min, max) {
    if (cache.has(input)) return cache.get(input);
    const value = input - min;
    const spectrum = value / max;
    const red =
      spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 255) : 0;
    const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 255) : 0;
    const green = blue > 0 ? 255 - blue : 255 - red;

    let out = `rgb(${red},${green},${blue})`;
    cache.set(input, out);
    return out;
  }
  return innerGetColor;
}
