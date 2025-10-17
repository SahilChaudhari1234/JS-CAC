// //Conversion of datatypes
// let score = "123"

// console.log(typeof score);
// console.log(typeof(score));  // both are same

// let scoreStringToNumber = Number(score)   //typecasting
// console.log(typeof scoreStringToNumber);

// console.log(scoreStringToNumber);
// console.log("..........................");


// let score1 = "333ab"

// console.log(typeof(score1));  //sring

// let score1StringToNumber = Number(score1)   //it will not convert into number but in NaN (illegal no)
// console.log(score1StringToNumber);   //NaN

// console.log(typeof score1StringToNumber);   //Number (as type of NaN is number)

// console.log("..........................");


// let score2 = null

// console.log(typeof(score2));  //sring

// let score2StringToNumber = Number(score2)   //it will not convert into number but in NaN (illegal no)
// console.log(score2StringToNumber);   //NaN

// console.log(typeof score2StringToNumber);   //Number (as type of NaN is number)

// console.log("..........................");


// let score3 = undefined

// console.log(typeof(score3));  //sring

// let score3StringToNumber = Number(score3)   //it will not convert into number but in NaN (illegal no)
// console.log(score3StringToNumber);   //NaN

// console.log(typeof score3StringToNumber);   //Number (as type of NaN is number)

// console.log("..........................");


// let score4 = true

// console.log(typeof(score4));  //sring

// let score4StringToNumber = Number(score4)   //it will not convert into number but in NaN (illegal no)
// console.log(score4StringToNumber);   //NaN

// console.log(typeof score4StringToNumber);   //Number (as type of NaN is number)

// //"33" => 33
// // "33abc" => NaN
// // true => 1; false => 0
// console.log("............................");


// let isLogedIn = ""
// let booleanIsLoggedIn = Boolean(isLogedIn)
// console.log(booleanIsLoggedIn)   //1 or any number => true, 0 => false, "" (empty string) => false, "any_string" => true


//***********************************

// let value = 3
// let negValue = -value
//console.log(negValue);   //-3
// console.log(4**2)   //4^2=16

//concatenation
let str1 = "Hello"
let str2 = " Sahil"
let str3 = str1 + str2
console.log(str3); //Hello Sahil

//console.log("99"+"9"); //o/p: 999 (concatination)
//console.log("99"+9); //o/p: 999 (concatination)
//console.log(99+"9"); //o/p: 999 (concatination)
////console.log(1+99+"9"); //o/p: 1009  (concatination)
//console.log("1"+99+9); //o/p: 1999 (something different)
//console.log("1"+99+"9"); //o/p: 1999
//console.log(1+"99"+9);     //o/p: 1999
//conclusion: 
// 1.if the string is first then all the numbers after it will be considered as a string and will get concatinated
//2. if there are some numbers before string then they will get desired operation performed

//console.log("99"-9);   //o/p : 90 (simple substraction)
//console.log(99-"9");   //o/p : 90 (simple substraction)
//console.log("Sunil"-8);   //NaN  //not a number

console.log(true)    //1
console.log(+true)    //1
console.log(+"")  //0

//both will have same output
console.log("x:" +str1 +" y:" +str2);
console.log(`x:${str1}, y:${str2}`);







