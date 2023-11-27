const express = require('express');
const router = express.Router();
const path = require('path');
const rootDir = require('../utils/path');

const products = [];

router.get('/add-product', (req, res) => {
    res.render('add-product', {pageTitle: 'Add Product', path: '/admin/add-product'});
});

router.post('/product', (req, res) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

module.exports.router = router;
module.exports.products = products;