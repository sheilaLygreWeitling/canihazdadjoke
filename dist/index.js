"use strict";

document.querySelector(".article-button").addEventListener("click", function () {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  }).then(function (response) {
    return response.json();
  }).then(function (data) {
    var jokearea = document.querySelector(".jokeArea");
    jokearea.textContent = data.joke;
  });
});