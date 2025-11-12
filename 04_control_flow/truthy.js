//there are some values which are considered to be true defaultly (truthy values): true, Non-empty string("0", 'false', " "),Non-zero number, Objects {} and array [] (objects and arrays are truthy, even if empty),all functions including empty function 
const userMail = {}

if(userMail){
    console.log("got user email");
   }
   else{
      console.log("Don't havr user email");
}
//got user email 

/*falsy values: 
false,0,-0, 
BigInt 0n,
"" (empty string),
null,
undefined,
NaN
*/

//checking empty array, if the datatype is array
const arr = []
if (arr.length==0){
    console.log("Array is empty");
}

//checking empty object, if the datatype is object
const obj = {}
if (Object.keys(obj).length == 0 )   //first convert the object into array then check by calling length property
{
    console.log("object is empty");
}

/*IQ: false == 0 => true (0 is considered as false),
false == '' => true(empty string),
0 == ''  => true
*/

//Nullish Coalescing Operator (??): null undefined
//The Nullish Coalescing Operator (??) in JavaScript is used to provide a default value when a variable is either null or undefined — but not for other falsy values like 0, '', or false.
let userName = null;
let defaultName = "Guest";

let finalName = userName ?? defaultName;
console.log(finalName); // Output: "Guest"
//👉 Here, since userName is null, the operator takes the value of defaultName.

let userScore = 0;

console.log(userScore || 100); // Output: 100 (because 0 is falsy for ||)
console.log(userScore ?? 100); // Output: 0 ✅ (because 0 is not null/undefined for ??, only null and undefined is empty)

let val1
//val1 = 5 ?? 10 //5
//val1 = 6 ?? 7 ?? 9 //6
//val1 = null ?? 87 //87
//val1 = 87 ?? null //87
//val1 = null ?? 10 ?? 30 //10
//val1 = undefined ?? 678 // 678 
//val1 = undefined ?? null   //null
//val1 = null ?? undefined   //undefined
//if null or undefined is there then leave it and hold second no matter what it is(even it is null/undefined itself)
//only matter is null  and undefined
//with Nullish Coalescing Operator we often check with returned values
console.log(val1);


//ternary op
const water = "Hot"
water == "Hot"? console.log("yes it is hot"): console.log("NO, it is cool");










