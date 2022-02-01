export function mean(arr, len) {
  let sum = 0;

  for (let i = 0; i < len; i++) {
    if (typeof arr[i] !== "number") {
      return NaN;
    }
    sum = sum + arr[i];
  }

  let mean = sum / len;

  return mean;
}
