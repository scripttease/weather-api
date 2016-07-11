# How To...

* Copy and rename the frontend boilerplate and delete the .git folder
* install Chai and Mocha 

In project directory
```
npm install --save-dev mocha chai
```
* Write as much of code as possible in a way that doesn't touch the DOM and then test that using Node in the terminal. To do this make a test script:

In package.json
```
  "scripts": {
    "test": "./node_modules/.bin/mocha --watch",
    "test-once": "./node_modules/.bin/mocha"
  },
```
* Outline project and logic:

* create test folder and 'test' test

assume back end not required because only needed it for github due to SOP (same origin policy) which exists to prevent CSRF.

Use javascript to get data from a weather API and a location API

Don't use forms.


