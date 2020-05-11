const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/scrape', (req, res) => {
    res.send('Scraping data goes here');
});

app.listen(8000, () => {
    console.log("listening on port 8000")
});

exports = module.exports = app;

