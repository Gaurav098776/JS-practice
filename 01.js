console.log('Hello world!');


let greet  =  'hello world'

console.log(greet);


// Print the no. from  1 to 5 to the console using a loop


// for (let num = 1 ; num < 6 ;  num++) {
//   console.log(num);
// }

// const whileLoop = ()=>{
//   let i = 1;
//   while (i < 6) {
//     console.log(i);
//     i++
//   }
// }
// whileLoop();

const doWhile = ()=>{
  let i = 1;
  do {
    console.log(i);
    i++
  } while ( i < 6);
}
doWhile()



// write a fuction which add two no. and return result

const addNum = (a,b)=>{
   return a + b;
}
// const sum =  addNum(4,5)
// console.log(sum);
console.log(addNum(8,9));


//Create a function to calculate the area of a triangle

const area = (b,h)=>{
  return 1/2 * b* h
}
console.log(area(6,4));


// Write a function that take a string and returns the reversed version string of it

const reverseString = (string)=>{
  let newStr = '';
  //string.length give total no of character and string.length-1 give last index of string 
  
  for(let i = string.length-1 ; i >=0 ; i-- ){
     newStr += string[i]
  }
  console.log(newStr);
  return newStr
}

console.log(reverseString('string'));



///////////// 2nd day /////////////////

// 1. write a function that checks if a number is even or odd

const checkEvenOdd = (num)=>{
   if(num%2 === 0){
    return "no. is Even"
   }else{
    return "no. is odd"
   }
}

console.log(checkEvenOdd(20));


// 2.write a function checks if a given year is a leap year

const leapYear = (year)=>{
  ((year%4 === 0) && (year%100 !== 0)) ? console.log('leap year') : console.log('not a leap year');
  }

  leapYear(2020)

// 3 . write a function Sum of all elements in an array
 let total = 0;
const sum  =  (arr)=>{
  for(let i =  arr.length-1; i>=0;i-- ){
    total += arr[i]
  }
  return total
}

const array = [1,2,3,8]
console.log(sum(array));



