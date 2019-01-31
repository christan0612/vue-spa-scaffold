# vue-spa-scaffold

> A Vue.js project scaffold use Vue-cli  
> This project is make for init all my Vue project. 
> I add some libraries which I always used in my Vue project, and use global mixins and filters.

## Features

1. **Babel / Babel polyfill**  
  So you can use ES6 and works on IE

2. **Axios**  
  I write a simple interceptors to handle API error

3. **SCSS**
   - You can write scope Scss in every components  
   - You can use variables and mixins from global `_variables.scss` and `_mixins.scss` without import any file to components

4. **SVG-Icon**  
    ``` javascript
    // You can use icon like this
    <svg-icon icon-class="svg icon file name"></svg-icon>  
    ```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```
