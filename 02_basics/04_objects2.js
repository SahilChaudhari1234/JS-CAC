//making object Singleton/ or declaring object with constuctor 

const tinderUser = new Object()   //{}   //singleton object
//console.log(tinderUser);

//const tinderUser1 = {}     //{}  non singleton object 
//console.log(tinderUser1); 
//o/p is same only difference is of one is singleton and other is not

tinderUser.id = "abc123"
tinderUser.name = "Sahil"
tinderUser.add = "Wardha"

console.log(tinderUser);

const regUser = {
    email: "user@gmail.com",
    contact: 45555546644,
    full_name: {
        userfullname: {
        fname: "Dev",
        mname: "Arun",
        lname: "Ambalkar"
        }
    }
}

console.log(regUser);

//accessing single element
console.log(regUser.full_name.userfullname.lname);  //ambalkar

//while working with API if the full name don't exist, then we have to use following syntax (then fullname will be optional)otherwise we have to use if else 

console.log(regUser.full_name?.userfullname.lname);// Ambalkar

//merging object
const obj1 = {1: "a", 2: "b", 3: "c"}
const obj2 = {3: "b", 5: "c", 6: "f"}

//const obj3 = obj1 + obj2
//console.log(obj3)  //[object Object][object Object]

//const obj4 = {obj1,  obj2}
//console.log(obj3);  //[object Object][object Object]

const obj4 =  Object.assign({},obj1, obj2)  //using {} guarrantes that it will give result into {} 
console.log(obj4);

//const obj5 =  Object.assign(obj1, obj2)
//console.log(obj5);  //give same o/p

const obj5 = {1: "a", 2: "b", 3: "c"}
const obj6 = {4: "d", 5: "e", 6: "f"}

const obj7 = Object.assign({},obj5, obj6)
console.log(obj7);


//bbut we will use spread
const obj8 = {...obj5,...obj6}
console.log(obj8);

//obj under array
const user2 = [
   {
    id: 123,
    email: "abc@gmail.com"
   },
   {
    id: 123,
    email: "abc@gmail.com"
   },
   {
    id: 123,
    email: "abc@gmail.com"
   },
   {
    id: 123,
    email: "abc@gmail.com"
   },
   {
    id: 123,
    email: "abc@gmail.com"
   }
]

console.log(user2[1].email);

console.log(Object.keys(tinderUser));    //[ 'id', 'name', 'add' ] keys of a obj are stored as a array and hence we can apply method and loop on it 

console.log(Object.values(tinderUser));    //[ 'abc123', 'Sahil', 'Wardha' ] values of a obj are stored as a array and hence we can apply method and loop on it 

console.log(Object.entries(tinderUser));//[ [ 'id', 'abc123' ], [ 'name', 'Sahil' ], [ 'add', 'Wardha' ] ]

//to check whether the desired property is available in obj or not
console.log(tinderUser.hasOwnProperty('name'));  //true

//go to console and do const obj1 = {1: "a", 2: "b", 3: "c"} to see other properties
//we can stop looping of obj 

//................obj de-structure and JSON API............
//it allows for the easy extraction of values from arrays or properties from objects into distinct variables

const course = {
    coursename: "js in Hindi",
    price: "999",
    course_instructor: "Sahil"
}

console.log(course.course_instructor); //Sahil

//const {course_instructor} = course
//console.log(course_instructor);  //Sahil

const {course_instructor: instructor} = course     //we change course_instructor -> instructor
console.log(instructor);  //Sahil

const {coursename, price, course_instructor} = course
console.log(coursename);   //js in Hindi (its become easy to access)

//in react 
// const navbar = ({company}) => {       //instead of props.company -> {company}
    
// }

// navbar(company) = "hitesh" 

//JSON in API in obj like format   //object w/o name 
// {
//     "Name": "Sahil",
//     "coursename": "js in Hindi",
//     "price": "free"
// }

//API can be in array format 


















































