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
