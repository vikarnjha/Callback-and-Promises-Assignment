const books = [
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year: 1960,
  },
  {
    title: "1984",
    author: "George Orwell",
    year: 1949,
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    year: 1925,
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    year: 1951,
  },
  {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    year: 1937,
  },
];

function logTitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}

function extractTitles(books, callback){
    const titles = books.map((books) => books.title);
    callback(titles);
}

extractTitles(books, logTitles);

// Output:- 1984, The Catcher in the Rye, The Great Gatsby, The Hobbit, To Kill a Mockingbird