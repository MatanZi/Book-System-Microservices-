// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');

const { RunServer } = require("./fastMQServer");
// Initialize the app
let app = express();

// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

// Setup server port
var port = process.env.PORT || 8081;


let analysisDiconary = {};

exports.GetAnalysisByISBN = function(isbn){
    if (analysisDiconary[isbn]) {
        analysisDiconary[isbn]++;
    }

    else {
        analysisDiconary[isbn] = 1;
    }

    let resData = {
        "isbn": isbn,
        "access_count": analysisDiconary[isbn]
    }

    return resData;
}

const ViewAnalysisByISBN = (isbn) => {
    if (analysisDiconary[isbn]) {
        let resData = {
            "isbn": isbn,
            "access_count": analysisDiconary[isbn]
        }

        return resData;
    }

    return {
        error: `Couldn't find ${isbn} !`
    };
}


// Use Api routes in the App
app.get('/api/book_analytics/:isbn', (req, res) => {
    if (!req?.params?.isbn) {
        console.log("Received null isbn !");
        return;
    }

    let resData = ViewAnalysisByISBN(req.params.isbn);

    res.send(resData);
});
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running analysis service on port " + port);
});

RunServer();

