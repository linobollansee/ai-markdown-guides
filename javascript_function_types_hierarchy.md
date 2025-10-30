# JavaScript Function Types - Complete Hierarchy

A comprehensive guide to all JavaScript function types, their syntax, and use cases.

---

## 1. Function Declarations

### 1.1 Standard Function Declaration

**Description:** Traditional function declaration with the `function` keyword. Hoisted to the top of their scope.

```js
function greet(name) {
  return `Hello, ${name}!`;
}

console.log(greet("Alice")); // "Hello, Alice!"
```

**Key Features:**

- Hoisted (can be called before declaration)
- Has its own `this` context
- Has `arguments` object
- Can be used as constructor with `new`

---

### 1.2 Async Function Declaration

**Description:** Function that returns a Promise and allows use of `await` keyword.

```js
async function fetchData(url) {
  const response = await fetch(url);
  return await response.json();
}

fetchData("/api/books").then((data) => console.log(data));
```

**Key Features:**

- Always returns a Promise
- Can use `await` inside
- Better error handling with try/catch

---

### 1.3 Generator Function Declaration

**Description:** Function that can be paused and resumed, yielding multiple values over time.

```js
function* generateNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = generateNumbers();
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
```

**Key Features:**

- Uses `function*` syntax
- Returns an iterator
- Can yield multiple values
- State is preserved between calls

---

### 1.4 Async Generator Function

**Description:** Combines async and generator - yields Promises that can be awaited.

```js
async function* fetchPages(urls) {
  for (const url of urls) {
    const response = await fetch(url);
    yield await response.json();
  }
}

// Usage:
for await (const page of fetchPages(["/page1", "/page2"])) {
  console.log(page);
}
```

**Key Features:**

- Uses `async function*` syntax
- Can use both `await` and `yield`
- Returns async iterator

---

## 2. Function Expressions

### 2.1 Named Function Expression

**Description:** Function assigned to a variable with a name.

```js
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // Can call itself using 'fact'
};

console.log(factorial(5)); // 120
```

**Key Features:**

- Name only accessible inside the function
- Not hoisted (variable is hoisted, but not initialized)
- Useful for recursion

---

### 2.2 Anonymous Function Expression

**Description:** Function without a name, assigned to a variable.

```js
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(3, 4)); // 12
```

**Key Features:**

- Most common function expression form
- Cannot reference itself by name
- Variable name used for calling

---

### 2.3 Arrow Function Expression

**Description:** Concise syntax for function expressions with lexical `this` binding.

```js
// Basic arrow function
const add = (a, b) => a + b;

// With block body
const greet = (name) => {
  const message = `Hello, ${name}!`;
  return message;
};

// Single parameter (parentheses optional)
const square = (x) => x * x;

// No parameters
const random = () => Math.random();

console.log(add(2, 3)); // 5
console.log(greet("Bob")); // "Hello, Bob!"
console.log(square(4)); // 16
console.log(random()); // 0.123...
```

**Key Features:**

- Lexical `this` (inherits from surrounding scope)
- No `arguments` object
- Cannot be used as constructor
- Implicit return for single expressions
- More concise syntax

---

### 2.4 Async Arrow Function

**Description:** Arrow function with async capabilities.

```js
const fetchUser = async (id) => {
  const response = await fetch(`/api/users/${id}`);
  return await response.json();
};

fetchUser(123).then((user) => console.log(user));
```

**Key Features:**

- Combines arrow function and async features
- Lexical `this` binding
- Returns Promise

---

## 3. Immediately Invoked Function Expressions (IIFE)

### 3.1 Standard IIFE

**Description:** Function that is executed immediately after creation.

```js
(function () {
  const secret = "Hidden!";
  console.log("IIFE executed!");
})();

// secret is not accessible here
```

**Key Features:**

- Creates private scope
- Executed immediately
- Useful for avoiding global pollution

---

### 3.2 IIFE with Parameters

**Description:** IIFE that accepts arguments.

```js
(function (name, age) {
  console.log(`${name} is ${age} years old.`);
})("Alice", 30);
```

---

### 3.3 Arrow Function IIFE

**Description:** IIFE using arrow function syntax.

```js
(() => {
  console.log("Arrow IIFE!");
})();

// With parameters
((x, y) => console.log(x + y))(5, 3); // 8
```

---

### 3.4 Async IIFE

**Description:** IIFE with async capabilities for top-level await simulation.

```js
(async () => {
  const data = await fetch("/api/data");
  const json = await data.json();
  console.log(json);
})();
```

**Key Features:**

- Useful before top-level await support
- Allows await at module/script level

---

## 4. Object Methods

### 4.1 Method Shorthand

**Description:** Concise syntax for defining methods in objects (ES6+).

```js
const person = {
  name: "Alice",
  greet() {
    return `Hello, I'm ${this.name}`;
  },
};

console.log(person.greet()); // "Hello, I'm Alice"
```

---

### 4.2 Traditional Method Definition

**Description:** Method defined using function expression.

```js
const calculator = {
  add: function (a, b) {
    return a + b;
  },
};

console.log(calculator.add(2, 3)); // 5
```

---

### 4.3 Async Object Method

**Description:** Object method that returns a Promise.

```js
const api = {
  async fetchData(endpoint) {
    const response = await fetch(endpoint);
    return await response.json();
  },
};

api.fetchData("/api/users").then((data) => console.log(data));
```

---

### 4.4 Generator Object Method

**Description:** Generator method in an object.

```js
const collection = {
  items: [1, 2, 3],
  *iterator() {
    for (const item of this.items) {
      yield item;
    }
  },
};

for (const value of collection.iterator()) {
  console.log(value); // 1, 2, 3
}
```

---

### 4.5 Getter Method

**Description:** Method that gets a property value using `get` keyword.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName); // "John Doe" (no parentheses!)
```

**Key Features:**

- Called like a property (no parentheses)
- Cannot accept parameters
- Must return a value

---

### 4.6 Setter Method

**Description:** Method that sets a property value using `set` keyword.

```js
const person = {
  _age: 0,
  set age(value) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  },
  get age() {
    return this._age;
  },
};

person.age = 25; // Calls setter
console.log(person.age); // 25 (calls getter)
```

**Key Features:**

- Called like property assignment
- Must accept exactly one parameter
- Usually paired with getter

---

## 5. Class Methods

### 5.1 Constructor Method

**Description:** Special method for initializing class instances.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const alice = new Person("Alice", 30);
console.log(alice.name); // "Alice"
```

**Key Features:**

- Called automatically with `new`
- Only one per class
- Cannot be async or generator

---

### 5.2 Instance Method

**Description:** Method available on class instances.

```js
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }

  perimeter() {
    return 2 * (this.width + this.height);
  }
}

const rect = new Rectangle(5, 3);
console.log(rect.area()); // 15
console.log(rect.perimeter()); // 16
```

---

### 5.3 Static Method

**Description:** Method called on the class itself, not instances.

```js
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(2, 3)); // 5
console.log(MathUtils.multiply(4, 5)); // 20

// Cannot call on instance:
const utils = new MathUtils();
// utils.add(2, 3); // ERROR!
```

**Key Features:**

- Called on class, not instance
- No access to instance properties
- Useful for utility functions

---

### 5.4 Async Class Method

**Description:** Class method that returns a Promise.

```js
class UserService {
  async getUser(id) {
    const response = await fetch(`/api/users/${id}`);
    return await response.json();
  }

  static async getAllUsers() {
    const response = await fetch("/api/users");
    return await response.json();
  }
}

const service = new UserService();
service.getUser(123).then((user) => console.log(user));
UserService.getAllUsers().then((users) => console.log(users));
```

---

### 5.5 Generator Class Method

**Description:** Generator method in a class.

```js
class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  *values() {
    for (let i = this.start; i <= this.end; i++) {
      yield i;
    }
  }
}

const range = new Range(1, 5);
for (const num of range.values()) {
  console.log(num); // 1, 2, 3, 4, 5
}
```

---

### 5.6 Class Getter

**Description:** Getter method in a class.

```js
class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return this.radius * 2;
  }

  get area() {
    return Math.PI * this.radius ** 2;
  }
}

const circle = new Circle(5);
console.log(circle.diameter); // 10
console.log(circle.area); // 78.54...
```

---

### 5.7 Class Setter

**Description:** Setter method in a class.

```js
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero");
    }
    this._celsius = value;
  }

  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value) {
    this.celsius = ((value - 32) * 5) / 9;
  }
}

const temp = new Temperature(0);
console.log(temp.fahrenheit); // 32
temp.fahrenheit = 212;
console.log(temp.celsius); // 100
```

---

### 5.8 Private Method

**Description:** Method only accessible within the class (ES2022+).

```js
class BankAccount {
  #balance = 0;

  #validateAmount(amount) {
    if (amount <= 0) {
      throw new Error("Amount must be positive");
    }
  }

  deposit(amount) {
    this.#validateAmount(amount);
    this.#balance += amount;
    return this.#balance;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
// account.#validateAmount(50); // ERROR: Private method
```

**Key Features:**

- Prefix with `#`
- Only accessible inside class
- Cannot be called from outside or subclasses

---

## 6. Constructor Functions

### 6.1 Traditional Constructor Function

**Description:** Function used with `new` keyword to create objects (pre-ES6 classes).

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

const john = new Person("John", 30);
console.log(john.greet()); // "Hello, I'm John"
```

**Key Features:**

- Convention: capitalized name
- Used with `new` keyword
- Sets `this` to new object
- Prototype methods shared across instances

---

### 6.2 Factory Function

**Description:** Function that returns a new object without using `new`.

```js
function createPerson(name, age) {
  return {
    name,
    age,
    greet() {
      return `Hello, I'm ${this.name}`;
    },
  };
}

const alice = createPerson("Alice", 25);
console.log(alice.greet()); // "Hello, I'm Alice"
```

**Key Features:**

- No `new` keyword needed
- More flexible than constructors
- Can return any object

---

## 7. Higher-Order Functions

### 7.1 Function Returning Function

**Description:** Function that returns another function (closure).

```js
function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Key Features:**

- Creates closures
- Useful for configuration
- Enables currying

---

### 7.2 Function Accepting Function

**Description:** Function that takes another function as parameter.

```js
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const doubled = processArray(numbers, (x) => x * 2);
console.log(doubled); // [2, 4, 6, 8]
```

**Key Features:**

- Enables callbacks
- Used in array methods (map, filter, etc.)
- Makes code reusable

---

### 7.3 Curried Function

**Description:** Function that takes arguments one at a time.

```js
function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(1)(2)(3)); // 6

// Arrow function version:
const addArrow = (a) => (b) => (c) => a + b + c;
console.log(addArrow(1)(2)(3)); // 6
```

**Key Features:**

- Partial application
- More flexible function composition
- Common in functional programming

---

### 7.4 Decorator Function

**Description:** Function that wraps another function to extend behavior.

```js
function logger(fn) {
  return function (...args) {
    console.log(`Calling with: ${args}`);
    const result = fn(...args);
    console.log(`Result: ${result}`);
    return result;
  };
}

function add(a, b) {
  return a + b;
}

const loggedAdd = logger(add);
loggedAdd(2, 3);
// Logs: "Calling with: 2,3"
// Logs: "Result: 5"
```

**Key Features:**

- Adds functionality without modifying original
- Uses wrapper pattern
- Common for logging, validation, etc.

---

## 8. Bound Functions

### 8.1 Function with Bound Context

**Description:** Function with `this` permanently bound to specific value.

```js
const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const greetFunc = person.greet;
greetFunc(); // "Hello, I'm undefined" (lost context)

const boundGreet = person.greet.bind(person);
boundGreet(); // "Hello, I'm Alice" (preserved context)
```

**Key Features:**

- Creates new function with fixed `this`
- Cannot be re-bound
- Useful for callbacks

---

### 8.2 Partially Applied Function

**Description:** Bound function with some arguments pre-filled.

```js
function multiply(a, b) {
  return a * b;
}

const double = multiply.bind(null, 2);
const triple = multiply.bind(null, 3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
```

**Key Features:**

- Pre-fills arguments
- Creates specialized functions
- Alternative to currying

---

## 9. Callback Functions

### 9.1 Synchronous Callback

**Description:** Function passed to another function and called immediately.

```js
function processArray(arr, callback) {
  return arr.map(callback);
}

const numbers = [1, 2, 3];
const squared = processArray(numbers, (x) => x ** 2);
console.log(squared); // [1, 4, 9]
```

---

### 9.2 Asynchronous Callback

**Description:** Function passed to be called later (async operation).

```js
function fetchData(url, callback) {
  setTimeout(() => {
    const data = { id: 1, name: "Sample" };
    callback(data);
  }, 1000);
}

fetchData("/api/data", (data) => {
  console.log("Data received:", data);
});
```

---

### 9.3 Error-First Callback

**Description:** Node.js style callback with error as first parameter.

```js
function readFile(filename, callback) {
  if (!filename) {
    callback(new Error("Filename required"), null);
    return;
  }

  setTimeout(() => {
    callback(null, "File contents");
  }, 1000);
}

readFile("data.txt", (err, data) => {
  if (err) {
    console.error("Error:", err.message);
    return;
  }
  console.log("Data:", data);
});
```

**Key Features:**

- First parameter is error (or null)
- Second parameter is result
- Standard Node.js convention

---

## 10. Special Function Types

### 10.1 Recursive Function

**Description:** Function that calls itself.

```js
function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Tail-recursive version:
function factorialTail(n, acc = 1) {
  if (n <= 1) return acc;
  return factorialTail(n - 1, n * acc);
}

console.log(factorialTail(5)); // 120
```

**Key Features:**

- Solves problems by breaking into smaller parts
- Must have base case
- Can cause stack overflow if not careful

---

### 10.2 Pure Function

**Description:** Function with no side effects, same input always produces same output.

```js
// Pure function
function add(a, b) {
  return a + b;
}

console.log(add(2, 3)); // Always 5

// Impure function (has side effects)
let total = 0;
function addToTotal(value) {
  total += value; // Modifies external state
  return total;
}
```

**Key Features:**

- No side effects
- Deterministic output
- Easier to test and reason about

---

### 10.3 Memoized Function

**Description:** Function that caches results for performance.

```js
function memoize(fn) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      console.log("From cache");
      return cache[key];
    }
    console.log("Computing");
    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

const fibonacci = memoize(function fib(n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
});

console.log(fibonacci(10)); // Computing... 55
console.log(fibonacci(10)); // From cache: 55
```

**Key Features:**

- Caches expensive computations
- Trade memory for speed
- Useful for recursive functions

---

### 10.4 Throttled Function

**Description:** Function that limits how often it can be called.

```js
function throttle(fn, delay) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      return fn(...args);
    }
  };
}

const logScroll = throttle(() => {
  console.log("Scrolled!");
}, 1000);

// Called max once per second
window.addEventListener("scroll", logScroll);
```

**Key Features:**

- Limits execution frequency
- Useful for scroll, resize events
- Improves performance

---

### 10.5 Debounced Function

**Description:** Function that delays execution until after calls have stopped.

```js
function debounce(fn, delay) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}

const search = debounce((query) => {
  console.log("Searching for:", query);
}, 500);

// Only executes after user stops typing for 500ms
document.querySelector("input").addEventListener("input", (e) => {
  search(e.target.value);
});
```

**Key Features:**

- Waits for "quiet" period
- Useful for search inputs
- Reduces unnecessary calls

---

## 11. Module Functions

### 11.1 Named Export Function

**Description:** Function exported with a name from a module.

```js
// math.js
export function add(a, b) {
  return a + b;
}

export function multiply(a, b) {
  return a * b;
}

// main.js
import { add, multiply } from "./math.js";
console.log(add(2, 3)); // 5
console.log(multiply(4, 5)); // 20
```

---

### 11.2 Default Export Function

**Description:** Function exported as default from a module.

```js
// calculator.js
export default function calculate(a, op, b) {
  switch (op) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return a / b;
    default:
      throw new Error("Invalid operator");
  }
}

// main.js
import calculate from "./calculator.js";
console.log(calculate(10, "+", 5)); // 15
```

---

## 12. Function Properties and Methods

### 12.1 Function with Properties

**Description:** Function objects can have custom properties.

```js
function counter() {
  counter.count = (counter.count || 0) + 1;
  return counter.count;
}

counter.reset = function () {
  counter.count = 0;
};

console.log(counter()); // 1
console.log(counter()); // 2
counter.reset();
console.log(counter()); // 1
```

---

### 12.2 Function.prototype Methods

**Description:** Built-in methods available on all functions.

```js
function greet(greeting) {
  return `${greeting}, ${this.name}!`;
}

const person = { name: "Alice" };

// call() - invoke with specific this and arguments
console.log(greet.call(person, "Hello")); // "Hello, Alice!"

// apply() - invoke with specific this and array of arguments
console.log(greet.apply(person, ["Hi"])); // "Hi, Alice!"

// bind() - create new function with bound this
const greetAlice = greet.bind(person);
console.log(greetAlice("Hey")); // "Hey, Alice!"

// toString() - get function source code
console.log(greet.toString());

// name property
console.log(greet.name); // "greet"

// length property (number of parameters)
console.log(greet.length); // 1
```

---

## Summary Comparison Table

| Type                 | Hoisted | Own `this`   | `arguments` | Can be Constructor | Syntax                    |
| -------------------- | ------- | ------------ | ----------- | ------------------ | ------------------------- |
| Function Declaration | ✅      | ✅           | ✅          | ✅                 | `function name() {}`      |
| Function Expression  | ❌      | ✅           | ✅          | ✅                 | `const f = function() {}` |
| Arrow Function       | ❌      | ❌ (lexical) | ❌          | ❌                 | `const f = () => {}`      |
| Async Function       | ✅/❌   | ✅           | ✅          | ❌                 | `async function() {}`     |
| Generator Function   | ✅/❌   | ✅           | ✅          | ❌                 | `function*() {}`          |
| Class Method         | ❌      | ✅           | ✅          | N/A                | `methodName() {}`         |
| Object Method        | ❌      | ✅           | ✅          | ❌                 | `methodName() {}`         |

---

## Best Practices

1. **Use arrow functions for:**

   - Short callbacks
   - When you need lexical `this`
   - Array methods (map, filter, reduce)

2. **Use regular functions for:**

   - Object methods that need `this`
   - Constructor functions
   - When you need `arguments` object

3. **Use async/await for:**

   - Asynchronous operations
   - Better error handling than Promises
   - More readable async code

4. **Use generators for:**

   - Lazy evaluation
   - Infinite sequences
   - Complex iteration logic

5. **Avoid:**
   - Arrow functions as object methods (loses `this`)
   - Constructors with arrow functions (not allowed)
   - Deep callback nesting (callback hell)

---

_This document covers JavaScript function types as of ES2023. New features may be added in future ECMAScript versions._
