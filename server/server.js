require('dotenv').config();
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const customers = require('./routes/customers');
const products = require('./routes/products');
const carts = require('./routes/cart');

app.use(express.json());
app.use('/api/customers', customers);
app.use('/api/products', products);
app.use('/api/cart', carts);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/audiophile')
    .then(() =>  console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))