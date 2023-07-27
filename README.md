# React + Vite
- npm install vite@latest
- cd to the project folder
- npm install
- npm run dev

## Adding SASS  and Bootstrap 5 to React Project
- npm i sass
- create a folder called scss
- create a styles.scss
- go to package.json, add a script, "sass:build": "sass --no-source-map ./:./",
- Run the script to build the sass file, npm run sass:build or npm run sass:watch to watch  for changes
- Add the css files to index.js 
import './scss/bootstrap.css';
import './scss/styles.css'
- Install bootstrap 5, npm i bootstrap
- Enable customization of bootstrap,create a bootstrap.scss in scss folder, this where we will overwriiten the default b5 css rules. Add an import of @import '../../node_modules/bootstrap/scss/bootstrap.scss' main bootstrap at the bottom of the files and start adding your custom ones above that import.


