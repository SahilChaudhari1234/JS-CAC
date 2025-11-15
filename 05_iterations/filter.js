//fliter is use to apply the condition and yes it returns a value (array)
// ⚠️ Important Notes
// filter() always returns an array
// If nothing matches → returns an empty array []
// Does not change the original array

const nums = [1,2,3,4,5,6]
const newnum = nums.filter((num) => num > 4)     //here no need to define that newnum is an array
console.log(newnum);   //[5, 6]

const newnum2 = nums.filter((num) => {
    num = num + 2     //we perform a operation on each element before filtering it 
    return num > 4}) 
console.log(newnum2);
//if we use {} then we have to use return keyword 

//Ex
let students = [
    {name: "Sahil", marks: 85},
    {name: "Amit", marks: 40},
    {name: "Riya", marks: 90}
];

let passed = students.filter(s => s.marks > 50);      //note: here we didnt use student.marks as we only use that defined keyword/variable under filter scope
console.log(passed);

//using forEach
const newnums3 = []
nums.forEach((num) => {
    if(num > 4){
        newnums3.push(num)
    }
})

console.log(newnums3);  //5,6

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let fictiongenre = books.filter((bk) => bk.genre == "Fiction")
  //console.log(fictiongenre);
  console.log("+++++++++++++++++++");
  
  //13

  let userbooks = books.filter((ago) => ago.publish < 2000)
  //console.log(yr2000ago);

userbooks = books.filter((ed200) => ed200.edition > 2003
)
//console.log(userbooks);

userbooks = books.filter((gnrHist) => {
    return gnrHist.genre === 'History'
})
//console.log(userbooks);

//Apply two conditions
userbooks = books.filter((publishbtn1990to2000) => publishbtn1990to2000.publish >= 1990 && publishbtn1990to2000.publish <= 2000)
//console.log(userbooks);

userbooks = books.filter((gnrhistpublishafter2000)=>
gnrhistpublishafter2000.genre === 'History' && gnrhistpublishafter2000.publish >= 2000)
console.log(userbooks);  //[] as there is no such book




  




  


  








