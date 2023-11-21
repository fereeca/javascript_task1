// Check if a number is positive, negative, or zero and display an appropriate
// message.

function negativeorpositive(num) {
  if (num > 0) {
    return "positive";
  } else if (num < 0) {
    return "negative";
  } else return "zero";
}
console.log(" This number is", negativeorpositive(4));
console.log(" This number is", negativeorpositive(0));
console.log(" This number is", negativeorpositive(-4));
