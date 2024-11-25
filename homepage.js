// script.js

// Handle login form submission
document.querySelector('.btnn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form from submitting
    
    const email = document.querySelector('input[type="email"]').value;
    const password = document.querySelector('input[type="password"]').value;

    if (email && password) {
        alert(`Logged in with email: ${email}`);
        // Here you can send data to the backend using Fetch API or XMLHttpRequest
        // Example:
        // fetch('/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({ email: email, password: password })
        // }).then(response => response.json()).then(data => console.log(data));
    } else {
        alert('Please fill out both fields.');
    }
});

// Handle search functionality
document.querySelector('.btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default action
    
    const query = document.querySelector('.srch').value;

    if (query) {
        alert(`Searching for: ${query}`);
        // Implement actual search functionality here (can be connected to a server)
        // Example:
        // fetch(`/search?query=${query}`)
        //     .then(response => response.json())
        //     .then(results => console.log(results));
    } else {
        alert('Please enter a search query.');
    }
});
