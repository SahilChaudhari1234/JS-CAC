//data categorization: primitive and non primitive (on basis of how the data is stored and how we can access it)

//pdt: Stored directly in memory: The variable holds the actual value.
//pdt: No reference involved: There’s no memory address pointing to a value elsewhere.
//primitive(pdt) (pdt are call by value means when we copy them then they do not give their reference of memory, they actually copy the data, then the changes made are done in copy) 
//7 types: String, Numbers, Boolean, null, undefined(variable and memory space declare but we don't know the value to put in it), Symbol(to make a component unique), Bigint

//reference type/ Non primitive
//here, the reference of this value will be allocate to you when you use it
//Stored as references: The variable holds a memory address pointing to the actual data.
//Reference-based access: Multiple variables can point to the same object.
//types: Array,Objects, Functions

//JS is a dynamically type language, Means:
//Variable types are determined at runtime, not at compile time.
//You don’t have to declare a type when creating a variable.
//The type can change as the program runs.
/*let x = 10;      // x is a Number
x = "hello";     // now x is a String
x = true;        // now x is a Boolean
*/

//const isLoggedIn = false
//const outsideTemp = null
// let email; Same as let email = undefined;

//to represent number as bigInt just add n in last
let k = 1000090909876897876786766786  //o/p: 1.0000909098768978e+27
//let k = 1000090909876897876786766786n  //o/p: 1000090909876897876786766786n
console.log(k);

//obj: values under {}
//function, boolean, array, obj can be stored under object too
let fObj = {                   //note =
    name: "Sahil",
    roll_no: 20
}

console.log(fObj);

//treating function like variable
const myFun = function(){            //no capital
     console.log("Hey world meet me");
}

console.log(myFun);
console.log(typeof myFun);

// *All non-primitive data type has datatype as a object, only function has 'object function' as datatype

//Stack (used in primitive), heap (non-primitive)
//when the memory define in stack (when pdt is define), then it gives the copy of that variable and change made in it reflects in its copy not in orginal value
//when the memory define in heap (when npdt is define), then it gives the refernce of that value means ref of original value and change made in it reflects in it original value directly


//Stack
let myName = "Sahil"
let anotherName = myName
anotherName = "Mandar"
console.log(myName);        
console.log(anotherName);
//Here the change made in myName is not actually in it but in its copy, hence myName is remain "Sahil"

//Heap
let user1 = {
    email: "sahil@gmail.com",
    upi: "user@ybl"
}

user2 = user1
user2.email = "mandar@gmail.com"

console.log(user1.email)        //mandar@gmail.com
console.log(user2.email)        //mandar@gmail.com
//user1.email value changes when we make change in user2.email beacause the function which is a npdt uses heap memory and hence change made in user2 happens in user1 too 


