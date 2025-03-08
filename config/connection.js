const mongoose = require('mongoose');

async function connectedWithMongoDB(url) {
    await mongoose.connect(url);
}

module.exports = connectedWithMongoDB;