const express = require('express');
const router = express.Router();
const { Customer, validate } = require('../models/customer');

router.get('/', async (req, res) => {
    const customers = await Customer.find().sort('name');
    res.send(customers);
});

router.post('/', async (req, res) => {
    console.log(req);
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message)

    let customer = new Customer({ 
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    });

    customer = await customer.save();

    res.send(customer);
});

module.exports = router;