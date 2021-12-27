// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: res.statusCode,
        message: "API is working !",
    });
});
// Import Book controller
var BookController = require('../Controllers/bookController');
// Book routes
router.route('/Books')
    .get(BookController.index)
    .post(BookController.new);

router.route('/Books/:isbn')
    .get(BookController.view)
    .patch(BookController.update)
    .put(BookController.update)
    .delete(BookController.delete);


// Export API routes
module.exports = router;