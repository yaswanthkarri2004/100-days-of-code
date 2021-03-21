function generate() {
    let quotes = [
        {
            quote: "You’re off to great places, today is your day. Your mountain is waiting, so get on your way.",
            author: "Dr. Seuss"
        },
        {
            quote: "You always pass failure on the way to success.",
            author: "Mickey Rooney"
        },
        {
            quote: "Winning doesn’t always mean being first. Winning means you’re doing better than you’ve done before.",
            author: "Bonnie Blair"
        },
        {
            quote: "It always seems impossible until it is done.",
            author: "Nelson Mandela"
        }
    ];

    let quoteContent = document.getElementById('quotes');
    let authorContent = document.getElementById('author');
    let content = Math.floor(Math.random() * quotes.length);
    quoteContent.textContent = quotes[content].quote;
    authorContent.textContent = quotes[content].author;

}