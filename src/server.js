import express from 'express';
import cors from 'cors';
import puppeteer from 'puppeteer';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/scrape/', (req, res) => {
    res.status(200).send('Enter a url as a parameter');
});

app.get('/scrape/:url', (req, res) => {
    const url  = req.query.url;
    const scrape = async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(url);
        const imgStr = await page.screenshot({ encoding: 'base64' });
        await browser.close();

        res.writeHead(200, {
            'Content-Type': 'image/png',
            'Content-Length': imgStr.length
          });
        res.end(imgStr);

    };
    scrape();
});

app.listen(8000, () => {
    console.log("listening on port 8000")
});

