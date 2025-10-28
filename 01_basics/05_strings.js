const name = "Sahil"
const num = 50
console.log(name + num + " yes");  //Sahil50 yes
console.log(`My name is ${name} and my repo has count of ${num}`);  //string interpolation        //use of `` (backtick is compulsory to use ${} syntax) //we can use method under ${} like name.length; 
console.log(`my name has length of ${name.length}`);


//another way of declaring string (by using object (as we are using new keyword here)) 
const game = new String("Sahil")  //it is dedicately defining that the Sahil is string 
console.log(game);    //if we do this on console we will similar o/p with key and value pair as 0:"S", 1:"a"... and also with lots of string methods

console.log(typeof game);   //object

//string methods
console.log(name.replace('S','n'))  //nahil  
console.log(name.search('S')) //0

console.log(game[0]);  //S

//to access the prototype that we seen on console (having prefix 'f')
console.log(game.__proto__);   //o/p: {} (object) though it is seem to be empty but there is lots of prototypes under it but we can't see here in terminal (csn see in browser console)

console.log(game.toUpperCase()); //SAHIL
//here though the game is a object (store in heap) but the value of game i.e. Sahil didn't permenantly change as we didn't create its copy means didn't store this in other variable and only applied method on the original variable

console.log(game.charAt(3)); //i
//console.log(game.charAt(5)); //nothing (not -1)
console.log(game.indexOf('l'));

const newgame = game.substring(0,3) 
console.log(newgame);   //Sah (0,1,2)(not Sahi as it excludes index 3)

//here it will print Sahil as string method doesn't impact the original object
console.log(game);

// if we use negative value in substring then it will simply ignore it and will start from 0

const sone = "  Sahil   "
console.log(sone)   //  Sahil   (with spaces)
console.log(sone.trim());  //Sahil, will remove extra spaces (to save the storage useful in database)
//it works on whitespaces and line terminators \n

//for replacement
const url = "jshdfbsdnbssdvk"
console.log(url.replace('s','1'));  //j1hdfbsdnbssdvk

const char = 'Hey, Hare Krishna'
//console.log(char.split(' '))    //[ 'Hey,', 'Hare', 'Krishna' ]
const char1 = char.split(' ')
console.log(char1[2]);   //Krishna 




































