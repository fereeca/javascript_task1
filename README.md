## What is an event loop in Javascript?

-Event loop handles asynchronous operation and main program flow. It checks call stack and call back queue.

## Is Javascript single threaded or multiple threaded, explain with examples.

-Javascript is single threaded because it can only execute one piece of code at a time.

Example:
`console.log("Start"); setTimeout(() => { console.log("Timeout finished"); }, 1000); console.log("End");`

## What is the run time error? 

-Runtime errors occur during the execution of a program and are not identified during the compilation phase. 

# Simple Functions

## What are IIFEs with examples? 

-IIFE stands for Immediately Invoked Function Expression. () at the end immediately invokes or executes the function expression.

EXAMPLE:`function add(){
     console.log("addition");
 } ()`

# Array Manipulation

## Explain the difference between map and forEach in the context of functional programming.

-Map is used when we want to perform an operation but creates a new array without modifying the original data while forEach is also used when we want to perform an operation on each element without producing a new array.

## Describe the concept of immutability and how it applies to array manipulation.

-Immutability means that once an array is created, its contents cannot be changed.
Instead of directly modifying the array, it return a new array with the desired changes applied.
By using function like map,filter, reduce we can apply the concept to manipulate array.
