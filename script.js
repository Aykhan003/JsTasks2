
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