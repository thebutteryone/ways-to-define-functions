const arrayToObject = (arr, keyField) => Object.fromEntries(arr.map(item => [item[keyField], item]));
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];