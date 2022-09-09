const express = require('express');
const router = express.Router();
const { Cart, validate } = require('../models/cart');

router.get('/', async (req, res) => {
    const carts = await Cart.find();
    res.send(carts)
})

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    let cart = new Cart({
        productId: req.body.productId,
        userId: req.body.userId
    });

    cart = await cart.save();

    res.send(cart)
})

module.exports = router