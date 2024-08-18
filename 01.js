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


