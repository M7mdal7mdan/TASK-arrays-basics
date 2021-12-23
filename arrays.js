let firstArray=[];
let hobbies =["coding", "swimming","Off-Roading","padel","football", "Traveling"];
let numbers = [3,13,23,33,43];

console .log(numbers[1]);

console.log(hobbies[hobbies.length -1]);

hobbies.push("cooking");

console.log(hobbies[hobbies.length -1]);


console.log(hobbies.length);

let removeHobbies= 2;

hobbies.splice(hobbies.length - removeHobbies, removeHobbies);

console.log(hobbies.length);
hobbies.length = 0;
console.log(hobbies);

console.log(...hobbies);

