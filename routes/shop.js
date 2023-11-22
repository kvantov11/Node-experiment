const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');
const adminData = require('./admin');

router.get('/', (req, res, next) => {
    console.log(adminData.products);
    // absolute path to project directory
    // dont use / the join function will do it without that properly
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;