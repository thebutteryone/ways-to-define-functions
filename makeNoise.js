const resultingPromises = urls.map((url) => makHttpRequest(url));
const getRandomBoolean = () => Math.random() >= 0.5;
const added = [0, 1, 2, 3, 4].map((item) => item + 1);