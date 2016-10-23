var express = require('express');

var app = express();
var port = process.env.port || 5000;

app.use(express.static('public'));
app.set('views', './src/views');

// var handlebars = require('express-handlebars');
// app.engine('.hbs', handlebars({extname: '.hbs'}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index', {title: 'Hello from ejs', list: ['a', 'b']});
});

app.get('/books', function(req, res) {
    res.send('HEllo Books');
});

app.listen(port, function(err) {
    console.log('running server on port: ' + port);
});