const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);