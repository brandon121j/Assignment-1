// 1. What is a javascript function? 

// A block of code designed to perform a perticular task


// 2. What is a callback?




// 3. can callbacks only be used in asynchronous code?


// 4. Why are javascript functions first-class citizens?


// 5. Explain javascript Closures?


// 6. explain try/catch blocks



const x = 6

// 7. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x" using without using arrow functions.

function seven(int1, int2) {
  return int1 + int2 + x;
}

console.log(seven(2, 2))

// 8. Write a function that takes 2 numbers as arguments and returns the sum of both numbers and the variable "x", using arrow functions.

const eight = (int1, int2) => {
  return int1 + int2 + x;
}

console.log(eight(2, 2))
// 9. Write a function that returns another function. (use arrow functions please)

const functioning = () => {
  return "Another function";
}

const nine = (func) => {
  return func();
}

console.log(nine(functioning))


// 10. given the following code:


const getFunction = () => {
  const y = 5;

  const insideFunc = (a) => y + a;

  return insideFunc;
};

console.log(getFunction()(2))

// Explain why the function that returns from getFunction still has access to "y" if "y" is not a global variable.

// !!! Because closures give you access to an outer functions scope from an inner function !!!



// 11. write a function that takes "couldThrowError()" as a callback argument.
// within that function call "couldThrowError" and console log its result.
// Make sure to handle errors that could be thrown by "couldThrowError()"

const couldThrowError = () => {
  
  if(Math.ceil(Math.random() * 2) < 2){
    throw new Error("Error was thrown");
  }
  
  return 'success'
}

const eleven = (func) => {
  return func()
}

console.log(eleven(couldThrowError))


