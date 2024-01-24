## Install esm

esm is a lightweight module loader that allows you to run ES Modules in Node.js. Install it as a dev dependency:

```bash
npm install --save-dev esm
```

## Update Mocha Command
Modify the Mocha command to use esm as the loader. Update the test script in your package.json like this:

```json
"scripts": {
  "test": "mocha --require esm"
}
```

Then, try running Mocha directly with this command:

```bash
mocha --require esm
```

This setup should enable Mocha to correctly handle ES Module syntax in the test files.

