const express = require('express');
const PORT = process.env.PORT || 5000;

var app = express();

app.use(function (req, res, next) {
    // print_request(req);
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    })
    .get('/hello', (req, res, next) => {
        console.log('get hello');
        res.status(200).send("(๑•̀ㅂ•́)و✧");
    })
    .listen(PORT, () => {
        console.log(`Listen on ${PORT}`);
        console.log(`Process pid: ${process.pid}`);
    });

