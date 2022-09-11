const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const original_id = ObjectId();
// const { CartItem } = require('./CartItem')
// const { Customer } = require('./customer')


// switch to ONE to MANY document refrence

const Cart = mongoose.model
    ('Cart', new Schema({
        cartItemId: {
            type: String,
            // required: true
        },
        userId: {
            type: String,
            // required: true
        }
    }));

function validateCart(cart){
    const schema = Joi.object({
        cartItemId: Joi.string(),
        userId: Joi.string()
    })

    const validation = schema.validate(cart);
    return validation;
}

exports.Cart = Cart;
exports.validate = validateCart;