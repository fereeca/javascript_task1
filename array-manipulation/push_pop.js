//Add  and unshift elements from an array and display the modified array.
//push->pushing at the end of array
//unshift->adding in front of array

let arr1 =[1,2,3,"fereeca"] 
console.log("The original array:",);
console.log(arr1);
arr1.push(10,11,"Tuladhar")
console.log("The modified array after pushing:");
console.log(arr1);
arr1.unshift("Teku", 78)
console.log("The modified array after unshifting:");
console.log(arr1);

// Remove  and shift elements from an array and display the modified array.
//pop->popping from the end of array
//shift->popping from the front of array

let arr2 =["fereeca",2,4,6] 
console.log("The original array:");
console.log(arr2);
arr2.pop()
console.log("The modified array after popping:");
console.log(arr2);
arr2.shift()
console.log("The modified array after shifting:");
console.log(arr2);

//splices
//can add and remove array elements
let arr3 =["Fereeca",90,"Teku",20] 
console.log("The original array:");
console.log(arr3);
arr3.splice(1,1, "Tuladhar", "Kathmandu")
console.log("The modified array after splices:");
console.log(arr3);




