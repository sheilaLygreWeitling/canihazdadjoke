fetch("https://icanhazdadjoke.com/", {
    headers: {
        Accept: "application/json"
    }
})
    .then(response => response.json()) //response
    .then(data => {
        const jokearea = document.querySelector(".jokeArea")
        jokearea.textContent = data.joke;
    });