const express = require('express');
const router = express.Router();
const { Product, validate } = require('../models/product');

router.get('/', async (req, res) => {
    const products = await Product.find().sort('name');
    res.send(products);
});

router.post('/', async (req, res) => {
    console.log(req);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    let product = new Product({
        slug: req.body.slug,
        name: req.body.name,
        category: req.body.category,
        new: req.body.new,
        price: req.body.price,
        description: req.body.description,
        features: req.body.features,
        includes: req.body.includes
    });

    product = await product.save();

    res.send(product);
});
module.exports = router;