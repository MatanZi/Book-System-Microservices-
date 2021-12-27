const axios = require("axios");
const assert = require("assert");

const bookBaseURL = "localhost:8080/api";
const analysisBaseURL = "localhost:8081/api/book_analytics/";

describe('Get all books', () => {
    it('should return empty list', () => {
        axios.get(bookBaseURL + "/books/111").then(function (res) {
            assert.deepEqual(res.data, []);
            done();
        });
    });
});


describe('Get Book with isbn = 111', () => {
    it('should return empty list', () => {
        axios.get(bookBaseURL + "/books/111").then(function (res) {
            assert.deepEqual(res.data, "");
            done();
        });
    });
});

describe('Inset new book', () => {
    it('should return new book data', () => {
        const data = {
            "name": "Adventures of Huckleberry Finn ",
            "author": "Mark Twain",
            "ISBN": 9780520228382

        };

        axios.post(bookBaseURL + "/books", data).then(function (res) {
            assert.deepEqual(res.data, {
                "message": "New book has been added!",
                "data": {
                    "create_date": "2021-12-27T20:37:43.769Z",
                    "_id": 9780520228382,
                    "name": "Adventures of Huckleberry Finn ",
                    "ISBN": "9780520228382",
                    "__v": 0
                }
            });
            done();
        });
    });
});




describe('/books/:isbn', () => {
    it('should return book with isbn = 9780520228382', () => {
        axios.get(bookBaseURL + "/books/9780520228382").then(function (res) {
            assert.deepEqual(res.data, {
                "_id": 9780520228382,
                "create_date": "2021-12-27T20:01:27.512Z",
                "name": "Adventures of Huckleberry Finn ",
                "ISBN": "9780520228382",
                "__v": 0
            });
            done();
        });
    });
});


describe('Get Book analysis', () => {
    it('should return 4', () => {
        axios.get(bookBaseURL + "/books/9780520228382");
        axios.get(bookBaseURL + "/books/9780520228382");
        axios.get(bookBaseURL + "/books/9780520228382");
        
        axios.get(analysisBaseURL + "9780520228382").then(function (res) {
            assert.deepEqual(res.access_count, 4);
            done();
        });
    });
});