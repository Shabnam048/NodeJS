function validateRegistration() {

    const fname = document.getElementById("fname").value.trim();
    const lname = document.getElementById("lname").value.trim();
    const address = document.getElementById("adress").value.trim();
    const password = document.getElementById("password").value;
    const email = document.getElementById("email").value.trim();
    const country = document.getElementById("country").value;

    // First name validation
    if (!/^[A-Za-z]{2,}$/.test(fname)) {
        alert("Enter a valid first name");
        return false;
    }

    // Last name validation
    if (!/^[A-Za-z]{2,}$/.test(lname)) {
        alert("Enter a valid last name");
        return false;
    }

    // Address validation
    if (address.length < 5) {
        alert("Please enter a valid address");
        return false;
    }

    // Email validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        alert("Enter a valid email address");
        return false;
    }

    // Password validation
    if (!/^(?=.[A-Za-z])(?=.\d).{8,}$/.test(password)) {
        alert("Password must have at least 8 characters, including a letter and number");
        return false;
    }

    // Country validation
    if (country === "") {
        alert("Please select a country");
        return false;
    }

    alert("Registration successful!");

    return true;
}
