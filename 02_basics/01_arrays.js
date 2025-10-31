//In JS, Array can store different type of elements
//Resizable
const mixArr1 = [0,1,2,3,4,"Sahil", true, [7,5,4,3]]

const numArr1 = [0,1,2,3,4,5]

console.log(mixArr1);

const numArr2 = new Array(9,8,7,6) 
console.log(numArr2);     //[ 9, 8, 7, 6 ]

console.log(numArr2[2]);   //7

//Array Methods
numArr2.push(5)
console.log(numArr2);   //[ 9, 8, 7, 6, 5 ]

console.log(numArr2.pop());  //5   just pop the last element hence no need to pass argument

//to add the element at first position (remember the method name as it is different from its function)
numArr2.unshift(3)
console.log(numArr2);   //[ 3, 9, 8, 7, 6 ]
//but it needs to shift all the elements by one position hence will load on comp and time consuming but useful in cases like to do list where the user wants to add thing to do at first position

//to remove the element from first position 
numArr2.shift()
console.log(numArr2);    //[ 3, 9, 8, 7, 6 ] -> [ 9, 8, 7, 6 ]
//we can get more array methods from console by doing same as in 9 and 10 

//asking question to array (gives answer in true and false boolean)
const numArr3 = new Array(1,2,3,4,5)
console.log(numArr3.includes(3));

console.log(numArr3.indexOf(4)); //3

console.log(numArr3.indexOf(9)); //-1

//to convert array to string 
console.log(numArr3.join());     //1,2,3,4,5 removed []

console.log("...............................");

//slice and splice
console.log("A", numArr3);  //A [ 1, 2, 3, 4, 5 ]

const myn1 = numArr3.slice(1,3)   

console.log(myn1);            //[ 2, 3 ] sliced portion
console.log("printing original array after performing slice op",numArr3);         //[ 1, 2, 3, 4, 5 ]

const myn2 = numArr3.splice(1,3)
console.log(myn2);   //[ 2, 3, 4 ] spliced portion  (includes the last index)

console.log("printing original array after performing SPLICE op",numArr3);      //[ 1, 5 ] here is the twist, slice doesn't make the change into the original array but splice do and remove the portion which remains after performing splice op






















