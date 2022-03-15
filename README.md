<h1 align="center">Welcome to ibx-javascript-development-starter 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>

> JavaScript Development Environment

## Install

```sh
npm install
```

## Usage

```sh
npm start
```
Runs the web app in the development mode.
Src is bundled and served from memory. 
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

```sh
npm run build
```
Builds the web app for production to the `dist` folder.
Build is minified and file names are hashed. Distrubution folder is served. 
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

```sh

npm run deploy
```
* First Update the url on line 24 of package.json
* Example: 24: "deploy": "surge ./dist/ ibx-victor-app.surge.sh"
* Signup with command line promps if no account. 

## Run tests

```sh
npm run test

```



## Cross Browser Development
```
npm start
npm run browser-sync-proxy-server

```
## Heroku

* The Api GET endpoint is hosted on heroku, but only in the build process. 
* Update src/api/baseURL.js line 4 if you need to host your api somewhere else. 

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_