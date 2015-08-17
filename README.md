# koa-auth-jwt
[![NPM](https://nodei.co/npm/koa-auth-jwt.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/koa-auth-jwt/)
  
[![Build Status](https://travis-ci.org/marc1404/koa-auth-jwt.svg)](https://travis-ci.org/marc1404/koa-auth-jwt)
[![Code Climate](https://codeclimate.com/github/marc1404/koa-auth-jwt/badges/gpa.svg)](https://codeclimate.com/github/marc1404/koa-auth-jwt)
[![Test Coverage](https://codeclimate.com/github/marc1404/koa-auth-jwt/badges/coverage.svg)](https://codeclimate.com/github/marc1404/koa-auth-jwt/coverage)
  
[![dependencies](https://david-dm.org/marc1404/koa-auth-jwt.svg)](https://david-dm.org/marc1404/koa-auth-jwt)
[![dev-dependencies](https://david-dm.org/marc1404/koa-auth-jwt/dev-status.svg)](https://david-dm.org/marc1404/koa-auth-jwt#info=devDependencies)
  
## Description
Use in conjunction with [koa-login](https://www.npmjs.com/package/koa-login)
  
## Installation
```
$ npm install koa-auth-jwt
```
  
## Usage
```javascript
// ...  
var auth = require('koa-auth-jwt');
  
app.use(auth({
	secret: process.env.SECRET,
	token: 'X-Auth-Token' // optional
});
```
  
## Test
```
$ npm install -g mocha  
$ mocha
```
  
## License
[MIT](https://github.com/marc1404/koa-auth-jwt/blob/master/LICENSE)
