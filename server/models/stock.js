const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Stock = mongoose.model('Stock', new Schema({
    quantity: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    item: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 100
    }
}));

function validateStock(stock){
    const schema = Joi.object({
        quantity: Joi.number().min(0).max(100).required(),
        item: Joi.string().min(5).max(100).required()
    });

    const validation = schema.validate(stock);
    return validation;
}


exports.Stock = Stock;
exports.validate = validateStock;