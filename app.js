// // let data= document.querySelector("#data");
// // let location=document.querySelector("#location");
// // let logout=document.querySelector("#logout");



document.addEventListener("DOMContentLoaded", function () {
    // Login credentials
    let loginBtn = document.querySelector("#login-btn");
    loginBtn.addEventListener("click", function () {
        let password = document.querySelector("#password").value;
        let email = document.querySelector("#email").value;

        if (email.trim() !== "" && password.trim() !== "") {
            // Retrieve stored email and password from local storage
            var storedEmail = localStorage.getItem("email");
            var storedPassword = localStorage.getItem("password");

            // Check if the entered credentials match the stored ones
            if (email === storedEmail && password === storedPassword) {
                // alert("Login successful!");
                // Redirect to the dashboard or perform any other action
                window.location.href = "task.html";
            } else {
                alert("Incorrect email or password.");
            }
        } else {
            alert("Please enter both email and password.");
            // document.getElementById("section1").style.display = "block";
        }
    });

    // For demonstration purposes, let's set some dummy credentials in local storage
    localStorage.setItem("email", "abbasssohail44@gmail.com");
    localStorage.setItem("password", "sohail@123");


});











