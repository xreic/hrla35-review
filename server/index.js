const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');

const router = require('./router');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use('/', router);

app.listen(port, () => console.log(`Server started on port: ${port}`));
