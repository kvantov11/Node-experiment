const express = require('express');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// express application
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(8000);
