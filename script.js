const quoteID = document.getElementById("quote-id");
const randomQuote = document.getElementById("random-quote");
const generate = document.querySelector(".dice");
const api_url = "https://api.adviceslip.com/advice";


window.onload = generateQuote();

generate.addEventListener("click", () => {
    generateQuote();
})

function generateQuote() {
    fetch(api_url)
      .then((response) => response.json())
      .then(data => data.slip)
      .then(data => {
        quoteID.textContent = data.id;
        randomQuote.textContent = data.advice;
      })
       .catch(error => console.log(error));
}




