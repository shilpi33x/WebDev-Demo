function validateForm() {
  //   console.log("Validation func called");

  var title = document.getElementById("title").value;
  var author = document.getElementById("author").value;
  var name = document.getElementById("name").value;

  var date = document.getElementById("dob").value;
  var age = (new Date() - new Date(date)) / 31557600000;
  if (age < 18) {
    confirm(
      "You may be unable to request certain books since you're under 18. Proceed anyway?"
    );
  }

  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  if (email == "" && phone == "") {
    alert(
      "Please fill in either email or phone number. We require your contact information"
    );
    return false;
  } else if (phone != "" && (phone < 1000000000 || phone > 9999999999)) {
    alert("Please enter valid phone number");
    return false;
  }

  alert(
    "Hello " +
      name +
      ", your request for '" +
      title +
      "' by " +
      author +
      " is registered! We will contact you once it becomes available."
  );
  // document.getElementById("output").innerHTML = "Hello";
}
