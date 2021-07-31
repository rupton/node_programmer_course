const { sum, concat } = require('./utilities/lib1');
const { cut3, lgNum } = require('./utilities/lib2');
const Cat = require('./cat');

console.log(sum([1,2,3,4]));
console.log(concat([10, 11, 12, 13],[6, 10, 3, 44]));

console.log( lgNum([300, 410, 1180, 1.567e10]));
console.log( cut3([345, 890, 8990, 5480980, 'no way']));
const cat = new Cat();
console.log(cat.makeSound());
