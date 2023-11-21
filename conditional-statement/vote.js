//Determine if a user is eligible to vote based on their age

function eligibleage(age) {
  if (age >= 18) {
    return " eligible to vote";
  } else return "not eligible to vote";
}
console.log(eligibleage(19));
console.log(eligibleage(10));
console.log(eligibleage(18));
