const quotes = [
  "Believe you can and you're halfway there.",
  "Success is not in what you have, but who you are.",
  "The only limit to our realization of tomorrow is our doubts of today.",
  "Do something today that your future self will thank you for.",
  "Push yourself, because no one else is going to do it for you.",
  "Don’t watch the clock; do what it does. Keep going.",
];

const quoteText = document.getElementById("quote");
const quoteBtn = document.getElementById("new-quote");

quoteBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
});
