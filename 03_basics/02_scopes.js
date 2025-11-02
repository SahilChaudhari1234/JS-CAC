//scope is defined by {}
//scope under {} is known as block scope and outer is global
//main thing is that if the variable/const defined under block scope then the same variable/const should not be accessible outside the scope vice versa is permissible
//the main problem is with var only

var a = 200
//let b = 987
//const c = 765
if (true){
    var a = 20
    let b = 30
    const c = 40
    console.log("inner: b=",b);   //30
    
}

console.log(a);     //20 expected is 200 
//console.log(b);   
//console.log(c);  //ReferenceError: c is not defined

//..................v22: Scope level and mini hoisting in javascript.................
let z = 50
function one (){
    const username1 = "Sahil"
    console.log("you are under outer 1");
    
    function two(){
        const web = "YT"
        console.log(username1);
        console.log(z);     //50  //outer outer variable
    }
    //console.log(web);
    two()        
}

one() 

//same applied for if - else as they are also block scoped

//+++++++++++++interesting+++++++++++++++
//types of declaring function
function addOne(num){
    return num + 1
} 

const addTwo = function(num){     //Variable holding the value of function  //known as expression
    return num + 2
}
//(hoisting) but as we are using variable here we can't access it before the function declaration like: (we can't do this)
/*
console.log(addTwo(6))
const addTwo = function(num){     
    return num + 2
}
*/

console.log(addOne(6))   //7
console.log(addTwo(6))   //8

console.log(addTwo + 3);  //(don't know) function(num){     //Variable holding the value of function
//     return num + 2
// }3











