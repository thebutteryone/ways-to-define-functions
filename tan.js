const currentDate = () => new Date().toLocaleDateString('en-US');
var c = new Counter(); c.add(); c.add(); c.add();
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();