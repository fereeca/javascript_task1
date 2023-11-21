//Implement a custom sorting function for an array of objects based on a specific property(count)

// let fruits=[
//   {name:"Apple", count: 20},
// {name:"Orange", count: 30},
// {name:"Mango", count: 10},
// {name:"Banana", count: 29},
// {name:"Strawberry", count: 50}];
// console.log("The original array:");
// fruits.forEach((element) => {
//   console.log(element);
  
// });

// function sortbycount(a,b){
//   return a.count - b.count;
// }
 
// fruits.sort(sortbycount);
// console.log("The sorted array based on count-property");
// fruits.forEach((element) => {
//   console.log(element);
// });

// function sortbyname(arr){
//   arr.sort((a,b)=> a.name.localeCompare(b.name));
// }

// sortbyname(fruits);
// console.log("The sorted array based on name-property:");
// fruits.forEach((n) => {
//   console.log(n);
// });

// function numSort(array) {
//   var done = false;
//   while (!done) {
//     done = true;
//     for (var i = 1; i < array.length; i++) {
//       if (array[i - 1] > array[i]) {
//         done = false;
//         var tmp = array[i - 1];
//         array[i - 1] = array[i];
//         array[i] = tmp;
//       }
//     }
//   }

//   return array;
// }

// var numbers = [12, 10, 15, 11, 14, 13, 16];
// numSort(numbers);
// console.log(numbers);

let array = [12, 10, 15, 11, 14, 13, 16];
console.log(array);

function selectionsort(array) {
  for (var i = 0; i<array.length-1; i++)
  {
    var minIndex =i;
    for (var j=i+1; j<array.length; j++){
      if (array[j] < array[minIndex]){

        var minIndex=j;
      
      }
    }
  
    if (minIndex!=i)
    {
      var temp =array[i];
      array[i]= array[minIndex];
      array[minIndex]=temp;
    } 
  }
    return array;



  }
  selectionsort(array);
  console.log(array);
  

//    size : size of list

//    for i = 1 to size - 1                                       

//       minimum = i // set current element as minimum

//       for j = i+1 to n // check the element to be minimum

//          if array[j] < array[minimum] then

//             minimum = j;

//          end if

//       end for

//       if indexofMinimum != i then //swap the minimum element with the current element

//          swap array[minimum] and array[i]

//       end if

//    end for

// end function

