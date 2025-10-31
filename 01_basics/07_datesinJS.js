//in JS month starts from 0 means 0 is January
let myDate = new Date()
console.log(myDate);   //2025-10-29T14:22:53.485Z

//To convert dates in different formats
console.log(myDate.toString()); //Wed Oct 29 2025 19:55:41 GMT+0530 (India Standard Time)

console.log(myDate.toLocaleString()); //29/10/2025, 7:59:07 pm

console.log(myDate.toISOString()); //2025-10-29T14:29:07.948Z (International std)

console.log(myDate.toLocaleDateString()); //29/10/2025  //only date
console.log(myDate.toDateString()); //w

console.log(typeof myDate); //object

const myNewDate = new Date(2025,9,30)   //see the format it is reverse
console.log(myNewDate.toLocaleString());

const myNewDate1 = new Date(2025,9,30 , 5,4,5)
console.log(myNewDate1.toLocaleString()); //30/10/2025, 5:04:05am

//to print date in specific format
const myNewDate2 = new Date("2025-12-27")    //yyyy-mm-dd   /here, month starts from 1
console.log(myNewDate2.toLocaleString());

//acc to Indian
const myNewDate3 = new Date("11-27-2025")   //mm-dd-yyyy
console.log(myNewDate3.toLocaleString());

let myTimeStamp = Date.now()   //alternative to let myDate = new Date()
console.log(myTimeStamp);         //1761759757378 (time in miliseconds from 1 jan 1970)

//to do the comparison of dates of now and 11-27-2025 (myNewDate3)
console.log(myNewDate3.getTime());  //1764181800000 now we can compare current time and 11-27-2025 time

//to convert it into seconds 
//console.log(Date.now()/1000);   //but it gives o/p into points so,

console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMinutes());    //38 (current time is 11:38pm)

console.log(newDate.getMonth()+1);   //10 

console.log(newDate.getHours());

//we can apply this method to the fixed date too
console.log(myNewDate3.getFullYear());  //2025

console.log(myNewDate3.getDay()); // 4 means 27-11-2025 is thursday

console.log(newDate.toLocaleString('default', {weekday: "narrow"}))  //w

console.log(newDate.toLocaleString('default', {dayPeriod: "short", day: "numeric"
}))    //29, at night

















































