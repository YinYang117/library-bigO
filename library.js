let constant = "O(1)";
let linear = "O(n)";
let quadratic = "O(n^2)";
let log = "O(log n)"
let logn = "O(n log n)"

class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        // Implement: Add a new book instance to the library
    }

    addBookComplexity() {
       // return `Time Complexity: ${}, Space Complexity: ${}`
    }

    searchByTitle(title) {
        // Implement: Return a book whose title matches the provided title
    }

    searchByTitleComplexity() {
        // return `Time Complexity: ${}, Space Complexity: ${}`
    }

    sortBooksByISBN() {
        // Implement: Sort books based off isbn
        // Hint, you can use .sort((thingA, thingB) => thingA - thingB)
    }

    sortBooksByAuthor() {
        // Implement: Sort books based off Author
        // Hint, you can use .sort((thingA, thingB) => thingA - thingB)
    }

    sortBooksComplexity() {
        // return `Time Complexity: ${}, Space Complexity: ${}`
    }

    listBooks() {
        // Implement: List all books in the library
    }

    listBooksComplexity() {
        // return `Time Complexity: ${}, Space Complexity: ${}`

    }
    // Additional methods for Part 3
}

export default Library;
