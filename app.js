const express = require('express');
const enforce = require('express-sslify');
const app = express();

app.set('view engine', 'ejs');
app.use(enforce.HTTPS({ trustProtoHeader: true }));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	res.render('home');
});

app.get('/about', (req, res) => {
	res.render('about');
});

app.get('/contact', (req, res) => {
	res.render('contact');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Express server is running on port ${PORT}`);
});
