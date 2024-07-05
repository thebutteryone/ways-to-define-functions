const isEmptyArray = arr => !arr.length;
const channel = getChannel(computedAppVersion);
var regexp  = new RegExp('{{([^}]+)}}', 'g');