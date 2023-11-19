const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    // absolute path to project directory
    // dont use / the join function will do it without that properly
    res.sendFile(path.join(__dirname, '..', 'views', 'shop.html'));
});

module.exports = router;