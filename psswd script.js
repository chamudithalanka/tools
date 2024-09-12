const passwordInput = document.getElementById('password');
const regenerateBtn = document.getElementById('regenerate-btn');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const ambiguousCheckbox = document.getElementById('ambiguous');
const lengthSlider = document.getElementById('length');
const lengthValue = document.getElementById('length-value');
const generateMultipleBtn = document.getElementById('generate-multiple-btn');

const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
const numberChars = '0123456789';
const symbolChars = '!@#$%^&*';
const ambiguousChars = 'O0Il1';

function generatePassword(length) {
    let chars = '';
    if (uppercaseCheckbox.checked) chars += uppercaseChars;
    if (lowercaseCheckbox.checked) chars += lowercaseChars;
    if (numbersCheckbox.checked) chars += numberChars;
    if (symbolsCheckbox.checked) chars += symbolChars;
    if (ambiguousCheckbox.checked) {
        chars = chars.split('').filter(char => !ambiguousChars.includes(char)).join('');
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
}

function updatePassword() {
    const length = lengthSlider.value;
    passwordInput.value = generatePassword(length);
}

regenerateBtn.addEventListener('click', updatePassword);
lengthSlider.addEventListener('input', () => {
    lengthValue.textContent = lengthSlider.value;
    updatePassword();
});

generateMultipleBtn.addEventListener('click', () => {
    const length = lengthSlider.value;
    let passwords = [];
    for (let i = 0; i < 5; i++) {
        passwords.push(generatePassword(length));
    }
    alert('Generated Passwords:\n' + passwords.join('\n'));
});

document.addEventListener('DOMContentLoaded', updatePassword);
