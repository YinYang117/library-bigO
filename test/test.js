import * as mocha from 'mocha';
const { describe, beforeEach, it } = mocha;
import { expect } from 'chai';

import Book from '../book.js';
import Library from '../library.js';

describe('Book Library System', function() {
    describe('Book Class', function() {
        it('should create a book with a title, author, and ISBN', function() {
            const book = new Book('Test Title', 'Test Author', 'Test ISBN');
            expect(book).to.have.property('title', 'Test Title');
            expect(book).to.have.property('author', 'Test Author');
            expect(book).to.have.property('isbn', 'Test ISBN');
        });
    });

    describe('Library Class', function() {
        let library;

        beforeEach(function() {
            library = new Library();
        });

        it('should add a book to the library', function() {
            const book = new Book('New Book', 'Author Name', '123456');
            library.addBook(book);
            expect(library.books).to.deep.include(book);
        });

        it('should find a book by title', function() {
            const book1 = new Book('First Book', 'First Author', '111111');
            const book2 = new Book('Second Book', 'Second Author', '222222');
            library.addBook(book1);
            library.addBook(book2);
            const foundBook = library.searchByTitle('Second Book');
            expect(foundBook).to.deep.equal(book2);
        });

        it('should list all books in the library', function() {
            const book1 = new Book('First Book', 'First Author', '111111');
            const book2 = new Book('Second Book', 'Second Author', '222222');
            library.addBook(book1);
            library.addBook(book2);
            expect(library.listBooks()).to.deep.equal([book1, book2]);
        })

        it('should sort all books in the library by ISBN numbers', function() {
            const book1 = new Book('First Book', 'First Author', '111111');
            const book2 = new Book('Second Book', 'Second Author', '222222');
            const book3 = new Book('A Third Book', 'A Third Author', '333333');
            library.addBook(book3);
            library.addBook(book1);
            library.addBook(book2);
            library.sortBooksByISBN()
            expect(library.books).to.deep.equal([book1, book2, book3]);
        })

        it('should sort all books in the library by Author', function() {
            const book1 = new Book('First Book', 'First Author', '111111');
            const book2 = new Book('Second Book', 'Second Author', '222222');
            const book3 = new Book('A Third Book', 'A Third Author', '333333');
            library.addBook(book1);
            library.addBook(book2);
            library.addBook(book3);
            library.sortBooksByAuthor()
            expect(library.books).to.deep.equal([book3, book1, book2]);
        })

    })

    function testComplexityEstimation(actualComplexity, expectedComplexity) {
        return actualComplexity === expectedComplexity;
    }

    describe('Complexity Estimations', function() {
        let library;

        beforeEach(function() {
            library = new Library();
        });

        it('should return a str of the complexities of adding a book', function() {
            const expectedComplexity = "Time Complexity: O(1), Space Complexity: O(1)"
            const studentComplexity = library.addBookComplexity()
            const result = testComplexityEstimation(studentComplexity, expectedComplexity)
            expect(result).to.be.true
        });

        it('should return a str of the complexities of searching a book by title', function() {
            const expectedComplexity = "Time Complexity: O(1), Space Complexity: O(n)"
            const studentComplexity = library.searchByTitleComplexity()
            const result = testComplexityEstimation(studentComplexity, expectedComplexity)
            expect(result).to.be.true
        });

        it('should return a str of the complexities of sorting books', function() {
            const expectedComplexity = "Time Complexity: O(n log n), Space Complexity: O(n)"
            const studentComplexity = library.sortBooksComplexity()
            const result = testComplexityEstimation(studentComplexity, expectedComplexity)
            expect(result).to.be.true
        });

        it('should correctly estimate the complexity of searching a book by title', function() {
            const expectedComplexity = "Time Complexity: O(n), Space Complexity: O(1)"
            const studentComplexity = library.listBooksComplexity()
            const result = testComplexityEstimation(studentComplexity, expectedComplexity)
            expect(result).to.be.true
        });

    });
});


// Example usage
const myLibrary = new Library();
myLibrary.addBook(new Book("JavaScript: The Good Parts", "Douglas Crockford", "12345"));
myLibrary.addBook(new Book("Eloquent JavaScript", "Marijn Haverbeke", "23456"));
console.log(myLibrary.searchByTitle("JavaScript: The Good Parts"));
myLibrary.listBooks();
