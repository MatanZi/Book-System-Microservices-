const FastMQ = require('fastmq');
const index = require("./index");


// Register topic: 'isbn', receive message and response back to client requester
const RunServer = () => {
    // Create message broker server with 'master' channel name
    const server = FastMQ.Server.create('master');

    server.response('isbn', (msg, res) => {
        console.log('Server receive request payload:', msg.payload.data);
        // echo request data back;

        let resData = index.GetAnalysisByISBN(msg.payload.data);

        res.send(resData, 'json');
    });

    // start server
    server.start().then(() => {
        console.log('Message Broker server started');
    });
}

module.exports = { RunServer };