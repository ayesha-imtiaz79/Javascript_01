        // ALERT!
// task 1
alert("Welcome to JavaScript!");
// task 2
var userName = prompt("What is your name?");
alert("Hello, " + userName + "!");
        // Variable for Strings!
// task 1
var firstName = "AYESHA";
var lastName = "IMTIAZ";
var fullName = firstName + " " + lastName;
alert("Full Name: " + fullName);
// task 2
var favoriteHobby = "painting";
alert("My favorite hobby is " + favoriteHobby + ".");
        // Variable for Numbers!
// task 1
var yearOfBirth = 2005;  
var currentYear = 2024; 
var age = currentYear - yearOfBirth;
alert("My age is " + age + " years.");
// task 2
var length = 20; 
var width = 20;   
var area = length * width;
alert("The area of the square is " + area + " square units.");
        // Illegal and Legal Variable of Java Script!
// task 1
// Legal Variables Names:
// The 3 legal variables are
// 1. totalAmount
// 2. userAge
// 3. firstName

// Illegal Variables Names:
// Tge 3 illegal variables are
// 1. Variables cannot start with a number.
// 2. Reserved keywords like var cannot be used as variable names.
// 3. Hyphens - are not allowed in variable names; they are interpreted as subtraction operators.

// task 2
var myAge = 19;  
myAge = 20; 
alert("My age is " + 19 + " and my friend's age is " + myAge + ".");
        // Math Expressions: Familiar Operators!
// task 1
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var sum = firstNumber + secondNumber;
alert("The sum of " + firstNumber + " and " + secondNumber + " is " + sum + ".");
// task 2
var result = 8 * 4;
alert("The result of 8 multiplied by 4 is " + result + ".");
// task 3
var remainder = 47 % 35;
alert("The remainder when 47 is divided by 35 is " + remainder + ".");
                             // ADDITIONAL CHALLENGES!
       //  Challenge 1!
var currentYear = 2024;
var birthYear = parseInt(prompt("What is your birth year?"));
var age = currentYear - birthYear;
alert("You are " + age + " years old.");
        // Challenge 2!
var num1 = parseFloat(prompt("Enter the first number:"));
var num2 = parseFloat(prompt("Enter the second number:"));
var sum = num1 + num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 % num2;
alert(
"The sum of " + num1 + " and " + num2 + " is " + sum + ".\n" +
"The difference of " + num1 + " and " + num2 + " is " + difference + ".\n" +
"The product of " + num1 + " and " + num2 + " is " + product + ".\n" +
"The quotient of " + num1 + " and " + num2 + " is " + quotient + ".\n" +
"The remainder when " + num1 + " is divided by " + num2 + " is " + remainder + ".");



