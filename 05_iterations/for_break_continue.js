//for
//use direct syntax by typing just fo
//declaration or initialization happens only one time and at the time of loopp starting only 
//index++ will be happen after running the loop and before going to the outside of {}
let index;
for (index = 0; index <= 10; index++) {
    const element = index;
    if(index == 8){
        console.log("8 is a best no");   //untill 7 it will print normally but at 8 it will print 8 is a best no and then again 8 9 10
    }
    console.log(element);   
}

console.log(`index after coming out of loop: ${index}`);   //11

//var. element does not have access outside the for scope {}

//we can use loop inside a loop

//printing tables from 1 to 10
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
          console.log(`${i} x ${j} = ${i*j}`);
    }
}

let superArr = ["Shktiman", "Hanuman", "Me"]
console.log(superArr.length); //3

for (let e = 0; e < superArr.length; e++) {
    console.log(superArr[e]);
}

/*
for (let e = 0; e <= superArr.length; e++) {
    console.log(superArr[e]);
}
o/p: Shktiman
Hanuman
Me
undefined   //it dosnt give out of bound error
*/

//sometimes we need to stop a loop in middle, for that we use break
//case: we want to stop a loop before it reaches to 5
// for (let j = 1; j <= 10; j++) {
//     if (j == 5) {
//         console.log(`5 detected`);
//         break;
//     }
//     console.log(`it is now at: ${j}`);
// }
//break through out of loop/scope of that loop 

//continue
//when 6 detected ignore that iterations and continue with further iterations
for (let j = 1; j <= 10; j++) {
    if (j == 6) {
        console.log(`6 detected hence ignored and not printed`);
        continue
    }
    console.log(`it is now at: ${j}`);
}





