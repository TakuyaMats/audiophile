const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const { Category } = require('./category');
// const { Stock } = require('./stock');

const Product = mongoose.model('Product', new Schema({
    slug: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    },
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 255
    },
    category: {
        // type: Category,
        type: String,
        required: true
    },
    new: {
        type: Boolean,
        default: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
        max: 10000
    },
    description: {
        type: String,
        required: true,
        minlength: 10,
        max: 5000
    },
    features: {
        type: String,
        required: true,
        minlength: 10,
        max: 9000
    },
    includes: {
        // type: Stock,
        type: String,
        required: true
    }
}));

function validateProduct(product){
    const schema = Joi.object({
        slug: Joi.string().min(3).max(255).required(),
        name: Joi.string().min(3).max(255).required(),
        // category: Joi.objectId().required(),
        category: Joi.string().required(),
        new: Joi.boolean(),
        price: Joi.number().min(0).max(10000).required(),
        description: Joi.string().min(10).max(5000).required(),
        features: Joi.string().min(10).max(9000).required(),
        includes: Joi.string().required()
        // includes: Joi.objectId().required()
    });

    const validation = schema.validate(product);
    return validation;
}


exports.Product = Product;
exports.validate = validateProduct;