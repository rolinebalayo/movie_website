document.addEventListener("DOMContentLoaded", () => {
    const movieContainer = document.getElementById("movie-container");

    // Simulate fetching movie data from the database
    fetch("get_movies.php")
        .then(response => response.json())
        .then(data => {
            data.forEach(movie => {
                const card = document.createElement("div");
                card.className = "movie-card";
                card.innerHTML = `
                    <h3>${movie.title}</h3>
                    <img src="${movie.image_url}" alt="${movie.title}">
                `;
                movieContainer.appendChild(card);
            });
        });

    // Handle the login form
    const loginForm = document.getElementById("login-form");
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        // Implement your authentication logic here
    });
});
