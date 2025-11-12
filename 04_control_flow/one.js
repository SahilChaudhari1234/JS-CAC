//if and else if (not elif)
const isUserLoggedIn = true

if (isUserLoggedIn){
    console.log("yes, user is logged in");   
}
//as the there is true value under if condition hence it will get executed
//if always works with true and false (as a result of a condition)
//== loose equality operator  (checks value only)
//=== strict equality operator  (checks value and datatype too)
//if have scope too means let/const declared inside if don;t accessibility outer of if 

//diff syntax (implicit scope)
// const balance = 98
// if (balance>88) console.log("yes balance is above 88");

//for more than one line (but unreadable not preffered)
const balance = 98
if (balance>88) console.log("yes balance is above 88"), console.log("yes balance is above 95 too");
//; is needed

//if else nesting //you know if else if 

const UserLoggedIn = true
const debitCard = true
const byGoogle = true
const byEmail = false

if (UserLoggedIn && debitCard){    // no need of UserLoggedIn == true && debitCard == true 
//you can use && more than one time in condition
    console.log("user is allowed for shopping");
}

if(UserLoggedIn || byEmail){
    console.log("user is logged in"); 
    //you can use || more than one time in condition
}










