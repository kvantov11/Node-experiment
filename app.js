const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorController = require('./controllers/error');
// express application
const app = express();

// setting engine for dynamic template
app.set('view engine', 'pug');
// setting the directory with my views - where to find templates
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: true}));
// makes the file statically available
app.use(express.static(path.join(rootDir, 'public')));
app.use('/admin', adminRoutes.router);
app.use(shopRoutes);
app.use(errorController.get404);

app.listen(8000);
