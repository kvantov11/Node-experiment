const express = require('express');
// express application
const app = express();

app.use((req, res, next) => {
    console.log('1st');
    // next will call another .use() below this function
    next();
});

app.use((req, res, next) => {
    console.log('2nd in the middleware');
    res.send('<h1>fucker</h1>');
});

app.listen(8000);
