const num1 = 91
console.log(num1);   //91

const num2 = new Number(92)
console.log(num2);   //[Number: 92]
//note the difference in output
//when you run 2nd in console it will return the num methods which are limited

//but we can add more properties by converting it into string

//applying 2 methods at a time
console.log(num1.toString().length);  //2
//num1 is still Number as we only print it not store in separete variable

const num3 = new Number(93)
numA = num3.toString()
console.log(numA.length);  //2
console.log(num3.toFixed(2));  //93.00


//toFixed is a num method uses for precision (plays with digits after points)(used in ecommerce website where user is not familiar with this much digit after points)
num4 = 94.36784
console.log(num4.toFixed(1)); //94.4 
console.log(num4.toFixed(3)); //94.368

//toPrecision is a num method uses for precision  (tip: focus and compare output of both)
const numB = 101.76765
console.log(numB.toPrecision(3));  //102 //means give only 3 numbers but with precision 
console.log(numB.toFixed(3)); //101.768

console.log(numB.toPrecision(2));  //1.0e+2 so be cautious while using toPrecision

console.log(numB.toPrecision(4));  //101.8  

//so in conclusion we can say that, using fixed or precision is solely depends on where we want to play only after points or with before points and after points too


//to increase the readability of the number 
const numC = 1000000
console.log(numC.toLocaleString());   //(default indian standards) 10,00,000 (ten lakh) 

console.log(numC.toLocaleString('en-EN'));   //(US standard) 1,000,000  //like hundred thousand shambhar hajar


//++++++++++++++++++++++++ Maths +++++++++++++++++++++++++=
console.log(Math.max(100000000,656565554254,564654,5465)); //656565554254  //can be use with array
console.log(Math.PI);   //3.141592653589793
//to see other defined values (also functions (not property)) on console do console.log(Math)
// E
// : 
// 2.718281828459045
// LN2
// : 
// 0.6931471805599453
// LN10
// : 
// 2.302585092994046
// LOG2E
// : 
// 1.4426950408889634
// LOG10E
// : 
// 0.4342944819032518
// PI
// : 
// 3.141592653589793
// SQRT1_2
// : 
// 0.7071067811865476
// SQRT2
// : 
// 1.4142135623730951

console.log(Math.abs(-54));
console.log(Math.round(-54.59)); //-55  -54.50 => -54 as rounding to upper number starts after 0.5 means 0.5 comes under lower number

console.log(Math.ceil(5.6));
console.log(Math.floor(5.6));

console.log(Math.random())  //gives value >0 and <1  //always change
console.log(Math.random()*10) 
//as it can be 0.087865 (>0 and <1) in that case we can still get 0.87 hence to avoid this we will add 1
console.log(Math.random()*10+1) 

//but because of BODMAS we use 
console.log((Math.random()*10)+1)
console.log(Math.floor(Math.random()*10)+1)

//to get the value in between desired numbers
const min = 5
const max = 10
// console.log(Math.random()+min);   //we can do this too but it will give us value in b/w 5 and 6 only 

console.log(Math.floor(Math.random()*(max-min+1)));
//example: random gives 0.023424, hence 0.023424*6 = 0.140544 => +5 => 5.140544






































