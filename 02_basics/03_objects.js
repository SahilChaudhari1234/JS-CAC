//obj: npdt which stores data in key value pair   
//obj declaration two types: like literal and like constructor
//obj made by constructor -> singleton (Object.create)
//obj declared like literal dont make singleton

const mySym = Symbol("key1")
//obj literals
const JsUser = {
    name: "Sahil",     //name (key) is consider as a string
    Roll_no : 20,
    mail: "Sahil@gmail.com",
    location: "Wardha",
    islogged: false,  //is logged X
    loginDays: ["Sun","Mon","Tues"],
    "Full name": "SKC",
    1: "one",
    [mySym]: "mykey1"   
}
//adding element
//JsUser["2"] = "Two";
//JsUser.city = "okjhgv"

console.log(JsUser.name);    //Sahil
console.log(JsUser["name"]);   //Sahil

console.log(JsUser["Full name"]);  //SKC  can't do this with console.log(JsUser.Full name); or console.log(JsUser."Full name");

console.log(JsUser["mySym"]);  //undefined

console.log(typeof mySym);  //symbol
console.log("JsUser.mySym",typeof (JsUser.mySym));  // undefined
console.log("JsUser[mySym]",typeof ([mySym])); //object

//(IQ(1))to make the datatype of it as a symbol, we will add [] around mySym in JsUser obj (and if we try to print it (like console.log(JsUser["mySym"]);)after doing the change it will show undefined)
console.log(JsUser[mySym]);  //mykey1

/*//{
  '1': 'one',
  name: 'Sahil',
  Roll_no: 20,
  mail: 'Sahil@gmail.com',
  location: 'Wardha',
  islogged: false,
  loginDays: [ 'Sun', 'Mon', 'Tues' ],
  'Full name': 'SKC',
  [Symbol(key1)]: 'mykey1'
}*/


JsUser.mail = "Sahil@meta.com"
console.log(JsUser);

//to make object freeze
//Object.freeze(JsUser)
JsUser.name = "Sahil123"

console.log(JsUser); 

JsUser.greeting = function()
{
    console.log("Hello Jsuser");
}

console.log(JsUser.greeting());  //it will show error as we freezed the obj 
//Hello Jsuser
//undefined

//console.log(JsUser.greeting); //[Function (anonymous)]  function is not executed but only refernce is send 

console.log(JsUser);  //greeting is added
/*
{
  '1': 'one',
  name: 'Sahil123',
  Roll_no: 20,
  mail: 'Sahil@meta.com',
  location: 'Wardha',
  islogged: false,
  loginDays: [ 'Sun', 'Mon', 'Tues' ],
  'Full name': 'SKC',
  greeting: [Function (anonymous)],
  [Symbol(key1)]: 'mykey1'
}
*/

//to access the elements of object (in function) using this
JsUser.greeting2 = function(){
    console.log(`hello, JsUser: ${this.name}`); //hello, JsUser: Sahil123
    
}

console.log(JsUser.greeting2());




















