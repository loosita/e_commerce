const express  = require('express');
const router = express.Router();
const {addToCart,getAllFromCart} = require('../controllers/carts')


router.post('/',addToCart);
router.get('/',getAllFromCart);

module.exports = router;