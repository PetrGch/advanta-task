'use strict';

const express = require('express');
const path = require('path');
const url = require('url');
const readHtmlFile = require('./stream');
const router = express.Router();

/* GET city data. */
router.get('/api', function(req, res) {
    let urlPars = url.parse(req.url, true);
    if (urlPars.query.data === 'data') {
        let filePath = path.join('backend', 'data', 'data.json');
        res.statusCode = 200;
        readHtmlFile(filePath, res);
    } else {
        res.statusCode = 404;
        res.end('data is not found');
    }

});

module.exports = router;
