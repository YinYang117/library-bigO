import { describe, it, before } from 'mocha';
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
        });

        // Additional tests for Part 3 (Advanced Challenges)
    });
});


// Example usage
const myLibrary = new Library();
myLibrary.addBook(new Book("JavaScript: The Good Parts", "Douglas Crockford", "12345"));
myLibrary.addBook(new Book("Eloquent JavaScript", "Marijn Haverbeke", "23456"));
console.log(myLibrary.searchByTitle("JavaScript: The Good Parts"));
myLibrary.listBooks();