const express = require('express');
const router = express.Router();
const {getOrders,orderSomething} = require('../controllers/orders');


router.post('/',orderSomething);
router.get('/:id',getOrders);

module.exports = router;

