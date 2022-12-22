/*
Import packages
*/
const { application } = require('express');
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

/*
Import Custom Modules
*/
const apiRoutes = require('./api/routes');

/*
Constants
*/
const PORT = 8080;
const HOSTNAME = 'localhost';

/*
Create an express app
*/
const app = express();

/*
Body Parser
*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*
Register API routes
*/
app.use('/api', cors(), apiRoutes);

/*
Start the server

Listening to incoming request
*/
let server;
server = app.listen(PORT, HOSTNAME, (err) => {
  console.log(`Server is hosted in domain ${HOSTNAME} on port ${PORT}`)
})