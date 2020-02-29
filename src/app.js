const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const awsMiddlerware = require('aws-serverless-express/middleware')
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(awsMiddlerware.eventContext());

app.use('./', routes);

module.exports = app;