//this keyword tells about current context
const user = {

    username: "Sahil",
    price: 999,
    welcomemsg: function(){
        //console.log(`Welcome ${username} `);  //Can't do as username is out of scope of welcomemsg function
        console.log(`Welcome ${this.username} `);
        console.log(this);  //if we use bare ''this inside inner fun then it gives info abt the current context,(i) with username: "Sahil": { username: 'Sahil', price: 999, welcomemsg: [Function: welcomemsg] }
        //(ii) with username: "dev": { username: 'dev', price: 999, welcomemsg: [Function: welcomemsg] }
        
    }
}

user.welcomemsg()           //Wwelcome Sahil
user.username = "dev"
user.welcomemsg()    //Welcome dev

//console.log(user.username);     //dev

const username1 = "Vaibahv"
const well = function(){
    console.log(`hey ${this.username1}`);
}

//well()      //hey undefined
console.log(this);    //{}   //as we are in node environment hence it is reffering to empty obj as we don't have any context in global

// function tea (){
//     console.log(this);
    
// }

//tea()        //gives long output as 'this' always refer to outer block and this long output is about global
// function tea (){
//     let username2 = "Sahil1"
//     console.log(this.username2);
    
// }

// tea()     //undefined, this context works under only object not under function

//+++++++++++++++++++++ Arrow function +++++++++++++++++++
const obj1 = {
 u1: "Sahil3",
chai: () => {
    
    console.log(this.u1)
}
}

console.log(obj1.chai())   //undefined 

// const chai1 = function (){
//     let u2 = 9876
// }

// const chai2 = function () {
//     let u2 = "Sahil4"
//     console.log(this);
    
// }

// chai2()

//short form 
//implicit return
//const addTwo = (n1,n2) => n1 + n2
//no need to write return keyword and {} but limited to only one line
//console.log(addTwo(5,6));

// const addTwo = (n1,n2) => (n1 + n2)
// //if we wrap inside {} then only need to write return keyword
// console.log(addTwo(5,6));

//to return a obj
// const addTwo = () => ({usern: "Sahil4"})
// console.log(addTwo());












