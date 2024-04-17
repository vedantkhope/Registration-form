document.getElementById("registration-form").addEventListener("submit", function(event) {
    event.preventDefault();

    var fullName = document.getElementById("full-name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var username = document.getElementById("user-name").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

    // Retrieve existing registrations from session storage or initialize as an empty array
    var registrations = JSON.parse(sessionStorage.getItem("registrations")) || [];

    // Check if username or email already exists in registrations
    var userExists = registrations.some(function(user) {
        return user.username === username || user.email === email;
    });

    if (userExists) {
        alert("User with the same username or email already exists!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    var userData = {
        fullName: fullName,
        email: email,
        mobile: mobile,
        username: username,
        password: password
    };

    // Add the new registration to the array
    registrations.push(userData);

    // Store the updated array back in session storage
    sessionStorage.setItem("registrations", JSON.stringify(registrations));

    // Display a success message
    alert("Registration successful!");

    // Clear the form fields
    document.getElementById("registration-form").reset();


});