# TypeScript Data Types

## Table of Contents
1. [Introduction](#introduction)
2. [Basic Data Types](#basic-data-types)
   - [Number](#number)
   - [String](#string)
   - [Boolean](#boolean)
3. [Special Data Types](#special-data-types)
   - [Any](#any)
   - [Unknown](#unknown)
   - [Void](#void)
   - [Null and Undefined](#null-and-undefined)
4. [Object Types](#object-types)
   - [Object](#object)
   - [Array](#array)
   - [Tuple](#tuple)
   - [Function](#function)
5. [Literal Types](#literal-types)
   - [String Literal Types](#string-literal-types)
   - [Numeric Literal Types](#numeric-literal-types)
   - [Boolean Literal Types](#boolean-literal-types)
6. [Union and Intersection Types](#union-and-intersection-types)
   - [Union Types](#union-types)
   - [Intersection Types](#intersection-types)
7. [Type Aliases and Interfaces](#type-aliases-and-interfaces)
   - [Type Aliases](#type-aliases)
   - [Interfaces](#interfaces)
8. [Enums](#enums)
9. [Conclusion](#conclusion)

## Introduction
TypeScript is a superset of JavaScript that adds static typing to the language. This document covers the various data types available in TypeScript.

## Basic Data Types

### Number
The `number` type represents both integer and floating-point numbers.

```typescript
let age: number = 30;
let price: number = 19.99;
```

### String
The `string` type is used to represent textual data.

```typescript
let name: string = "John Doe";
```

### Boolean
The `boolean` type represents a logical value that can be either `true` or `false`.

```typescript
let isActive: boolean = true;
```

## Special Data Types

### Any
The `any` type allows you to opt-out of type checking for a variable.

```typescript
let randomValue: any = 10;
randomValue = "Now I'm a string";
```

### Unknown
The `unknown` type is similar to `any`, but is safer because you must perform some type of checking before performing operations on it.

```typescript
let value: unknown = 30;
```

### Void
The `void` type is used to indicate that a function does not return a value.

```typescript
function logMessage(message: string): void {
    console.log(message);
}
```

### Null and Undefined
`null` and `undefined` are special types that represent the absence of a value.

```typescript
let n: null = null;
let u: undefined = undefined;
```

## Object Types

### Object
The `object` type represents a non-primitive type.

```typescript
let person: object = {
    name: "Alice",
    age: 25
};
```

### Array
Arrays can be defined using the `Array` type or the shorthand syntax.

```typescript
let numbers: number[] = [1, 2, 3];
let strings: Array<string> = ["a", "b", "c"];
```

### Tuple
A tuple is an array with a fixed number of elements whose types are known.

```typescript
let tuple: [string, number] = ["Alice", 25];
```

### Function
Functions can be typed by specifying the types of their parameters and return value.

```typescript
let add: (x: number, y: number) => number = (x, y) => x + y;
```

## Literal Types

### String Literal Types
You can specify exact string values as types.

```typescript
let direction: "left" | "right" = "left";
```

### Numeric Literal Types
Similar to string literals, you can specify exact numeric values.

```typescript
let one: 1 = 1;
```

### Boolean Literal Types
You can also specify exact boolean values.

```typescript
let isTrue: true = true;
```

## Union and Intersection Types

### Union Types
Union types allow a variable to hold multiple types.

```typescript
let value: string | number;
value = "Hello";
value = 42;
```

### Intersection Types
Intersection types combine multiple types into one.

```typescript
type Person = { name: string };
type Employee = { employeeId: number };
type Worker = Person & Employee;
```

## Type Aliases and Interfaces

### Type Aliases
Type aliases allow you to create a new name for a type.

```typescript
type StringOrNumber = string | number;
```

### Interfaces
Interfaces define the structure of an object.

```typescript
interface Person {
    name: string;
    age: number;
}
```

## Enums
Enums allow you to define a set of named constants.

```typescript
enum Direction {
    Up,
    Down,
    Left,
    Right
}
```

## Conclusion
TypeScript provides a rich set of data types that help developers write safer and more maintainable code. Understanding these types is crucial for effective TypeScript programming.
