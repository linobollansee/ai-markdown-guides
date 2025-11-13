# Complete JavaScript Syntax Reference

| Category | Syntax Element | Example | Description |
|----------|---------------|---------|-------------|
| **Variables** | `var` | `var x = 5;` | Function-scoped variable declaration |
| | `let` | `let y = 10;` | Block-scoped variable declaration |
| | `const` | `const z = 15;` | Block-scoped constant declaration |
| **Data Types** | Number | `42`, `3.14`, `0xFF`, `0b1010`, `0o755` | Numeric values |
| | BigInt | `123n`, `BigInt(123)` | Arbitrary precision integers |
| | String | `"text"`, `'text'`, `` `text` `` | Text values |
| | Boolean | `true`, `false` | Logical values |
| | null | `null` | Intentional absence of value |
| | undefined | `undefined` | Uninitialized value |
| | Symbol | `Symbol()`, `Symbol('desc')` | Unique identifier |
| | Object | `{}`, `{key: value}` | Collection of properties |
| | Array | `[]`, `[1, 2, 3]` | Ordered collection |
| **Operators - Arithmetic** | Addition | `a + b` | Add values |
| | Subtraction | `a - b` | Subtract values |
| | Multiplication | `a * b` | Multiply values |
| | Division | `a / b` | Divide values |
| | Remainder | `a % b` | Modulo operation |
| | Exponentiation | `a ** b` | Power operation |
| | Increment | `++a`, `a++` | Increase by 1 |
| | Decrement | `--a`, `a--` | Decrease by 1 |
| | Unary plus | `+a` | Convert to number |
| | Unary negation | `-a` | Negate value |
| **Operators - Assignment** | Assignment | `a = b` | Assign value |
| | Addition assignment | `a += b` | Add and assign |
| | Subtraction assignment | `a -= b` | Subtract and assign |
| | Multiplication assignment | `a *= b` | Multiply and assign |
| | Division assignment | `a /= b` | Divide and assign |
| | Remainder assignment | `a %= b` | Modulo and assign |
| | Exponentiation assignment | `a **= b` | Power and assign |
| | Left shift assignment | `a <<= b` | Left shift and assign |
| | Right shift assignment | `a >>= b` | Right shift and assign |
| | Unsigned right shift assignment | `a >>>= b` | Unsigned right shift and assign |
| | Bitwise AND assignment | `a &= b` | AND and assign |
| | Bitwise XOR assignment | `a ^= b` | XOR and assign |
| | Bitwise OR assignment | `a \|= b` | OR and assign |
| | Logical AND assignment | `a &&= b` | Logical AND and assign |
| | Logical OR assignment | `a \|\|= b` | Logical OR and assign |
| | Nullish coalescing assignment | `a ??= b` | Nullish coalescing and assign |
| **Operators - Comparison** | Equal | `a == b` | Loose equality |
| | Strict equal | `a === b` | Strict equality |
| | Not equal | `a != b` | Loose inequality |
| | Strict not equal | `a !== b` | Strict inequality |
| | Greater than | `a > b` | Greater comparison |
| | Greater than or equal | `a >= b` | Greater or equal comparison |
| | Less than | `a < b` | Less comparison |
| | Less than or equal | `a <= b` | Less or equal comparison |
| **Operators - Logical** | Logical AND | `a && b` | Both true |
| | Logical OR | `a \|\| b` | Either true |
| | Logical NOT | `!a` | Negate boolean |
| | Nullish coalescing | `a ?? b` | Return b if a is null/undefined |
| **Operators - Bitwise** | Bitwise AND | `a & b` | AND operation |
| | Bitwise OR | `a \| b` | OR operation |
| | Bitwise XOR | `a ^ b` | XOR operation |
| | Bitwise NOT | `~a` | NOT operation |
| | Left shift | `a << b` | Shift left |
| | Right shift | `a >> b` | Shift right (sign-propagating) |
| | Unsigned right shift | `a >>> b` | Shift right (zero-fill) |
| **Operators - String** | Concatenation | `a + b` | Join strings |
| | Template literal | `` `${a}` `` | String interpolation |
| **Operators - Other** | typeof | `typeof a` | Type checking |
| | instanceof | `a instanceof B` | Instance checking |
| | in | `'prop' in obj` | Property existence check |
| | delete | `delete obj.prop` | Delete property |
| | void | `void expression` | Return undefined |
| | Comma | `a, b, c` | Evaluate multiple expressions |
| | Conditional (ternary) | `condition ? a : b` | Conditional expression |
| | Optional chaining | `obj?.prop`, `obj?.[key]`, `func?.()` | Safe property access |
| | Spread | `...array`, `...obj` | Expand iterable |
| | Rest | `function(...args)` | Collect arguments |
| **Control Flow - Conditional** | if | `if (condition) {}` | Conditional execution |
| | if...else | `if (condition) {} else {}` | Alternative execution |
| | else if | `if (a) {} else if (b) {}` | Multiple conditions |
| | switch | `switch (expr) { case x: }` | Multiple case matching |
| | case | `case value:` | Switch case |
| | default | `default:` | Switch default case |
| **Control Flow - Loops** | for | `for (let i = 0; i < n; i++) {}` | Standard loop |
| | for...in | `for (let key in obj) {}` | Enumerate properties |
| | for...of | `for (let val of iterable) {}` | Iterate values |
| | for await...of | `for await (let val of async) {}` | Async iteration |
| | while | `while (condition) {}` | Conditional loop |
| | do...while | `do {} while (condition);` | Post-test loop |
| | break | `break;`, `break label;` | Exit loop/switch |
| | continue | `continue;`, `continue label;` | Skip iteration |
| | Label | `label: statement` | Label statement |
| **Functions** | Function declaration | `function name() {}` | Named function |
| | Function expression | `const f = function() {}` | Anonymous function |
| | Arrow function | `() => {}`, `x => x * 2` | Concise function |
| | Arrow function with body | `() => { return x; }` | Arrow with block |
| | Generator function | `function* name() {}` | Generator declaration |
| | Generator expression | `const g = function*() {}` | Generator expression |
| | Async function | `async function name() {}` | Async declaration |
| | Async function expression | `const f = async function() {}` | Async expression |
| | Async arrow function | `async () => {}` | Async arrow |
| | Async generator | `async function* name() {}` | Async generator |
| | IIFE | `(function() {})()` | Immediately invoked function |
| | Method definition | `{ method() {} }` | Object method shorthand |
| | Getter | `{ get prop() {} }` | Property getter |
| | Setter | `{ set prop(val) {} }` | Property setter |
| | Default parameters | `function f(x = 1) {}` | Parameter defaults |
| | Rest parameters | `function f(...args) {}` | Variable arguments |
| | return | `return value;` | Return value |
| | yield | `yield value;` | Generator yield |
| | yield* | `yield* iterable;` | Delegate to iterable |
| | await | `await promise;` | Await promise |
| **Classes** | Class declaration | `class Name {}` | Class definition |
| | Class expression | `const C = class {}` | Anonymous class |
| | constructor | `constructor() {}` | Constructor method |
| | extends | `class B extends A {}` | Class inheritance |
| | super | `super()`, `super.method()` | Parent reference |
| | static | `static method() {}` | Static method |
| | Static block | `static {}` | Static initialization |
| | Private field | `#privateField` | Private property |
| | Private method | `#privateMethod() {}` | Private method |
| | Static field | `static field = value;` | Static property |
| | Static private | `static #field` | Static private property |
| | new.target | `new.target` | Constructor detection |
| | new | `new ClassName()` | Create instance |
| **Objects** | Object literal | `{}`, `{key: value}` | Create object |
| | Property | `{prop: value}` | Property definition |
| | Shorthand property | `{prop}` | Property shorthand |
| | Computed property | `{[expr]: value}` | Dynamic key |
| | Method | `{method() {}}` | Method definition |
| | Getter | `{get prop() {}}` | Getter definition |
| | Setter | `{set prop(v) {}}` | Setter definition |
| | Property access (dot) | `obj.prop` | Dot notation |
| | Property access (bracket) | `obj['prop']`, `obj[expr]` | Bracket notation |
| | Object.create | `Object.create(proto)` | Create with prototype |
| | Prototype chain | `__proto__` | Prototype access (deprecated) |
| **Arrays** | Array literal | `[]`, `[1, 2, 3]` | Create array |
| | Array access | `arr[0]` | Element access |
| | Array spread | `[...arr]` | Spread array |
| | Array hole | `[1, , 3]` | Sparse array |
| **Destructuring** | Array destructuring | `[a, b] = arr` | Unpack array |
| | Array rest | `[a, ...rest] = arr` | Array rest pattern |
| | Array default | `[a = 1] = arr` | Default in destructuring |
| | Object destructuring | `{a, b} = obj` | Unpack object |
| | Object rest | `{a, ...rest} = obj` | Object rest pattern |
| | Object default | `{a = 1} = obj` | Default in destructuring |
| | Nested destructuring | `{a: {b}} = obj` | Nested pattern |
| | Rename | `{a: newName} = obj` | Rename in destructuring |
| | Parameter destructuring | `function({a, b}) {}` | Destructure parameters |
| **Template Literals** | Template literal | `` `text` `` | String template |
| | Interpolation | `` `${expr}` `` | Expression in string |
| | Multiline | `` `line1\nline2` `` | Multiline string |
| | Tagged template | `` tag`text ${expr}` `` | Template tag function |
| **Regular Expressions** | Regex literal | `/pattern/flags` | Regular expression |
| | RegExp constructor | `new RegExp(pattern, flags)` | Regex object |
| | Regex flags | `/pattern/gimsuvy` | Flags (global, ignoreCase, multiline, dotAll, unicode, sticky, indices) |
| **Error Handling** | try | `try {}` | Try block |
| | catch | `catch (e) {}`, `catch {}` | Catch errors |
| | finally | `finally {}` | Always execute |
| | throw | `throw new Error()` | Throw error |
| | Error | `new Error(msg)` | Error object |
| **Modules** | import | `import x from 'mod'` | Import default |
| | Named import | `import {x} from 'mod'` | Import named |
| | Rename import | `import {x as y} from 'mod'` | Rename import |
| | Namespace import | `import * as ns from 'mod'` | Import all |
| | Import side effect | `import 'mod'` | Import for side effects |
| | Dynamic import | `import('mod')` | Async import |
| | export | `export const x = 1` | Export declaration |
| | Named export | `export {x}` | Export existing |
| | Rename export | `export {x as y}` | Rename export |
| | Default export | `export default x` | Export default |
| | Re-export | `export {x} from 'mod'` | Re-export |
| | Re-export all | `export * from 'mod'` | Re-export all |
| | Re-export as namespace | `export * as ns from 'mod'` | Re-export as namespace |
| **Promises** | Promise | `new Promise((resolve, reject) => {})` | Create promise |
| | then | `promise.then(f)` | Handle resolution |
| | catch | `promise.catch(f)` | Handle rejection |
| | finally | `promise.finally(f)` | Always execute |
| | Promise.all | `Promise.all([p1, p2])` | Wait for all |
| | Promise.race | `Promise.race([p1, p2])` | Wait for first |
| | Promise.allSettled | `Promise.allSettled([p1, p2])` | Wait for all to settle |
| | Promise.any | `Promise.any([p1, p2])` | Wait for first fulfilled |
| | Promise.resolve | `Promise.resolve(value)` | Create resolved promise |
| | Promise.reject | `Promise.reject(reason)` | Create rejected promise |
| **Async/Await** | async | `async function f() {}` | Async function |
| | await | `await promise` | Wait for promise |
| | Top-level await | `await promise` (module) | Module-level await |
| **Iterators & Generators** | Iterator protocol | `{next() {}}` | Iterator interface |
| | Iterable protocol | `{[Symbol.iterator]() {}}` | Iterable interface |
| | Generator | `function* gen() {}` | Generator function |
| | yield | `yield value` | Yield value |
| | yield* | `yield* iterable` | Delegate iteration |
| | Async iterator | `{async next() {}}` | Async iterator |
| | Async iterable | `{[Symbol.asyncIterator]() {}}` | Async iterable interface |
| | Async generator | `async function* gen() {}` | Async generator |
| **Symbols** | Symbol | `Symbol()` | Create symbol |
| | Symbol.for | `Symbol.for('key')` | Global symbol |
| | Symbol.keyFor | `Symbol.keyFor(sym)` | Get symbol key |
| | Well-known symbols | `Symbol.iterator`, `Symbol.asyncIterator` | Built-in symbols |
| | | `Symbol.hasInstance`, `Symbol.toStringTag` | More built-in symbols |
| | | `Symbol.toPrimitive`, `Symbol.match` | Pattern symbols |
| | | `Symbol.replace`, `Symbol.search` | Regex symbols |
| | | `Symbol.split`, `Symbol.species` | Collection symbols |
| | | `Symbol.isConcatSpreadable` | Array symbol |
| | | `Symbol.unscopables` | Scope symbol |
| **Proxy & Reflect** | Proxy | `new Proxy(target, handler)` | Create proxy |
| | Proxy handler | `{get() {}, set() {}}` | Trap methods |
| | Reflect.get | `Reflect.get(obj, prop)` | Get property |
| | Reflect.set | `Reflect.set(obj, prop, val)` | Set property |
| | Reflect.has | `Reflect.has(obj, prop)` | Has property |
| | Reflect.deleteProperty | `Reflect.deleteProperty(obj, prop)` | Delete property |
| | Reflect.apply | `Reflect.apply(f, this, args)` | Apply function |
| | Reflect.construct | `Reflect.construct(C, args)` | Construct object |
| | Other Reflect methods | `Reflect.defineProperty`, etc. | More reflection |
| **Strict Mode** | 'use strict' | `'use strict';` | Enable strict mode |
| **Comments** | Single-line comment | `// comment` | Line comment |
| | Multi-line comment | `/* comment */` | Block comment |
| | Hashbang | `#!/usr/bin/env node` | Shebang (modules) |
| **Semicolons** | Statement terminator | `;` | End statement |
| | Automatic insertion | (implicit) | ASI rules |
| **Blocks** | Block | `{ statements }` | Group statements |
| **Expressions** | Grouping | `(expression)` | Group expression |
| | this | `this` | Context reference |
| | Literal | `123`, `"string"`, etc. | Literal values |
| | Array literal | `[1, 2, 3]` | Array expression |
| | Object literal | `{a: 1}` | Object expression |
| | Function expression | `function() {}` | Function value |
| | Arrow expression | `() => {}` | Arrow value |
| | Class expression | `class {}` | Class value |
| | Call expression | `func()`, `func(a, b)` | Function call |
| | New expression | `new Constructor()` | Create instance |
| | Member expression | `obj.prop`, `obj[prop]` | Property access |
| | Tagged template | `` tag`str` `` | Tagged template |
| | Meta property | `new.target`, `import.meta` | Meta properties |
| **Special Values** | NaN | `NaN` | Not a Number |
| | Infinity | `Infinity`, `-Infinity` | Infinite value |
| | globalThis | `globalThis` | Global object |
| **With (deprecated)** | with | `with (obj) {}` | With statement (avoid) |
| **Debugger** | debugger | `debugger;` | Debugger breakpoint |
| **WeakMap & WeakSet** | WeakMap | `new WeakMap()` | Weak key map |
| | WeakSet | `new WeakSet()` | Weak value set |
| **Map & Set** | Map | `new Map()` | Key-value map |
| | Set | `new Set()` | Unique values |
| **Typed Arrays** | Int8Array | `new Int8Array()` | 8-bit integer array |
| | Uint8Array | `new Uint8Array()` | Unsigned 8-bit array |
| | Int16Array | `new Int16Array()` | 16-bit integer array |
| | Uint16Array | `new Uint16Array()` | Unsigned 16-bit array |
| | Int32Array | `new Int32Array()` | 32-bit integer array |
| | Uint32Array | `new Uint32Array()` | Unsigned 32-bit array |
| | Float32Array | `new Float32Array()` | 32-bit float array |
| | Float64Array | `new Float64Array()` | 64-bit float array |
| | BigInt64Array | `new BigInt64Array()` | 64-bit BigInt array |
| | BigUint64Array | `new BigUint64Array()` | Unsigned BigInt array |
| | ArrayBuffer | `new ArrayBuffer(size)` | Raw buffer |
| | SharedArrayBuffer | `new SharedArrayBuffer(size)` | Shared buffer |
| | DataView | `new DataView(buffer)` | Buffer view |
| **Atomics** | Atomics operations | `Atomics.add()`, `Atomics.load()` | Atomic operations |
| **Property Descriptors** | defineProperty | `Object.defineProperty()` | Define property |
| | getOwnPropertyDescriptor | `Object.getOwnPropertyDescriptor()` | Get descriptor |
| | Descriptor flags | `{writable, enumerable, configurable}` | Property attributes |
| **Getters & Setters** | Object getter/setter | `Object.defineProperty(obj, 'prop', {get, set})` | Define accessor |
| **Freezing & Sealing** | Object.freeze | `Object.freeze(obj)` | Make immutable |
| | Object.seal | `Object.seal(obj)` | Seal object |
| | Object.preventExtensions | `Object.preventExtensions(obj)` | Prevent extensions |
| **JSON** | JSON.parse | `JSON.parse(str)` | Parse JSON |
| | JSON.stringify | `JSON.stringify(obj)` | Convert to JSON |
| **Import Assertions** | Import assertion | `import x from 'file' assert {type: 'json'}` | Import with assertion |
| **Numeric Separators** | Numeric separator | `1_000_000`, `0b1010_1010` | Readable numbers |
| **Logical Assignment** | AND assignment | `a &&= b` | Assign if truthy |
| | OR assignment | `a \|\|= b` | Assign if falsy |
| | Nullish assignment | `a ??= b` | Assign if nullish |
| **Private Fields** | Private instance field | `#field` | Private property |
| | Private static field | `static #field` | Private static |
| | Private method | `#method() {}` | Private method |
| | Private getter | `get #prop() {}` | Private getter |
| | Private setter | `set #prop(v) {}` | Private setter |
| **Static Initialization** | Static block | `static { /* init */ }` | Static initializer |
| **Top-Level Await** | Module await | `await expression` | Top-level await |
| **Coercion** | Type coercion | `+"123"`, `!!"value"` | Implicit conversion |
| **Comma Operator** | Comma sequence | `a = 1, b = 2, c = 3` | Sequential evaluation |
| **Grouping** | Parentheses | `(a + b) * c` | Precedence grouping |
| **Property Enumeration** | for...in | `for (let k in obj) {}` | Enumerate keys |
| | Object.keys | `Object.keys(obj)` | Get keys |
| | Object.values | `Object.values(obj)` | Get values |
| | Object.entries | `Object.entries(obj)` | Get entries |
| **hasOwnProperty** | hasOwnProperty | `obj.hasOwnProperty('prop')` | Check own property |
| **Object Assignment** | Object.assign | `Object.assign(target, ...sources)` | Merge objects |
| **Object Spread** | Object spread | `{...obj}` | Shallow copy |
| | Object rest | `{a, ...rest} = obj` | Rest properties |
| **Array Methods** | Array.from | `Array.from(iterable)` | Create array |
| | Array.of | `Array.of(1, 2, 3)` | Create array |
| | Array.isArray | `Array.isArray(obj)` | Check if array |
| **Function Properties** | Function.length | `func.length` | Parameter count |
| | Function.name | `func.name` | Function name |
| | Function.prototype | `func.prototype` | Prototype property |
| **Function Methods** | call | `func.call(thisArg, ...args)` | Call with context |
| | apply | `func.apply(thisArg, [args])` | Apply with context |
| | bind | `func.bind(thisArg, ...args)` | Create bound function |
| **Arguments Object** | arguments | `arguments` | Function arguments (non-arrow) |
| | arguments.length | `arguments.length` | Argument count |
| | arguments.callee | `arguments.callee` | Self reference (strict: forbidden) |
| **String Escapes** | Escape sequences | `\n`, `\t`, `\r`, `\\`, `\'`, `\"` | Special characters |
| | Unicode escape | `\uXXXX`, `\u{XXXXX}` | Unicode characters |
| | Hex escape | `\xXX` | Hex character |
| | Octal escape | `\0`, `\123` | Octal (deprecated) |
| **Number Formats** | Decimal | `123`, `3.14` | Decimal number |
| | Hexadecimal | `0xFF`, `0XFF` | Hex number |
| | Binary | `0b1010`, `0B1010` | Binary number |
| | Octal | `0o755`, `0O755` | Octal number |
| | Exponential | `1e10`, `2.5e-3` | Scientific notation |
| **Evaluation** | eval | `eval(code)` | Evaluate string (avoid) |
| **URI Encoding** | encodeURI | `encodeURI(uri)` | Encode URI |
| | encodeURIComponent | `encodeURIComponent(str)` | Encode component |
| | decodeURI | `decodeURI(uri)` | Decode URI |
| | decodeURIComponent | `decodeURIComponent(str)` | Decode component |
| **Timers** | setTimeout | `setTimeout(fn, ms)` | Delayed execution |
| | setInterval | `setInterval(fn, ms)` | Repeated execution |
| | clearTimeout | `clearTimeout(id)` | Clear timeout |
| | clearInterval | `clearInterval(id)` | Clear interval |
| **Console** | console.log | `console.log(...)` | Log output |
| | console.error | `console.error(...)` | Error output |
| | console.warn | `console.warn(...)` | Warning output |
| | console.info | `console.info(...)` | Info output |
| | console.debug | `console.debug(...)` | Debug output |
| | console.table | `console.table(data)` | Table output |
| | console.trace | `console.trace()` | Stack trace |
| | console.assert | `console.assert(condition)` | Assertion |
| | console.time | `console.time(label)` | Start timer |
| | console.timeEnd | `console.timeEnd(label)` | End timer |
| | console.group | `console.group()` | Group messages |
| | console.groupEnd | `console.groupEnd()` | End group |
| | console.clear | `console.clear()` | Clear console |
| **Performance** | performance.now | `performance.now()` | High-res timestamp |
| **Chaining** | Optional chaining | `obj?.prop?.method?.()` | Safe navigation |
| **Regex d Flag** | Indices flag | `/pattern/d` | Return indices for matches |
| **Import Attributes** | Import attribute | `import x from 'file' with {type: 'json'}` | Import with attribute (newer than assert) |
| **Error Types** | TypeError | `new TypeError(msg)` | Type error |
| | ReferenceError | `new ReferenceError(msg)` | Reference error |
| | SyntaxError | `new SyntaxError(msg)` | Syntax error |
| | RangeError | `new RangeError(msg)` | Range error |
| | URIError | `new URIError(msg)` | URI error |
| | EvalError | `new EvalError(msg)` | Eval error (legacy) |
| | AggregateError | `new AggregateError(errors, msg)` | Multiple errors |
| **Proxy Traps** | get trap | `{get(target, prop, receiver) {}}` | Property get trap |
| | set trap | `{set(target, prop, value, receiver) {}}` | Property set trap |
| | has trap | `{has(target, prop) {}}` | Property check trap |
| | deleteProperty trap | `{deleteProperty(target, prop) {}}` | Delete trap |
| | apply trap | `{apply(target, thisArg, args) {}}` | Function call trap |
| | construct trap | `{construct(target, args, newTarget) {}}` | Constructor trap |
| | getPrototypeOf trap | `{getPrototypeOf(target) {}}` | Get prototype trap |
| | setPrototypeOf trap | `{setPrototypeOf(target, proto) {}}` | Set prototype trap |
| | isExtensible trap | `{isExtensible(target) {}}` | Extensible check trap |
| | preventExtensions trap | `{preventExtensions(target) {}}` | Prevent extensions trap |
| | getOwnPropertyDescriptor trap | `{getOwnPropertyDescriptor(target, prop) {}}` | Get descriptor trap |
| | defineProperty trap | `{defineProperty(target, prop, desc) {}}` | Define property trap |
| | ownKeys trap | `{ownKeys(target) {}}` | Own keys trap |
| **Reflect Methods** | Reflect.getPrototypeOf | `Reflect.getPrototypeOf(obj)` | Get prototype |
| | Reflect.setPrototypeOf | `Reflect.setPrototypeOf(obj, proto)` | Set prototype |
| | Reflect.isExtensible | `Reflect.isExtensible(obj)` | Check extensible |
| | Reflect.preventExtensions | `Reflect.preventExtensions(obj)` | Prevent extensions |
| | Reflect.getOwnPropertyDescriptor | `Reflect.getOwnPropertyDescriptor(obj, prop)` | Get descriptor |
| | Reflect.defineProperty | `Reflect.defineProperty(obj, prop, desc)` | Define property |
| | Reflect.ownKeys | `Reflect.ownKeys(obj)` | Get own keys |
| **Object Methods** | Object.getPrototypeOf | `Object.getPrototypeOf(obj)` | Get prototype |
| | Object.setPrototypeOf | `Object.setPrototypeOf(obj, proto)` | Set prototype |
| | Object.is | `Object.is(a, b)` | Same value equality |
| | Object.fromEntries | `Object.fromEntries(entries)` | Create object from entries |
| | Object.hasOwn | `Object.hasOwn(obj, prop)` | Check own property (modern) |
| | Object.getOwnPropertyNames | `Object.getOwnPropertyNames(obj)` | Get property names |
| | Object.getOwnPropertySymbols | `Object.getOwnPropertySymbols(obj)` | Get symbols |
| | Object.getOwnPropertyDescriptors | `Object.getOwnPropertyDescriptors(obj)` | Get all descriptors |
| | Object.isExtensible | `Object.isExtensible(obj)` | Check if extensible |
| | Object.isFrozen | `Object.isFrozen(obj)` | Check if frozen |
| | Object.isSealed | `Object.isSealed(obj)` | Check if sealed |
| **String Methods** | String.raw | `` String.raw`text\n` `` | Raw template string |
| | String.fromCharCode | `String.fromCharCode(65)` | Create string from char codes |
| | String.fromCodePoint | `String.fromCodePoint(0x1F600)` | Create string from code points |
| **Number Methods** | Number.isNaN | `Number.isNaN(val)` | Check if NaN |
| | Number.isFinite | `Number.isFinite(val)` | Check if finite |
| | Number.isInteger | `Number.isInteger(val)` | Check if integer |
| | Number.isSafeInteger | `Number.isSafeInteger(val)` | Check if safe integer |
| | Number.parseFloat | `Number.parseFloat(str)` | Parse float |
| | Number.parseInt | `Number.parseInt(str, radix)` | Parse integer |
| **Number Constants** | Number.EPSILON | `Number.EPSILON` | Smallest interval |
| | Number.MAX_VALUE | `Number.MAX_VALUE` | Largest number |
| | Number.MIN_VALUE | `Number.MIN_VALUE` | Smallest positive number |
| | Number.MAX_SAFE_INTEGER | `Number.MAX_SAFE_INTEGER` | Largest safe integer |
| | Number.MIN_SAFE_INTEGER | `Number.MIN_SAFE_INTEGER` | Smallest safe integer |
| | Number.POSITIVE_INFINITY | `Number.POSITIVE_INFINITY` | Positive infinity |
| | Number.NEGATIVE_INFINITY | `Number.NEGATIVE_INFINITY` | Negative infinity |
| **Math Constants** | Math.E | `Math.E` | Euler's number |
| | Math.PI | `Math.PI` | Pi |
| | Math.LN2 | `Math.LN2` | Natural log of 2 |
| | Math.LN10 | `Math.LN10` | Natural log of 10 |
| | Math.LOG2E | `Math.LOG2E` | Base 2 log of E |
| | Math.LOG10E | `Math.LOG10E` | Base 10 log of E |
| | Math.SQRT1_2 | `Math.SQRT1_2` | Square root of 1/2 |
| | Math.SQRT2 | `Math.SQRT2` | Square root of 2 |
| **Math Methods** | Math.abs | `Math.abs(x)` | Absolute value |
| | Math.sign | `Math.sign(x)` | Sign of number |
| | Math.round | `Math.round(x)` | Round to nearest |
| | Math.floor | `Math.floor(x)` | Round down |
| | Math.ceil | `Math.ceil(x)` | Round up |
| | Math.trunc | `Math.trunc(x)` | Truncate decimal |
| | Math.min | `Math.min(...values)` | Minimum value |
| | Math.max | `Math.max(...values)` | Maximum value |
| | Math.pow | `Math.pow(base, exp)` | Power |
| | Math.sqrt | `Math.sqrt(x)` | Square root |
| | Math.cbrt | `Math.cbrt(x)` | Cube root |
| | Math.exp | `Math.exp(x)` | E to the power |
| | Math.expm1 | `Math.expm1(x)` | E^x - 1 |
| | Math.log | `Math.log(x)` | Natural logarithm |
| | Math.log1p | `Math.log1p(x)` | ln(1 + x) |
| | Math.log10 | `Math.log10(x)` | Base 10 logarithm |
| | Math.log2 | `Math.log2(x)` | Base 2 logarithm |
| | Math.sin | `Math.sin(x)` | Sine |
| | Math.cos | `Math.cos(x)` | Cosine |
| | Math.tan | `Math.tan(x)` | Tangent |
| | Math.asin | `Math.asin(x)` | Arcsine |
| | Math.acos | `Math.acos(x)` | Arccosine |
| | Math.atan | `Math.atan(x)` | Arctangent |
| | Math.atan2 | `Math.atan2(y, x)` | Arctangent of quotient |
| | Math.sinh | `Math.sinh(x)` | Hyperbolic sine |
| | Math.cosh | `Math.cosh(x)` | Hyperbolic cosine |
| | Math.tanh | `Math.tanh(x)` | Hyperbolic tangent |
| | Math.asinh | `Math.asinh(x)` | Hyperbolic arcsine |
| | Math.acosh | `Math.acosh(x)` | Hyperbolic arccosine |
| | Math.atanh | `Math.atanh(x)` | Hyperbolic arctangent |
| | Math.hypot | `Math.hypot(...values)` | Square root of sum of squares |
| | Math.clz32 | `Math.clz32(x)` | Count leading zero bits |
| | Math.imul | `Math.imul(a, b)` | 32-bit integer multiplication |
| | Math.fround | `Math.fround(x)` | 32-bit float representation |
| | Math.random | `Math.random()` | Random number |
| **Date** | Date constructor | `new Date()`, `new Date(ms)` | Create date |
| | Date.now | `Date.now()` | Current timestamp |
| | Date.parse | `Date.parse(str)` | Parse date string |
| | Date.UTC | `Date.UTC(year, month, ...)` | UTC timestamp |
| **Global Functions** | isNaN | `isNaN(value)` | Check NaN (loose) |
| | isFinite | `isFinite(value)` | Check finite (loose) |
| | parseInt | `parseInt(str, radix)` | Parse integer |
| | parseFloat | `parseFloat(str)` | Parse float |
| **WeakRef** | WeakRef | `new WeakRef(obj)` | Weak reference |
| | WeakRef.deref | `weakRef.deref()` | Dereference |
| **FinalizationRegistry** | FinalizationRegistry | `new FinalizationRegistry(callback)` | Finalization callback |
| | register | `registry.register(obj, heldValue)` | Register object |
| | unregister | `registry.unregister(token)` | Unregister object |
| **Intl** | Intl.Collator | `new Intl.Collator()` | String comparison |
| | Intl.DateTimeFormat | `new Intl.DateTimeFormat()` | Date formatting |
| | Intl.NumberFormat | `new Intl.NumberFormat()` | Number formatting |
| | Intl.PluralRules | `new Intl.PluralRules()` | Pluralization rules |
| | Intl.RelativeTimeFormat | `new Intl.RelativeTimeFormat()` | Relative time formatting |
| | Intl.ListFormat | `new Intl.ListFormat()` | List formatting |
| | Intl.DisplayNames | `new Intl.DisplayNames()` | Display names |
| | Intl.Locale | `new Intl.Locale()` | Locale object |
| | Intl.Segmenter | `new Intl.Segmenter()` | Text segmentation |
| **ArrayBuffer Methods** | ArrayBuffer.isView | `ArrayBuffer.isView(value)` | Check if typed array view |
| **Atomics Methods** | Atomics.load | `Atomics.load(arr, index)` | Atomic load |
| | Atomics.store | `Atomics.store(arr, index, value)` | Atomic store |
| | Atomics.add | `Atomics.add(arr, index, value)` | Atomic add |
| | Atomics.sub | `Atomics.sub(arr, index, value)` | Atomic subtract |
| | Atomics.and | `Atomics.and(arr, index, value)` | Atomic AND |
| | Atomics.or | `Atomics.or(arr, index, value)` | Atomic OR |
| | Atomics.xor | `Atomics.xor(arr, index, value)` | Atomic XOR |
| | Atomics.exchange | `Atomics.exchange(arr, index, value)` | Atomic exchange |
| | Atomics.compareExchange | `Atomics.compareExchange(arr, index, expected, replacement)` | Compare and exchange |
| | Atomics.wait | `Atomics.wait(arr, index, value, timeout)` | Atomic wait |
| | Atomics.notify | `Atomics.notify(arr, index, count)` | Notify waiters |
| | Atomics.isLockFree | `Atomics.isLockFree(size)` | Check lock-free |
| **Async Context** | async function* | `async function* gen() { yield await promise; }` | Async generator syntax |
| **Decorators (Stage 3)** | Class decorator | `@decorator class C {}` | Decorate class |
| | Method decorator | `class C { @decorator method() {} }` | Decorate method |
| | Field decorator | `class C { @decorator field; }` | Decorate field |
| | Accessor decorator | `class C { @decorator accessor field; }` | Decorate accessor |
| **Pipeline Operator (Proposal)** | Pipeline | `value \|> func` | Pipeline operator (proposal) |
| **Record & Tuple (Proposal)** | Record | `#{a: 1, b: 2}` | Immutable record (proposal) |
| | Tuple | `#[1, 2, 3]` | Immutable tuple (proposal) |
| **Pattern Matching (Proposal)** | match expression | `match (value) { ... }` | Pattern matching (proposal) |
| **Nullish Property Access** | Nullish property | `obj.?prop` | Alternative nullish syntax (deprecated) |
| **Legacy** | \_\_proto\_\_ | `obj.__proto__` | Legacy prototype access |
| | arguments.caller | `arguments.caller` | Caller function (removed in strict) |
| | Function.caller | `func.caller` | Calling function (deprecated) |
| | Function.arguments | `func.arguments` | Function arguments (deprecated) |
| **Empty Statement** | Empty | `;` | Empty statement |
| **Sequence in Arrays** | Array sequence | `[expr1, expr2, expr3]` | Comma-separated expressions |
| **Property Assignment Patterns** | Assignment pattern | `({a} = {a: 1})` | Destructuring in expression |
| **Array Assignment Patterns** | Array assignment | `([a] = [1])` | Array destructuring in expression |
| **Async Function Expression** | Async function | `(async function() {})` | Async IIFE |
| **Super Property** | Super property | `super.property` | Access parent property |
| | Super method | `super.method()` | Call parent method |
| | Super constructor | `super(...args)` | Call parent constructor |
| **Class Fields** | Public field | `class C { field = value; }` | Public instance field |
| | Public static field | `class C { static field = value; }` | Public static field |
| **Computed Method Names** | Computed method | `{ [expr]() {} }` | Dynamic method name |
| **Async Method** | Async method | `{ async method() {} }` | Async object method |
| | Async class method | `class C { async method() {} }` | Async class method |
| **Generator Method** | Generator method | `{ *method() {} }` | Generator object method |
| | Generator class method | `class C { *method() {} }` | Generator class method |
| **Async Generator Method** | Async generator method | `{ async *method() {} }` | Async generator object method |
| | Async generator class method | `class C { async *method() {} }` | Async generator class method |
| **Shorthand Async** | Shorthand async arrow | `async x => x` | Single param async arrow |
| **Object Property Initializer** | Property initializer | `{ prop = default } = obj` | Default in destructuring pattern |
| **Array Pattern with Holes** | Pattern holes | `[a, , c] = arr` | Skip elements in destructuring |
| **Rest in Object Literal** | Not allowed | N/A | Rest not allowed in object literals |
| **Trailing Commas** | Trailing comma | `[1, 2, 3,]`, `{a: 1,}` | Allowed in arrays/objects |
| | Function trailing comma | `func(a, b,)` | Allowed in function calls |
| | Parameter trailing comma | `function f(a, b,) {}` | Allowed in parameters |
| **Unicode in Identifiers** | Unicode identifier | `let café = 1;` | Unicode in names |
| | Unicode escape in identifier | `let caf\u00E9 = 1;` | Escaped unicode in names |
| **Escaped Keywords** | Cannot escape | N/A | Keywords cannot be escaped |
| **Future Reserved Words** | enum | `enum` | Reserved (not usable) |
| **Strict Mode Reserved** | implements, interface, let, package, private, protected, public, static, yield | Various | Reserved in strict mode |
| **Contextual Keywords** | as, async, await, from, get, meta, of, set, target | Various | Contextual keywords |
| **HTML Comment Syntax** | HTML comment | `<!-- comment`, `--> comment` | HTML-style comments (legacy) |
| **RegExp Methods** | test | `regex.test(str)` | Test for match |
| | exec | `regex.exec(str)` | Execute search |
| | String match | `str.match(regex)` | Match string |
| | String matchAll | `str.matchAll(regex)` | Match all occurrences |
| | String search | `str.search(regex)` | Search position |
| | String replace | `str.replace(regex, replacement)` | Replace matches |
| | String replaceAll | `str.replaceAll(regex, replacement)` | Replace all matches |
| | String split | `str.split(regex)` | Split string |
| **String Instance Methods** | charAt | `str.charAt(index)` | Character at index |
| | charCodeAt | `str.charCodeAt(index)` | Char code at index |
| | codePointAt | `str.codePointAt(index)` | Code point at index |
| | concat | `str.concat(str2)` | Concatenate strings |
| | includes | `str.includes(substr)` | Check if contains |
| | indexOf | `str.indexOf(substr)` | Find index |
| | lastIndexOf | `str.lastIndexOf(substr)` | Find last index |
| | startsWith | `str.startsWith(prefix)` | Check if starts with |
| | endsWith | `str.endsWith(suffix)` | Check if ends with |
| | repeat | `str.repeat(count)` | Repeat string |
| | slice | `str.slice(start, end)` | Extract substring |
| | substring | `str.substring(start, end)` | Extract substring |
| | substr | `str.substr(start, length)` | Extract substring (deprecated) |
| | toLowerCase | `str.toLowerCase()` | Convert to lowercase |
| | toUpperCase | `str.toUpperCase()` | Convert to uppercase |
| | toLocaleLowerCase | `str.toLocaleLowerCase()` | Locale lowercase |
| | toLocaleUpperCase | `str.toLocaleUpperCase()` | Locale uppercase |
| | trim | `str.trim()` | Trim whitespace |
| | trimStart / trimLeft | `str.trimStart()` | Trim start |
| | trimEnd / trimRight | `str.trimEnd()` | Trim end |
| | padStart | `str.padStart(length, pad)` | Pad start |
| | padEnd | `str.padEnd(length, pad)` | Pad end |
| | normalize | `str.normalize()` | Unicode normalization |
| | localeCompare | `str.localeCompare(other)` | Locale comparison |
| | at | `str.at(index)` | Character at index (negative ok) |
| **Array Instance Methods** | push | `arr.push(item)` | Add to end |
| | pop | `arr.pop()` | Remove from end |
| | shift | `arr.shift()` | Remove from start |
| | unshift | `arr.unshift(item)` | Add to start |
| | concat | `arr.concat(arr2)` | Concatenate arrays |
| | join | `arr.join(separator)` | Join to string |
| | slice | `arr.slice(start, end)` | Extract subarray |
| | splice | `arr.splice(start, deleteCount, ...items)` | Modify array |
| | indexOf | `arr.indexOf(item)` | Find index |
| | lastIndexOf | `arr.lastIndexOf(item)` | Find last index |
| | includes | `arr.includes(item)` | Check if contains |
| | find | `arr.find(predicate)` | Find element |
| | findIndex | `arr.findIndex(predicate)` | Find index |
| | findLast | `arr.findLast(predicate)` | Find last element |
| | findLastIndex | `arr.findLastIndex(predicate)` | Find last index |
| | filter | `arr.filter(predicate)` | Filter elements |
| | map | `arr.map(fn)` | Transform elements |
| | flatMap | `arr.flatMap(fn)` | Map and flatten |
| | reduce | `arr.reduce(fn, initial)` | Reduce to value |
| | reduceRight | `arr.reduceRight(fn, initial)` | Reduce from right |
| | forEach | `arr.forEach(fn)` | Iterate elements |
| | every | `arr.every(predicate)` | Check all |
| | some | `arr.some(predicate)` | Check any |
| | sort | `arr.sort(compareFn)` | Sort array |
| | reverse | `arr.reverse()` | Reverse array |
| | fill | `arr.fill(value, start, end)` | Fill with value |
| | copyWithin | `arr.copyWithin(target, start, end)` | Copy within array |
| | flat | `arr.flat(depth)` | Flatten array |
| | at | `arr.at(index)` | Element at index (negative ok) |
| | toReversed | `arr.toReversed()` | Immutable reverse |
| | toSorted | `arr.toSorted(compareFn)` | Immutable sort |
| | toSpliced | `arr.toSpliced(start, deleteCount, ...items)` | Immutable splice |
| | with | `arr.with(index, value)` | Immutable replace |
| | keys | `arr.keys()` | Iterator of keys |
| | values | `arr.values()` | Iterator of values |
| | entries | `arr.entries()` | Iterator of entries |
| **Map Methods** | set | `map.set(key, value)` | Set key-value |
| | get | `map.get(key)` | Get value |
| | has | `map.has(key)` | Check key |
| | delete | `map.delete(key)` | Delete key |
| | clear | `map.clear()` | Clear all |
| | keys | `map.keys()` | Iterator of keys |
| | values | `map.values()` | Iterator of values |
| | entries | `map.entries()` | Iterator of entries |
| | forEach | `map.forEach(fn)` | Iterate entries |
| | size | `map.size` | Number of entries |
| **Set Methods** | add | `set.add(value)` | Add value |
| | has | `set.has(value)` | Check value |
| | delete | `set.delete(value)` | Delete value |
| | clear | `set.clear()` | Clear all |
| | keys | `set.keys()` | Iterator of values |
| | values | `set.values()` | Iterator of values |
| | entries | `set.entries()` | Iterator of entries |
| | forEach | `set.forEach(fn)` | Iterate values |
| | size | `set.size` | Number of values |
| | union | `set.union(other)` | Set union |
| | intersection | `set.intersection(other)` | Set intersection |
| | difference | `set.difference(other)` | Set difference |
| | symmetricDifference | `set.symmetricDifference(other)` | Symmetric difference |
| | isSubsetOf | `set.isSubsetOf(other)` | Check subset |
| | isSupersetOf | `set.isSupersetOf(other)` | Check superset |
| | isDisjointFrom | `set.isDisjointFrom(other)` | Check disjoint |
| **WeakMap Methods** | set | `weakMap.set(key, value)` | Set key-value |
| | get | `weakMap.get(key)` | Get value |
| | has | `weakMap.has(key)` | Check key |
| | delete | `weakMap.delete(key)` | Delete key |
| **WeakSet Methods** | add | `weakSet.add(value)` | Add value |
| | has | `weakSet.has(value)` | Check value |
| | delete | `weakSet.delete(value)` | Delete value |
| **Date Methods** | getTime | `date.getTime()` | Get timestamp |
| | getFullYear | `date.getFullYear()` | Get year |
| | getMonth | `date.getMonth()` | Get month (0-11) |
| | getDate | `date.getDate()` | Get day of month |
| | getDay | `date.getDay()` | Get day of week |
| | getHours | `date.getHours()` | Get hours |
| | getMinutes | `date.getMinutes()` | Get minutes |
| | getSeconds | `date.getSeconds()` | Get seconds |
| | getMilliseconds | `date.getMilliseconds()` | Get milliseconds |
| | getUTCFullYear | `date.getUTCFullYear()` | Get UTC year |
| | getUTCMonth | `date.getUTCMonth()` | Get UTC month |
| | getUTCDate | `date.getUTCDate()` | Get UTC date |
| | getUTCDay | `date.getUTCDay()` | Get UTC day |
| | getUTCHours | `date.getUTCHours()` | Get UTC hours |
| | getUTCMinutes | `date.getUTCMinutes()` | Get UTC minutes |
| | getUTCSeconds | `date.getUTCSeconds()` | Get UTC seconds |
| | getUTCMilliseconds | `date.getUTCMilliseconds()` | Get UTC milliseconds |
| | getTimezoneOffset | `date.getTimezoneOffset()` | Get timezone offset |
| | setTime | `date.setTime(ms)` | Set timestamp |
| | setFullYear | `date.setFullYear(year)` | Set year |
| | setMonth | `date.setMonth(month)` | Set month |
| | setDate | `date.setDate(day)` | Set day |
| | setHours | `date.setHours(hours)` | Set hours |
| | setMinutes | `date.setMinutes(minutes)` | Set minutes |
| | setSeconds | `date.setSeconds(seconds)` | Set seconds |
| | setMilliseconds | `date.setMilliseconds(ms)` | Set milliseconds |
| | setUTCFullYear | `date.setUTCFullYear(year)` | Set UTC year |
| | setUTCMonth | `date.setUTCMonth(month)` | Set UTC month |
| | setUTCDate | `date.setUTCDate(day)` | Set UTC date |
| | setUTCHours | `date.setUTCHours(hours)` | Set UTC hours |
| | setUTCMinutes | `date.setUTCMinutes(minutes)` | Set UTC minutes |
| | setUTCSeconds | `date.setUTCSeconds(seconds)` | Set UTC seconds |
| | setUTCMilliseconds | `date.setUTCMilliseconds(ms)` | Set UTC milliseconds |
| | toDateString | `date.toDateString()` | Date string |
| | toTimeString | `date.toTimeString()` | Time string |
| | toISOString | `date.toISOString()` | ISO 8601 string |
| | toJSON | `date.toJSON()` | JSON representation |
| | toLocaleDateString | `date.toLocaleDateString()` | Locale date string |
| | toLocaleTimeString | `date.toLocaleTimeString()` | Locale time string |
| | toLocaleString | `date.toLocaleString()` | Locale string |
| | toString | `date.toString()` | String representation |
| | toUTCString | `date.toUTCString()` | UTC string |
| | valueOf | `date.valueOf()` | Primitive value |
| **Number Methods** | toExponential | `num.toExponential(digits)` | Exponential notation |
| | toFixed | `num.toFixed(digits)` | Fixed-point notation |
| | toPrecision | `num.toPrecision(digits)` | Precision notation |
| | toString | `num.toString(radix)` | String representation |
| | valueOf | `num.valueOf()` | Primitive value |
| | toLocaleString | `num.toLocaleString()` | Locale string |
| **BigInt Methods** | toString | `bigint.toString(radix)` | String representation |
| | toLocaleString | `bigint.toLocaleString()` | Locale string |
| | valueOf | `bigint.valueOf()` | Primitive value |
| **Boolean Methods** | toString | `bool.toString()` | String representation |
| | valueOf | `bool.valueOf()` | Primitive value |
| **Symbol Methods** | toString | `symbol.toString()` | String representation |
| | valueOf | `symbol.valueOf()` | Primitive value |
| | description | `symbol.description` | Symbol description |
| **RegExp Properties** | source | `regex.source` | Pattern source |
| | flags | `regex.flags` | Flags string |
| | global | `regex.global` | Global flag |
| | ignoreCase | `regex.ignoreCase` | IgnoreCase flag |
| | multiline | `regex.multiline` | Multiline flag |
| | dotAll | `regex.dotAll` | DotAll flag |
| | unicode | `regex.unicode` | Unicode flag |
| | sticky | `regex.sticky` | Sticky flag |
| | hasIndices | `regex.hasIndices` | Indices flag |
| | lastIndex | `regex.lastIndex` | Last match index |
| **Promise Methods** | Promise.withResolvers | `Promise.withResolvers()` | Get promise with resolve/reject |
| | Promise.try | `Promise.try(fn)` | Try function as promise (proposal) |
| **Error Properties** | message | `error.message` | Error message |
| | name | `error.name` | Error name |
| | stack | `error.stack` | Stack trace |
| | cause | `error.cause` | Error cause |
| **TypedArray Methods** | set | `typedArray.set(array, offset)` | Set values |
| | subarray | `typedArray.subarray(begin, end)` | Create subarray |
| | buffer | `typedArray.buffer` | Underlying buffer |
| | byteLength | `typedArray.byteLength` | Byte length |
| | byteOffset | `typedArray.byteOffset` | Byte offset |
| | length | `typedArray.length` | Element count |
| | BYTES_PER_ELEMENT | `TypedArray.BYTES_PER_ELEMENT` | Bytes per element |
| **Object toString** | toString | `obj.toString()` | String representation |
| | valueOf | `obj.valueOf()` | Primitive value |
| | toLocaleString | `obj.toLocaleString()` | Locale string |
| | isPrototypeOf | `obj.isPrototypeOf(other)` | Check prototype |
| | propertyIsEnumerable | `obj.propertyIsEnumerable(prop)` | Check enumerable |
| **Function toString** | toString | `func.toString()` | Function source code |
| **Array Length** | length | `arr.length` | Array length property |
| **String Length** | length | `str.length` | String length property |
| **Async Iteration Protocol** | [Symbol.asyncIterator] | `obj[Symbol.asyncIterator]()` | Async iterator method |
| **Iterator Protocol** | [Symbol.iterator] | `obj[Symbol.iterator]()` | Iterator method |
| | next | `iterator.next()` | Get next value |
| | return | `iterator.return(value)` | Close iterator |
| | throw | `iterator.throw(error)` | Throw into iterator |
| **Generator Protocol** | next | `generator.next(value)` | Send value |
| | return | `generator.return(value)` | Return from generator |
| | throw | `generator.throw(error)` | Throw into generator |
| **Async Generator Protocol** | next | `asyncGenerator.next(value)` | Send value |
| | return | `asyncGenerator.return(value)` | Return from generator |
| | throw | `asyncGenerator.throw(error)` | Throw into generator |
| **Module Namespace** | Module namespace object | `import * as ns` creates namespace | Module namespace |
| **Well-Known Symbols (Complete)** | Symbol.matchAll | `Symbol.matchAll` | Match all method |
| | Symbol.dispose | `Symbol.dispose` | Dispose method (proposal) |
| | Symbol.asyncDispose | `Symbol.asyncDispose` | Async dispose (proposal) |
| **Using Declaration (Proposal)** | using | `using resource = getResource()` | Explicit resource management |
| | await using | `await using resource = getResource()` | Async resource management |
| **Clamp (Proposal)** | Number.clamp | `Number.clamp(value, min, max)` | Clamp number (proposal) |
| | Math.clamp | `Math.clamp(value, min, max)` | Clamp number (proposal) |
| **Uint8Array to/from Base64 & Hex** | Uint8Array.fromBase64 | `Uint8Array.fromBase64(str)` | From base64 (proposal) |
| | Uint8Array.fromHex | `Uint8Array.fromHex(str)` | From hex (proposal) |
| | toBase64 | `uint8Array.toBase64()` | To base64 (proposal) |
| | toHex | `uint8Array.toHex()` | To hex (proposal) |
| **Array Grouping** | Object.groupBy | `Object.groupBy(array, fn)` | Group to object |
| | Map.groupBy | `Map.groupBy(array, fn)` | Group to map |
| **JSON Parse Source Text** | JSON.parse source | `JSON.parse(text, reviver)` with source access | Parse with source (proposal) |
| **JSON.rawJSON** | JSON.rawJSON | `JSON.rawJSON(str)` | Raw JSON value (proposal) |
| | JSON.isRawJSON | `JSON.isRawJSON(value)` | Check raw JSON (proposal) |
| **ArrayBuffer Transfer** | transfer | `arrayBuffer.transfer(newByteLength)` | Transfer ownership |
| | transferToFixedLength | `arrayBuffer.transferToFixedLength(newByteLength)` | Transfer to fixed |
| | detached | `arrayBuffer.detached` | Check if detached |
| | maxByteLength | `arrayBuffer.maxByteLength` | Max byte length |
| | resizable | `arrayBuffer.resizable` | Check if resizable |
| | resize | `arrayBuffer.resize(newByteLength)` | Resize buffer |
| **Temporal (Proposal)** | Temporal.Now | `Temporal.Now.instant()` | Current time (proposal) |
| | Temporal.Instant | `new Temporal.Instant()` | Instant in time (proposal) |
| | Temporal.PlainDate | `new Temporal.PlainDate()` | Plain date (proposal) |
| | Temporal.PlainTime | `new Temporal.PlainTime()` | Plain time (proposal) |
| | Temporal.PlainDateTime | `new Temporal.PlainDateTime()` | Plain datetime (proposal) |
| | Temporal.ZonedDateTime | `new Temporal.ZonedDateTime()` | Zoned datetime (proposal) |
| | Temporal.Duration | `new Temporal.Duration()` | Duration (proposal) |
| **Explicit Constructor Names** | Named class expression | `const C = class ClassName {}` | Named class expression |
| **Accessor Keyword** | accessor | `class C { accessor prop = value; }` | Auto-accessor field |
| **Import Reflection (Proposal)** | import.meta.resolve | `import.meta.resolve(specifier)` | Resolve module specifier |
| **Import Defer (Proposal)** | import defer | `import defer * as ns from 'mod'` | Deferred import (proposal) |
| **Immediate Coercion** | Boolean() | `Boolean(value)` | Convert to boolean |
| | String() | `String(value)` | Convert to string |
| | Number() | `Number(value)` | Convert to number |
| **Regex Named Capture Groups** | Named groups | `/(?<name>pattern)/` | Named capture groups |
| | Groups object | `match.groups.name` | Access named groups |
| **Regex Lookbehind** | Positive lookbehind | `/(?<=pattern)/` | Positive lookbehind |
| | Negative lookbehind | `/(?<!pattern)/` | Negative lookbehind |
| **Regex Lookahead** | Positive lookahead | `/(?=pattern)/` | Positive lookahead |
| | Negative lookahead | `/(?!pattern)/` | Negative lookahead |
| **Regex Unicode Property Escapes** | Unicode property | `/\p{Property}/u` | Unicode property escape |
| | Negated property | `/\P{Property}/u` | Negated property |
| **Regex Backreferences** | Backreference | `/(\w+) \1/` | Backreference |
| | Named backreference | `/(?<name>\w+) \k<name>/` | Named backreference |
| **Regex Quantifiers** | Greedy | `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}` | Greedy quantifiers |
| | Lazy | `*?`, `+?`, `??`, `{n}?`, `{n,}?`, `{n,m}?` | Lazy quantifiers |
| **Regex Character Classes** | Digit | `\d`, `\D` | Digit character class |
| | Word | `\w`, `\W` | Word character class |
| | Whitespace | `\s`, `\S` | Whitespace character class |
| | Character class | `[abc]`, `[^abc]` | Custom character class |
| | Range | `[a-z]`, `[0-9]` | Character range |
| **Regex Anchors** | Start | `^` | Start of string |
| | End | `$` | End of string |
| | Word boundary | `\b`, `\B` | Word boundary |
| **Regex Alternation** | Alternation | `a\|b` | Alternative patterns |
| **Regex Special Characters** | Dot | `.` | Any character |
| | Escape | `\\` | Escape character |
| **Const Assertions** | as const | Type-level only (TypeScript) | Not JavaScript syntax |
| **Satisfies Operator** | satisfies | Type-level only (TypeScript) | Not JavaScript syntax |
| **Regex Groups** | Capturing group | `(pattern)` | Capture matched text |
| | Non-capturing group | `(?:pattern)` | Group without capture |
| **Array Prototype Methods** | Array.prototype.toString | `arr.toString()` | Array to string |
| | Array.prototype.toLocaleString | `arr.toLocaleString()` | Locale array string |
| **String Prototype Methods** | String.prototype.valueOf | `str.valueOf()` | Primitive value |
| **Uint8ClampedArray** | Uint8ClampedArray | `new Uint8ClampedArray()` | Clamped 8-bit array |
| **Prototype Property** | prototype | `Constructor.prototype` | Function prototype |
| **Constructor Property** | constructor | `obj.constructor` | Object constructor |
| **Length Property** | Function length | `func.length` | Function arity |
| **Name Property** | Function name | `func.name` | Function identifier |
| **Object Constructor** | Object() | `new Object()`, `Object()` | Create object |
| **Array Constructor** | Array() | `new Array()`, `Array(length)` | Create array |
| **Function Constructor** | Function() | `new Function(args, body)` | Create function |
| **RegExp Constructor Methods** | RegExp.prototype.compile | Deprecated | Compile regex (deprecated) |
| **String Constructor** | String() constructor | `new String(value)` | String object wrapper |
| **Number Constructor** | Number() constructor | `new Number(value)` | Number object wrapper |
| **Boolean Constructor** | Boolean() constructor | `new Boolean(value)` | Boolean object wrapper |
| **Symbol Constructor** | Symbol() | `Symbol(description)` | Create symbol (not constructor) |
| **BigInt Constructor** | BigInt() | `BigInt(value)` | Create BigInt (not constructor) |
| **Primitive Wrappers** | Boxed primitives | `new String()`, `new Number()`, `new Boolean()` | Wrapper objects |
| **Automatic Boxing** | Auto-boxing | `"str".method()` | Automatic wrapper creation |
| **Unboxing** | valueOf | `boxed.valueOf()` | Extract primitive |
| **Hoisting** | Variable hoisting | `var` declarations hoisted | Variable hoisting |
| | Function hoisting | Function declarations hoisted | Function hoisting |
| | Temporal Dead Zone | `let`/`const` before declaration | TDZ for let/const |
| **Scope** | Global scope | Variables in global context | Global scope |
| | Function scope | Variables in function | Function scope |
| | Block scope | Variables in block | Block scope |
| | Module scope | Variables in module | Module scope |
| | Lexical scope | Closure scope | Lexical scope |
| **Closure** | Closure | Function + lexical environment | Closure concept |
| **This Binding** | Default binding | `this` in non-strict | Default this |
| | Implicit binding | `obj.method()` | Implicit this |
| | Explicit binding | `call`, `apply`, `bind` | Explicit this |
| | new binding | `new Constructor()` | new this |
| | Arrow function binding | Arrow functions inherit this | Lexical this |
| **Execution Context** | Global context | Global execution context | Global context |
| | Function context | Function execution context | Function context |
| | Eval context | Eval execution context | Eval context |
| **Call Stack** | Call stack | Function execution stack | Call stack |
| **Event Loop** | Event loop | Async execution model | Event loop |
| **Microtasks** | Microtask queue | Promise/queueMicrotask | Microtask queue |
| **Macrotasks** | Macrotask queue | setTimeout/setInterval | Macrotask queue |
| **queueMicrotask** | queueMicrotask | `queueMicrotask(callback)` | Queue microtask |
| **setImmediate** | setImmediate | `setImmediate(callback)` | Immediate execution (Node.js) |
| **clearImmediate** | clearImmediate | `clearImmediate(id)` | Clear immediate (Node.js) |
| **process.nextTick** | process.nextTick | `process.nextTick(callback)` | Next tick (Node.js) |
| **requestAnimationFrame** | requestAnimationFrame | `requestAnimationFrame(callback)` | Animation frame (browser) |
| **cancelAnimationFrame** | cancelAnimationFrame | `cancelAnimationFrame(id)` | Cancel animation frame |
| **requestIdleCallback** | requestIdleCallback | `requestIdleCallback(callback)` | Idle callback (browser) |
| **cancelIdleCallback** | cancelIdleCallback | `cancelIdleCallback(id)` | Cancel idle callback |
| **Destructuring Default** | Destructuring with default | `{a = 1, b = 2} = obj` | Combined default |
| **Computed Destructuring** | Computed property destructuring | `{[key]: value} = obj` | Dynamic key destructuring |
| **Rest After Destructuring** | Rest in destructuring | `{a, ...rest} = obj` | Rest properties |
| **Array Destructuring Swap** | Swap variables | `[a, b] = [b, a]` | Swap using destructuring |
| **Nested Rest** | Nested rest | `{a: {b, ...rest}} = obj` | Nested rest pattern |
| **Function Name Inference** | Name inference | `const fn = function() {}` | Function name inferred |
| **Arrow Function Implicit Return** | Implicit return | `x => x * 2` | No return needed |
| **Arrow Function Object Return** | Object return | `() => ({a: 1})` | Parentheses for object |
| **Async Arrow Implicit Return** | Async implicit return | `async () => value` | Async implicit return |
| **IIFE Variations** | IIFE with arrow | `(() => {})()` | Arrow IIFE |
| | IIFE unary | `!function(){}()`, `+function(){}()` | Unary IIFE |
| | IIFE void | `void function(){}()` | Void IIFE |
| **Unary Operators Collection** | Unary operators | `+`, `-`, `!`, `~`, `typeof`, `void`, `delete` | All unary operators |
| **Binary Operators** | Binary operators | `+`, `-`, `*`, `/`, `%`, `**`, `==`, `===`, etc. | Binary operators |
| **Assignment Operators Collection** | All assignments | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`, etc. | All assignment ops |
| **Comparison Operators Collection** | All comparisons | `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=` | All comparison ops |
| **Logical Operators Collection** | All logical | `&&`, `\|\|`, `!`, `??` | All logical operators |
| **Member Access Variations** | Bracket with string | `obj['prop']` | String key access |
| | Bracket with number | `arr[0]` | Index access |
| | Bracket with expression | `obj[expr]` | Dynamic access |
| | Bracket with symbol | `obj[symbol]` | Symbol key access |
| **Shorthand Operators** | Increment prefix | `++x` | Pre-increment |
| | Increment postfix | `x++` | Post-increment |
| | Decrement prefix | `--x` | Pre-decrement |
| | Decrement postfix | `x--` | Post-decrement |
| **Nullish vs OR** | Nullish coalescing | `a ?? b` | Only null/undefined |
| | Logical OR | `a \|\| b` | All falsy values |
| **Short-Circuit Evaluation** | AND short-circuit | `a && b` | Returns first falsy |
| | OR short-circuit | `a \|\| b` | Returns first truthy |
| | Nullish short-circuit | `a ?? b` | Returns first non-nullish |
| **Chaining Variations** | Optional call | `func?.()` | Optional function call |
| | Optional bracket | `obj?.[key]` | Optional bracket access |
| | Optional member | `obj?.prop` | Optional dot access |
| **Spread in Function Calls** | Spread arguments | `func(...args)` | Spread as arguments |
| **Spread in Arrays** | Spread in array | `[...arr1, ...arr2]` | Combine arrays |
| **Spread in Objects** | Spread in object | `{...obj1, ...obj2}` | Merge objects |
| **Rest in Parameters** | Rest params | `function(...args) {}` | Collect params |
| **Rest in Destructuring Arrays** | Rest in array | `[a, ...rest] = arr` | Collect remaining |
| **Rest in Destructuring Objects** | Rest in object | `{a, ...rest} = obj` | Collect remaining props |
| **Mixed Destructuring** | Mixed pattern | `{a, b: [c, d]} = obj` | Object + array |
| **Destructuring in Loops** | for...of destructuring | `for (const [k, v] of map) {}` | Loop destructuring |
| **Parameter Destructuring with Default** | Param destructure + default | `function({a = 1} = {}) {}` | Combined pattern |
| **Empty Destructuring** | Empty pattern | `({} = obj)`, `([] = arr)` | No binding |
| **Switch Fall-Through** | Fall-through | `case x: case y:` | Multiple case labels |
| **Switch Block Scope** | Case block | `case x: { let y; }` | Block in case |
| **Labeled Break** | Labeled break | `label: for(...) { break label; }` | Break to label |
| **Labeled Continue** | Labeled continue | `label: for(...) { continue label; }` | Continue to label |
| **Nested Labels** | Nested labels | Multiple labeled statements | Nested labels |
| **Empty Array Slots** | Sparse array | `[1, , , 4]` | Holes in array |
| **Array Length Assignment** | Length assignment | `arr.length = 5` | Truncate/extend array |
| **Array-Like Objects** | Array-like | `{0: 'a', 1: 'b', length: 2}` | Array-like structure |
| **Arguments to Array** | Convert arguments | `Array.from(arguments)`, `[...arguments]` | Arguments to array |
| **NodeList to Array** | Convert NodeList | `Array.from(nodeList)` | NodeList to array |
| **String to Array** | String to array | `[...'hello']`, `Array.from('hello')` | String to char array |
| **Set to Array** | Set to array | `[...set]`, `Array.from(set)` | Set to array |
| **Map to Array** | Map to array | `[...map]`, `Array.from(map)` | Map to array |
| **Object to Entries** | Object to entries | `Object.entries(obj)` | Get [key, value] pairs |
| **Entries to Object** | Entries to object | `Object.fromEntries(entries)` | Create from entries |
| **Entries to Map** | Entries to Map | `new Map(entries)` | Create map from entries |
| **Array to Set** | Array to Set | `new Set(array)` | Remove duplicates |
| **Unique Array Values** | Unique values | `[...new Set(array)]` | Deduplicate array |
| **Flatten Nested Arrays** | Flat | `arr.flat(Infinity)` | Fully flatten |
| **Matrix Operations** | Flat depth | `arr.flat(1)` | Flatten one level |
| **Function Default Param Expressions** | Expression default | `function(a = b + c) {}` | Complex defaults |
| **Function Default Param Functions** | Function default | `function(a = () => {}) {}` | Function as default |
| **Function Default Previous Params** | Reference previous | `function(a, b = a) {}` | Use earlier params |
| **Conditional Function Call** | Optional call chain | `func?.()` | Call if exists |
| **Object Method Shorthand** | Method shorthand | `{method() {}}` | Concise method |
| **Async Object Method** | Async shorthand | `{async method() {}}` | Async method |
| **Generator Object Method** | Generator shorthand | `{*method() {}}` | Generator method |
| **Async Generator Object Method** | Async generator shorthand | `{async *method() {}}` | Async generator method |
| **Computed Property with Template** | Computed with template | `{[\`key_\${x}\`]: value}` | Template in computed |
| **Symbol as Property Key** | Symbol key | `{[Symbol()]: value}` | Symbol property |
| **Private Field Access** | Private access | `this.#field` | Access private field |
| **Private Method Call** | Private method | `this.#method()` | Call private method |
| **Private Static Access** | Private static | `ClassName.#staticField` | Access private static |
| **Class Static Block Init** | Static init | `static { this.x = 1; }` | Static initialization |
| **Class Heritage** | Class extends | `class C extends B {}` | Inheritance |
| **Class Mixin Pattern** | Mixin | Function returning class | Mixin pattern |
| **Abstract Method Pattern** | Abstract method | Throw in base method | Abstract pattern |
| **Interface Pattern** | Interface | Duck typing | Interface pattern |
| **Factory Function** | Factory | Function returning object | Factory pattern |
| **Constructor Function** | Constructor | `function C() { this.x = 1; }` | Constructor function |
| **Prototype Methods** | Add prototype method | `C.prototype.method = function() {}` | Prototype method |
| **Prototype Chain** | Chain lookup | Object prototype chain | Prototype inheritance |
| **instanceof Check** | instanceof | `obj instanceof Class` | Type check |
| **typeof Checks** | typeof checks | All typeof results | typeof returns |
| **Array.isArray Check** | Array check | `Array.isArray(value)` | Array detection |
| **null Check** | null check | `value === null` | Null detection |
| **undefined Check** | undefined check | `value === undefined` | Undefined detection |
| **NaN Check** | NaN check | `Number.isNaN(value)` | NaN detection |
| **Infinity Check** | Infinity check | `value === Infinity` | Infinity detection |
| **Truthy/Falsy** | Falsy values | `false`, `0`, `''`, `null`, `undefined`, `NaN` | Falsy values |
| | Truthy values | Everything else | Truthy values |
| **Type Coercion Rules** | String coercion | `String(value)`, `'' + value` | To string |
| | Number coercion | `Number(value)`, `+value` | To number |
| | Boolean coercion | `Boolean(value)`, `!!value` | To boolean |
| **Double Negation** | Boolean cast | `!!value` | Cast to boolean |
| **Unary Plus** | Number cast | `+value` | Cast to number |
| **Template Literal Coercion** | Template coercion | `` `${value}` `` | Coerce to string |
| **Bitwise Coercion** | Bitwise to int | `value \| 0`, `~~value` | Coerce to 32-bit int |
| **parseInt vs Number** | parseInt | Parses until non-digit | parseInt behavior |
| | Number | Strict conversion | Number behavior |
| **Array indexOf vs includes** | indexOf | Returns index or -1 | indexOf behavior |
| | includes | Returns boolean | includes behavior |
| **Array find vs filter** | find | Returns first match | find behavior |
| | filter | Returns all matches | filter behavior |
| **for vs forEach** | for loop | Can break/continue | for control flow |
| | forEach | Cannot break | forEach behavior |
| **map vs forEach** | map | Returns new array | map returns array |
| | forEach | Returns undefined | forEach no return |
| **reduce Accumulator** | reduce | `(acc, val) => acc + val` | Accumulator pattern |
| **reduce Initial Value** | reduce initial | `reduce(fn, initial)` | Initial value |
| **reduce Without Initial** | reduce no initial | Uses first element | No initial value |
| **Object Property Order** | Property order | Integer keys, then insertion order | Property order |
| **JSON Methods Options** | JSON.stringify replacer | `JSON.stringify(obj, replacer)` | Custom replacer |
| | JSON.stringify space | `JSON.stringify(obj, null, 2)` | Pretty print |
| | JSON.parse reviver | `JSON.parse(str, reviver)` | Custom reviver |
| **JSON Limitations** | JSON cannot serialize | Functions, undefined, symbols, cycles | JSON limits |
| **Circular References** | Circular refs | Object references itself | Circular structures |
| **Object Property Attributes** | writable | Can modify value | Writable attribute |
| | enumerable | Shows in for...in | Enumerable attribute |
| | configurable | Can delete/modify | Configurable attribute |
| **Accessor Properties** | get/set | Property with getter/setter | Accessor descriptors |
| **Data Properties** | value/writable | Property with value | Data descriptors |
| **Seal vs Freeze** | seal | No add/delete, can modify | Seal behavior |
| | freeze | No add/delete/modify | Freeze behavior |
| **preventExtensions** | preventExtensions | No new properties | Prevent extensions |
| **Extension Checks** | isExtensible | Check if extensible | Check extensible |
| | isSealed | Check if sealed | Check sealed |
| | isFrozen | Check if frozen | Check frozen |
| **Promise States** | pending | Not yet settled | Pending state |
| | fulfilled | Resolved successfully | Fulfilled state |
| | rejected | Rejected with error | Rejected state |
| **Promise Chaining** | then chaining | `promise.then().then()` | Chain promises |
| **Promise Error Propagation** | catch propagation | Error bubbles down chain | Error handling |
| **Promise finally** | finally | Runs regardless of outcome | Always execute |
| **Promise.all Behavior** | all | Waits for all, rejects on first error | All behavior |
| **Promise.race Behavior** | race | Returns first settled | Race behavior |
| **Promise.allSettled Behavior** | allSettled | Waits for all, never rejects | AllSettled behavior |
| **Promise.any Behavior** | any | First fulfilled, rejects if all reject | Any behavior |
| **Async/Await Error Handling** | try/catch with await | `try { await promise } catch (e) {}` | Async error handling |
| **Async Function Return** | async returns promise | Always returns promise | Async return value |
| **Await Non-Promise** | await value | Wraps in resolved promise | Await any value |
| **Generator Return Value** | return in generator | `return value` in generator | Generator return |
| **Generator next with value** | next value | `generator.next(value)` | Send value to generator |
| **Generator throw** | throw into generator | `generator.throw(error)` | Throw error in generator |
| **Generator return** | return from generator | `generator.return(value)` | Early return |
| **yield* Delegation** | yield* | Delegates to another generator | Generator delegation |
| **Async Generator** | async generator | `async function*` | Async iteration |
| **for await...of** | async iteration | `for await (const x of async) {}` | Async loop |
| **Symbol.iterator Implementation** | Custom iterator | `[Symbol.iterator]() { return {next() {}} }` | Custom iterable |
| **Symbol.asyncIterator Implementation** | Custom async iterator | `[Symbol.asyncIterator]() {}` | Custom async iterable |
| **Iteration Protocol** | Iterator protocol | `{next, return, throw}` | Iterator interface |
| **Iterable Protocol** | Iterable protocol | `{[Symbol.iterator]}` | Iterable interface |
| **Module Exports Default** | export default | `export default value` | Default export |
| **Module Exports Named** | export named | `export {a, b}` | Named exports |
| **Module Import Default** | import default | `import x from 'mod'` | Import default |
| **Module Import Named** | import named | `import {x, y} from 'mod'` | Import named |
| **Module Import All** | import all | `import * as ns from 'mod'` | Namespace import |
| **Module Dynamic Import** | dynamic import | `import('mod').then()` | Async import |
| **Module Side Effects** | side effect import | `import 'mod'` | Import for effects |
| **Module Re-export** | re-export | `export {x} from 'mod'` | Re-export |
| **Module Default Re-export** | re-export default | `export {default} from 'mod'` | Re-export default |
| **Module Aggregation** | aggregate | `export * from 'mod'` | Re-export all |
| **import.meta** | import.meta | `import.meta.url` | Module metadata |
| **import.meta.url** | module URL | `import.meta.url` | Module URL |
| **Proxy Revocable** | Proxy.revocable | `Proxy.revocable(target, handler)` | Revocable proxy |
| **Proxy as Function** | Callable proxy | Proxy with apply trap | Function proxy |
| **Proxy as Constructor** | Constructable proxy | Proxy with construct trap | Constructor proxy |
| **Reflect Complete Set** | Reflect methods | All 14 Reflect methods | Reflect API |
| **console Methods Extended** | console.dir | `console.dir(obj)` | Display object |
| | console.dirxml | `console.dirxml(node)` | Display XML/HTML |
| | console.count | `console.count(label)` | Count calls |
| | console.countReset | `console.countReset(label)` | Reset counter |
| | console.groupCollapsed | `console.groupCollapsed()` | Collapsed group |
| | console.profile | `console.profile()` | Start profiler |
| | console.profileEnd | `console.profileEnd()` | End profiler |
| | console.timeLog | `console.timeLog(label)` | Log timer |
| | console.timeStamp | `console.timeStamp(label)` | Add timestamp |
| **Error Stack Trace** | Error.captureStackTrace | `Error.captureStackTrace(obj)` | Capture stack (V8) |
| **Error.stackTraceLimit** | stackTraceLimit | `Error.stackTraceLimit = n` | Stack limit (V8) |
| **Error Options** | Error with cause | `new Error(msg, {cause})` | Error options |
| **Async Stack Traces** | Async stack | Stack traces through async | Async debugging |
| **Source Maps** | Source maps | Map transpiled to original | Source mapping |
| **Strict Mode Differences** | Strict mode changes | Various behavior changes | Strict mode effects |
| **Strict Mode this** | this in strict | `undefined` in functions | Strict this |
| **Strict Mode Arguments** | arguments in strict | Not linked to params | Strict arguments |
| **Strict Mode Eval** | eval in strict | Doesn't create variables | Strict eval |
| **Strict Mode Octal** | octal in strict | Not allowed | Strict octal |
| **Strict Mode with** | with in strict | Syntax error | Strict with |
| **Strict Mode Delete** | delete in strict | Error on unqualified | Strict delete |
| **Strict Mode Duplicates** | duplicate params | Syntax error | Strict duplicates |
| **Module Automatic Strict** | module strict mode | Modules always strict | Module strict |
