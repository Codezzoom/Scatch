const mongoose = require('mongoose');

// SCHEMA
const ownerSchema = new mongoose.Schema({
    firstName:
    {
        type: String,
        required: true
    },
    email:
    {
        type: String,
        required: true,
        unique: true
    },
    password:
    {
        type: String,
        required: true
    },
    products:
    {
        type: Array,
        default: []
    },
    picture: { type: String },
    gstin: { type: String },
});

// MODEL
const Owner = mongoose.model('owner', ownerSchema);

module.exports = Owner;
