// BookController.js
// Import Book model
Book = require('../Models/bookModel');
const createApplication = require('express/lib/express');
const { SendToFastMQ } = require('../fastMQ/fastMQClient');

// Handle index actions
exports.index = function (req, res) {
    Book.get(function (err, Books) {
        if (err) {
            res.json({
                status: "error",
                message: err,
            });
        }
        try {
            Books.forEach(book => {
                SendToFastMQ(book.ISBN);
            });
        } catch (error) {
            console.error(error);
        }
        res.json({
            status: "success",
            message: "Books retrieved successfully",
            data: Books
        });
    });
};;
// Handle create Book actions
exports.new = function (req, res) {
    var book = new Book();
    book._id = req.body.ISBN;
    book.name = req.body.name ? req.body.name : book.name;
    book.author = req.body.author;
    book.ISBN = req.body.ISBN;

    // save the Book and check for errors
    book.save(function (err) {
        // Check for validation error
        if (err)
            res.json(err);
        else
            res.json({
                message: 'New book has been added!',
                data: book
            });
    });
};
// Handle view Book info
exports.view = function (req, res) {
    Book.findById(req.params.isbn, (err, book) => {
        if (err)
            res.send(err);

            if(!book){
                res.json({
                    message: "Couldn't find such book in db.",
                    data : ""
                })
                return;
            }

        SendToFastMQ(book.ISBN);
        res.json({
            message: 'Book details loading..',
            data: book
        });
    });
};
// Handle update Book info
exports.update = function (req, res) {
    Book.updateOne(req.params.isbn, function (err, book) {
        if (err)
            res.send(err);
        book.name = req.body.name ? req.body.name : book.name;
        book.author = req.body.author;
        book.ISBN = req.body.ISBN;
        // save the Book and check for errors
        book.save(function (err) {
            if (err)
                res.json(err);
            res.json({
                message: 'Book Info updated',
                data: book
            });
        });
    });
};
// Handle delete Book
exports.delete = function (req, res) {
    Book.deleteOne({
        _id: req.params.isbn
    }, function (err, book) {
        if (err)
            res.send(err);
        res.json({
            status: "success",
            message: 'Book deleted'
        });
    });
};


