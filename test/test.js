var should = require('should');
var auth = require('../lib/koa-auth.js');

describe('koa-auth', function() {

    it('invoke factory', function() {
        var options = {
            secret: 'shhh'
        };

        auth(options);
    });

});