const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
var pattern = {};