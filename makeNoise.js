const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const resultingPromises = urls.map((url) => makHttpRequest(url));