const shuffleArray = (arr) => arr.sort(() => 0.5 - Math.random());
const average = arr => arr.reduce((a, b) => a + b) / arr.length;