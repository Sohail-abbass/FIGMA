// document.addEventListener("DOMContentLoaded", function () {
//     // Function to get the user's location
//     function getLocation() {
//         // Check if Geolocation is supported
//         if (navigator.geolocation) {
//             // Request current position
//             navigator.geolocation.getCurrentPosition(
//                 // Success callback
//                 function (position) {
//                     // Retrieve latitude and longitude
//                     var latitude = position.coords.latitude;
//                     var longitude = position.coords.longitude;

//                     // Construct API URL for reverse geocoding
//                     //   if we have logn and latitude it ease to get other detail about location
//                     var apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

//                     // Fetch city and country using API
//                     fetch(apiUrl)
//                         .then(response => response.json())
//                         .then(data => {
//                             // Retrieve city and country
//                             var city = data.city;
//                             var country = data.countryName;

//                             // Concatenate country and city into one string
//                             let locationString = `${country}, ${city}`;
//                             // Concatenate latitude and longitude into one string
//                             let coordinateString = `${latitude}, ${longitude}`;
//                             const countrry = document.querySelector("#country");
//                             const coordinate = document.querySelector("#cordinate");
//                             countrry.textContent = locationString;
//                             coordinate.textContent = coordinateString;

//                             saveLocationToLocalStorage(countrry, coordinate)

                          

//                         })
//                         .catch(error => {
//                             console.log("Error fetching location data:", error);
//                         });
//                 },
//                 // Error callback
//                 function (error) {
//                     console.log("Error getting location:", error);
//                 }
//             );
//         } else {
//             console.log("Geolocation is not supported by this browser.");
//         }
//     }


//      // Function to save location details to local storage
//      function saveLocationToLocalStorage(location, coordinates) {
//         let locations = JSON.parse(localStorage.getItem('locations')) || [];
//         locations.push({ location, coordinates });
//         localStorage.setItem('locations', JSON.stringify(locations));
//     }

//     // window.addEventListener('load', function () {
//     //     let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
//     //     tasks.forEach(task => {
//     //         addTaskToList(task.summary, task.dueDate);
//     //     });


//     });

//     // Call the getLocation function to start retrieving the location
//     getLocation();
//     document.getElementById("logout").addEventListener("click", function () {
//         // Clear any session data or authentication tokens
//         // For example, if using sessionStorage:
//         // sessionStorage.clear();
//         // If using cookies:
//         document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear username cookie

//         // Redirect to the login page
//         window.location.href = "index.html";
//     });
// });












document.addEventListener("DOMContentLoaded", function () {
    // Function to get the user's location
    function getLocation() {
        // Check if Geolocation is supported
        if (navigator.geolocation) {
            // Request current position
            navigator.geolocation.getCurrentPosition(
                // Success callback
                function (position) {
                    // Retrieve latitude and longitude
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;

                    // Construct API URL for reverse geocoding
                    var apiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;

                    // Fetch city and country using API
                    fetch(apiUrl)
                        .then(response => response.json())
                        .then(data => {
                            // Retrieve city and country
                            var city = data.city;
                            var country = data.countryName;

                            // Concatenate country and city into one string
                            let locationString = `${country}, ${city}`;
                            // Concatenate latitude and longitude into one string
                            let coordinateString = `${latitude}, ${longitude}`;
                            const countryElement = document.getElementById("country");
                            const coordinateElement = document.getElementById("cordinate");
                            countryElement.textContent = locationString;
                            coordinateElement.textContent = coordinateString;

                            // Save location details to local storage
                            saveLocationToLocalStorage(locationString, coordinateString);
                            // addLocationToList(locationString,coordinateString);
                        })
                        .catch(error => {
                            console.log("Error fetching location data:", error);
                        });
                },
                // Error callback
                function (error) {
                    console.log("Error getting location:", error);
                }
            );
        } else {
            console.log("Geolocation is not supported by this browser.");
        }
    }

    // Function to save location details to local storage
    function saveLocationToLocalStorage(location, coordinates) {
        let locations = JSON.parse(localStorage.getItem('locations')) || [];
        locations.push({ location, coordinates });
        localStorage.setItem('locations', JSON.stringify(locations));
    }
    

    // Call the getLocation function to start retrieving the location
    getLocation();
    
    // Event listener for logout button
    document.getElementById("logout").addEventListener("click", function () {
        // Clear any session data or authentication tokens
        // For example, if using sessionStorage:
        // sessionStorage.clear();
        // If using cookies:
        document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"; // Clear username cookie

        // Redirect to the login page
        window.location.href = "index.html";
    });
});
