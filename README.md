# Custom Webpack Config Boilerplate
A project that provides basic webpack 4 boilerplate to quickstart development.

## Features
- [x] Webpack
- [x] Dev Server
- [x] Hot Module Replacement
- [x] Development & Production Mode
- [x] Babel
- [x] SCSS
- [x] PostCSS
- [x] Polyfill

## Getting Started
Clone this repo and install
```
npm install
```

### Development Server
```
npm run start
```

### Production Build
```
npm run build
```

## Master Branch

### Webpack
- [webpack](https://webpack.js.org/): Module bundler
- [webpack-cli](https://github.com/webpack/webpack-cli): Webpack's Command Line Interface
- [webpack-dev-server](https://github.com/webpack/webpack-dev-server): Webpack's development server that provides live reloading
- [webpack-merge](https://github.com/survivejs/webpack-merge): Merge common settings with development and production
- [cross-env](https://github.com/kentcdodds/cross-env): Run scripts that set and use environment variables across platforms

### Babel
- [@babel/core](https://babeljs.io/): Convert ES6 code into a backwards compatible JavaScript
- [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env): Specify an environment and only transpiles features that are missing in that environment
- [@babel/polyfill](https://babeljs.io/docs/en/babel-polyfill): Use the full set of ES6 features beyond syntax changes
  - [core-js](https://github.com/zloirock/core-js): A polyfill of the JavaScript standard library

### Loaders
- [babel-loader](https://webpack.js.org/loaders/babel-loader/): Transpile JavaScript files using Babel and Webpack
- [sass-loader](https://webpack.js.org/loaders/sass-loader/): Load Sass/SCSS file and compile to CSS
  - [node-sass](https://github.com/sass/node-sass): Node Sass
- [postcss-loader](https://webpack.js.org/loaders/postcss-loader/): Loader for webpack to process CSS with PostCSS
  - [postcss-preset-env](https://github.com/csstools/postcss-preset-env): Convert modern CSS into something browsers understand
  - [cssnano](https://github.com/cssnano/cssnano): Optimize and compress PostCSS
- [css-loader](https://webpack.js.org/loaders/css-loader/): Load CSS with resolved imports and returns CSS code
- [style-loader](https://webpack.js.org/loaders/style-loader/): Inject CSS into the DOM
- [html-loader](https://webpack.js.org/loaders/html-loader/): Export HTML as string
- [file-loader](https://webpack.js.org/loaders/file-loader/): Emit the file into the output folder and return the (relative) URL

### Plugins
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin): Create HTML to serve bundles
- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin): Remove/clean build folder
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin): Extract CSS into separate files
- [optimize-css-assets-webpack-plugin](https://github.com/NMFR/optimize-css-assets-webpack-plugin): Optimize/minimize CSS assets
- [terser-webpack-plugin](https://github.com/webpack-contrib/terser-webpack-plugin): Minify JavaScript
