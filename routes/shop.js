const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

router.get('/', (req, res, next) => {
    // absolute path to project directory
    // dont use / the join function will do it without that properly
    res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;