const numbers = [5, 4, 7, 6, 8, 3, 9];
// const output = [];
// for(let i = 0; i < numbers.length; i++){
//     const element = numbers[i];
//     const result = element * element;
//     output.push(result);
// }
// console.log(output);

// map filtering work,,,,

// function square (element){
//     return element * element;
// }


// const result = numbers.map(x => x * x);
// console.log(result);

const bigger = numbers.filter( x => x > 5);
console.log(bigger);

const isThere = numbers.find(x => x > 5);
console.log(isThere);
