const timeFromDate = date => date.toTimeString().slice(0, 8);
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const updated = numbers.filter(element => element > 6);