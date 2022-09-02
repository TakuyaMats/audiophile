const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { Category } = require('./category');

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
        type: Category,
        required: true
    }
}));

function validateProduct(product){
    const schema = Joi.object({
        slug: Joi.string().min(3).max(255).required(),
        name: Joi.string().min(3).max(255).required(),
        category: Joi.objectId().required()
    });

    const validation = schema.validate(product);
    return validation;
}


exports.Product = Product;
exports.validate = validateProduct;