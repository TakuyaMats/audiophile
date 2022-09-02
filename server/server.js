const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const customers = require('./routes/customers');

app.use(express.json());
app.use('/api/customers', customers);

mongoose.connect('mongodb://localhost/audiophile')
    .then(() =>  console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`))