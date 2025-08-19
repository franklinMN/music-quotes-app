import { quotes } from "./assets/quotes.js";
// Base date from which to start showing quotes (YYYY, MM (0-based), DD)
const startDate = new Date(2024, 0, 1); // Jan 1, 2024

// Get today's date
const today = new Date();
const diffInDays = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
const quoteIndex = diffInDays % quotes.length;

console.log("diffInDays - " + diffInDays);
console.log("quotes.length - " + quotes.length);
console.log("quoteIndex - " + quoteIndex);

// Show the quote
const quoteText = document.getElementById("quote");
const authorName = document.getElementById("author-name");

quoteText.textContent = quotes[quoteIndex].text;
authorName.textContent = quotes[quoteIndex].author
  ? `-- ${quotes[quoteIndex].author}`
  : "Unknown";

// ----------------------------------- datetime start

function updateDateTime() {
  const now = new Date();
  const dateTimeString = now.toLocaleString("en-IN", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  document.getElementById("datetime").textContent = dateTimeString;
  // console.log(dateTimeString);
}

// Update immediately and then every second
updateDateTime();
setInterval(updateDateTime, 1000);

// --------------------------------- datetime end
