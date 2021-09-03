const mongoose = require('mongoose');
const express = require('express');

require('dotenv').config();


const {
  DB_USER, DB_PASS, DB_CLUSTER_HOST,
  PORT, LOG_LEVEL, NODE_ENV,
  CLIENT_APP_URL } = process.env;

const appToolsUri = `mongodb://${DB_USER}:${DB_PASS}@${DB_CLUSTER_HOST}`;

global.appToolsConn = mongoose.createConnection(
  appToolsUri,
  { useNewUrlParser: true, useUnifiedTopology: true },
);

process.on('exit', () => {
  global.appToolsConn.close();
});

const app = express();

app.use(express.json());

// adding rest api middleware here a little later

if (NODE_ENV === 'development') {

  const httpProxy = require('http-proxy');
  const clientAppProxy = httpProxy.createProxyServer();

  app.use('/', (req, res) => {

    clientAppProxy.web(req, res, { target: CLIENT_APP_URL });

  } /* middleware function */);

} else {

  app.use('/', express.static('./public'));

}