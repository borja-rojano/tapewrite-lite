'use strict';

var express = require('express');

var app = express();

app.use('/assets', express.static(process.cwd()+'/src/assets'))

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/src/index.html');
});

app.listen(3000, function () {
    console.log('Listening on port 3000...');
});