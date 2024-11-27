function login() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name && email && password) {
        // Save user details to local storage
        const userDetails = {
            name,
            email,
            password,
        };
        localStorage.setItem("user", JSON.stringify(userDetails));

        // Redirect to dashboard page
        window.location.href = "Home.html";
    } else {
        alert("Please fill in all fields!");
    }
}
