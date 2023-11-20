const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const rootDir = require('./utils/path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

// express application
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
// makes the file statically available
app.use(express.static(path.join(rootDir, 'public')));
app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use((req, res) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(8000);
