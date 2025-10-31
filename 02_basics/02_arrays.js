const numArr1 = [1,2,3]
const numArr2 = [4,5,6]
const strArray1 = ['A','B','C']

console.log(numArr1);  //[ 1, 2, 3 ]
const tempArray = numArr1 + numArr2
console.log(typeof(tempArray));   //string 

console.log(numArr1+ "," + numArr2);    //1,2,3,4,5,6 but with  not []

//numArr1.push(strArray1)     //will give diff result on doing console.log(numArr1.push(strArray1))
console.log(numArr1);  //[ 1, 2, 3, [ 'A', 'B', 'C' ] ]
//means after doing numArr1.push(strArray1) the strArry1 is considered as a element of a array numArr1

//console.log(numArr1[3][0]);  //A

const mixArr1 = numArr1.concat(strArray1)
console.log(mixArr1);  //[ 1, 2, 3, 'A', 'B', 'C' ]

//we can use spread operator too 
const mixArr2 = [...numArr1, ...strArray1]   //it just spread the elements lying under the constituted elements  //work for no of arrays
console.log(mixArr2);
//rember this is operator not a function


const numArrarr4 = [1,2,3,[4,5,6],[7,8,9,[10,11,12]]]
const newArr = [...numArr1, ...numArrarr4]
console.log(newArr);  //[ 1, 2, 3, 1, 2, 3, [ 4, 5, 6 ], [ 7, 8, 9, [ 10, 11, 12 ] ] ] can't unfold array under array under array


const newArr1 = newArr.flat(2)   //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(newArr1); /*[
   1,  2,  3, 1, 2, 3,
   4,  5,  6, 7, 8, 9,
  10, 11, 12
]*/

console.log(Array.isArray("Sahil")); //false
console.log(Array.from("Sahil")); //[ 'S', 'a', 'h', 'i', 'l' ]  creates array from string

console.log(Array.from({name: "Sahil"})); //[] can't convert as we have to define which is a key and which one is a value

//to make the array from elements
let n1 = 100
let n2 = 255
let n3 = 633

console.log(Array.of(n1,n2,n3));





















 







