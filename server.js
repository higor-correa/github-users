const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const githubUsersRoutes = require('./src/api/routes/githubUsersRoutes');
const bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 8065;

githubUsersRoutes(app);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port);



console.log('todo list RESTful API server started on: ' + port);