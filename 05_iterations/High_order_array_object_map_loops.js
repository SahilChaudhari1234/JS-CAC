//for of : advanced loop, it automatically detect where to stop looop, what is the size of array or anything
//iterator(which can be iterate): string, array, object              

const arr = [1,3,4,56,7]
for (const num of arr) {
    //console.log(num);
}

//can be applied to a single string
const GMs = "Good Morning"
for (const GM of GMs) {
    //console.log(`Each char is ${GM}`);
}

//for printing without space
for (const GM of GMs) {
    if (GM == " ") {
        continue
    }
    //console.log(`Each char is ${GM}`);
}

//Maps
//similar to object but it remember the sequence of insertion and has a unique key 
const map1 = new Map()
map1.set('IN', "India")
map1.set('Pak', "Pakistan")
map1.set('US', "united state")
map1.set('IN', "India")   //it does not consider

console.log(map1);    //order mentioned and ignore duplicate key

for (const map of map1) {
    console.log(map);
}
/*[ 'IN', 'India' ]
[ 'Pak', 'Pakistan' ]
[ 'US', 'united state' ]*/

//for printing it differently
for (const [key, value] of map1) {
    console.log(key, `:-`, value);
} 
/*
IN :- India
Pak :- Pakistan
US :- united state
*/

//objects can't be iterate through this method 

//The for...in loop is used to loop through the keys (property names) of an object.
const person = {
   name: "Sahil",
   age: "21",
   roll_no: "20"
}

for (const key in person) {
    //console.log(key, person[key]);
}

//trying for in on array
const prog = ["JS", "CPP", "PY", "Java", "CPP"]
//const key = 0   //it will not show error as key defined under for will have scope of that {} only
for (const key in prog){
    console.log(key);
}
/*
0
1
2
3
4
*/
//but why: array have default key starting from 0 (that's why we iterate array starting from zero)

for (const key in prog){
    console.log(prog[key]);
}


//trying for in on map 
for (const key in map1) {
    //console.log(key);
}
//it will not give any output as map is not iterable

console.log("++++++++++++++");

//+++++++++++++++++++++++for each loop+++++++++++++++++++
//Use forEach when you just want to perform an action(defined under function) for every item in an array (like printing, updating UI, sending values).
//❌ forEach cannot use break or continue
//❌ forEach doesn’t return a new array

//const prog = ["JS", "CPP", "PY", "Java", "CPP"]

prog.forEach(function (val){
    //console.log(val);
})
/*
JS
CPP
PY
Java
CPP
*/

//using arrow function
prog.forEach( (val) => {
    //console.log(val);
})

//using predefined function under forEach
function printMe(prog){
   console.log(prog);
}

//prog.forEach(printMe)   //no need of printMe() as we neeed to give referrnce only, not to execute
/*JS
CPP
PY
Java
CPP*/

//foreach can access more than one thing ata a tiime
prog.forEach((item, i, a)=>{    //no matter which argument you pass (3 arguments), it will consider as a item, index and array itself from original array (try changing item, i, a)
    console.log(item, i, a);
})
/*
JS 0 [ 'JS', 'CPP', 'PY', 'Java', 'CPP' ]
CPP 1 [ 'JS', 'CPP', 'PY', 'Java', 'CPP' ]
PY 2 [ 'JS', 'CPP', 'PY', 'Java', 'CPP' ]
Java 3 [ 'JS', 'CPP', 'PY', 'Java', 'CPP' ]
CPP 4 [ 'JS', 'CPP', 'PY', 'Java', 'CPP' ]
*/

//["","",""]
//[{},{},{}]

//applying loop on object under array
const myCoding = [
    {
        lang: "Java",
        file: "java"
    },
    {
        lang: "JavaScript",
        file: "js"
    },
    {
        lang: "Python",
        file: "py"
    }
]

myCoding.forEach((item) => {
    console.log(item.file);
});

//it is useful when we work with array, where we receive array from DB and that data came in object format under array











