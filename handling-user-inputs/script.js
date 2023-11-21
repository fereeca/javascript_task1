function validate() {
  let x = document.forms["form-1"]["comment"].value;
  if (x == "") {
    alert("please write a comment!");
  }
}
