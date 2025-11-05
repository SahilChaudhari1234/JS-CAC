//immediately invoked fun expressions is used to instantly invoked the function and to avoid the dicturbance of global variable into the inner scope
//syntax: ({})();, first() to wrap a function and second to call or for execution
//tip: always start writing ifee by above syntax to avoid mistakes

//named IFEE
(function chai(){
    console.log("hey Sahil");
})();             //always use ; at end as ifee doesn't know where to stop

//we can write the same fun number of times
(function chai(){
    console.log("hey Sahil");
})();

//chai()   gives error as we can't explicitly call ifee 

//using arrow function
//unnamed IFEE
(()=>{
      console.log("arrow function");
})();

//can pass arguments
((name)=>{
      console.log(`hey ${name} you are in`);
})('Sahil');


