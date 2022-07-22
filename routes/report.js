const router = require('express').Router();

router.post('/generate-report', async (req, res) => {

    return res.json({ reportURL: `url` });
});


module.exports = router;