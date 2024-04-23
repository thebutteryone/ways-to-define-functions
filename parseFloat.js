const isTabInView = () => !document.hidden;
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
const randomArrayItem = (arr) => arr[Math.floor(Math.random() * arr.length)];