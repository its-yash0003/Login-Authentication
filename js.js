function validateForm() {
  clearErrors();
  let isValid = true;

  const name = document.getElementById("nameField");
  const email = document.getElementById("emailField");
  const phone = document.getElementById("phoneField");
  const password = document.getElementById("passwordField");
  const cpassword = document.getElementById("cpasswordField");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const phonePattern = /^[0-9]{10}$/;

  if (name.value.trim() === "") {
    showError("nameError", "Name is required.");
    isValid = false;
  }

  if (email.value.trim() === "" || !emailPattern.test(email.value)) {
    showError("emailError", "Enter a valid email.");
    isValid = false;
  }

  if (phone.value.trim() === "" || !phonePattern.test(phone.value)) {
    showError("phoneError", "Enter a valid 10-digit phone number.");
    isValid = false;
  }

  if (password.value.trim() === "") {
    showError("passwordError", "Password is required.");
    isValid = false;
  }

  if (cpassword.value.trim() === "" || cpassword.value !== password.value) {
    showError("cpasswordError", "Passwords do not match.");
    isValid = false;
  }

  return isValid;
}

function showError(id, message) {
  const error = document.getElementById(id);
  error.textContent = message;
}

function clearErrors() {
  const errors = document.querySelectorAll('.formerror');
  errors.forEach(e => e.textContent = "");
}
