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
### `npm start`
Runs the web app in the development mode.
Src is bundled and served from memory. 
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
```

```sh
### `npm run build`
Builds the web app for production to the `dist` folder.
Build is minified and file names are hashed. Distrubution folder is served. 
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.
```
```sh
### `npm run deploy`
#Update line 24 of package.json
```
//App is deployed to surge.
//Be sure to change url from surge to your own. 
24: "deploy": "surge ./dist/ ibx-victor-app.surge.sh"

```
Signup in command line if no account. 
```

## Run tests

```sh
npm run test

```

## Author

👤 **ibx-software-team**

* Github: [@victor-villacis](https://github.com/victor-villacis)

## Heroku

Api GET endpoing is hosted on heroku only in the build process. 
Update src/api/baseURL.js line 4 if you need to host your api somewhere else. 

## Cross Browser Development
```
npm start
npm run browser-sync-proxy-server

```


***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_