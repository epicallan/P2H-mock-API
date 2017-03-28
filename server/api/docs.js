'use strict';

const SetupEndpoint = require('./setup/setup.js');

module.exports = SetupEndpoint({
    name: 'docs',
    urls: [{
        requests: [{
            method: ['POST'],
            response: {
                sessionId : 'long sessionId  string',
                status    : 'success'
            }
        }]
    },
    {
        params: '/test',
        requests: [{
            method: ['GET'],
            response: {
                doc : '<h2>Hello world</h2> <p id = "doc_1"> Test text</p>'
            }
        }]
    }]
});
