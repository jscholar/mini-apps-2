const path = require('path');
const express = require('express');

const { getBPIHistory } = require('./api/coindesk');

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.get('/pricehistory', (req, res) => {
  getBPIHistory()
    .then((BPIhistory) => {
      res.send(BPIhistory);
    })
    .catch((reason) => {
      console.log(reason);
      res.status(500).send();
    });
});

module.exports = app;
