'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'login',
    urls: [{
        requests: [{
            method: ['POST'],
            response: {
                sessionId : 'long sessionId  string',
                userId    : 'long userid string'
            }
        }]
    },
    {
        params: '/wrong',
        requests: [{
            method: ['POST'],
            response: {
                sessionId : null,
                userId    : null
            }
        }]
    }]
});
