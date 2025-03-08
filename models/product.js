const mongoose = require('mongoose');

// SCHEMA
const productSchema = new mongoose.Schema({
    image:
    {
        type: String
    },
    name:
    {
        type: String
    },
    price:
    {
        type: Number
    },
    discount:
    {
        type: Number, default: 0
    },
    bgColor:
    {
        type: String
    },
    bgColor:
    {
        type: String
    },
    panelColor:
    {
        type: String
    },
    textColor:
    {
        type: String
    },
});

// MODEL
const Product = mongoose.model('product', productSchema);

module.exports = Product;
