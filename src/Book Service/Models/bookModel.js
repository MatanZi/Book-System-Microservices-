// BookModel.js
var mongoose = require('mongoose');
// Setup schema
var BookSchema = mongoose.Schema({
    _id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    Author: String,
    create_date: {
        type: Date,
        default: Date.now
    }
});
// Export Book model
var Book = module.exports = mongoose.model('book', BookSchema);
module.exports.get = function (callback, limit) {
    Book.find(callback).limit(limit);
}