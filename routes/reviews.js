const express = require('express');
const router = express.Router({mergeParams : true});
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isReviewAuthor, isLoggedIn} = require('../middleware.js');

const reviewController = require('../controllers/reviews.js');

//Reviews - POST route
router.post("/", isLoggedIn, validateReview, reviewController.createReview);

//Reviews - DELETE route
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));

module.exports = router;
