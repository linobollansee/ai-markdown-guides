# Comprehensive Package.json Documentation

This document provides detailed explanations for every field and configuration in the `package.json` file.

## Table of Contents

1. [Core Package Information](#core-package-information)
2. [Module Entry Points](#module-entry-points)
3. [Dependencies](#dependencies)
4. [Scripts](#scripts)
5. [Publishing Configuration](#publishing-configuration)
6. [Environment Specifications](#environment-specifications)
7. [Tool Configurations](#tool-configurations)

---

## Core Package Information

### `name`
```json
"name": "@myorg/learn-package"
```
The package name. When prefixed with `@scope/`, it's a **scoped package**. Scoped packages can be private or public and help organize related packages under an organization.

**Rules:**
- Must be lowercase
- Can contain hyphens and underscores
- No spaces or special characters
- Max 214 characters

### `version`
```json
"version": "1.0.0-beta.1"
```
Follows **Semantic Versioning (SemVer)**: `MAJOR.MINOR.PATCH[-PRERELEASE][+BUILD]`
- **MAJOR**: Breaking changes
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes (backward compatible)
- **PRERELEASE**: alpha, beta, rc (release candidate)
- **BUILD**: Build metadata

### `description`
```json
"description": "A comprehensive example package.json..."
```
Brief description of your package. Appears in npm search results and on the package page.

### `keywords`
```json
"keywords": ["learning", "example", "tutorial"]
```
Array of strings to help people discover your package. Used by npm search and package discovery tools.

### `homepage`
```json
"homepage": "https://github.com/myorg/learn-package#readme"
```
URL to the project homepage or documentation site.

### `bugs`
```json
"bugs": {
  "url": "https://github.com/myorg/learn-package/issues",
  "email": "bugs@myorg.com"
}
```
Where users can report issues. Can be a URL string or an object with `url` and `email`.

### `license`
```json
"license": "MIT"
```
SPDX license identifier. Common options:
- `MIT` - Permissive
- `Apache-2.0` - Permissive with patent grant
- `GPL-3.0` - Copyleft
- `ISC` - Simplified BSD-style
- `UNLICENSED` - Private/proprietary

### `licenses` (Deprecated)
```json
"licenses": [{"type": "MIT", "url": "..."}]
```
Old format, use `license` instead. Kept for backward compatibility.

### `author`
```json
"author": {
  "name": "Your Name",
  "email": "your.email@example.com",
  "url": "https://yourwebsite.com"
}
```
Package author. Can also be a string: `"Your Name <email@example.com> (https://yourwebsite.com)"`

### `contributors`
```json
"contributors": [
  {"name": "Contributor One", "email": "...", "url": "..."}
]
```
Array of people who contributed to the project.

### `maintainers`
```json
"maintainers": [
  {"name": "Maintainer Name", "email": "...", "url": "..."}
]
```
People who maintain the package. Usually automatically set by npm based on who publishes.

### `funding`
```json
"funding": [
  {"type": "individual", "url": "https://github.com/sponsors/username"},
  {"type": "patreon", "url": "https://patreon.com/username"}
]
```
How to financially support the project. Displayed when running `npm fund`. Can be:
- String (single URL)
- Object with `type` and `url`
- Array of objects (multiple funding sources)

### `repository`
```json
"repository": {
  "type": "git",
  "url": "git+https://github.com/myorg/learn-package.git",
  "directory": "packages/learn-package"
}
```
Version control repository information. `directory` is useful in monorepos to point to the specific package location.

---

## Module Entry Points

### `main`
```json
"main": "./dist/index.js"
```
The **CommonJS** entry point. Used when someone does `require('your-package')`.

### `module`
```json
"module": "./dist/index.mjs"
```
The **ES Module** entry point. Used by bundlers like Webpack, Rollup, and Vite for tree-shaking optimization.

### `browser`
```json
"browser": "./dist/browser.js"
```
Entry point for browser environments. Bundlers use this when packaging for browsers.

### `unpkg`
```json
"unpkg": "./dist/bundle.min.js"
```
Entry point for [unpkg.com](https://unpkg.com) CDN. Users can load your package via `<script src="https://unpkg.com/your-package">`.

### `jsdelivr`
```json
"jsdelivr": "./dist/bundle.min.js"
```
Entry point for [jsdelivr.com](https://www.jsdelivr.com/) CDN.

### `types` / `typings`
```json
"types": "./dist/index.d.ts"
```
TypeScript type definitions entry point. Both `types` and `typings` work identically.

### `exports`
```json
"exports": {
  ".": {
    "types": "./dist/index.d.ts",
    "import": "./dist/index.mjs",
    "require": "./dist/index.js",
    "default": "./dist/index.js"
  },
  "./utils": {...},
  "./components/*": {...}
}
```
**Modern Node.js** (12+) feature that:
- Defines **conditional exports** based on environment (import/require)
- Explicitly controls what's publicly accessible
- Supports **subpath exports** (`import { x } from 'pkg/utils'`)
- Prevents deep imports into undocumented paths

**Conditions:**
- `types` - TypeScript definitions
- `import` - ES modules
- `require` - CommonJS
- `default` - Fallback
- `browser`, `node`, `development`, `production` - Environment-specific

### `imports`
```json
"imports": {
  "#internal/*": "./src/internal/*.js",
  "#utils": "./src/utils/index.js"
}
```
**Private internal imports** for your package. Must start with `#`. Allows clean internal module resolution without relative paths.

Example: `import something from '#internal/helper'`

### `bin`
```json
"bin": {
  "learn-cli": "./bin/cli.js",
  "learn-tool": "./bin/tool.js"
}
```
Executable scripts installed globally or in `node_modules/.bin/` when the package is installed.

When installed globally: `npm install -g your-package`, users can run `learn-cli` from anywhere.

**Requirements:**
- Files must have shebang: `#!/usr/bin/env node`
- Files must be executable: `chmod +x bin/cli.js`

### `man`
```json
"man": ["./man/learn-cli.1", "./man/learn-tool.1"]
```
Manual pages for command-line tools. Installed when package is installed globally. Users can run `man learn-cli`.

### `directories`
```json
"directories": {
  "lib": "lib",
  "bin": "bin",
  "man": "man",
  "doc": "docs",
  "example": "examples",
  "test": "tests"
}
```
Metadata about package structure. Mostly informational, but some tools use it. **Not widely used** in modern npm.

---

## Dependencies

### `dependencies`
```json
"dependencies": {
  "axios": "^1.6.0",
  "express": "^4.18.2"
}
```
Packages required for your package to run in **production**. Installed automatically with your package.

**Version Ranges:**
- `1.2.3` - Exact version
- `^1.2.3` - Compatible with 1.2.3 (allows minor/patch updates: `>=1.2.3 <2.0.0`)
- `~1.2.3` - Approximately equivalent (allows patch updates: `>=1.2.3 <1.3.0`)
- `*` - Any version
- `>=1.2.3` - Greater than or equal
- `1.x` - Any 1.x.x version
- `latest` - Latest version

### `devDependencies`
```json
"devDependencies": {
  "@types/node": "^20.8.0",
  "typescript": "^5.2.2",
  "jest": "^29.7.0"
}
```
Packages needed only for **development and testing**. Not installed when others install your package as a dependency.

Examples: Testing frameworks, build tools, linters, type definitions.

### `peerDependencies`
```json
"peerDependencies": {
  "react": ">=16.8.0",
  "react-dom": ">=16.8.0"
}
```
Packages that your package requires but expects the **consumer to install**. Used for plugins and libraries that extend other packages.

Example: A React component library requires React, but shouldn't bundle it—consumers provide their own React version.

**npm 7+**: Automatically installs peer dependencies.
**npm 3-6**: Shows warnings if not installed.

### `peerDependenciesMeta`
```json
"peerDependenciesMeta": {
  "react-dom": {
    "optional": true
  }
}
```
Marks peer dependencies as **optional**. No warning if not installed.

### `optionalDependencies`
```json
"optionalDependencies": {
  "fsevents": "^2.3.3"
}
```
Dependencies that aren't critical. If installation fails, npm continues without error. Package should handle their absence gracefully.

Example: Platform-specific optimizations (fsevents works only on macOS).

### `bundledDependencies`
```json
"bundledDependencies": ["some-bundled-dep"]
```
Dependencies packaged with your module when publishing. Rare use case for vendoring dependencies.

### `overrides` (npm 8.3+)
```json
"overrides": {
  "lodash": "^4.17.21",
  "axios": {
    "follow-redirects": "^1.15.4"
  }
}
```
Forces specific versions of nested dependencies. Useful for security fixes or incompatibility issues.

### `resolutions` (Yarn)
```json
"resolutions": {
  "webpack/**/terser": "^5.16.0"
}
```
Yarn's equivalent to `overrides`. Forces dependency versions across the entire dependency tree.

---

## Scripts

### Lifecycle Scripts

#### `preinstall` / `install` / `postinstall`
```json
"preinstall": "node scripts/check-node-version.js",
"postinstall": "node scripts/post-install.js"
```
Run before/after package installation. Use cases:
- Validate environment
- Build native modules
- Setup configuration

#### `prepare`
```json
"prepare": "husky install && npm run build"
```
Runs:
- Before package is packed (`npm pack`)
- Before package is published (`npm publish`)
- After local `npm install` (no arguments)
- After `npm install` in git dependencies

**Most versatile lifecycle script** for ensuring the package is ready.

#### `prepublishOnly`
```json
"prepublishOnly": "npm run test && npm run build"
```
Runs **only** before `npm publish`. Ideal for final checks before publishing.

#### `prepack` / `postpack`
```json
"prepack": "npm run build",
"postpack": "echo 'Package created successfully'"
```
Run before/after creating a tarball (`npm pack` or `npm publish`).

#### `preversion` / `version` / `postversion`
```json
"preversion": "npm run test",
"version": "npm run build && git add -A dist",
"postversion": "git push && git push --tags"
```
Run during `npm version`:
1. `preversion` - Run tests
2. Bump version in package.json
3. `version` - Rebuild, stage changes
4. Commit & tag
5. `postversion` - Push to git

### Development Scripts

#### `dev` / `start`
```json
"dev": "nodemon --watch src --exec npm run start:dev",
"start": "node dist/index.js",
"start:dev": "NODE_ENV=development tsx src/index.ts",
"start:prod": "NODE_ENV=production node dist/index.js"
```
- `dev` - Development with hot-reload
- `start` - Production entry point (often run by hosting platforms)
- `start:dev` - Development with environment variables
- `start:prod` - Production mode

### Build Scripts

#### `build`
```json
"build": "npm run clean && npm run build:types && npm run build:cjs && npm run build:esm && npm run build:browser",
"build:types": "tsc --emitDeclarationOnly",
"build:cjs": "tsc --module commonjs --outDir dist/cjs",
"build:esm": "tsc --module esnext --outDir dist/esm",
"build:browser": "webpack --config webpack.config.js",
"build:watch": "tsc --watch"
```
Build for multiple targets:
- **types** - TypeScript definitions (.d.ts)
- **cjs** - CommonJS (Node.js, older bundlers)
- **esm** - ES Modules (modern bundlers, tree-shaking)
- **browser** - Browser bundle (UMD/IIFE)

#### `prebuild` / `postbuild`
```json
"prebuild": "npm run lint",
"postbuild": "npm run size-check"
```
Run before/after build for validation and checks.

#### `clean`
```json
"clean": "rimraf dist coverage .nyc_output",
"clean:all": "npm run clean && rimraf node_modules"
```
Remove build artifacts. `rimraf` is cross-platform `rm -rf`.

### Testing Scripts

#### `test`
```json
"test": "jest",
"test:watch": "jest --watch",
"test:coverage": "jest --coverage",
"test:ci": "jest --ci --coverage --maxWorkers=2",
"test:unit": "jest --testPathPattern=unit",
"test:integration": "jest --testPathPattern=integration",
"test:e2e": "jest --testPathPattern=e2e",
"pretest": "npm run lint"
```
- `test` - Run all tests
- `test:watch` - Watch mode for TDD
- `test:coverage` - Generate coverage reports
- `test:ci` - CI-optimized (no watch, limited workers)
- `test:unit/integration/e2e` - Run specific test types

### Linting & Formatting Scripts

#### `lint`
```json
"lint": "npm run lint:code && npm run lint:style && npm run lint:format",
"lint:code": "eslint . --ext .js,.jsx,.ts,.tsx",
"lint:style": "stylelint '**/*.{css,scss,sass}'",
"lint:format": "prettier --check .",
"lint:fix": "npm run lint:code -- --fix && npm run lint:style -- --fix && prettier --write ."
```
- `lint` - Check all code quality
- `lint:code` - ESLint for JavaScript/TypeScript
- `lint:style` - Stylelint for CSS/SCSS
- `lint:format` - Prettier for code formatting
- `lint:fix` - Auto-fix all issues

#### `format`
```json
"format": "prettier --write .",
"format:check": "prettier --check ."
```
- `format` - Format all files
- `format:check` - Check if files are formatted (CI)

#### `type-check`
```json
"type-check": "tsc --noEmit",
"type-check:watch": "tsc --noEmit --watch"
```
TypeScript type checking without emitting files. Useful in CI or with separate build tools.

### Validation Scripts

#### `validate`
```json
"validate": "npm run lint && npm run type-check && npm run test"
```
Run all checks before committing or pushing. Often used in git hooks.

### Documentation Scripts

#### `docs`
```json
"docs": "typedoc --out docs src",
"docs:serve": "http-server docs -p 8080",
"docs:generate": "jsdoc -c jsdoc.json"
```
Generate and serve documentation:
- **TypeDoc** - TypeScript documentation
- **JSDoc** - JavaScript documentation

### Analysis Scripts

#### `size-check`
```json
"size-check": "size-limit"
```
Check bundle size against limits. Fails if exceeds configured thresholds.

#### `analyze`
```json
"analyze": "webpack-bundle-analyzer dist/stats.json"
```
Visualize bundle composition to identify large dependencies.

### Security Scripts

#### `security:audit`
```json
"security:audit": "npm audit",
"security:fix": "npm audit fix",
"security:snyk": "snyk test"
```
- `audit` - Check for known vulnerabilities
- `audit fix` - Automatically fix vulnerabilities
- `snyk` - Advanced security scanning

### Release Scripts

#### `release`
```json
"release": "semantic-release",
"release:dry": "semantic-release --dry-run",
"release:manual": "npm version patch && npm publish"
```
- **semantic-release** - Automated versioning based on commit messages
- **dry-run** - Test release without publishing
- **manual** - Manual version bump and publish

### Git Workflow Scripts

#### `commit` / `changelog`
```json
"commit": "git-cz",
"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s"
```
- `commit` - Interactive commit with Commitizen (enforces conventional commits)
- `changelog` - Generate CHANGELOG.md from git history

### Docker Scripts

#### `docker:build` / `docker:run`
```json
"docker:build": "docker build -t learn-package .",
"docker:run": "docker run -p 3000:3000 learn-package"
```
Build and run Docker containers.

### Performance Scripts

#### `benchmark` / `profile`
```json
"benchmark": "node benchmarks/index.js",
"profile": "node --prof src/index.js"
```
- `benchmark` - Run performance benchmarks
- `profile` - Generate V8 profiling data

---

## Publishing Configuration

### `files`
```json
"files": [
  "dist",
  "bin",
  "lib",
  "README.md",
  "!**/*.test.js",
  "!**/__tests__/**"
]
```
Whitelist of files/directories to include when publishing. 

**Always included (even if not listed):**
- package.json
- README / README.*
- LICENSE / LICENCE
- CHANGELOG / CHANGES / HISTORY
- Main entry file

**Always excluded:**
- node_modules
- .git
- .DS_Store
- npm-debug.log

Patterns starting with `!` are **exclusions**.

### `private`
```json
"private": false
```
If `true`, npm refuses to publish the package. Use for:
- Monorepo root packages
- Internal/private projects
- Apps (not libraries)

### `publishConfig`
```json
"publishConfig": {
  "access": "public",
  "registry": "https://registry.npmjs.org/",
  "tag": "latest"
}
```
Configuration used during `npm publish`:
- `access` - `public` or `restricted` (for scoped packages)
- `registry` - Custom registry URL (private npm registries)
- `tag` - Distribution tag (e.g., `latest`, `next`, `beta`)

### `workspaces`
```json
"workspaces": [
  "packages/*",
  "apps/*"
]
```
**Monorepo** configuration. Defines workspace packages. All packages share:
- node_modules (hoisted dependencies)
- Lock file
- Scripts across workspaces

Supported by: npm 7+, Yarn, pnpm

---

## Environment Specifications

### `engines`
```json
"engines": {
  "node": ">=18.0.0",
  "npm": ">=9.0.0",
  "yarn": ">=1.22.0",
  "pnpm": ">=8.0.0"
}
```
Specifies required versions of Node.js and package managers. 

**By default**: Only shows warnings if versions don't match.

### `engineStrict`
```json
"engineStrict": false
```
If `true`, **enforces** engine requirements (fails installation on mismatch). Deprecated but still works.

Better approach: Use `engine-strict=true` in `.npmrc` file.

### `os`
```json
"os": ["darwin", "linux", "win32"]
```
Specifies compatible operating systems. Use `!` prefix to blacklist:
```json
"os": ["!win32"]  // Excludes Windows
```

**Values:** `darwin`, `linux`, `win32`, `sunos`, `freebsd`, `openbsd`, `aix`

### `cpu`
```json
"cpu": ["x64", "arm64"]
```
Specifies compatible CPU architectures. Use `!` to blacklist:
```json
"cpu": ["!arm", "!mips"]
```

**Values:** `x64`, `ia32`, `arm`, `arm64`, `mips`, `s390`, `ppc`, `ppc64`

### `packageManager`
```json
"packageManager": "npm@10.2.0"
```
Declares the expected package manager and version. Used by **Corepack** (Node.js 16+) to:
- Automatically use the correct package manager
- Enforce consistent versions across team

Format: `<name>@<version>` (e.g., `npm@10.2.0`, `yarn@3.6.0`, `pnpm@8.10.0`)

### `volta`
```json
"volta": {
  "node": "20.9.0",
  "npm": "10.2.0"
}
```
Configuration for **Volta** (JavaScript tool version manager). Automatically switches to specified Node/npm versions when entering the project directory.

### `browserslist`
```json
"browserslist": [
  ">0.2%",
  "not dead",
  "not op_mini all",
  "last 2 versions"
]
```
Defines target browsers for transpilation (Babel, Autoprefixer, etc.).

**Queries:**
- `>0.2%` - Browsers with >0.2% market share
- `not dead` - Exclude browsers without updates in 24 months
- `last 2 versions` - Last 2 versions of each browser
- `Chrome >= 90` - Chrome 90 and above
- `maintained node versions` - Maintained Node.js versions

Used by: Babel, PostCSS, Autoprefixer, ESLint

---

## Tool Configurations

### `config`
```json
"config": {
  "port": 3000,
  "apiUrl": "https://api.example.com",
  "commitizen": {
    "path": "./node_modules/cz-conventional-changelog"
  }
}
```
Arbitrary configuration exposed to scripts via `process.env.npm_package_config_port`.

Commonly used for:
- Default ports
- API URLs
- Tool configurations

### `sideEffects`
```json
"sideEffects": [
  "*.css",
  "*.scss",
  "./src/polyfills.js"
]
```
Tells bundlers (Webpack, Rollup) which files have **side effects** (code that runs on import).

- `false` - No side effects (pure modules) → enables aggressive tree-shaking
- `true` - All files have side effects (default)
- `["*.css"]` - Only CSS files have side effects

**Side effects:** Code that modifies global state, imports for side effects only, polyfills.

---

## Integrated Tool Configurations

### `jest`
```json
"jest": {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "roots": ["<rootDir>/src"],
  "testMatch": ["**/__tests__/**/*.+(ts|tsx|js)"],
  "collectCoverageFrom": ["src/**/*.{js,ts}"],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  },
  "moduleNameMapper": {
    "^@/(.*)$": "<rootDir>/src/$1"
  }
}
```
**Jest** testing framework configuration:
- `preset` - Shared configuration (e.g., ts-jest for TypeScript)
- `testEnvironment` - `node` or `jsdom` (browser simulation)
- `roots` - Directories to search for tests
- `testMatch` - Test file patterns
- `collectCoverageFrom` - Files to include in coverage
- `coverageThreshold` - Minimum coverage requirements (fails if not met)
- `moduleNameMapper` - Path aliases (matches tsconfig paths)

Alternative: `jest.config.js` for complex configuration.

### `prettier`
```json
"prettier": {
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 100,
  "tabWidth": 2,
  "useTabs": false,
  "arrowParens": "avoid",
  "endOfLine": "lf"
}
```
**Prettier** code formatter configuration:
- `semi` - Add semicolons
- `trailingComma` - `es5` (arrays/objects), `all` (including functions), `none`
- `singleQuote` - Use single quotes
- `printWidth` - Max line length
- `tabWidth` - Spaces per indentation level
- `useTabs` - Use tabs instead of spaces
- `arrowParens` - `always` or `avoid` for single-arg arrow functions
- `endOfLine` - `lf` (Unix), `crlf` (Windows), `auto`

Alternative: `.prettierrc` or `prettier.config.js`

### `eslintConfig`
```json
"eslintConfig": {
  "root": true,
  "parser": "@typescript-eslint/parser",
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb",
    "prettier"
  ],
  "plugins": ["@typescript-eslint", "react", "jest"],
  "env": {
    "browser": true,
    "node": true,
    "es2022": true,
    "jest": true
  },
  "rules": {
    "no-console": "warn",
    "@typescript-eslint/no-unused-vars": ["error"]
  }
}
```
**ESLint** linter configuration:
- `root` - Stop looking for config in parent directories
- `parser` - Custom parser (TypeScript, Babel)
- `extends` - Shared configurations (stacked in order)
- `plugins` - Additional rules
- `env` - Define global variables for environments
- `rules` - Override specific rules (`off`, `warn`, `error`)

Alternative: `.eslintrc.js` or `.eslintrc.json`

### `stylelint`
```json
"stylelint": {
  "extends": ["stylelint-config-standard"],
  "rules": {
    "indentation": 2,
    "string-quotes": "single"
  }
}
```
**Stylelint** CSS linter configuration.

Alternative: `.stylelintrc.json`

### `babel`
```json
"babel": {
  "presets": [
    ["@babel/preset-env", {"targets": {"node": "current"}}],
    "@babel/preset-typescript",
    "@babel/preset-react"
  ],
  "plugins": []
}
```
**Babel** transpiler configuration:
- `presets` - Bundles of plugins (env, TypeScript, React, etc.)
- `plugins` - Individual transformations

Alternative: `babel.config.js` or `.babelrc`

### `lint-staged`
```json
"lint-staged": {
  "*.{js,ts}": [
    "eslint --fix",
    "prettier --write",
    "jest --bail --findRelatedTests"
  ],
  "*.{json,md}": ["prettier --write"]
}
```
Runs commands on **staged git files** (used with Husky pre-commit hook). Improves speed by only linting changed files.

Alternative: `.lintstagedrc` or `lint-staged.config.js`

### `husky`
```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged",
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-push": "npm run type-check && npm test"
  }
}
```
**Git hooks** configuration:
- `pre-commit` - Before commit (lint, format, test changed files)
- `commit-msg` - Validate commit message format
- `pre-push` - Before push (run full test suite)

**Modern Husky (v6+)**: Uses `.husky/` directory instead of package.json config.

### `commitlint`
```json
"commitlint": {
  "extends": ["@commitlint/config-conventional"],
  "rules": {
    "type-enum": [2, "always", [
      "feat", "fix", "docs", "style", "refactor",
      "perf", "test", "build", "ci", "chore", "revert"
    ]]
  }
}
```
Validates commit messages follow **Conventional Commits** format:
```
type(scope): subject

body

footer
```

**Types:**
- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation
- `style` - Code style (formatting)
- `refactor` - Code refactoring
- `perf` - Performance improvement
- `test` - Tests
- `build` - Build system
- `ci` - CI/CD
- `chore` - Maintenance

### `size-limit`
```json
"size-limit": [
  {"path": "dist/index.js", "limit": "10 KB"},
  {"path": "dist/index.mjs", "limit": "10 KB"}
]
```
Enforces **bundle size limits**. Build fails if bundle exceeds limit. Prevents unintended size increases.

### `nyc`
```json
"nyc": {
  "include": ["src/**/*.js"],
  "exclude": ["**/*.test.js"],
  "reporter": ["text", "lcov", "html"],
  "all": true
}
```
**NYC** (Istanbul) code coverage configuration for non-Jest projects.

### `nodemonConfig`
```json
"nodemonConfig": {
  "watch": ["src"],
  "ext": "ts,js,json",
  "ignore": ["src/**/*.test.ts"],
  "exec": "ts-node src/index.ts",
  "env": {"NODE_ENV": "development"}
}
```
**Nodemon** configuration for auto-restarting Node.js apps during development.

Alternative: `nodemon.json`

### `release`
```json
"release": {
  "branches": ["main", {"name": "beta", "prerelease": true}],
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/git",
    "@semantic-release/github"
  ]
}
```
**Semantic Release** configuration for automated versioning and publishing based on commit messages.

**Workflow:**
1. Analyze commits
2. Determine version bump
3. Generate release notes
4. Update CHANGELOG
5. Publish to npm
6. Create git tag
7. Create GitHub release

---

## Best Practices

### 1. **Use Semantic Versioning**
Follow SemVer strictly. Use prerelease tags for beta/alpha versions.

### 2. **Pin Exact Versions in Applications**
Use `npm install --save-exact` or lockfiles. For libraries, use version ranges.

### 3. **Keep Scripts Organized**
Group related scripts with prefixes: `test:*`, `build:*`, `lint:*`

### 4. **Use Lifecycle Scripts Wisely**
- `prepare` - Build before publish
- `prepublishOnly` - Final tests before publish
- Avoid `postinstall` - Can slow down installations

### 5. **Separate devDependencies**
Keep production dependencies minimal. Everything else → devDependencies.

### 6. **Document Scripts**
Add comments in README or use `npm-scripts-info` package.

### 7. **Use Package Manager Constraints**
Set `engines` and `packageManager` to ensure consistency.

### 8. **Configure Size Limits**
Use `size-limit` to prevent bundle bloat.

### 9. **Enable Tree Shaking**
Set `sideEffects: false` if your package is pure ESM.

### 10. **Use Modern Exports**
Define `exports` field for modern Node.js and bundlers.

---

## Additional Resources

- [npm Documentation](https://docs.npmjs.com/cli/v10/configuring-npm/package-json)
- [Node.js Packages](https://nodejs.org/api/packages.html)
- [Semantic Versioning](https://semver.org/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Package.json Schema](http://json.schemastore.org/package)

---

**Created:** November 2, 2025
**Purpose:** Educational reference for comprehensive package.json configuration
