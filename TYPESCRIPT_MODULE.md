# TypeScript Module Systems Reference

An exhaustive list of every `"module"` option available in TypeScript's `tsconfig.json` compiler options.

## Complete List of Module Systems

### 1. `"none"`

**Introduced:** TypeScript 1.0  
**Status:** ✅ Stable  
**Description:** No module system. All code is in the global scope.

```json
{
  "compilerOptions": {
    "module": "none"
  }
}
```

**Generated Code:**

```javascript
// Input
const greeting = "Hello";
function sayHello() {
  return greeting;
}

// Output (no wrapping, global scope)
const greeting = "Hello";
function sayHello() {
  return greeting;
}
```

**Use Cases:**

- Legacy scripts without modules
- Simple browser scripts loaded via `<script>` tags
- Code that doesn't use imports/exports

---

### 2. `"CommonJS"` (or `"commonjs"`)

**Introduced:** TypeScript 1.0  
**Status:** ✅ Stable  
**Description:** Node.js standard module system using `require()` and `module.exports`.

```json
{
  "compilerOptions": {
    "module": "CommonJS"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Output
("use strict");
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
exports.router = (0, express_1.Router)();
```

**Use Cases:**

- ✅ **Node.js backend applications** (most common)
- Server-side TypeScript projects
- Projects using ts-node without ESM complications
- Maximum compatibility with npm ecosystem

**Pros:**

- Universal Node.js support (all versions)
- Simpler configuration
- No file extension issues
- Synchronous module loading
- Best tooling support

**Cons:**

- No tree-shaking optimization
- Not natively supported in browsers
- Considered "legacy" by some

---

### 3. `"AMD"` (Asynchronous Module Definition)

**Introduced:** TypeScript 1.0  
**Status:** ✅ Stable (but rarely used)  
**Description:** Browser-based module system designed for RequireJS.

```json
{
  "compilerOptions": {
    "module": "AMD"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Output
define(["require", "exports", "express"], function (
  require,
  exports,
  express_1
) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.router = void 0;
  exports.router = (0, express_1.Router)();
});
```

**Use Cases:**

- Legacy browser projects using RequireJS
- Older single-page applications (pre-2015)
- Dynamic module loading in browsers (before ESM)

**Pros:**

- Asynchronous loading in browsers
- Dynamic dependency resolution
- Once popular in browser development

**Cons:**

- Requires RequireJS library
- Largely obsolete (replaced by ES modules)
- Adds wrapper overhead
- Complex debugging

---

### 4. `"UMD"` (Universal Module Definition)

**Introduced:** TypeScript 1.0  
**Status:** ✅ Stable  
**Description:** Hybrid system supporting CommonJS, AMD, and global variables.

```json
{
  "compilerOptions": {
    "module": "UMD"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Output
(function (factory) {
  if (typeof module === "object" && typeof module.exports === "object") {
    var v = factory(require, exports);
    if (v !== undefined) module.exports = v;
  } else if (typeof define === "function" && define.amd) {
    define(["require", "exports", "express"], factory);
  }
})(function (require, exports) {
  "use strict";
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.router = void 0;
  const express_1 = require("express");
  exports.router = (0, express_1.Router)();
});
```

**Use Cases:**

- **Library authors** publishing to npm
- Packages that need to work everywhere
- Code shared between Node.js and browsers

**Pros:**

- Works in any environment
- Single build for all platforms
- Maximum compatibility

**Cons:**

- Larger output files (detection code)
- More complex generated code
- Harder to debug
- Overkill for application code

---

### 5. `"System"` (SystemJS)

**Introduced:** TypeScript 1.5  
**Status:** ✅ Stable (niche use)  
**Description:** Module format for SystemJS loader.

```json
{
  "compilerOptions": {
    "module": "System"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Output
System.register(["express"], function (exports_1, context_1) {
  "use strict";
  var express_1, router;
  var __moduleName = context_1 && context_1.id;
  return {
    setters: [
      function (express_1_1) {
        express_1 = express_1_1;
      },
    ],
    execute: function () {
      exports_1("router", (router = (0, express_1.Router)()));
    },
  };
});
```

**Use Cases:**

- Angular 2+ projects (historically)
- SystemJS-based applications
- Dynamic module loading with SystemJS

**Pros:**

- Dynamic module loading
- Works with SystemJS loader

**Cons:**

- Requires SystemJS library
- Very niche use case today
- Complex output
- Limited ecosystem

---

### 6. `"ES6"` or `"ES2015"` (ECMAScript 2015 Modules)

**Introduced:** TypeScript 1.5  
**Status:** ✅ Stable  
**Description:** Standard JavaScript modules introduced in ES2015.

```json
{
  "compilerOptions": {
    "module": "ES2015"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Output (nearly identical)
import { Router } from "express";
export const router = Router();
```

**Use Cases:**

- Modern browser applications
- Projects using bundlers (webpack, rollup, vite)
- Frontend frameworks (React, Vue, Angular)

**Pros:**

- Standard JavaScript syntax
- Tree-shaking support
- Native browser support
- Clean, readable output

**Cons:**

- Requires `"type": "module"` in package.json for Node.js
- Must include `.js` extensions in imports (Node.js ESM)
- More complex ts-node setup
- Some npm packages not ESM-ready

---

### 7. `"ES2020"`

**Introduced:** TypeScript 3.8  
**Status:** ✅ Stable  
**Description:** ES2015 modules + ES2020 features (dynamic import, import.meta).

```json
{
  "compilerOptions": {
    "module": "ES2020"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Dynamic import
const module = await import("./dynamic.js");

// Output (preserved)
import { Router } from "express";
export const router = Router();
const module = await import("./dynamic.js");
```

**New Features Over ES2015:**

- `import()` - Dynamic imports
- `import.meta` - Module metadata
- `export * as ns from` - Namespace re-exports

**Use Cases:**

- Modern Node.js projects (v14+)
- Projects needing dynamic imports
- Applications using import.meta.url

---

### 8. `"ES2022"`

**Introduced:** TypeScript 4.5  
**Status:** ✅ Stable  
**Description:** ES2020 modules + ES2022 features (top-level await).

```json
{
  "compilerOptions": {
    "module": "ES2022"
  }
}
```

**Generated Code:**

```javascript
// Input
import { Router } from "express";
export const router = Router();

// Top-level await
const config = await loadConfig();

// Output (preserved)
import { Router } from "express";
export const router = Router();
const config = await loadConfig();
```

**New Features Over ES2020:**

- Top-level `await` - No need to wrap in async function
- Private fields (`#privateField`)
- Static initialization blocks

**Use Cases:**

- Latest Node.js LTS (v18+)
- Modern web applications
- Projects using top-level await

---

### 9. `"ES2023"`

**Introduced:** TypeScript 5.0 (March 2023)  
**Status:** ✅ Stable  
**Description:** ES2022 modules + ES2023 features.

```json
{
  "compilerOptions": {
    "module": "ES2023"
  }
}
```

**New Features Over ES2022:**

- Array methods: `findLast()`, `findLastIndex()`, `toReversed()`, `toSorted()`, `toSpliced()`, `with()`
- Hashbang grammar (`#!/usr/bin/env node`)
- Symbols as WeakMap keys

**Use Cases:**

- Node.js 20+
- Latest browsers
- Projects needing newest array methods

---

### 10. `"ESNext"`

**Introduced:** TypeScript 2.0  
**Status:** ⚠️ Experimental/Unstable  
**Description:** Latest proposed ECMAScript features (changes with each TypeScript release).

```json
{
  "compilerOptions": {
    "module": "ESNext"
  }
}
```

**Generated Code:**
Uses the absolute latest module and language features available in TypeScript, which may include proposals not yet standardized.

**Use Cases:**

- Cutting-edge experimental projects
- Testing new features before standardization
- Early adopters willing to update frequently

**Pros:**

- Access to latest features immediately
- Enables experimental syntax

**Cons:**

- ⚠️ **Breaking changes** between TypeScript versions
- May include unstable proposals
- Not recommended for production
- Features may change or be removed

---

### 11. `"Node16"`

**Introduced:** TypeScript 4.7 (May 2022)  
**Status:** ✅ Stable  
**Description:** Node.js 16+ hybrid module resolution (respects package.json `"type"`).

```json
{
  "compilerOptions": {
    "module": "Node16"
  }
}
```

**Behavior:**

- Respects `"type": "module"` in package.json
- `.mjs` files are ESM
- `.cjs` files are CommonJS
- `.js` files follow package.json `"type"` field
- Enforces Node.js ESM rules (requires `.js` extensions)

**Use Cases:**

- Modern Node.js projects (v16+)
- Dual-mode packages (ESM + CommonJS)
- Projects transitioning from CommonJS to ESM

**Pros:**

- Most "correct" for Node.js
- Respects Node.js module resolution
- Supports both module systems

**Cons:**

- Complex configuration
- Requires `.js` extensions in imports
- Stricter than other options
- Can be frustrating for beginners

---

### 12. `"NodeNext"`

**Introduced:** TypeScript 4.7 (May 2022)  
**Status:** ✅ Stable  
**Description:** Latest Node.js module resolution (currently identical to Node16, but will track future Node.js versions).

```json
{
  "compilerOptions": {
    "module": "NodeNext"
  }
}
```

**Behavior:**
Same as `Node16` currently, but will automatically update to match future Node.js module resolution changes in new TypeScript versions.

**Use Cases:**

- Future-proof Node.js projects
- When you want automatic updates with Node.js evolution

**Pros:**

- Future-proof (tracks Node.js changes)
- Same benefits as Node16

**Cons:**

- Same drawbacks as Node16
- May introduce breaking changes with TypeScript updates

---

## Module System Evolution Timeline

```
TypeScript 1.0 (2014)
├── none
├── CommonJS
├── AMD
└── UMD

TypeScript 1.5 (2015)
└── System

TypeScript 1.5 (2015)
└── ES6 / ES2015

TypeScript 3.2 (2018)
└── ES2015 (official name)

TypeScript 3.8 (2020)
└── ES2020

TypeScript 4.5 (2021)
└── ES2022

TypeScript 4.7 (2022)
├── Node16
└── NodeNext

TypeScript 5.0 (2023)
└── ES2023

TypeScript 2.0+ (ongoing)
└── ESNext (always latest)
```

---

## Quick Comparison Table

| Module System | Node.js Native | Browser Native | Tree-shaking | Dynamic Import | Top-level Await | Status               |
| ------------- | -------------- | -------------- | ------------ | -------------- | --------------- | -------------------- |
| `none`        | ❌             | ✅ (global)    | ❌           | ❌             | ❌              | Legacy               |
| `CommonJS`    | ✅             | ❌             | ❌           | ❌             | ❌              | **Production Ready** |
| `AMD`         | ❌             | ⚠️ (RequireJS) | ❌           | ✅             | ❌              | Obsolete             |
| `UMD`         | ✅             | ✅             | ❌           | ⚠️             | ❌              | Library Authors      |
| `System`      | ❌             | ⚠️ (SystemJS)  | ⚠️           | ✅             | ❌              | Niche                |
| `ES2015`      | ⚠️ (v12+)      | ✅             | ✅           | ❌             | ❌              | **Production Ready** |
| `ES2020`      | ⚠️ (v14+)      | ✅             | ✅           | ✅             | ❌              | **Production Ready** |
| `ES2022`      | ⚠️ (v16+)      | ✅             | ✅           | ✅             | ✅              | **Production Ready** |
| `ES2023`      | ⚠️ (v20+)      | ✅             | ✅           | ✅             | ✅              | **Production Ready** |
| `ESNext`      | ⚠️             | ⚠️             | ✅           | ✅             | ✅              | Experimental         |
| `Node16`      | ✅ (v16+)      | ❌             | ✅ (ESM)     | ✅             | ✅              | **Production Ready** |
| `NodeNext`    | ✅ (latest)    | ❌             | ✅ (ESM)     | ✅             | ✅              | **Production Ready** |

---

## Recommendations by Project Type

### Backend Node.js Application (This Project)

```json
{
  "compilerOptions": {
    "module": "CommonJS" // ✅ Simplest, most compatible
  }
}
```

**Alternative (Modern):**

```json
{
  "compilerOptions": {
    "module": "NodeNext" // For dual ESM/CJS support
  }
}
```

### Frontend Web Application

```json
{
  "compilerOptions": {
    "module": "ES2022" // ✅ Best for bundlers (webpack, vite)
  }
}
```

### npm Library (Published Package)

```json
{
  "compilerOptions": {
    "module": "ES2022", // Source uses ESM
    "declaration": true // Generate .d.ts files
  }
}
```

Build both ESM and CommonJS versions for maximum compatibility.

### Legacy Browser Support

```json
{
  "compilerOptions": {
    "module": "UMD" // ✅ Works everywhere
  }
}
```

### Cutting-Edge Experimental

```json
{
  "compilerOptions": {
    "module": "ESNext" // ⚠️ Latest features, may break
  }
}
```

---

## Common Pitfalls

### 1. ESM in Node.js Without `"type": "module"`

```json
// tsconfig.json
{ "module": "ES2022" }

// ❌ MISSING in package.json
{ "type": "module" }  // Required!
```

### 2. Missing `.js` Extensions with Node16/NodeNext

```typescript
// ❌ WRONG
import { router } from "./routes";

// ✅ CORRECT
import { router } from "./routes.js";
```

### 3. Using ESNext in Production

```json
// ❌ DON'T DO THIS
{
  "compilerOptions": {
    "module": "ESNext" // Unstable, may break on TypeScript updates
  }
}
```

### 4. Mixing Module Systems

```typescript
// ❌ DON'T MIX
import express from "express"; // ESM syntax
const router = require("./router"); // CommonJS syntax
```

---

## Version Compatibility

### Node.js Version Requirements

| Module System | Minimum Node.js | Recommended Node.js |
| ------------- | --------------- | ------------------- |
| `CommonJS`    | v0.10+          | Any version         |
| `ES2015`      | v12.0+          | v18+                |
| `ES2020`      | v14.0+          | v18+                |
| `ES2022`      | v16.0+          | v18+                |
| `ES2023`      | v18.0+          | v20+                |
| `Node16`      | v16.0+          | v18+                |
| `NodeNext`    | v16.0+          | v20+                |

### TypeScript Version Requirements

| Module System                                | Minimum TypeScript |
| -------------------------------------------- | ------------------ |
| `CommonJS`, `AMD`, `UMD`, `System`, `ES2015` | v1.0+              |
| `ES2020`                                     | v3.8+              |
| `ES2022`                                     | v4.5+              |
| `Node16`, `NodeNext`                         | v4.7+              |
| `ES2023`                                     | v5.0+              |

---

## Additional Resources

- [TypeScript Module Documentation](https://www.typescriptlang.org/docs/handbook/modules.html)
- [Node.js ESM Documentation](https://nodejs.org/api/esm.html)
- [ECMAScript Proposals](https://github.com/tc39/proposals)
- [TypeScript Compiler Options Reference](https://www.typescriptlang.org/tsconfig)

---

**Last Updated:** November 9, 2025  
**TypeScript Version:** 5.9.3  
**Node.js Version:** 18+ recommended
