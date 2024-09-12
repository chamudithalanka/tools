// Get the elements from the DOM
const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");
let preValue;

// Add an event listener to the generate button
generateBtn.addEventListener("click", () => {
    // Get the value from the input field and trim it
    let qrValue = qrInput.value.trim();
    // If the value is empty or the same as the previous value, return
    if(!qrValue || preValue === qrValue) return;
    // Set the previous value
    preValue = qrValue;
    // Set the text of the generate button to "Generating QR Code..."
    generateBtn.innerText = "Generating QR Code...";
    // Set the src attribute of the qr-code img to the API URL
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`;
    // Add an event listener to the load event of the qr-code img
    qrImg.addEventListener("load", () => {
        // Add the "active" class to the wrapper
        wrapper.classList.add("active");
        // Set the text of the generate button to "Generate QR Code"
        generateBtn.innerText = "Generate QR Code";
    });
});

// Add an event listener to the keyup event of the qrInput
qrInput.addEventListener("keyup", () => {
    // If the input field is empty
    if(!qrInput.value.trim()) {
        // Remove the "active" class from the wrapper
        wrapper.classList.remove("active");
        // Set the previous value to an empty string
        preValue = "";
    }
});