const mongoose = require('mongoose');

// SCHEMA
const userSchema = new mongoose.Schema({
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
    cart:
    {
        type: Array,
        default: []
    },
    isAdmin: { type: Boolean },
    orders:
    {
        type: Array,
        default: []
    },
    contact: { type: Number },
    picture: { type: String },
});

// MODEL
const User = mongoose.model('user', userSchema);

module.exports = User;
