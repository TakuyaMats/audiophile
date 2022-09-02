const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Customer = mongoose.model('Customer', Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 255
    },
    lastName: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 255
    },
    email: {
        type: String,
        required: true,
        minlength: 0,
        maxlength: 255
    },
    customerCreated: { type: Date, default: Date.now }
}));

function validateCustomer(customer) {
    const schema = Joi.object({
        firstName: Joi.string().min(0).max(255).required(),
        lastName: Joi.string().min(0).max(255).required(),
        email: Joi.string().min(0).max(255).required(),
    });

    const validation = schema.validate(customer);
    return validation;
};

exports.Customer = Customer;
exports.validate = validateCustomer;
