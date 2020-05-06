const express = require('express');
const router = express.Router();
const reviewCtrl = require('../../controllers/api/reviews');

//protect routes and ensure user is logged in to access below routes
router.use(require('../../config/auth'));

//get all reviews for a user
router.get('/:id/reviews', reviewCtrl.index);

//create a review
router.post('/:id/reviews', reviewCtrl.create);

//delete a review
router.delete('/reviews/:id', reviewCtrl.delete);

module.exports = router;