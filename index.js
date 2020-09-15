const puppeteer = require('puppeteer');
const youtube = require('./youtube');

try {
    (async () => {

        let keyword = 'test';

        const browser = await puppeteer.launch();
        let results = await youtube.scrape_youtube(browser, keyword);
        console.dir(results, {depth: null, colors: true});

        await browser.close();

    })()
} catch (err) {
    console.error(err)
}