const path = require('path');
const express = require('express');

const app = express();

app.use('/', express.static(path.resolve(__dirname, 'public')));

app.listen(3000, () => {
  console.log('express server listening on port 3000')
});
