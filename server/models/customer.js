const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = mongoose.model('Customer', Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    phone: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    date: { type: Date, default: Date.now }
}));

function validateCustomer(customer) {
    const schema = Joi.object({
        name: Joi.string().min(5).max(50).required(),
        phone: Joi.string().min(5).max(50).required(),
    });

    const validation = schema.validate(customer);
    return validation;
};

exports.Customer = Customer;
exports.validate = validateCustomer;
