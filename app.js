const express = require('express');
const http = require('http');
const enforce = require('express-sslify');
const app     = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.use(enforce.HTTPS({ trustProtoHeader: true }))

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
// 	console.log(`App is running on port ${ PORT }`);
// });

http.createServer(app).listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});