# koa-auth-jwt
[![npm](https://img.shields.io/npm/v/koa-auth-jwt.svg?style=flat-square)](https://www.npmjs.com/package/koa-auth-jwt)
[![Travis](https://img.shields.io/travis/marc1404/koa-auth-jwt.svg?style=flat-square)](https://travis-ci.org/marc1404/koa-auth-jwt)
[![Code Climate](https://img.shields.io/codeclimate/github/marc1404/koa-auth-jwt.svg?style=flat-square)](https://codeclimate.com/github/marc1404/koa-auth-jwt)
[![Code Climate](https://img.shields.io/codeclimate/coverage/github/marc1404/koa-auth-jwt.svg?style=flat-square)](https://codeclimate.com/github/marc1404/koa-auth-jwt/coverage)
[![npm](https://img.shields.io/npm/l/koa-auth-jwt.svg?style=flat-square)](https://github.com/marc1404/koa-auth-jwt/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dm/koa-auth-jwt.svg?style=flat-square)](https://www.npmjs.com/package/koa-auth-jwt)

[![David](https://img.shields.io/david/marc1404/koa-auth-jwt.svg?style=flat-square)](https://github.com/marc1404/koa-auth-jwt/blob/master/package.json)
[![David](https://img.shields.io/david/dev/marc1404/koa-auth-jwt.svg?style=flat-square)](https://github.com/marc1404/koa-auth-jwt/blob/master/package.json)
  
## Description
Use in conjunction with [koa-login](https://www.npmjs.com/package/koa-login).
This middleware can be used to secure routes in [koa](https://www.npmjs.com/package/koa).
It will look for a [JSON Web Token (JWT)](https://www.npmjs.com/package/jsonwebtoken) inside the ```X-Auth-Token``` request header.
If no token is present or it is invalid a http response code ```401 unauthorized``` will be sent back.
Otherwise the [```this.state.user```](http://koajs.com/#context) object will be populated with the decoded data from the *jwt*.

## Installation
```
$ npm install koa-auth-jwt
```
  
## Usage
```javascript
var auth = require('koa-auth-jwt');
  
// register unsecured routes here  
app.use(auth({
	secret: process.env.SECRET,
	token: 'X-Auth-Token' // optional
});
// register secured routes here
```
  
## Options
- ```secret``` mandatory string which has been used to sign the *jwt*
- ```token``` optional string defining which header should contain the token

## Test
```
$ npm install -g mocha  
$ mocha
```

## Author
[marc1404](https://github.com/marc1404)

## License
[MIT](https://github.com/marc1404/koa-auth-jwt/blob/master/LICENSE)
