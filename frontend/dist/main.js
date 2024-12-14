/** @format */

// Get references to DOM elements
const form = document.querySelector("form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("e-mail");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password")
const signUpButton = document.getElementById("signup-button")

// Function to validate email format
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// Function to check if the password is strong
const isStrongPassword = (password) => {
  return password.length >= 8 && /\d/.test(password);
};

// Function to clear error messages
const clearErrors = () => {
  const errors = document.querySelectorAll("small");
  errors.forEach((error) => error.remove());
};

// Function to show error message
const showError = (input, message) => {
  const errorElement = document.createElement("small");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.fontSize = "12px"
  input.parentElement.appendChild(errorElement);
  input.focus();
};

// Validate inputs and handle registration
function validateForm(e) {
  e.preventDefault();
  clearErrors();

  const fullname = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  // Validate full name
  if (!fullname) {
    showError(fullNameInput, "Please enter your full name.");
    return;
  }

  // Validate email
  if (!isValidEmail(email)) {
    showError(emailInput, "Invalid email format.");
    return;
  }

  // Validate password
  if (!isStrongPassword(password)) {
    showError(
      passwordInput,
      "Password must be at least 8 characters and contain a number."
    );
    return;
  }

  // Check password match
  if (password !== confirmPassword) {
    showError(confirmPasswordInput, "Passwords do not match.");
    return;
  }

  // If all validations pass
  alert("Registration Successful!");
  form.reset();
}

// Add event listener to form submission
form.addEventListener("submit", validateForm);
signUpButton.addEventListener("click", validateForm)
