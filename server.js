const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/assets'));

app.use('/', require('./routes/home'));
app.use('/about', require('./routes/about'));
app.use('/contact', require('./routes/contact'));
app.use('/portfolio', require('./routes/portfolio'));


app.listen(port);
