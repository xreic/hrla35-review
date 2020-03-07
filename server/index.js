const express = require('express');

const port = 3100;
const app = express();

app.use(express.static(__dirname + '../../client/dist'));

app.listen(port, () => console.log('Online'));