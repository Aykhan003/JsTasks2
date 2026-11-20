
// const boxes = document.querySelectorAll(".box");
// const areas = document.querySelectorAll(".area");

// boxes.forEach(box => {

//     box.addEventListener("dragstart", function(e) {
//         e.dataTransfer.setData("text", e.target.innerText);
//     });

// });

// areas.forEach(area => {

//     area.addEventListener("dragover", function(e) {
//         e.preventDefault();
//     });

//     area.addEventListener("drop", function(e) {
//         e.preventDefault();

//         let number = e.dataTransfer.getData("text");

//         let draggedBox = [...boxes].find(box => box.innerText === number);

//         if (draggedBox.dataset.id === area.dataset.id) {

//             area.querySelector(".drop-content").appendChild(draggedBox);

//         } else {

//             alert("Olmaz");

//         }

//     });

// });

// const form = document.querySelector("#myForm");
// form.addEventListener("submit", function(e) {
//     e.preventDefault();
//     if (form.checkValidity()) {
//         alert("Form submitted successfully!");
//     } else {
//         alert("Please fill out all required fields.");
//     }
// });
// form.addEventListener("input", function() {
//     if (form.checkValidity()) {
//         form.querySelector("button").disabled = false;
//     } else {
//         form.querySelector("button").disabled = true;
//     }
// });

// const message = document.querySelector("#message");
// const count = document.querySelector("#count");
// const remaining = document.querySelector("#remaining");
// const warning = document.querySelector("#warning");

// message.addEventListener("input", function() {
//     const maxLength = message.getAttribute("maxlength");
//     const currentLength = message.value.length;
//     count.textContent = currentLength;
//     remaining.textContent = maxLength - currentLength;
//     if (currentLength >= maxLength) {
//         warning.style.display = "block";
//     } else {
//         warning.style.display = "none";
//     }
//     if (currentLength === 180) {
//         warning.innerText = "You have exceeded the maximum character limit of 180.";
//     }
//     else {
//         warning.innerText = "";
//     }
//     if (currentLength === 200) {
//         warning.innerText = "You have reached the maximum character limit of 200.";
//     }
// });

//password strength checker
// const password = document.querySelector("#password");
// const message = document.querySelector("#message");
// const strength = document.querySelector("#strength");

// password.addEventListener("focus", function() {
//     message.innerText = "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character.";
// });
// password.addEventListener("blur", function() {
//     message.innerText = "";
// });
// password.addEventListener("input", function() {
//     const passwordValue = password.value;
//     let strengthValue = 0;

//     if (passwordValue.length >= 8) {
//         strengthValue++;
//     }

//     if (passwordValue.match(/[a-z]/)) {
//         strengthValue++;
//     }

//     if (passwordValue.match(/[A-Z]/)) {
//         strengthValue++;
//     }

//     if (passwordValue.match(/[0-9]/)) {
//         strengthValue++;
//     }

//     if (passwordValue.match(/[^a-zA-Z0-9]/)) {
//         strengthValue++;
//     }

//     switch (strengthValue) {
//         case 0:
//             strength.textContent = "Very Weak";
//             break;
//         case 1:
//             strength.textContent = "Weak";
//             break;
//         case 2:
//             strength.textContent = "Medium";
//             break;
//         case 3:
//             strength.textContent = "Strong";
//             break;
//         case 4:
//             strength.textContent = "Very Strong";
//             break;
//         case 5:
//             strength.textContent = "Excellent";
//             break;
//         default:
//             strength.textContent = "-";
//     }
// });

//country and city selector
// const country = document.querySelector("#country");
// const city = document.querySelector("#city");
// const result = document.querySelector("#result");

// country.addEventListener("change", function() {
//     const selectedCountry = country.value;
//     let cities = [];

//     switch (selectedCountry) {
//         case "azerbaijan":
//             cities = ["baku", "ganja", "lankaran"];
//             break;
//         case "turkey":
//             cities = ["istanbul", "ankara", "izmir"];
//             break;
//         case "germany":
//             cities = ["berlin", "hamburg", "munich"];
//             break;
//         default:
//             cities = [];
//     }

//     // Clear the city options
//     city.innerHTML = '<option value="">--Please choose an option--</option>';

//     // Add the new city options
//     cities.forEach(function(cityOption) {
//         const option = document.createElement("option");
//         option.value = cityOption;
//         option.textContent = cityOption.charAt(0).toUpperCase() + cityOption.slice(1);
//         city.appendChild(option);
//     });
// });

// city.addEventListener("change", function() {
//     const selectedCity = city.value;
//     result.textContent = `You have selected: ${selectedCity}`;
// });

//email validation
// const emailInput = document.querySelector("#email");
// const emailError = document.querySelector("#emailError");

// emailInput.addEventListener("input", function() {
//     const emailValue = emailInput.value;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     if (emailRegex.test(emailValue)) {
//         emailError.style.display = "none";
//     } else {
//         emailError.style.display = "block";
//     }
// });

// registration form
// const registrationForm = document.querySelector("#registrationForm");

// const fullNameInput = document.querySelector("#fullName");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const confirmPasswordInput = document.querySelector("#confirmPassword");

// const result = document.querySelector("#result");

// function validateForm() {
//     const fullName = fullNameInput.value.trim();
//     const email = emailInput.value.trim();
//     const password = passwordInput.value;
//     const confirmPassword = confirmPasswordInput.value;

//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//     // Reset the result message
//     result.textContent = "";

//     // Validate the full name
//     if (fullName === "") {
//         result.textContent = "Please enter your full name.";
//         return false;
//     }
//     if (fullName.length < 3) {
//         result.textContent = "Full name must be at least 3 characters long.";
//         return false;
//     }

//     // Validate the email
//     if (email === "") {
//         result.textContent = "Please enter your email.";
//         return false;
//     }
//     if (!emailRegex.test(email)) {
//         result.textContent = "Please enter a valid email address.";
//         return false;
//     }

//     // Validate the password
//     if (password === "") {
//         result.textContent = "Please enter your password.";
//         return false;
//     }
//     if (password.length < 8) {
//         result.textContent = "Password must be at least 8 characters long.";
//         return false;
//     }

//     // Validate the confirm password
//     if (confirmPassword === "") {
//         result.textContent = "Please confirm your password.";
//         return false;
//     }

//     // Check if the passwords match
//     if (password !== confirmPassword) {
//         result.textContent = "Passwords do not match.";
//         return false;
//     }

//     result.textContent = "Form submitted successfully!";
//     return true;
// }

// fullNameInput.addEventListener("input", validateForm);
// emailInput.addEventListener("input", validateForm);
// passwordInput.addEventListener("input", validateForm);
// confirmPasswordInput.addEventListener("input", validateForm);
// registrationForm.addEventListener("submit", function(e) {
//     e.preventDefault();
//     if (validateForm()) {
//         alert("Form submitted successfully!");
//     }
// });

// keyboard event tracker with textarea
// const message = document.querySelector("#message");
// const count = document.querySelector("#count");
// const remaining = document.querySelector("#remaining");
// const warning = document.querySelector("#warning");

// message.addEventListener("input", function() {
//     const text = message.value;
//     const textLength = text.length;
//     const max = 200;

//     count.textContent = textLength;
//     remaining.textContent = max - textLength;

//     if (textLength > max) {
//         warning.style.display = "block";
//     } else {
//         warning.style.display = "none";
//     }
// });
// message.addEventListener("keydown", function(e) {
//     if (e.key === "Enter") {
//         e.preventDefault();
//         alert("You pressed Enter!");
//     }
// });
// message.addEventListener("keyup", function(e) {
//     if (e.key === "Backspace") {
//         alert("You pressed Backspace!");
//     }
// });

// const lastkey = document.querySelector("#lastkey");
// const totalkeys = document.querySelector("#totalkeys");
// const status = document.querySelector("#status");

// let keyCount = 0;

// message.addEventListener("keydown", function(e) {
//     lastkey.textContent = e.key;
//     keyCount++;
//     totalkeys.textContent = keyCount;
//     if (e.ctrlKey && e.key === 'Enter') {
//         e.preventDefault();
//         status.textContent = "You pressed Ctrl + Enter!";   
//     }
//     else if(e.key === 'Enter') {
//         e.preventDefault();
//         status.textContent = "You pressed Enter!";
//     }
//     if(e.key === "Escape") {
//         message.value = "";
//         status.textContent = "You pressed Escape! Textarea cleared.";
//         count.textContent = 0;
//         remaining.textContent = 200;
//     }
// });

//dynamic price calculator
// const quantityInput = document.querySelector("#quantity");
// const productPriceInput = document.querySelector("#productPrice");
// const discountInput = document.querySelector("#discount");
// const totalPriceSpan = document.querySelector("#totalPrice");

// quantityInput.addEventListener("input", calculateTotalPrice);
// productPriceInput.addEventListener("input", calculateTotalPrice);
// discountInput.addEventListener("input", calculateTotalPrice);

// function calculateTotalPrice() {
//     if (!quantityInput.value || !productPriceInput.value) {
//         totalPriceSpan.textContent = "0.00";
//         return;
//     }
//     if (discountInput.value < 0 || discountInput.value > 100) {
//         alert("Discount must be between 0 and 100.");
//         discountInput.value = "";
//         totalPriceSpan.textContent = "0.00";
//         return;
//     }
//     if (isNaN(quantityInput.value) || isNaN(productPriceInput.value) || isNaN(discountInput.value)) {
//         alert("Please enter valid numbers.");
//         totalPriceSpan.textContent = "0.00";
//         return;
//     }
//     const quantity = parseInt(quantityInput.value) || 0;
//     const productPrice = parseFloat(productPriceInput.value) || 0;
//     const discount = parseFloat(discountInput.value) || 0;
// if (quantity < 0 || productPrice < 0 || discount < 0) {
//         alert("Quantity, product price, and discount cannot be negative.");
//         totalPriceSpan.textContent = "0.00";
//         return;
//     }
//     if (discount > 100) {
//         alert("Discount cannot be greater than 100.");
//         totalPriceSpan.textContent = "0.00";
//         return;
//     }
//     const subtotal = quantity * productPrice;
//     const discountAmount = subtotal * (discount / 100);
//     const totalPrice = subtotal - discountAmount;

//     totalPriceSpan.textContent = totalPrice.toFixed(2);
// }
// quantityInput.addEventListener("change", function() {
//     if (quantityInput.value < 0) {
//         alert("Quantity cannot be negative.");
//         quantityInput.value = "";
//         totalPriceSpan.textContent = "0.00";
//     }
// });
// productPriceInput.addEventListener("change", function() {
//     if (productPriceInput.value < 0) {
//         alert("Product price cannot be negative.");
//         productPriceInput.value = "";
//         totalPriceSpan.textContent = "0.00";
//     }
// });
// discountInput.addEventListener("change", function() {
//     if (discountInput.value < 0 || discountInput.value > 100) {
//         alert("Discount must be between 0 and 100.");
//         discountInput.value = "";
//         totalPriceSpan.textContent = "0.00";
//     }
// });

// const usernameInput = document.querySelector("#username");
// const emailInput = document.querySelector("#email");
// const phoneInput = document.querySelector("#phone");
// const passwordInput = document.querySelector("#password");
// const confirmPasswordInput = document.querySelector("#confirmPassword");
// const submitButton = document.querySelector("#submitButton");

// const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
// const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
// const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// function validateUsername(){
//     if (usernameInput.value.trim() === "") {
//         usernameInput.setCustomValidity("Username is required.");
//     }
//     if (!usernameRegex.test(usernameInput.value)) {
//         usernameInput.setCustomValidity("Username must be at least 3 characters long and can only contain letters, numbers, and underscores.");
//     }
// }
// function validateEmail(){
//     if (emailInput.value.trim() === "") {
//         emailInput.setCustomValidity("Email is required.");
//     }
//     if (!emailRegex.test(emailInput.value)) {
//         emailInput.setCustomValidity("Please enter a valid email address.");
//     }
// }
// function validatePhone(){
//     if (phoneInput.value.trim() === "") {
//         phoneInput.setCustomValidity("Phone number is required.");
//     }
//     if (!phoneRegex.test(phoneInput.value)) {
//         phoneInput.setCustomValidity("Please enter a valid phone number.");
//     }
// }
// function validatePassword(){
//     if (passwordInput.value.trim() === "") {
//         passwordInput.setCustomValidity("Password is required.");
//     }
//     if (!passwordRegex.test(passwordInput.value)) {
//         passwordInput.setCustomValidity("Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
//     }
// }
// function validateConfirmPassword(){
//     if (confirmPasswordInput.value.trim() === "") {
//         confirmPasswordInput.setCustomValidity("Please confirm your password.");
//     }
//     if (confirmPasswordInput.value !== passwordInput.value) {
//         confirmPasswordInput.setCustomValidity("Passwords do not match.");
//     }
// }
// usernameInput.addEventListener("input", validateForm);
// emailInput.addEventListener("input", validateForm);
// passwordInput.addEventListener("input", validateForm);
// confirmPasswordInput.addEventListener("input", validateForm);

// usernameInput.addEventListener("blur", validateForm);
// emailInput.addEventListener("blur", validateForm);
// passwordInput.addEventListener("blur", validateForm);
// confirmPasswordInput.addEventListener("blur", validateForm);

const formTypeSelect = document.querySelector("#formType");
const formContainer = document.querySelector("#formContainer");
const result = document.querySelector("#result");

formTypeSelect.addEventListener("change", function() {
    const selectedFormType = formTypeSelect.value;
    formContainer.innerHTML = ""; // Clear previous form
    result.innerHTML = ""; // Clear previous result
    if (selectedFormType) {
        // Generate the selected form
    }
});
formContainer.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = new FormData(formContainer.querySelector("form"));
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }
    result.innerHTML = `<p>Submitted Data:</p><pre>${JSON.stringify(data, null, 2)}</pre>`;
});
result.addEventListener("input", function() {
    result.innerHTML = ""; // Clear previous result when user starts typing
});