export function getColourWithValues(min, max) {
  const getColour = getColourWithCache();
  return function getColourWithDefaults(input) {
    return getColour(input, min, max);
  };
}

function getColourWithCache() {
  const cache = new Map();
  function getColour(input, min, max) {
    if (cache.has(input)) return cache.get(input);

    const value = input - min;
    const spectrum = value / max;
    const red =
      spectrum < 0.5 ? Math.floor(Math.abs(spectrum - 0.5) * 2 * 255) : 0;
    const blue = spectrum > 0.5 ? Math.floor((spectrum - 0.5) * 2 * 255) : 0;
    const green = blue > 0 ? 255 - blue : 255 - red;

    let colour = `rgb(${red},${green},${blue})`;
    cache.set(input, colour);
    return colour;
  }
  return getColour;
}
