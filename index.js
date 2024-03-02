// Helper function to calculate the length of a string
function calculateStringLength(str) {
    return str.length;
  }
  
  // Helper function to check if a number is a perfect square
  function isPerfectSquare(number) {
    return Math.sqrt(number) % 1 === 0;
  }
  
  // Helper function to generate a random floating-point number between min (inclusive) and max (exclusive)
  function getRandomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }
  
  // Main function to demonstrate the usage of helper functions
  function main() {
    console.log("Length of 'hello':", calculateStringLength('hello')); // Output: 5
    console.log("Is 9 a perfect square?", isPerfectSquare(9));   // Output: true
    console.log("Is 10 a perfect square?", isPerfectSquare(10));   // Output: false
  
    // Generate and print 5 random floating-point numbers between 0 and 1
    console.log("Random floating-point numbers between 0 and 1:");
    for (let i = 0; i < 5; i++) {
      console.log(getRandomFloat(0, 1));
    }
  }
  
  // Call the main function
  main();  