//Implement a custom sorting function for an array of objects based on a specific property(count)

let fruits=[
  {name:"Apple", count: 20},
{name:"Orange", count: 30},
{name:"Mango", count: 10},
{name:"Banana", count: 29},
{name:"Strawberry", count: 50}];
console.log("The original array:");
fruits.forEach((element) => {
  console.log(element);
  
});

function sortbycount(a,b){
  return a.count - b.count;
}
 
fruits.sort(sortbycount);
console.log("The sorted array based on count-property");
fruits.forEach((element) => {
  console.log(element);
});

function sortbyname(arr){
  arr.sort((a,b)=> a.name.localeCompare(b.name));
}

sortbyname(fruits);
console.log("The sorted array based on name-property:");
fruits.forEach((n) => {
  console.log(n);
});

