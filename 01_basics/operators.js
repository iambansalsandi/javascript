/*
  OPERATORS:

  1. Arithmetic operators (Arithmetic operators are used to perform arithmetic between variables and/or values)
    - Addition (+)
    - Substraction (-)
    - Multiplication (*)
    - Division (/)
    - Modulus (%)
    - Increment (++)
    - Decrement (--)

  2. Assignment operators (Assignment operators are used to assign values to JavaScript variables)
    - Assignment operator (=)

  3. String operator
    - Plus operator (+)

  4. Comparision operators
    - equal to (==)
    - equal value and equal type (===)
    - not equal (!=)
    - not equal value or not equal type	(!==)
    - greater than (>)
    - less than (<)
    - greater than or equal to (>=)
    - less than or equal to	 (<=)

  5. Ternary operator
  6. Logical operators
  7. Biwise operators
  8. typeof operator
  9. delete operator
  10. in operator
  11. instanceof operator
  12. void operator
*/

let a;
let b;
let result;

a = 100;
b = 50;

result = a + b;
result = a - b;
result = a * b;
result = a / b;
result = a % b;
a++;
a--;

a = 'Good ';
b = 'Morning';
result = a + b;

console.log(`a : ${a} and b : ${b}`);
console.log(`result: ${result}`);
