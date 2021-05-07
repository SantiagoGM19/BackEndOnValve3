const express = require('express');
const app = express();
app.use(express.json());

const routers = require('./Routers/index');
app.use(routers);

module.exports = {app};
