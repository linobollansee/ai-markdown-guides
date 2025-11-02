# Complete Guide to TypeScript Declarations

A comprehensive reference covering all TypeScript declaration types, syntax, and patterns.

## Table of Contents

1. [Type Declarations](#type-declarations)
2. [Interface Declarations](#interface-declarations)
3. [Class Declarations](#class-declarations)
4. [Function Declarations](#function-declarations)
5. [Variable Declarations](#variable-declarations)
6. [Enum Declarations](#enum-declarations)
7. [Namespace Declarations](#namespace-declarations)
8. [Module Declarations](#module-declarations)
9. [Type Alias Declarations](#type-alias-declarations)
10. [Ambient Declarations](#ambient-declarations)
11. [Declaration Merging](#declaration-merging)
12. [Declaration Files (.d.ts)](#declaration-files-dts)
13. [Advanced Declaration Patterns](#advanced-declaration-patterns)

---

## Type Declarations

### Basic Type Annotations

```typescript
// Primitive types
let name: string = "John";
let age: number = 30;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let sym: symbol = Symbol("key");
let big: bigint = 100n;

// Any and unknown
let anything: any = "could be anything";
let uncertain: unknown = "safer than any";

// Void (no return value)
function logMessage(): void {
  console.log("Hello");
}

// Never (never returns)
function throwError(): never {
  throw new Error("Error!");
}

// Object type
let obj: object = { key: "value" };
```

### Array Declarations

```typescript
// Array type syntax
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];

// Readonly arrays
let readonlyNumbers: readonly number[] = [1, 2, 3];
let readonlyStrings: ReadonlyArray<string> = ["a", "b"];

// Tuple types
let tuple: [string, number] = ["hello", 42];
let optionalTuple: [string, number?] = ["hello"];
let restTuple: [string, ...number[]] = ["hello", 1, 2, 3];

// Named tuples (TypeScript 4.0+)
let namedTuple: [name: string, age: number] = ["John", 30];

// Readonly tuples
let readonlyTuple: readonly [string, number] = ["hello", 42];
```

### Union and Intersection Types

```typescript
// Union types (OR)
let stringOrNumber: string | number = "hello";
stringOrNumber = 42;

// Intersection types (AND)
type Person = { name: string };
type Employee = { employeeId: number };
type Staff = Person & Employee;

let staff: Staff = { name: "John", employeeId: 123 };

// Discriminated unions
type Success = { status: "success"; data: string };
type Error = { status: "error"; message: string };
type Result = Success | Error;

function handleResult(result: Result) {
  if (result.status === "success") {
    console.log(result.data);
  } else {
    console.log(result.message);
  }
}
```

### Literal Types

```typescript
// String literal types
let direction: "north" | "south" | "east" | "west" = "north";

// Numeric literal types
let diceRoll: 1 | 2 | 3 | 4 | 5 | 6 = 3;

// Boolean literal types
let isTrue: true = true;

// Object literal types
let config: { readonly debug: true } = { debug: true };

// Template literal types (TypeScript 4.1+)
type Greeting = `Hello ${string}`;
let greeting: Greeting = "Hello World";

type HTTPMethod = "GET" | "POST";
type Endpoint = `/api/${string}`;
type Route = `${HTTPMethod} ${Endpoint}`;
let route: Route = "GET /api/users";
```

### Index Signatures

```typescript
// String index signature
interface StringDictionary {
  [key: string]: string;
}

let dict: StringDictionary = {
  name: "John",
  city: "NYC",
};

// Number index signature
interface NumberDictionary {
  [index: number]: string;
}

let arr: NumberDictionary = ["a", "b", "c"];

// Mixed index signatures
interface MixedDictionary {
  [key: string]: string | number;
  length: number; // OK: number is assignable to string | number
}

// Index signature with specific keys
interface Config {
  [key: string]: unknown;
  timeout: number;
  retry: boolean;
}
```

---

## Interface Declarations

### Basic Interface

```typescript
interface User {
  id: number;
  name: string;
  email: string;
}

let user: User = {
  id: 1,
  name: "John",
  email: "john@example.com",
};
```

### Optional Properties

```typescript
interface Person {
  name: string;
  age?: number; // Optional
  email?: string;
}

let person1: Person = { name: "John" };
let person2: Person = { name: "Jane", age: 25 };
```

### Readonly Properties

```typescript
interface Point {
  readonly x: number;
  readonly y: number;
}

let point: Point = { x: 10, y: 20 };
// point.x = 30; // Error: Cannot assign to 'x' because it is a read-only property
```

### Function Properties

```typescript
interface Calculator {
  add(a: number, b: number): number;
  subtract: (a: number, b: number) => number;
}

let calc: Calculator = {
  add(a, b) {
    return a + b;
  },
  subtract: (a, b) => a - b,
};
```

### Call Signatures

```typescript
interface Callable {
  (input: string): string;
}

let myFunc: Callable = (input) => input.toUpperCase();

// With properties
interface CallableWithProps {
  (x: number): number;
  description: string;
}

let funcWithProp: CallableWithProps = ((x: number) =>
  x * 2) as CallableWithProps;
funcWithProp.description = "Doubles a number";
```

### Construct Signatures

```typescript
interface Constructable {
  new (name: string): { name: string };
}

class MyClass {
  constructor(public name: string) {}
}

let ctor: Constructable = MyClass;
let instance = new ctor("John");
```

### Extending Interfaces

```typescript
interface Animal {
  name: string;
  age: number;
}

interface Dog extends Animal {
  breed: string;
}

let dog: Dog = {
  name: "Buddy",
  age: 5,
  breed: "Golden Retriever",
};

// Multiple inheritance
interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

interface Duck extends Flyable, Swimmable {
  quack(): void;
}
```

### Generic Interfaces

```typescript
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "hello" };
let numberBox: Box<number> = { value: 42 };

// Multiple type parameters
interface Pair<K, V> {
  key: K;
  value: V;
}

let pair: Pair<string, number> = { key: "age", value: 30 };

// Generic constraints
interface Lengthwise {
  length: number;
}

interface Container<T extends Lengthwise> {
  value: T;
}

let stringContainer: Container<string> = { value: "hello" };
let arrayContainer: Container<number[]> = { value: [1, 2, 3] };
```

### Hybrid Types

```typescript
interface Counter {
  (start: number): string; // Callable
  interval: number; // Property
  reset(): void; // Method
}

function createCounter(): Counter {
  let counter = function (start: number) {
    return start.toString();
  } as Counter;
  counter.interval = 1000;
  counter.reset = function () {
    console.log("Reset");
  };
  return counter;
}

let myCounter = createCounter();
myCounter(10);
myCounter.reset();
```

---

## Class Declarations

### Basic Class

```typescript
class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, I'm ${this.name}`);
  }
}

let person = new Person("John", 30);
```

### Access Modifiers

```typescript
class BankAccount {
  public accountNumber: string; // Accessible everywhere
  private balance: number; // Only within class
  protected customerId: string; // Within class and subclasses

  constructor(accountNumber: string, balance: number, customerId: string) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.customerId = customerId;
  }

  public deposit(amount: number): void {
    this.balance += amount;
  }

  public getBalance(): number {
    return this.balance;
  }
}

// Parameter properties (shorthand)
class User {
  constructor(
    public name: string,
    private password: string,
    protected role: string
  ) {}
}
```

### Readonly Properties

```typescript
class Circle {
  readonly radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }

  // Error: Cannot modify readonly
  // setRadius(r: number) {
  //   this.radius = r;
  // }
}
```

### Static Members

```typescript
class MathUtils {
  static PI: number = 3.14159;

  static circleArea(radius: number): number {
    return this.PI * radius * radius;
  }
}

console.log(MathUtils.PI);
console.log(MathUtils.circleArea(5));
```

### Abstract Classes

```typescript
abstract class Animal {
  abstract makeSound(): void; // Must be implemented by subclasses

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

// Error: Cannot create instance of abstract class
// let animal = new Animal();

let dog = new Dog();
dog.makeSound();
dog.move();
```

### Inheritance

```typescript
class Vehicle {
  constructor(public brand: string) {}

  drive(): void {
    console.log("Driving...");
  }
}

class Car extends Vehicle {
  constructor(brand: string, public model: string) {
    super(brand);
  }

  // Override
  drive(): void {
    console.log(`Driving ${this.brand} ${this.model}`);
  }
}

let car = new Car("Toyota", "Camry");
car.drive();
```

### Getters and Setters

```typescript
class Temperature {
  private _celsius: number = 0;

  get celsius(): number {
    return this._celsius;
  }

  set celsius(value: number) {
    if (value < -273.15) {
      throw new Error("Temperature below absolute zero");
    }
    this._celsius = value;
  }

  get fahrenheit(): number {
    return (this._celsius * 9) / 5 + 32;
  }

  set fahrenheit(value: number) {
    this._celsius = ((value - 32) * 5) / 9;
  }
}

let temp = new Temperature();
temp.celsius = 25;
console.log(temp.fahrenheit); // 77
```

### Generic Classes

```typescript
class GenericBox<T> {
  private value: T;

  constructor(value: T) {
    this.value = value;
  }

  getValue(): T {
    return this.value;
  }

  setValue(value: T): void {
    this.value = value;
  }
}

let stringBox = new GenericBox<string>("hello");
let numberBox = new GenericBox<number>(42);
```

### Implementing Interfaces

```typescript
interface Printable {
  print(): void;
}

interface Loggable {
  log(): void;
}

class Document implements Printable, Loggable {
  constructor(public content: string) {}

  print(): void {
    console.log("Printing:", this.content);
  }

  log(): void {
    console.log("Logging:", this.content);
  }
}
```

### Class as Interface

```typescript
class Point {
  x: number = 0;
  y: number = 0;
}

// Can use class as an interface
let point: Point = { x: 10, y: 20 };
```

---

## Function Declarations

### Basic Function Declaration

```typescript
function add(a: number, b: number): number {
  return a + b;
}

// Function expression
const subtract = function (a: number, b: number): number {
  return a - b;
};

// Arrow function
const multiply = (a: number, b: number): number => a * b;
```

### Optional and Default Parameters

```typescript
function greet(name: string, greeting?: string): string {
  return `${greeting || "Hello"}, ${name}`;
}

function createUser(name: string, age: number = 18): void {
  console.log(`${name} is ${age} years old`);
}

greet("John");
greet("John", "Hi");
createUser("Jane");
createUser("Jane", 25);
```

### Rest Parameters

```typescript
function sum(...numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4, 5); // 15

// Rest parameters with type
function combine(separator: string, ...strings: string[]): string {
  return strings.join(separator);
}
```

### Function Overloads

```typescript
// Overload signatures
function makeDate(timestamp: number): Date;
function makeDate(year: number, month: number, day: number): Date;

// Implementation signature
function makeDate(timestampOrYear: number, month?: number, day?: number): Date {
  if (month !== undefined && day !== undefined) {
    return new Date(timestampOrYear, month - 1, day);
  } else {
    return new Date(timestampOrYear);
  }
}

let date1 = makeDate(1234567890);
let date2 = makeDate(2023, 10, 15);
```

### This Parameters

```typescript
interface Card {
  suit: string;
  rank: string;
}

interface Deck {
  cards: Card[];
  createCardPicker(this: Deck): () => Card;
}

let deck: Deck = {
  cards: [{ suit: "hearts", rank: "A" }],
  createCardPicker: function (this: Deck) {
    return () => {
      return this.cards[0];
    };
  },
};
```

### Generic Functions

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("hello");
let output2 = identity(42); // Type inference

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
  return [first, second];
}

// Generic constraints
function longest<T extends { length: number }>(a: T, b: T): T {
  return a.length >= b.length ? a : b;
}

longest("hello", "world");
longest([1, 2], [1, 2, 3]);
```

### Function Type Expressions

```typescript
type MathOperation = (a: number, b: number) => number;

let add: MathOperation = (a, b) => a + b;
let subtract: MathOperation = (a, b) => a - b;

// With generics
type Predicate<T> = (value: T) => boolean;

let isPositive: Predicate<number> = (n) => n > 0;
let isLongString: Predicate<string> = (s) => s.length > 10;
```

### Call Signatures

```typescript
type DescribableFunction = {
  description: string;
  (input: string): string;
};

function createDescribableFunction(): DescribableFunction {
  let fn = ((input: string) => input.toUpperCase()) as DescribableFunction;
  fn.description = "Converts to uppercase";
  return fn;
}
```

### Construct Signatures

```typescript
type Constructor<T> = {
  new (...args: any[]): T;
};

function createInstance<T>(ctor: Constructor<T>, ...args: any[]): T {
  return new ctor(...args);
}

class MyClass {
  constructor(public value: number) {}
}

let instance = createInstance(MyClass, 42);
```

### Async Functions

```typescript
async function fetchData(url: string): Promise<string> {
  const response = await fetch(url);
  return response.text();
}

// Async arrow function
const getData = async (id: number): Promise<{ id: number; name: string }> => {
  return { id, name: "Data" };
};
```

### Generator Functions

```typescript
function* numberGenerator(): Generator<number, void, unknown> {
  yield 1;
  yield 2;
  yield 3;
}

function* fibonacci(): Generator<number, void, unknown> {
  let [a, b] = [0, 1];
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

// Typed generator
function* range(start: number, end: number): Generator<number, void, void> {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}
```

---

## Variable Declarations

### Let and Const Declarations

```typescript
let mutableValue: string = "can change";
const immutableValue: string = "cannot change";

// Type inference
let inferredString = "hello"; // string
let inferredNumber = 42; // number
const inferredLiteral = "literal"; // "literal" (literal type)
```

### Destructuring Declarations

```typescript
// Array destructuring
let [first, second]: [number, number] = [1, 2];
let [head, ...tail]: [number, ...number[]] = [1, 2, 3, 4];

// Object destructuring
let { name, age }: { name: string; age: number } = { name: "John", age: 30 };

// With type alias
type Person = { name: string; age: number; city?: string };
let {
  name: personName,
  age: personAge,
  city = "Unknown",
}: Person = {
  name: "Jane",
  age: 25,
};

// Nested destructuring
type Company = {
  name: string;
  address: { street: string; city: string };
};

let {
  name: companyName,
  address: { city },
}: Company = {
  name: "ACME",
  address: { street: "123 Main St", city: "NYC" },
};
```

### Type Assertions (Type Casting)

```typescript
// Angle-bracket syntax
let someValue: unknown = "this is a string";
let strLength: number = (<string>someValue).length;

// As syntax (preferred in JSX)
let value: unknown = "hello";
let length: number = (value as string).length;

// Non-null assertion
function getValue(): string | null {
  return "value";
}
let definiteValue: string = getValue()!; // Assert non-null

// Const assertions
let obj = { name: "John", age: 30 } as const;
// Type: { readonly name: "John"; readonly age: 30 }

let arr = [1, 2, 3] as const;
// Type: readonly [1, 2, 3]
```

### Definite Assignment Assertion

```typescript
class MyClass {
  value!: string; // Definite assignment assertion

  constructor() {
    this.initialize();
  }

  initialize() {
    this.value = "initialized";
  }
}

let x!: number; // Tell TS it will be assigned before use
initializeX();
console.log(x * 2);

function initializeX() {
  x = 10;
}
```

---

## Enum Declarations

### Numeric Enums

```typescript
enum Direction {
  Up, // 0
  Down, // 1
  Left, // 2
  Right, // 3
}

let dir: Direction = Direction.Up;

// Custom start value
enum Status {
  Pending = 1,
  Active, // 2
  Completed, // 3
}

// Custom values
enum HttpStatus {
  OK = 200,
  Created = 201,
  BadRequest = 400,
  Unauthorized = 401,
  NotFound = 404,
}
```

### String Enums

```typescript
enum LogLevel {
  Error = "ERROR",
  Warning = "WARNING",
  Info = "INFO",
  Debug = "DEBUG",
}

let level: LogLevel = LogLevel.Error;
console.log(level); // "ERROR"
```

### Heterogeneous Enums

```typescript
enum Mixed {
  No = 0,
  Yes = "YES",
}
```

### Const Enums

```typescript
const enum Color {
  Red,
  Green,
  Blue,
}

let color: Color = Color.Red;
// Compiled output: let color = 0 /* Red */;
// Enum is inlined, no runtime code
```

### Ambient Enums

```typescript
declare enum ExternalEnum {
  Value1,
  Value2,
  Value3,
}
```

### Reverse Mappings

```typescript
enum Status {
  Active = 1,
  Inactive = 2,
}

let status: Status = Status.Active;
let statusName: string = Status[1]; // "Active"

// Only works with numeric enums
```

### Enum as Type

```typescript
enum TrafficLight {
  Red,
  Yellow,
  Green,
}

function processLight(light: TrafficLight): void {
  switch (light) {
    case TrafficLight.Red:
      console.log("Stop");
      break;
    case TrafficLight.Yellow:
      console.log("Caution");
      break;
    case TrafficLight.Green:
      console.log("Go");
      break;
  }
}
```

### Computed and Constant Members

```typescript
enum FileAccess {
  // Constant members
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,

  // Computed member
  G = "123".length,
}
```

---

## Namespace Declarations

### Basic Namespace

```typescript
namespace Validation {
  export interface StringValidator {
    isValid(s: string): boolean;
  }

  export class EmailValidator implements StringValidator {
    isValid(s: string): boolean {
      return s.includes("@");
    }
  }

  export function validateEmail(email: string): boolean {
    return new EmailValidator().isValid(email);
  }
}

let validator = new Validation.EmailValidator();
Validation.validateEmail("test@example.com");
```

### Nested Namespaces

```typescript
namespace Company {
  export namespace HR {
    export class Employee {
      constructor(public name: string) {}
    }
  }

  export namespace Finance {
    export class Invoice {
      constructor(public amount: number) {}
    }
  }
}

let employee = new Company.HR.Employee("John");
let invoice = new Company.Finance.Invoice(1000);
```

### Multi-file Namespaces

```typescript
// file1.ts
namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}
  }
}

// file2.ts
/// <reference path="file1.ts" />
namespace Shapes {
  export class Square {
    constructor(public sideLength: number) {}
  }
}
```

### Namespace Aliases

```typescript
namespace Shapes {
  export namespace Polygons {
    export class Triangle {
      constructor(public base: number, public height: number) {}
    }
  }
}

import polygons = Shapes.Polygons;
let triangle = new polygons.Triangle(10, 5);
```

### Ambient Namespaces

```typescript
declare namespace MyLibrary {
  function makeGreeting(s: string): string;
  let numberOfGreetings: number;

  class Greeter {
    constructor(greeting: string);
    greet(): void;
  }
}

// Usage (implementation exists in JavaScript)
MyLibrary.makeGreeting("Hello");
let greeter = new MyLibrary.Greeter("Hi");
```

---

## Module Declarations

### ES Module Exports

```typescript
// Named exports
export const PI = 3.14159;
export function add(a: number, b: number): number {
  return a + b;
}
export class Calculator {
  multiply(a: number, b: number): number {
    return a * b;
  }
}

// Export declaration
export interface User {
  id: number;
  name: string;
}

export type Status = "active" | "inactive";

// Export list
const name = "MyLib";
const version = "1.0.0";
export { name, version };

// Re-export
export { something } from "./other-module";
export * from "./all-exports";
export * as utils from "./utils";
```

### Default Exports

```typescript
// Default export - function
export default function greet(name: string): string {
  return `Hello, ${name}`;
}

// Default export - class
export default class MyClass {
  constructor(public value: number) {}
}

// Default export - value
const config = { timeout: 5000 };
export default config;

// Default export with name
export { MyClass as default };
```

### Import Declarations

```typescript
// Named imports
import { add, subtract } from "./math";

// Rename imports
import { add as addition, subtract as subtraction } from "./math";

// Namespace import
import * as math from "./math";
math.add(1, 2);

// Default import
import greet from "./greet";
import MyClass from "./MyClass";

// Mixed imports
import React, { Component, useState } from "react";

// Side-effect import
import "./polyfills";

// Type-only imports (TypeScript 3.8+)
import type { User } from "./types";
import { type Admin, type Role } from "./types";

// Import assertions (TypeScript 4.5+)
import data from "./data.json" assert { type: "json" };
```

### Dynamic Imports

```typescript
// Dynamic import returns a Promise
async function loadModule() {
  const module = await import("./module");
  module.doSomething();
}

// With type annotation
type MathModule = typeof import("./math");

async function loadMath(): Promise<MathModule> {
  return await import("./math");
}

// Conditional loading
if (condition) {
  import("./module-a").then((module) => {
    module.init();
  });
} else {
  import("./module-b").then((module) => {
    module.init();
  });
}
```

### Export Assignment (CommonJS style)

```typescript
// export =
class MyClass {
  value: number = 0;
}
export = MyClass;

// Corresponding import
import MyClass = require("./MyClass");
```

### Ambient Module Declarations

```typescript
// Declare module for JavaScript libraries
declare module "my-library" {
  export function doSomething(value: string): void;
  export const version: string;
}

// Wildcard module declarations
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "*.svg" {
  const content: string;
  export default content;
}

declare module "*.json" {
  const value: any;
  export default value;
}

// Usage
import styles from "./styles.css";
import logo from "./logo.svg";
import config from "./config.json";
```

### Module Augmentation

```typescript
// Original module
// node_modules/@types/express/index.d.ts
declare module "express" {
  export interface Request {
    user?: any;
  }
}

// Augmentation in your code
import "express";

declare module "express" {
  export interface Request {
    customProperty: string;
  }
}

// Now available
import { Request } from "express";
function handler(req: Request) {
  console.log(req.customProperty);
}
```

### Global Augmentation

```typescript
// Extend global namespace
declare global {
  interface Window {
    myCustomProperty: string;
  }

  interface Array<T> {
    myCustomMethod(): T[];
  }

  var MY_GLOBAL: string;
}

export {}; // Make this a module

// Usage
window.myCustomProperty = "value";
[1, 2, 3].myCustomMethod();
console.log(MY_GLOBAL);
```

---

## Type Alias Declarations

### Basic Type Aliases

```typescript
type Username = string;
type ID = number | string;
type Point = { x: number; y: number };
type Callback = (data: string) => void;

let user: Username = "john_doe";
let id: ID = 123;
let point: Point = { x: 10, y: 20 };
```

### Generic Type Aliases

```typescript
type Container<T> = { value: T };
type Nullable<T> = T | null;
type ArrayOrSingle<T> = T | T[];

let stringContainer: Container<string> = { value: "hello" };
let nullableNumber: Nullable<number> = null;
let values: ArrayOrSingle<number> = [1, 2, 3];
```

### Conditional Types

```typescript
type IsString<T> = T extends string ? true : false;
type A = IsString<string>; // true
type B = IsString<number>; // false

// Infer keyword
type ReturnType<T> = T extends (...args: any[]) => infer R ? R : never;
type FuncReturn = ReturnType<() => string>; // string

// Distributed conditional types
type ToArray<T> = T extends any ? T[] : never;
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
```

### Mapped Types

```typescript
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P]; // Remove optionality
};

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

// With key remapping (TypeScript 4.1+)
type Getters<T> = {
  [P in keyof T as `get${Capitalize<string & P>}`]: () => T[P];
};

type Person = { name: string; age: number };
type PersonGetters = Getters<Person>;
// { getName: () => string; getAge: () => number }
```

### Template Literal Types

```typescript
type EmailLocale = "en" | "es" | "fr";
type EmailId = `${EmailLocale}_email`;
// "en_email" | "es_email" | "fr_email"

type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";
type Endpoint = "users" | "posts" | "comments";
type APIRoute = `/${Lowercase<HTTPMethod>}/${Endpoint}`;
// "/get/users" | "/get/posts" | ...

// With infer
type ExtractRouteParams<T extends string> =
  T extends `${string}:${infer Param}/${infer Rest}`
    ? Param | ExtractRouteParams<Rest>
    : T extends `${string}:${infer Param}`
    ? Param
    : never;

type Params = ExtractRouteParams<"/users/:userId/posts/:postId">;
// "userId" | "postId"
```

### Recursive Type Aliases

```typescript
type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

interface JSONObject {
  [key: string]: JSONValue;
}

interface JSONArray extends Array<JSONValue> {}

// Recursive type with depth limit
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object ? DeepReadonly<T[P]> : T[P];
};
```

### Index Access Types

```typescript
type Person = {
  name: string;
  age: number;
  address: {
    street: string;
    city: string;
  };
};

type Name = Person["name"]; // string
type Address = Person["address"]; // { street: string; city: string }
type City = Person["address"]["city"]; // string

// With union
type PersonKeys = Person["name" | "age"]; // string | number

// Array element type
type Arr = [string, number, boolean];
type First = Arr[0]; // string
type All = Arr[number]; // string | number | boolean
```

---

## Ambient Declarations

### Declare Keyword

```typescript
// Declare variables (exist in global scope or external library)
declare var jQuery: (selector: string) => any;
declare const VERSION: string;
declare let globalCount: number;

// Declare functions
declare function greet(name: string): void;
declare function overloaded(x: number): number;
declare function overloaded(x: string): string;

// Declare classes
declare class ExternalClass {
  constructor(value: string);
  method(): void;
  static staticMethod(): void;
}

// Declare namespace
declare namespace MyLib {
  function makeGreeting(s: string): string;
  class Greeter {
    constructor(greeting: string);
  }
}
```

### Declare Module

```typescript
// Type definitions for external JavaScript library
declare module "lodash" {
  export function debounce<T extends (...args: any[]) => any>(
    func: T,
    wait: number
  ): T;
  export function chunk<T>(array: T[], size: number): T[][];
}

// UMD module
declare module "my-lib" {
  export function doSomething(): void;

  // CommonJS default export
  export as namespace myLib;
}
```

### Declare Global

```typescript
// In a module file
export {};

declare global {
  interface Window {
    myLib: {
      version: string;
      init(): void;
    };
  }

  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: "development" | "production";
      API_KEY: string;
    }
  }

  function customGlobalFunction(): void;
  var GLOBAL_CONSTANT: number;
}
```

### Triple-Slash Directives

```typescript
/// <reference path="./other-file.ts" />
/// <reference types="node" />
/// <reference lib="es2015" />
/// <reference no-default-lib="true" />

// Must be at the top of the file
```

---

## Declaration Merging

### Interface Merging

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  depth: number;
}

// Merged interface
let box: Box = {
  height: 10,
  width: 20,
  depth: 30,
};

// Function overload merging
interface Cloner {
  clone(animal: Animal): Animal;
}

interface Cloner {
  clone(animal: Sheep): Sheep;
}

interface Cloner {
  clone(animal: Dog): Dog;
  clone(animal: Cat): Cat;
}

// Merged (order matters - later declarations have priority)
```

### Namespace Merging

```typescript
namespace Animals {
  export class Dog {}
}

namespace Animals {
  export class Cat {}
}

// Both Dog and Cat are in Animals namespace
let dog = new Animals.Dog();
let cat = new Animals.Cat();
```

### Namespace and Class Merging

```typescript
class Album {
  label!: Album.AlbumLabel;
}

namespace Album {
  export class AlbumLabel {}
}

let albumLabel = new Album.AlbumLabel();
```

### Namespace and Function Merging

```typescript
function buildLabel(name: string): string {
  return buildLabel.prefix + name + buildLabel.suffix;
}

namespace buildLabel {
  export let prefix = "[";
  export let suffix = "]";
}

console.log(buildLabel("TypeScript"));
```

### Namespace and Enum Merging

```typescript
enum Color {
  Red,
  Green,
  Blue,
}

namespace Color {
  export function mix(c1: Color, c2: Color): Color {
    // Implementation
    return Color.Red;
  }
}

let mixedColor = Color.mix(Color.Red, Color.Blue);
```

### Module Augmentation

```typescript
// Original module
export class Observable<T> {
  constructor(public value: T) {}
}

// Augmentation
declare module "./observable" {
  interface Observable<T> {
    map<U>(fn: (value: T) => U): Observable<U>;
  }
}

Observable.prototype.map = function <U>(fn: (value: any) => U) {
  return new Observable(fn(this.value));
};
```

### Global Augmentation

```typescript
// In a module
export {};

declare global {
  interface Array<T> {
    toSorted(): T[];
  }
}

Array.prototype.toSorted = function () {
  return [...this].sort();
};
```

---

## Declaration Files (.d.ts)

### Creating Declaration Files

```typescript
// math.d.ts
export function add(a: number, b: number): number;
export function subtract(a: number, b: number): number;
export const PI: number;

export class Calculator {
  constructor();
  add(a: number, b: number): number;
  subtract(a: number, b: number): number;
}
```

### Ambient Declarations in .d.ts

```typescript
// types.d.ts
declare module "external-library" {
  export interface Config {
    timeout: number;
    retry: boolean;
  }

  export function initialize(config: Config): void;
  export class Client {
    constructor(config: Config);
    send(data: string): Promise<void>;
  }
}
```

### Triple-Slash References

```typescript
/// <reference path="./vendor.d.ts" />
/// <reference types="node" />

export function useNodeAPI(): void {
  // Can now use Node.js types
}
```

### Publishing Declaration Files

```json
// package.json
{
  "name": "my-library",
  "version": "1.0.0",
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "typings": "./dist/index.d.ts"
}
```

### DefinitelyTyped (@types)

```bash
# Install type definitions from @types
npm install --save-dev @types/node
npm install --save-dev @types/lodash
npm install --save-dev @types/react
```

```typescript
// Automatically used by TypeScript
import * as fs from "fs"; // Uses @types/node
import * as _ from "lodash"; // Uses @types/lodash
```

### Declaration Maps

```json
// tsconfig.json
{
  "compilerOptions": {
    "declaration": true,
    "declarationMap": true
  }
}
```

Generates `.d.ts.map` files for navigation from declarations back to source.

---

## Advanced Declaration Patterns

### Utility Types

```typescript
// Partial<T> - Makes all properties optional
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Person = { name: string; age: number };
type PartialPerson = Partial<Person>; // { name?: string; age?: number }

// Required<T> - Makes all properties required
type Required<T> = {
  [P in keyof T]-?: T[P];
};

// Readonly<T> - Makes all properties readonly
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

// Record<K, T> - Creates object type with keys K and values T
type Record<K extends keyof any, T> = {
  [P in K]: T;
};

type PageInfo = Record<"home" | "about" | "contact", { title: string }>;

// Pick<T, K> - Picks subset of properties
type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

type PersonName = Pick<Person, "name">; // { name: string }

// Omit<T, K> - Omits properties
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

type PersonWithoutAge = Omit<Person, "age">; // { name: string }

// Exclude<T, U> - Excludes types from union
type Exclude<T, U> = T extends U ? never : T;

type T1 = Exclude<"a" | "b" | "c", "a" | "b">; // "c"

// Extract<T, U> - Extracts types from union
type Extract<T, U> = T extends U ? T : never;

type T2 = Extract<"a" | "b" | "c", "a" | "f">; // "a"

// NonNullable<T> - Removes null and undefined
type NonNullable<T> = T extends null | undefined ? never : T;

type T3 = NonNullable<string | number | null | undefined>; // string | number

// ReturnType<T> - Gets function return type
type ReturnType<T extends (...args: any) => any> = T extends (
  ...args: any
) => infer R
  ? R
  : any;

type Func = () => string;
type FuncReturn = ReturnType<Func>; // string

// Parameters<T> - Gets function parameter types as tuple
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

type Func2 = (a: string, b: number) => void;
type Params = Parameters<Func2>; // [string, number]

// ConstructorParameters<T> - Gets constructor parameters
type ConstructorParameters<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: infer P) => any ? P : never;

class MyClass {
  constructor(a: string, b: number) {}
}

type CtorParams = ConstructorParameters<typeof MyClass>; // [string, number]

// InstanceType<T> - Gets instance type of constructor
type InstanceType<T extends abstract new (...args: any) => any> =
  T extends abstract new (...args: any) => infer R ? R : any;

type Instance = InstanceType<typeof MyClass>; // MyClass

// ThisParameterType<T> - Extracts 'this' parameter type
type ThisParameterType<T> = T extends (this: infer U, ...args: any[]) => any
  ? U
  : unknown;

// OmitThisParameter<T> - Removes 'this' parameter
type OmitThisParameter<T> = unknown extends ThisParameterType<T>
  ? T
  : T extends (...args: infer A) => infer R
  ? (...args: A) => R
  : T;

// Uppercase<S>, Lowercase<S>, Capitalize<S>, Uncapitalize<S>
type Greeting = "hello world";
type UpperGreeting = Uppercase<Greeting>; // "HELLO WORLD"
type LowerGreeting = Lowercase<"HELLO">; // "hello"
type CapitalizedGreeting = Capitalize<"hello">; // "Hello"
type UncapitalizedGreeting = Uncapitalize<"Hello">; // "hello"
```

### Discriminated Unions

```typescript
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "rectangle"; width: number; height: number }
  | { kind: "square"; size: number };

function area(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "rectangle":
      return shape.width * shape.height;
    case "square":
      return shape.size ** 2;
  }
}
```

### Branded Types (Nominal Types)

```typescript
type Brand<K, T> = K & { __brand: T };

type USD = Brand<number, "USD">;
type EUR = Brand<number, "EUR">;

function usd(amount: number): USD {
  return amount as USD;
}

function eur(amount: number): EUR {
  return amount as EUR;
}

function addUSD(a: USD, b: USD): USD {
  return (a + b) as USD;
}

let dollars = usd(100);
let euros = eur(100);

addUSD(dollars, dollars); // OK
// addUSD(dollars, euros); // Error: Type 'EUR' is not assignable to type 'USD'
```

### Type Guards

```typescript
// typeof type guard
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// instanceof type guard
class Dog {
  bark() {}
}
class Cat {
  meow() {}
}

function isDog(animal: Dog | Cat): animal is Dog {
  return animal instanceof Dog;
}

// in type guard
type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(pet: Fish | Bird): pet is Fish {
  return "swim" in pet;
}

// Custom type guard
interface Person {
  name: string;
  age: number;
}

function isPerson(value: unknown): value is Person {
  return (
    typeof value === "object" &&
    value !== null &&
    "name" in value &&
    "age" in value &&
    typeof (value as Person).name === "string" &&
    typeof (value as Person).age === "number"
  );
}
```

### Assertion Functions

```typescript
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new Error(msg || "Assertion failed");
  }
}

function assertIsString(value: unknown): asserts value is string {
  if (typeof value !== "string") {
    throw new Error("Not a string");
  }
}

function processValue(value: unknown) {
  assertIsString(value);
  // value is now typed as string
  console.log(value.toUpperCase());
}
```

### Variadic Tuple Types

```typescript
type Tuple1 = [string, number];
type Tuple2 = [boolean, ...Tuple1]; // [boolean, string, number]

// Generic variadic tuples
type Concat<T extends any[], U extends any[]> = [...T, ...U];
type Result = Concat<[1, 2], [3, 4]>; // [1, 2, 3, 4]

// Named tuple elements with rest
type Range = [start: number, end: number];
type RangeWithLabel = [label: string, ...range: Range];
```

### Const Type Parameters (TypeScript 5.0+)

```typescript
// Without const
function makeArray<T>(items: T[]): T[] {
  return items;
}

let arr1 = makeArray(["a", "b", "c"]); // string[]

// With const
function makeArrayConst<const T>(items: T[]): T[] {
  return items;
}

let arr2 = makeArrayConst(["a", "b", "c"]); // ["a", "b", "c"]
```

### Satisfies Operator (TypeScript 4.9+)

```typescript
type Colors = "red" | "green" | "blue";
type RGB = [red: number, green: number, blue: number];

const palette = {
  red: [255, 0, 0],
  green: "#00ff00",
  blue: [0, 0, 255],
} satisfies Record<Colors, string | RGB>;

// palette.red is inferred as [number, number, number], not string | RGB
palette.red.map((c) => c.toFixed(2));
```

### Decorators (Experimental)

```typescript
// tsconfig.json: "experimentalDecorators": true

// Class decorator
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class BugReport {
  type = "report";
  title: string;

  constructor(title: string) {
    this.title = title;
  }
}

// Method decorator
function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}

// Property decorator
function format(formatString: string) {
  return function (target: any, propertyKey: string) {
    let value = target[propertyKey];

    const getter = () => `${formatString} ${value}`;
    const setter = (newVal: string) => {
      value = newVal;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true,
    });
  };
}

class Greeter2 {
  @format("Hello")
  greeting: string = "world";
}

// Parameter decorator
function required(target: Object, propertyKey: string, parameterIndex: number) {
  console.log(`Parameter ${parameterIndex} of ${propertyKey} is required`);
}

class Calculator {
  multiply(@required x: number, @required y: number): number {
    return x * y;
  }
}
```

### Higher-Kinded Types (Simulation)

```typescript
// TypeScript doesn't have built-in HKTs, but we can simulate them

interface HKT {
  readonly _URI?: unknown;
  readonly _A?: unknown;
}

interface URI2HKT<A> {
  Array: Array<A>;
  Promise: Promise<A>;
  Option: Option<A>;
}

type URIS = keyof URI2HKT<unknown>;

type Kind<F extends URIS, A> = URI2HKT<A>[F];

// Usage
type Option<A> = { _tag: "Some"; value: A } | { _tag: "None" };

function map<F extends URIS, A, B>(fa: Kind<F, A>, f: (a: A) => B): Kind<F, B> {
  // Implementation would need runtime checks
  return null as any;
}
```

---

## Best Practices

### 1. Prefer Interfaces for Object Shapes

```typescript
// Good
interface User {
  id: number;
  name: string;
}

// Use type aliases for unions, tuples, primitives
type ID = string | number;
```

### 2. Use const assertions for literal values

```typescript
const config = {
  endpoint: "/api/v1",
  timeout: 5000,
} as const;
```

### 3. Avoid any, use unknown

```typescript
// Bad
function process(data: any) {
  return data.value;
}

// Good
function process(data: unknown) {
  if (typeof data === "object" && data !== null && "value" in data) {
    return (data as { value: any }).value;
  }
}
```

### 4. Use strict mode

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true
  }
}
```

### 5. Leverage type inference

```typescript
// Don't over-annotate
let message = "hello"; // Type inferred as string

// Do annotate function return types
function add(a: number, b: number): number {
  return a + b;
}
```

### 6. Use readonly for immutability

```typescript
interface Config {
  readonly apiKey: string;
  readonly endpoints: readonly string[];
}
```

### 7. Prefer type predicates for type guards

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}
```

### 8. Document with JSDoc

```typescript
/**
 * Calculates the sum of two numbers
 * @param a - First number
 * @param b - Second number
 * @returns The sum of a and b
 */
function add(a: number, b: number): number {
  return a + b;
}
```

---

## TypeScript Configuration (tsconfig.json)

### Essential Compiler Options

```json
{
  "compilerOptions": {
    // Language and Environment
    "target": "ES2022",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "useDefineForClassFields": true,

    // Modules
    "module": "ESNext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowImportingTsExtensions": true,
    "moduleDetection": "force",

    // Emit
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,
    "outDir": "./dist",
    "removeComments": true,
    "noEmit": true,
    "importHelpers": true,
    "downlevelIteration": true,

    // Interop Constraints
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,

    // Type Checking
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "allowUnusedLabels": false,
    "allowUnreachableCode": false,

    // Completeness
    "skipLibCheck": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist"]
}
```

---

**Created:** November 2, 2025  
**Purpose:** Comprehensive reference for all TypeScript declaration types and patterns
