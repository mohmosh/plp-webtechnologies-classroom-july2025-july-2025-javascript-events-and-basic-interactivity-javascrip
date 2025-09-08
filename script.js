// ============================
// Part 1: Event Handling
// ============================
document.getElementById("helloBtn").addEventListener("click", function () {
  document.getElementById("message").textContent = "Hello! You clicked the button";
});

// ============================
// Part 2: Interactive Elements
// ============================

// Light/Dark Mode Toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increaseBtn").addEventListener("click", function () {
  count++;
  counterDisplay.textContent = count;
});

document.getElementById("resetBtn").addEventListener("click", function () {
  count = 0;
  counterDisplay.textContent = count;
});

// FAQ Toggle
document.querySelector(".faq-question").addEventListener("click", function () {
  const answer = document.querySelector(".faq-answer");
  answer.classList.toggle("hidden");
});

// ============================
// Part 3: Form Validation
// ============================
document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault(); // stop form from submitting

  // Grab input values
  const name = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Grab error spans
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let valid = true;

  // Validate Username
  if (name.length < 2) {
    nameError.textContent = "Username must be at least 2 characters.";
    valid = false;
  }

  // Validate Email using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email (e.g., test@example.com).";
    valid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  // If all valid, show success message
  if (valid) {
    formSuccess.textContent = "Nice! Form submitted successfully!";
  }
});
