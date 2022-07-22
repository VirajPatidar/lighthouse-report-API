const router = require('express').Router();

const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');



async function buildReport(id, name, url, metrics) {

    const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] });
    const options = { logLevel: 'info', output: 'html', onlyCategories: metrics, port: chrome.port };
    const runnerResult = await lighthouse(url, options);


    // `.report` is the HTML report as a string
    const reportHtml = runnerResult.report;


    // `.lhr` is the Lighthouse Result as a JS object
    console.log('Report is done for', runnerResult.lhr.finalUrl);
    console.log('Performance score was', runnerResult.lhr.categories.performance.score * 100);

    await chrome.kill();
}




router.post('/generate-report', async (req, res) => {

    const { id, url, metrics } = req.body;

    let domain = (new URL(url));
    domain = domain.hostname.replace('www.','');
    console.log(domain);

    await buildReport(id, domain, url, metrics);

    return res.json({ reportURL: `http://localhost:3000/${id}/${domain}-report.html` });
});


module.exports = router;