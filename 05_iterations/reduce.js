//just like doing factorial 
const nums = [1,2,3,4,5]


//accumlator: where value stores
//initial value: value that accumulator will store at first
//currentvalue: running value under a loop 
let mapExTotal = nums.reduce(function (accumulator, currentvalue){
    console.log(`acc: ${accumulator} and curr: ${currentvalue}`);
    return accumulator + currentvalue
},2)          //initial value = 0 (in simple function it is given here)
//firstly, accumulator don't know which value to store initially hence we have to define that

console.log(mapExTotal);
//usecase: cart: where we have to find sum of prices of all the items in a cart

//with arrow function
mapExTotal = nums.reduce((acc, currval)=> acc+currval,0)
console.log(mapExTotal);   //15

//usecase: cart: where we have to find sum of prices of all the items in a cart

let cart = [
    {
        course: "py",
        price: 333
    },
    {
        course: "CPP",
        price: 666
    },
    {
        course: "JS",
        price: 9999
    },
    {
        course: "Java",
        price: 1111
    }
]

let cartTotal = cart.reduce((acc, item)=> acc + item.price, 0)
console.log(cartTotal);   //12109









