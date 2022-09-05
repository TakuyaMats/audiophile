const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Category = mongoose.model('Category', new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 255
    }
}));

function validateCategory(category){
    const schema = Joi.object({
        name: Joi.string().min(3).max(255).required()
    });

    const validation = schema.validate(category);
    return validation;
}


exports.Category = Category;
exports.validate = validateCategory;