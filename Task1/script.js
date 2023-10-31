document.addEventListener("DOMContentLoaded", function () {
    const passwordInput = document.getElementById("password");
    const meter = document.getElementById("password-strength-meter");
    const resultElement = document.getElementById("result");
    const enteredPasswordElement = document.getElementById("entered-password");

    passwordInput.addEventListener("input", function () {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);

        // Update password strength meter
        meter.className = `meter ${strength.toLowerCase()}`;

        // Display result and suggestions
        let resultMessage = `Password Strength: ${strength}`;
        if (strength === "Weak") {
            resultMessage += "<br>Suggestions: Add more numbers and characters to increase the complexity.";
        }
        else if(strength === "Moderate"){
            resultMessage += "<br>Suggestions: Add more characters and include Capital letters to increase the complexity.";
        }
        else if(strength==="Good"){
            resultMessage+="<br>Suggestions: The password is Strong!!!"
        }
        resultElement.innerHTML = resultMessage;

        // Display entered password
        enteredPasswordElement.textContent = `Entered Password: ${password}`;
    });

    function checkPasswordStrength(password) {
        // Define criteria for a strong password
        const lengthCheck = password.length >= 8;
        const complexityCheck =
            /[A-Z]/.test(password) &&
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password);

        if (lengthCheck && complexityCheck) {
            return "Good";
        } else if (lengthCheck || complexityCheck) {
            return "Moderate";
        } else {
            return "Weak";
        }
    }
});
