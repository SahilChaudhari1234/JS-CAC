//while loop
//initialization should be done before while loop
let index = 0
while (index <= 10) {
    console.log(`value of index is ${index}`);
    index = index + 2     //index+2 will result in infinte loop as we never update the value of index inside the loop we just calculate it 
}

//with array
let superArr = ["shaktiman", "Hanuman", "Me"]
let arr = 0
while(arr < superArr.length){        //not <= 0 as array start from index 0
   console.log(`value is ${superArr[arr]}`)
   arr++
}          

//+++++++++++++++++++do while+++++++++++++++++++++++++++++=
//as there is 'do' first then there is while (condition checking), hence it will run the code as least one time even the while condition is not satisfying

let score = 11    
do {
    console.log(`Score is ${score}`);
    score++
} while (score<=10);      
//at above, even the while condition is not satisfied 


