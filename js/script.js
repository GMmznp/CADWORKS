function login() {
  console.log("Login button clicked");
}

function register() {
  window.location.href = "registration.html";
}

function signup() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var username = document.getElementById("username").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirm-password").value;

  // Check if any of the required fields are empty
  if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
    alert("Please fill in all the required fields");
    return;
  }

  // Check if email is null or does not match the pattern
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address");
    return;
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  //DATA WILL BE INCLUDED HERE
  //SQL? MONGO? LOCAL DATA?

  window.location.href = "index.html";
}

function back_button() {
  window.location.href = "index.html";
}

function togglePasswordVisibility(inputId) {
  var passwordInput = document.getElementById(inputId);
  var toggleButton = document.querySelector("#" + inputId + " + .toggle-password");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggleButton.src = "assets/hide.png";
  } else {
    passwordInput.type = "password";
    toggleButton.src = "assets/show.png";
  }
}
