const res = require('express/lib/response');
const FastMQ = require('fastmq');
var requestChannel;
// create a client with 'isbnChannel' channel name and connect to server.
const SendToFastMQ = (isbn) => {
    if(!isbn){
        console.log("Recevied null isbn");
        return;
    }
    FastMQ.Client.connect('isbnChannel', 'master')
    .then((channel) => {
        // client connected
        requestChannel = channel;
        // send request to 'master' channel  with topic 'isbn' and JSON format payload.
        let reqPayload = { data: isbn };
        return requestChannel.request('master', 'isbn', reqPayload, 'json');
    })
    .then((result) => {
        if(!result.payload){
            console.log("Recevied null result");
            return;
        }
        console.log('Got response from master, access_count:' + result.payload.access_count);
        // client channel disconnect
        requestChannel.disconnect();
    })
    .catch((err) => {
        console.log('Got error:', err.stack);
    });
}

module.exports = {SendToFastMQ};