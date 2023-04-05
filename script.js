const mail = document.getElementById("email-input");
const form = document.querySelector("form");
const errorElement = document.getElementById("error-msg");
const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const errorIcon = document.getElementById("error-icon");

form.addEventListener("submit", function (e) {
  if (regex.test(mail.value) == true) {
    return true;
  } else {
    e.preventDefault();
    // alert("Email is not valid");
    errorElement.style.display = "block";
    errorIcon.style.display = "block";
  }
});
