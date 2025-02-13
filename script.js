const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Don't let yesterday take up too much of today.", author: "Will Rogers" },
    { text: "It's not whether you get knocked down, it's whether you get up.", author: "Vince Lombardi" },
    { text: "If you are working on something exciting, it will keep you motivated.", author: "Steve Jobs" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { text: "Act as if what you do makes a difference. It does.", author: "William James" },
    { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Don't be afraid to give up the good to go for the great.", author: "John D. Rockefeller" },
    { text: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { text: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "Our greatest glory is not in never falling, but in rising every time we fall.", author: "Confucius" },
    { text: "Opportunities don't happen. You create them.", author: "Chris Grosser" }
];

const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');


function generateQuote() {
    // Add fade-out class
    quoteText.classList.add('fade-out');
    authorText.classList.add('fade-out');

    // Wait for the fade-out to complete before changing the text
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const { text, author } = quotes[randomIndex];
        quoteText.textContent = `"${text}"`;
        authorText.textContent = `- ${author}`;

        // Remove fade-out and add fade-in
        quoteText.classList.remove('fade-out');
        authorText.classList.remove('fade-out');

        quoteText.classList.add('fade-in');
        authorText.classList.add('fade-in');

        // Remove fade-in after animation completes
        setTimeout(() => {
            quoteText.classList.remove('fade-in');
            authorText.classList.remove('fade-in');
        }, 500);
    }, 500);
}


newQuoteBtn.addEventListener('click', generateQuote);

generateQuote();


