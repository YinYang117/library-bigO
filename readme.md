# Book Library System

## Objective
Your task is to implement and optimize a simple book library system using JavaScript. The system will manage a collection of books with operations to add, search, and list books. 

This exercise will help you understand the concepts of time and space complexity (Big O notation) in real-world scenarios. You'll start with basic implementations and progressively optimize them.

## Requirements

### Part 1: Basic Implementation
1. **Create a Book Class**: Each book should have a title, author, and a unique ISBN number.
2. **Implement a Library Class**: This class manages an array of Book instances. It should have methods to add a book, search for a book by title, and list all books.

### Part 2: Complexities
1. **Create duplicate methods that return strings**: Each of these methods will return a string with a particular format. These strings will include your guesses at the time and space complexities. Don't look in the test specs for these until after you've given it a shot.

## Guidelines
- Comment your code to explain your implementation and choices.
- Think about the time and space complexity when choosing how to implement each functionality.
- Write clean, readable code, keeping best practices in mind.

## Testing
- While using the latest versions of Mocha and chai, the tests run with the command
    - npm test
- There would be more code required to make this command work
    - mocha
- The reason 'mocha' wont work at the moment is we've specified our project to treat .js files as ES Modules. We did this to allow using Import statements instead of require(). 
- This is necessary for the most recent version of Chai exports. 
- When we run our tests using npm test, it respects this configuration because npm uses the settings defined in package.json. 
- However, when you directly run mocha from the command line, its not automatically detecting that our project is using ES Modules. This is the latest lead on issues with mocha and recognizing the ES Module syntax. 
    - Namely, the import statements, describe, it, and before functions.