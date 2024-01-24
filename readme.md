# Book Library System

## Objective
Your task is to implement and optimize a simple book library system using JavaScript. The system will manage a collection of books with operations to add, search, and list books. 

This exercise will help you understand the concepts of time and space complexity (Big O notation) in real-world scenarios. You'll start with basic implementations and progressively optimize them.

## Requirements

### Part 1: Basic Implementation
1. **Create a Book Class**: Each book should have a title, author, and a unique ISBN number.
2. **Implement a Library Class**: This class manages an array of Book instances. It should have methods to add a book, search for a book by title, and list all books.

### Part 2: Optimization
1. **Optimize Search**: Improve the search method's time complexity. Consider different data structures or algorithms.
2. **Analyze Time Complexity**: For each method in your Library class, determine the time complexity in Big O notation.

### Part 3: Advanced Challenges
1. **Space Complexity**: Discuss the space complexity of your Library class. How can it be optimized?
2. **Duplicates**: Modify your Library class to handle duplicate ISBNs gracefully.
3. **Sorting**: Implement a method to list all books sorted by title.

## Guidelines
- Comment your code to explain your implementation and choices.
- Think about the time and space complexity when choosing how to implement each functionality.
- Write clean, readable code, keeping best practices in mind.

## Testing
- While using the latest versions of Mocha and chai, the tests run with the command
    - npm test
- There would be more code required to make this command work
    - mocha
- The reason 'mocha' wont work at the moment is we've specified our project to treat .js files as ES Modules. We did this 