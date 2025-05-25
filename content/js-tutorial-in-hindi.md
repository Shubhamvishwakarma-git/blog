---
title: JavaScript Tutorial in Hindi
slug: js-tutorial-in-hindi
author: Shubham Vishwakarma
date: 2025-05-13
description: This is JavaScript tutorial and this is a learning journey for JavaScript.
image: /javascript.png
excerpt: Closures are a powerful feature in JavaScript. Here's how they work...
---

# Introduction

JavaScript ek bahut hi popular programming language hai jo web development me extensively use hoti hai. Agar aap web development ke shaukeen hain, toh JavaScript aapko seekhna hi chahiye. Is tutorial me hum JavaScript ke basic concepts ko samjhenge, jise aap apne web development projects me istemal kar sakte hain.

---

## JavaScript Kya Hai?

JavaScript ek high-level, interpreted programming language hai jo web pages ko interactive banane ke liye use hoti hai. JavaScript se aap web pages par animation, interactive forms, real-time updates, aur bohot kuch kar sakte hain. Yeh language browser ke andar hi run hoti hai, aur iska major use client-side scripting me hota hai.

---

## JavaScript ka History

JavaScript ko 1995 me Brendan Eich ne Netscape ke liye develop kiya tha. Is language ka original naam **LiveScript** tha, lekin baad me isse **JavaScript** ka naam diya gaya, jo aaj ke din tak use ho raha hai.

JavaScript ko isliye develop kiya gaya tha taki HTML aur CSS ke saath, web pages ko aur zyada dynamic aur interactive banaya ja sake.

---

## ECMAScript

JavaScript ka standard version **ECMAScript** ke naam se jaana jata hai. Har saal naye features introduce hote hain:

- **ES5 (2009)** – Array methods, JSON support
- **ES6 (2015)** – `let`, `const`, arrow functions, promises, template literals
- **ES7+ (2016–onwards)** – Async/await, optional chaining, nullish coalescing etc.

## JavaScript Syntax

JavaScript ka syntax simple hai, lekin bohot powerful hai. Aapko basic cheezein jaise ki variables, functions, arrays, loops, etc., ko samajhna hoga.

## 1. Variables

JavaScript me aap variables ko store karte hain jo data ko represent karte hain.

````c showLineNumbers
```javascript
let name = "Shubham Vishwakarma";
const age = 25;
var city = "Delhi";
````

## 2. Functions

JavaScript me functions ko define karna kaafi aasan hai. Functions ko aap ek set of instructions ke roop me define karte ho, jo kisi task ko perform karte hain.

````c showLineNumbers
```javascript

function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Shubham"));
````

## 3. Arrays

Arrays me multiple values ko store kiya ja sakta hai. Arrays zero-based index hote hain, matlab pehla element index 0 par hota hai.

````c showLineNumbers
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[1]); // Output: Banana
````

## 4. Loops

JavaScript me loops ka use repetitive tasks ko perform karne ke liye hota hai. Sabse common loops hain for aur while loops.

````c showLineNumbers
```javascript
// For loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// While loop
let i = 0;
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}
````

## 5. Datatypes

JavaScript me mainly 2 tarah ke data types hote hain:

Primitive Types: string, number, boolean, null, undefined, symbol, bigint

Non-Primitive Types: objects, arrays, functions

````c showLineNumbers
```javascript

let name = "Shubham";     // String
let age = 25;             // Number
let isActive = true;      // Boolean
let car = null;           // Null
let user;                 // Undefined
let bigNum = 12345678901234567890n; // BigInt

````

## Advanced Concepts

## Closures

Closures JavaScript ka ek powerful feature hai. Jab ek function dusre function ke andar define hota hai, toh woh apne outer function ke variables ko access kar sakta hai. Isse memory aur scope ka achha istemal hota hai.

````c showLineNumbers
```javascript
function outerFunction() {
  let counter = 0;

  return function innerFunction() {
    counter++;
    console.log(counter);
  };
}

const increment = outerFunction();
increment(); // Output: 1
increment(); // Output: 2
````

## Promises

Promises JavaScript me asynchronous operations ko handle karne ka ek tarika hai. Yeh ensure karte hain ki aapka code clean aur readable rahe, jab aap asynchronous tasks perform kar rahe ho.

````c showLineNumbers
```javascript
let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation successful!");
  } else {
    reject("Operation failed!");
  }
});

promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
````

## Async/Await

````c showLineNumbers
```javascript

async function fetchData() {
  try {
    let response = await fetch('https://api.example.com/data');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  }
}

````
### DOM Manipulation

````c showLineNumbers
```javascript

document.getElementById("demo").innerHTML = "Hello JavaScript!";

````
### Events in JavaScript

````c showLineNumbers
```javascript

document.getElementById("btn").addEventListener("click", function () {
  alert("Button clicked!");
});

````

## Conclusion
### Arrow Functions

````c showLineNumbers
```javascript

const add = (a, b) => a + b;

````
### Template Literals

````c showLineNumbers
```javascript

let name = "Shubham";
console.log(`Hello, ${name}!`);


````
### Destructuring

````c showLineNumbers
```javascript

const person = { name: "Shubham", age: 25 };
const { name, age } = person;


````

## JavaScript Frameworks & Libraries

Agar aap JavaScript seekh gaye ho, toh aapko in frameworks/libraries ke baare me bhi padhna chahiye:

React.js – UI development ke liye

Vue.js – Lightweight reactive framework

Angular – Full-featured framework

Node.js – Server-side JavaScript




## Conclusion

JavaScript ek essential language hai web development ke liye. Is tutorial me humne JavaScript ke basics ko cover kiya, lekin abhi bohot kuch seekhna baaki hai. JavaScript me bohot sare advanced features hain, jo aapko web development me help karenge.

Agar aap JavaScript me deep dive karna chahte hain, toh aapko ES6 features, asynchronous programming (Promises, async/await), aur JavaScript frameworks (React, Vue) ke baare mein bhi seekhna hoga.

JavaScript ke concepts ko samajh kar aap apne web applications ko next level tak le ja sakte hain!

### Changes and Additions:

1. **JavaScript History**: Added information about ECMAScript versions and its evolution.
2. **JavaScript Syntax**: Expanded on variables, functions, arrays, loops, and provided examples.
3. **Advanced Concepts**: Introduced closures and promises with explanations and examples.
4. **Conclusion**: Reinforced the importance of mastering JavaScript and hinted at more advanced topics.
