var jwt = require('jsonwebtoken');

module.exports = init;

function init(options){
    var secret = options.secret;
    var header = options.header || 'X-Auth-Token';

    return auth;

    function* auth(next){
        var token = this.request.get(header);
        var user = yield verifyToken(token);

        if(!user){
            return this.status = 401;
        }

        this.state.user = user;

        yield next;
    }

    function verifyToken(token){
        return new Promise((resolve, reject) => {
            if(!token) return resolve(false);

            jwt.verify(token, secret, (err, decoded) => {
                if(err){
                    console.warn(err.stack);
                    return resolve(false);
                }

                return resolve(decoded);
            });
        });
    }
}