'use strict';
module.exports = SetupEndpoint({
    name: 'login',
    urls: [{
        requests: [{
            method: ['POST'],
            response: {
                success: {
                    sessionId : 'long sessionId  string',
                    userType  : 'basic',
                    userId    : 'long userid string'
                }
            }
        }]
    }]
});
