const sumArray = arr => arr.reduce((total, current) => total + current, 0);
const dayDif = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000);