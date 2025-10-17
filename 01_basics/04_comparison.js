//commom comparison operator (where both operators are of same type)(gives o/p in true or false):
// ==
// <
// >
// <=
// >=
// !=
// console.log(2>1);
// console.log("02">1);  //true    //automatically converts in  number 
// console.log("2">1)    //true     //automatically converts in  number 

console.log("1:", null>0);  
console.log("2:",null==0);
console.log("3:",null>=0);
//For relational comparisons like >, <, >=, and <=, JavaScript converts non-numeric types to numbers before comparing. (in 1) here null get converts 0 hence null > 0 false
//similar for 3 (it is greater than or equals to not only greater than)
//console.log(null == 0); // false
//in 2, The abstract equality operator (==) follows a different set of rules. It has a specific rule stating that "null is only equal to undefined and itself". It does not convert null to a number in this case.

console.log("4:",undefined==0);    //false
console.log("5:",undefined > 0);    //false
console.log("6:",undefined <= 0);  //false
console.log("7:",null == undefined);  //true

// == (abstract equality operator) checks only values not datatype
// === (strict check) check both