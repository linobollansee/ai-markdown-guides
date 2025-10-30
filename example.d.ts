// example.d.ts

// --------------------------
// Variable Declarations
// --------------------------
export const APP_NAME: string;
export let version: number;
export var isProduction: boolean;

// --------------------------
// Function Declarations
// --------------------------
export function greet(name: string): string;
export function sum(a: number, b: number): number;

// --------------------------
// Interface and Type Declarations
// --------------------------
export interface Publisher {
  name: string;
  url: string;
}

export interface Book {
  id: string;
  title: string;
  subtitle?: string; // optional
  author: string;
  publisher: Publisher; // nested interface
  pages?: number;
  price?: string;
}

export type ID = string | number;

// --------------------------
// Class Declarations
// --------------------------
export class Person {
  name: string;
  age?: number;

  constructor(name: string, age?: number);
  greet(): string;
  static species(): string;
}

// --------------------------
// Enum Declarations
// --------------------------
export enum Role {
  Admin,
  Editor,
  Viewer,
}

// --------------------------
// Namespace Declarations
// --------------------------
export namespace Utils {
  function log(message: string): void;
  function warn(message: string): void;
}

// --------------------------
// Module Declarations
// --------------------------
declare module "my-library" {
  export function doSomething(): void;
  export const version: string;

  export class Helper {
    constructor();
    help(): string;
  }
}
