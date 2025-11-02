function sayname () {
    console.log("S");
    console.log("A");
    console.log("H");
    console.log("I");
    console.log("L");
}

//calling a function
sayname()

//refernce only 
sayname

function add(n1,n2) {   //as we didn't specify the type (we will do this using if else)
    console.log(`sum is ${n1 + n2}`);  //7  ,  add(3,"4") -> 34, add(3,null) -> 3
} 

const result = add(3,4)  //sum is 7 function is call here 
console.log("Result1:", result);   //Result: undefined as we didn't return anything from add fun (point: only the return value will be stored into result)

function add1(n3,n4){
    // let sum = n3 + n4
    // return sum  
    return n3+n4
    console.log("Sahil"); //it will not get executed 
    
}

const result34 = add1(3,4)  //sum is 7 function is call here
console.log("Result2:", result34)    //Result2: 7

//value return but not print
function loginUserMsg(username){   //giving default value function loginUserMsg(username = "Sahil")
if(!username)  //“If username is falsy, then run this block.”
/*🧾 In JavaScript, the following values are falsy:

undefined

null

false

0

NaN

"" (empty string)*/
//if(username === undefined)   //as we are not passing anything means it is undefined
{
    console.log("Please enter a username");
    return
}
else
  return `${username} logged in successfully`
}

//loginUserMsg("Sahil")  //it will print nothing

console.log(loginUserMsg("Sahil"));  //Sahil logged in successfully

//console.log(loginUserMsg());  //undefined logged in successfully 

//to handle this we make a difference in code
console.log(loginUserMsg()); //Please enter a username
//undefined 


//....................v20 (functions with objects and array in JS)............


function calculateCartSum (val1,v1l2,...num1){
    return num1
}

//console.log(calculateCartSum(4,5,7,8));   //[ 4, 5, 7, 8 ] before doing val1,v1l2,...num1 and only with ...num1

console.log(calculateCartSum(4,5,7,8));   //[ 7, 8 ]
//use case: (adding object in cart and summing their values where how much object will be add to the cart is not previously defined)

//we can pass obj in function too 
const user = {
    username: "Sahil",
    ID: 123
}

function handletheObj(passanyobj){
      console.log((`Username is ${passanyobj.username} and price is ${passanyobj.ID}`));
}

handletheObj(user)

//making obj at instance and passing it
handletheObj({
username: "Sahil",
ID: 399
})

const arr1 = [1,2.5,5,6,7]

function return2ndelement(arr){
    return arr[1]
}

console.log(return2ndelement(arr1));    //2.5
console.log(return2ndelement("ads"));    //d
























