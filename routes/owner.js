const express = require('express');
const { handleCreateOwner } = require('../controllers/owner');

const router = express.Router();

if (process.env.NODE_ENV === "development") {
    router.post('/create', handleCreateOwner);
}

router.get('/', (req, res) => {
    res.send('Owner Route')
});


module.exports = router;