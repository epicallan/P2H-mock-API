'use strict';

const SetupEndpoint = require('./setup/setup.js');

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
