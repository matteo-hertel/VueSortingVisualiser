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
  return function getColorWithDefaults(input) {
    return getColor(input, min, max);
  };
}

function getColor(input, min, max) {
  const value = input - min;

  const spectrum = value / max;
  const red =
    spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 255) : 0;
  const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 255) : 0;
  const green = blue > 0 ? 255 - blue : 255 - red;

  return `rgb(${red},${green},${blue})`;
}
