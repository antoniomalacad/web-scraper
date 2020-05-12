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
        let status, imgStr;
        await page.goto(url, {waitUntil: 'networkidle2'})
            .then(res => status = Number(res._headers.status))
            .catch(err => status = 404);
        
        
        if (status === 200) {
            await page.setViewport({width: 1000, height: 1000});
            imgStr = await page.screenshot({ encoding: 'base64' });
            res.writeHead(status, {
                'Content-Type': 'image/png',
                'Content-Length': imgStr.length
                });
            res.end(imgStr);
        }
        else {
            res.send('error');
        }
 
        await browser.close();
    };
    scrape();
});

app.listen(8000, () => {
    console.log("listening on port 8000")
});

