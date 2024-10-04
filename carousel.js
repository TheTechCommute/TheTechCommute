const quotes = document.querySelectorAll('.quote');
let currentQuote = 0;

function showNextQuote() {
    quotes[currentQuote].classList.remove('active');
    currentQuote = (currentQuote + 1) % quotes.length;
    quotes[currentQuote].classList.add('active');
}

setInterval(showNextQuote, 10000);