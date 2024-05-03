const merge = Object.assign({}, obj1, obj2);
console.log((function f(n){return ((n > 1) ? n * f(n-1) : n)})(10));
var arr1 = "john".split('');