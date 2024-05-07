const lastElement = arr => arr[arr.length - 1];
const isAppleDevice = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
const results = await Promise.all(resultingPromises);