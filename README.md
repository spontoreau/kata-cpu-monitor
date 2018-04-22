# Kata - CPU monitor
This repository contains a project that can be use to learn how to write unit tests. Goals of this Kata is to understand how to cover business rules in a legacy source code and fix structure issues by refactoring them during the test implementation.

## Case study
The project have multiple issues with SOLID principles and business rules aren't covered yet.

Follow those steps: 
- Review the source code and find business rules.
- Each rules have to be cover by a test.
- Apply SOLID principles if the are missing in the code. This step have to be done during the test implementation.
- Try to verify different possible inputs.
- You can install other npm packages if needed.

## Technical information

The project was built with [TypeScript](https://www.typescriptlang.org/), [Node](https://nodejs.org) and [Jest](https://facebook.github.io/jest/) as test framework.

First, you have to install packages in the project:
```
$ npm install
```

Then, everytime you want to launch tests, use the command:
```
$ npm test
```

A [VS Code](https://code.visualstudio.com/) debug configuration is available inside the project. Everything is handle inside the configuration to launch & debug tests.

## LICENSE

[MIT](LICENSE)
