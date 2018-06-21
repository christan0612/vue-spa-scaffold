# vue-spa-scaffold

> A Vue.js project scaffold use Vue-cli  
> add some libraries which I always used in my Vue project

## Features

* Babel - handle ES5 in IE  
  Install babel-polyfill

* Axios - handle AJAX  
  Install axios

* SCSS  
  Install sass-loader && node-sass

* Handle SCSS mixins/variables in every components  
  Insatll sass-resource-loader  
  In build/utils.js modify scss setting:   
  <code>
    scss: generateLoaders('sass').concat(
      {
        loader: 'sass-resources-loader',
        options: {
          resources: [
            path.resolve(__dirname, '../src/assets/styles/_variables.scss'),
            path.resolve(__dirname,'../src/assets/styles/_mixins.scss')
          ]
        }
      }
    )
  </code>

* use svg-icon  


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

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
