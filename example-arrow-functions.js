// var names = ['Sam', 'Dhana', 'Anupriya'];

// names.forEach(function(name){
//   console.log('For each - ', name);
// });
//
// names.forEach((name) => {
//   console.log('ArrowFunc - ', name);
// });
//
// names.forEach((name) => console.log(name));

// var returnName = (name) => name + '!';
//
// console.log(returnName('Naazim'));

// var person = {
//   name: 'Naazim',
//   greet: function(){
//     names.forEach((name) => {
//       console.log(this.name + ' says Hi to ' + name);
//     });
//   }
// };
//
// person.greet();


function add(a,b){
  return a + b;
}

//addStatement
var addStatement = (a,b) => {
  return a+b;
}

//addExpression
var addExpression = (a,b) => a+b;

console.log(add(1,3));
console.log(add(9,0));

console.log(addStatement(1,3));
console.log(addStatement(9,0));

console.log(addExpression(1,3));
console.log(addExpression(9,0));
