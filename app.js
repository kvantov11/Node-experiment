const express = require('express');
// express application
const app = express();

app.use('/add-product', (req, res, next) => {
    console.log('lul');
    res.send('<h1>sakra</h1>');
});

app.use('/', (req, res, next) => {
    console.log('wtf');
    res.send('<h1>omg</h1>');
});

app.listen(8000);
