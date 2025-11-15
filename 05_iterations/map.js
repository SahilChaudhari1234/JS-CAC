//Map: To apply a function on each element and it dont affect original array (we can do same using for)
let nums = [1,2,3,4,5]

let newNums10 = nums.map((num) => num+10)

//console.log(newNums10);  //[ 11, 12, 13, 14, 15 ]

//++++++++++++++++++++++++++Chaining+++++++++++++++++++++++
//using more than one methods simultaneously
// newNums10 = nums
//               .map((num)=> num*10)
//               .map((num) => num+1)
              
// console.log(newNums10);   //[ 11, 21, 31, 41, 51 ]

newNums10 = nums
              .map((num)=> num*10)
              .map((num) => num+1)
              .filter((num) => num > 40)
console.log(newNums10);       //[ 41, 51 ]





