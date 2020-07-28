1. Why JavaScript is used on websites? Is it used only on the front-end?
   To provide dynamic functionality without refreshing or opening a new page, fix some browser problems in layout. No, it can also be used in game development, back-end of web pages or mobile apps.

2. What do JavaScript functions prompt, alert and confirm do?
   Prompt - displays a box wich requires user input.
   Alert - displays an alert box with a text and OK button.
   Confirm - displays an alert box with a text and 2 buttons (OK and confirm). 

3. Why is it preferred to include javascript and css code as separate files?
   To maintain a separation of content.

4. What data types are in javascript?
   Number, string, object, boolean, array.

5. What’s the difference between == and ===?
   == checks only if the data matches.
   === checks whether the type of data also matches.

6. What is the difference between undefined and null in JavaScript?
   Undefined - is a default assigned value if no other value was assigned to variable.
   Null can be assigned to variable.

7. How to get the type of variable?
   Using operator typeOf. It returns string of the variable.

8. How to convert number to string? string to number?
   Number to string - using toString().
   String to number - using parsInt().

9. What does "short-circuiting" mean in javascript context?
   It's short way of writing IF conditions. When written with && (and) it does not check the second operand if the first is false; and when written with || (or) it does not check the second operand if the first one is true. 

10. What are "truthy" and "falsy" values?
   Truthy are all values which are not false. Falsy values are values "False", "0", "-0", "0n", "", "null", "undefined", "NaN".

11. How scope works in JavaScript?
   Variables declared inside function becomes Local variables and if they are declared outside the function they become Global variables. Local variables have only local scope meaning that they can be used only in function in which they were declared, while global variables have global scope and can be used across all document.

12. Explain variable “hoisting”.
   It means that during "Compile" phase all variable declarations are "transferred" and saved at the top of functions without physically changing code.

13. What is "use strict"? What are the advantages and disadvantages to using it?
   Use strict defines that the code should be used only without undefined values. Advantages - it becomes impossible to accidentally create a new variable while mistyping, since in strict mode error will pop up right away; same code in strict mode usually runs faster than not in the safe mode. Disadvantages - it can cause problems when strict and normal modes are mixed (adding strict library to normal code might not work properly). 

14. What is the difference between function declaration and function expression?
   Function declarations load before any code is execuded and function expression only when that specific line of code is reached.

15. What does it mean "javascript functions are first-class"?
   It means that in Javascript functions can be treated as any other variable.

16. How to declare a named function? An anonymous function?
   Named function - function functionName(){function logic};
   Anonymous function - function (a, b){return a+b};

17. What is a prototype?
   Prototype is way to include additional information to function after it is executed.

18. What is a "closure"? How to create it?
   A closure is when private variables are created which can be used inside one parent function, which has other functions inside. In order to create it you need to define a function, declare a variable and add another function inside parent function and use that variable.

19. What are "higher order functions"?
   Functions which accepts or returns other functions.

20. What is event bubbling and capturing?
   Bubbling is a principle which states, that the event firstly happens on clicked element, then on it's parent, then on parent's parent and so on.
   Capturing is a phase - when clicked, it firstly chains down through all the parents to the needed element. Then targeting and bubbling happens.

21. What is unit testing? How can it be beneficial?
   Unit tests only runs through specific part of the code. It can be beneficial to quickly catch bugs before releasing them, clarify functionality and the architecture of code.

22. Describe Test-driven development.
   Test-driven development is such development where you start writing tests even before full program code is done.

23. Describe Behaviour-driven development.
   Behaviour-driven development is similar to test-driven development but all tests are written in highly structured normal language so that both sides - businness and tech - can understand each other.

24. What is NodeJS?
   NodeJS is an open source server environment, which runs Javascript code outside browser.

25. What are most popular uses of Node?
   Streaming, Chat rooms, Browser games, Collecting data.

26. What is the difference between normal function and arrow function?
   Arrow functions don't have names, if there is only one statement, curly brackets can be removed, making the code appear shorter while doing the same purpose.