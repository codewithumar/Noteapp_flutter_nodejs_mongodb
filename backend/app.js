const express = require('express');
const UserRouter = require('./routes/user.route');
const BodyParser=require('body-parser');

const app = express();

app.use(BodyParser.json());


app.use('' , UserRouter);

module.exports = app;